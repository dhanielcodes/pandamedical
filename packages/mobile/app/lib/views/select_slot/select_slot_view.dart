import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:pandamedical/models/physician_response.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pandamedical/views/select_slot/select_slot_bloc.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/models/available_slots_response.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pandamedical/widgets/time_slot.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

class SelectSlotView extends StatelessWidget {
  final Physicians data;
  String initialDate;


  SelectSlotView({this.data});
  SelectSlotBloc _bloc;

  var _refreshController = RefreshController(initialRefresh: false);

  void _onRefresh() async{
    _bloc.add(RefreshTimeSlot());
  }

  String currentDate(){
    var now = DateTime.now();
    var formatter = DateFormat('yyy-MM-dd');
    var formattedDate = formatter.format(now);
    return formattedDate;
  }


  @override
  Widget build(BuildContext context) {
    initialDate = currentDate();

    var slots = <int>[];
    var morning = <String>[];
    var afternoon = <String>[]; 
    var evening = <String>[];
    // for(var i = 1; i<25; i++){
    //   slots..add(i);
    // }
    // slots.forEach((i){
    //   if(i < 13){
    //     morning..add('$i:00');
    //   }else if(i < 17){
    //     afternoon..add('$i:00');
    //   }else{
    //     evening..add('$i:00');
    //   }
    // });

    
    _bloc = BlocProvider.of<SelectSlotBloc>(context);
    _bloc.add(InitBlock(data, context, _refreshController, initialDate));
    //final  statusBarHeight = MediaQuery.of(context).padding.top;
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
      elevation: 0,
        title: CustomText(text: 'Select a time slot', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
      ),
      
      body: SingleChildScrollView(
        child: Stack( 
                children: <Widget>[
                  //Container(margin: EdgeInsets.only(top: 100, left: 100,), height: 2000,),
                      Container(
                      height: screenHeight,
                      color: Colors.white,
                      ),
                      Container(
                        child: Column(
                          children: [
                            Container(
                      height: 90,
                      decoration: BoxDecoration(
                                  color: AppColors.greenBG,
                                  borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),
                                ),
                      ),
                          ]
                        )
                      ),

          Positioned(
            top: 15.0, left: 0.0, right: 0.0, bottom: 0.0,
            child: Container(height: 730,
            child: ListView(//shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            shrinkWrap: true,//controller: ScrollController(),
            children: <Widget>[
                  Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            elevation: 45,
                            child:Column(
                              children: [
                                SizedBox(height:20),
                                ListTile(leading: Image(height: 50, fit: BoxFit.fitHeight, image: AssetImage('images/pic2.png')),
                                  title: CustomText(text: '${data.userInfo.firstName} ${data.userInfo.lastName}', color: Colors.black, big: true, bold: true),
                                      subtitle:  CustomText(text: '${data.titles} - ${data.specialty.field}', color: Colors.grey,  bold: true, extraSmall: true,),
                                    ),
                                    SizedBox(height:10),
                                    Container(height:1, color: Colors.grey[300], width: 400),
                                    SizedBox(height:10),
                                    ListTile(title: Center(child: CustomText(text: '           Today, $initialDate', color: Colors.black, small: true, bold: true),), 
                                      trailing: SizedBox(height:50, child: Card(shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),),
                                      elevation: 2, child:IconButton(onPressed: (){}, icon: Icon(Icons.arrow_forward, size: 25 )))),
                                    ),
                                    SizedBox(height:30),
                                    CustomText(text: 'No slots available', color: Colors.grey,  bold: true, extraSmall: true,),
                                    SizedBox(height:20),
                                    BlocBuilder<SelectSlotBloc, SelectSlotState>(
                                          condition: (previous, current) => previous.nextAvailableSlot != current.nextAvailableSlot,
                                          builder: (context, state) {
                                            if(state.nextAvailableSlot == null){
                                              return  CustomButton(label:'loading next day availability', key: Key('nextDay1'),);
                                            }else{
                                              return CustomButton(label:'Next day availability on ${state.nextAvailableSlot}', key: Key('nextDay'),
                                              onPress: () => _bloc.add(InitBlock(data, context, _refreshController, state.nextAvailableSlot)));
                                            }
                                          }
                                    ),
                                    SizedBox(height:20),
                                    CustomText(text: 'OR', color: Colors.grey,  bold: true, extraSmall: true,),
                                    SizedBox(height:20),
                                    FloatingActionButton(onPressed: (){Navigator.pushNamed(context, ConfirmBookingViewRoute);},
                                      child: Icon(Icons.arrow_forward)),
                                    SizedBox(height:20),
                                    BlocBuilder<SelectSlotBloc, SelectSlotState>(
                                          condition: (previous, current) => previous.slots != current.slots,
                                          builder: (context, state) {
                                            if(state.slots == null){
                                              return  Column(children: [
                                                TimeSlot(title:'Morning',slots: morning, data: data, date: initialDate),
                                                TimeSlot(title:'Afternoon',slots: afternoon, data: data, date: initialDate),
                                                TimeSlot(title:'Evening', slots:evening,data: data, date: initialDate),
                                              ]);
                                            }else{
                                              morning = <String>[];
                                              afternoon = <String>[]; 
                                              evening = <String>[];
                                              state.slots.forEach((i){
                                                if(initialDate != i.slotDate){
                                                  initialDate = i.slotDate;
                                                }
                                                  if(int.parse(i.slotTime) < 13){
                                                    morning..add('${i.slotTime}:00');
                                                  }else if(int.parse(i.slotTime) < 17){
                                                    afternoon..add('${i.slotTime}:00');
                                                  }else{
                                                    evening..add('${i.slotTime}:00');
                                                  }
                                                });
                                              return Column(children: [
                                                TimeSlot(title:'Morning',slots: morning,data: data, date: initialDate),
                                                TimeSlot(title:'Afternoon',slots: afternoon,data: data, date: initialDate),
                                                TimeSlot(title:'Evening', slots:evening,data: data, date: initialDate),
                                              ]);
                                            }
                                          }
                                    ),
                                    
                                    SizedBox(height:30),
                              ]
                            )),
                            SizedBox(height:70),
                            
                              
                ],
              )
          )
          ),
                       
                  ]
            )
      )
      
    );
  }

}

/*
Positioned(top:0,
                    child: Container(height: 70,
                          decoration: BoxDecoration(
                            color: AppColors.greenBG,
                            borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),
                          ),
                        ),
                  ),
                  Positioned(top:20,
                  child: Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),   ),
                            elevation: 5,
                            child:CustomFormField(
                              prefixIcon: Icon(Icons.search),
                              placeholder: 'Doctors. specialities, clinics'
                            ))
                  ),
                  Positioned(top:50,
                    child: Container(height: 270,
                          decoration: BoxDecoration(
                            color: AppColors.greenBG,
                            borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),
                          ),
                          child: Column(
                            children: [
                              SizedBox(height:20),
                              Container(height: 170,
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.vertical(top: Radius.circular(45.0)),
                                ),
                                child: Column(
                                  children: [
                                        Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),   ),
                                            elevation: 0,
                                            child:CustomFormField(
                                              prefixIcon: Icon(Icons.search),
                                              placeholder: 'Doctors. specialities, clinics'
                                            ))
                                  ]
                                )
                              )
                            ]
                          )
                        ),
                  )     
                  */