import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/models/physician_response.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/views/confirm_booking/confirm_booking_bloc.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/widgets/button.dart';

class ConfirmBookingView extends StatelessWidget {
  final dynamic data;

  const ConfirmBookingView({this.data});

  String formattedDate(String date){
    var now = DateTime.parse(date);
    var formatter = DateFormat('dd MMM');
    var formattedDate = formatter.format(now);
    return formattedDate;
    //return DateFormat.MMM().format(date);
  }

  String amPm(time){
    if(time < 12){
        return 'AM';
    }
    return 'PM';
  }


  @override
  Widget build(BuildContext context) {
    var _bloc = BlocProvider.of<ConfirmBookingBloc>(context);
    
    Physicians _data = data['data'];
    var date = data['date'];
    var time = data['time'];
    //final  statusBarHeight = MediaQuery.of(context).padding.top;
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
      elevation: 0,
        title: CustomText(text: 'Confirmation', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
      ),
      
      body: Stack( 
                children: <Widget>[
                  
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
            top: 15.0,
            left: 0.0,
            right: 0.0,
            child: Column(
                children: <Widget>[
                  Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            elevation: 45,
                            child:Padding(padding:EdgeInsets.all(10),
                              child: Column(
                              children: [
                                SizedBox(height:20),
                                ListTile(leading: Image(height: 50, fit: BoxFit.fitHeight, image: AssetImage('images/pic2.png')),
                                  title: CustomText(text: '${_data.userInfo.firstName} ${_data.userInfo.lastName}', color: Colors.black, big: true, bold: true),
                                      subtitle:  CustomText(text: '${_data.titles} - ${_data.specialty.field}', color: Colors.grey,  bold: true, extraSmall: true,),
                                    ),
                                    SizedBox(height:10),
                                    Container(height:1, color: Colors.grey[300], width: 400),
                                    SizedBox(height:10),
                                    Padding(padding: EdgeInsets.symmetric(horizontal: 10),
                                    child: Row(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Expanded( flex: 4, child:
                                      Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        CustomText(text:'DATE & TIME', color: Colors.grey, bold: true, small: true,),
                                        SizedBox(height: 7,),
                                        CustomText(text:'${formattedDate(date)} $time.00${amPm(int.parse(time))}', color: AppColors.blue, bold: true,  small: true,),
                                      ],)),
                                      Padding(padding: EdgeInsets.all(5), child: Container(color: Colors.grey[300], height:50, width:1),),
                                      Expanded( flex: 4, child:
                                      Column(mainAxisAlignment: MainAxisAlignment.end, crossAxisAlignment: CrossAxisAlignment.end,
                                      children: [
                                        CustomText(text:'Consultation Fees', color: Colors.grey, bold: true, small: true,),
                                        SizedBox(height: 7,),
                                        CustomText(text:'\$600', color: AppColors.blue, bold: true,  small: true,),
                                      ],)),
                                    ],),
                                    ),
                                    SizedBox(height:10),
                                    Container(height:1, color: Colors.grey[300], width: 400),
                                    SizedBox(height:30),
                                    CustomText(text: 'Confirm your appointment', color: AppColors.blue, big: true, bold: true),
                                    SizedBox(height:20),
                                    CustomButton(label:'Confirm Now', key: Key('confirmBtn'), 
                                    onPress: (){_bloc.add(CreateEvent(data, context));}),
                                    SizedBox(height:20),
                                    Row(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.center,
                                      children: [
                                      CustomText(text: 'By booking this appointment you agree to the ', color: Colors.grey,  bold: true, extraSmall: true,),
                                      CustomText(text: 'T&C', color: Colors.green,  bold: true, small: true,),
                                    ],),
                                    SizedBox(height:20),
                              ]
                            )
                            )),
                            SizedBox(height:20),
                              
                ],
              )
          ),
                       
                  ]
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