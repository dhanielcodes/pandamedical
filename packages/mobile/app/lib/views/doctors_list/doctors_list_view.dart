import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/views/doctors_list/doctors_list_bloc.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/models/physician_response.dart';
import 'package:pandamedical/models/medical_specialty_response.dart';
import 'package:pandamedical/widgets/doctor_row.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/widgets/no_result.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

// ignore: must_be_immutable
class DoctorsListView extends StatelessWidget {

  final Listt doctorType;

  DoctorsListView({this.doctorType});
  DoctorsListBloc _bloc;

  var _refreshController = RefreshController(initialRefresh: false);

  void _onRefresh() async{
    _bloc.add(RefreshSpecialty());
  }

  @override
  Widget build(BuildContext context) {
    _bloc = BlocProvider.of<DoctorsListBloc>(context);
    _bloc.add(InitBlock(doctorType, context, _refreshController));
    //final  statusBarHeight = MediaQuery.of(context).padding.top;
    //final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
      elevation: 0,
        title: CustomText(text: doctorType.name, color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: GestureDetector(
        onTap: (){ Navigator.pop(context);},
        child: Padding(padding: EdgeInsets.only(top:0),
        child: Icon(Icons.close, color: Colors.white, size: 30)),
      ),
      actions: [DropdownButton(
                                  //value: state.sortBy,
                                  //value: 'Lagos',
                                  items: ['Lagos', 'Abuja', 'Ibadan', 'Benin'].map(( val){
                                  return DropdownMenuItem(
                                    value: val,
                                    child: Row(
                                      children: <Widget>[
                                        Padding(padding: EdgeInsets.symmetric(horizontal: 5), 
                                        child:CustomText(text:val, small:true, color: AppColors.blue, bold: true)),
                                      ],)
                                  );
                                }).toList(),
                                onChanged: (value){
                                  CustomToast.show('$value');
                                  _bloc.add(SortList( value));
                                  //state.updateSort(value);
                                },
                                )],
      ),
      floatingActionButton: FloatingActionButton(child: Image(height:25, image: AssetImage('images/filter.png')),
          backgroundColor: Colors.white,
            onPressed: (){
              showFilter(context);
               //Navigator.pushNamed(context, FilterListViewRoute,);
            }),
      body: SingleChildScrollView(
        child: Stack( 
        children: <Widget>[
          Container(height: 900,color: Colors.grey[200],),
                  // Positioned(
                  //   top: 0.0,
                  //   left: 0.0,
                  //   right: 0.0,
                  //   //bottom:0.0,
                  //   child:Container(height: 900,color: Colors.grey[200],),),
                  Positioned(
                  top: 0.0,
                  left: 0.0,
                  right: 0.0,
                  //bottom:0.0,
                  child:Container(
                        child: Column(children: [Container( height: 130,
                              decoration: BoxDecoration(color: AppColors.greenBG, borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),),
                          ])
                      ),),
                      
          Positioned(
            top: 15.0,
            left: 0.0,
            right: 0.0,
            //bottom:0.0,
            child:Column(
                children: <Widget>[
                  Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                    shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),   ),
                    elevation: 0,
                    child:CustomFormField(
                      prefixIcon: Icon(Icons.search),
                      placeholder: 'Search Doctors'
                    )),
                    SizedBox(height:15),
                    Row(crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        RaisedButton(child: CustomText(text: 'Availability', color: AppColors.blue, extraSmall:true, bold:true),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                        onPressed: (){}, color: Colors.white,),
                        RaisedButton(child: CustomText(text: 'In Hospital', color: AppColors.blue, extraSmall:true, bold:true),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                        onPressed: (){}, color: Colors.white),
                        RaisedButton(child: CustomText(text: 'Online Booking', color: AppColors.blue, extraSmall:true, bold:true),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                        onPressed: (){}, color: Colors.white)
                      ],
                    ),    
                  
                ],
              ))
          ,
          Container(height: 600, margin: EdgeInsets.only(top:170),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.vertical(top: Radius.circular(45.0)),
            ),
            child: Padding(padding: EdgeInsets.symmetric(horizontal: 20, vertical: 30),
            child: SmartRefresher(
                    enablePullDown: true,
                    //enablePullUp: true,
                    header: WaterDropHeader(),
                    controller: _refreshController,
                    onRefresh: _onRefresh,
                    child:ListView(controller: ScrollController(),
                        children: [Column(crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              BlocBuilder<DoctorsListBloc, DoctorsListState>(
                                condition: (previous, current) => previous.datalist != current.datalist,
                                builder: (context, state) {
                                  if(state.datalist == null){
                                    return  Center(child: SizedBox(width: 35, child: CircularProgressIndicator()));//VitalsDatas().Vitals();
                                  }else if(state.datalist.isEmpty){
                                     return NoResult();//VitalsDatas().Vitals();
                                  }else{
                                    return Column(children: state.datalist.map((e) => DoctorRow(data:e)).toList());
                                              }
                                            }
                                          ),                            
                            ]
                          ), 
                        ]
                      )
                      )              
                                )
                                ),
                  
                  ]
            )
      )
    );
  }

  void showFilter(context){
    showGeneralDialog(
      context: context,
      barrierColor: Colors.green[200].withOpacity(0.8),
      barrierLabel: 'Filter',
      barrierDismissible: false,
      transitionDuration: Duration(milliseconds:400),
      pageBuilder: (_, __, ___){
        return SizedBox.expand(
          child: Padding(padding: EdgeInsets.symmetric(horizontal:20),
          child: SingleChildScrollView(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
            children: [
              SizedBox(height:30),
              Row(
                children: [
                  Spacer(),
                  GestureDetector(onTap: (){ Navigator.pop(context);},
                    child:Padding(padding: EdgeInsets.all(5),
                  child: Icon(Icons.close, color: Colors.white, size: 40)))
                ]
              ),
              SizedBox(height:20),
              Row(
                children: [
                  CustomText(text: 'Filter', color: Colors.white, small:true, bold:true),
                  Spacer(),
                  CustomText(text: 'Clear FIlter', color: Colors.white, small:true, bold:true)
                ]
              ),
              SizedBox(height:10),
              Card(margin: EdgeInsets.all(5),
                  shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                  elevation: 1,
                  child: Padding(padding: EdgeInsets.all(15),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start,          
                          children: [
                            CustomText(text: 'Sort By', color: Colors.grey, extraSmall:true, bold:true),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, 
                                  value: 'consultation',
                                  onChanged: (value){

                                  },
                                ),
                                CustomText(text: 'Consultation Fee', small: true, color: AppColors.blue),
                              ]
                            )
                          ]
                )             
              )
              ),
              Card(margin: EdgeInsets.all(5),
                  shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                  elevation: 1,
                  child: Padding(padding: EdgeInsets.all(15),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start,          
                          children: [
                            CustomText(text: 'Availability', color: Colors.grey, extraSmall:true, bold:true),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'available', onChanged: (value){},),
                                CustomText(text: 'Available any day', small: true, color: AppColors.blue),
                              ]
                            ),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'available', onChanged: (value){},),
                                CustomText(text: 'Available today', small: true, color: AppColors.blue),
                              ]
                            ),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'available', onChanged: (value){},),
                                CustomText(text: 'Available in next 3 days', small: true, color: AppColors.blue),
                              ]
                            ),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'available', onChanged: (value){},),
                                CustomText(text: 'Available coming weekend', small: true, color: AppColors.blue),
                              ]
                            ),
                          ]
                )             
              )
              ),
              Card(margin: EdgeInsets.all(5),
                  shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                  elevation: 1,
                  child: Padding(padding: EdgeInsets.all(15),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start,          
                          children: [
                            CustomText(text: 'In Hospital', color: Colors.grey, extraSmall:true, bold:true),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'In Hospital', onChanged: (value){},),
                                CustomText(text: 'In Hospital', small: true, color: AppColors.blue),
                              ]
                            ),
                          ]
                )             
              )
              ),
              Card(margin: EdgeInsets.all(5),
                  shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                  elevation: 1,
                  child: Padding(padding: EdgeInsets.all(15),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start,          
                          children: [
                            CustomText(text: 'Online Banking', color: Colors.grey, extraSmall:true, bold:true),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'Online Banking', onChanged: (value){},),
                                CustomText(text: 'Online Banking', small: true, color: AppColors.blue),
                              ]),
                          ])             
                        )
              ),
              Card(margin: EdgeInsets.all(5),
                  shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                  elevation: 1,
                  child: Padding(padding: EdgeInsets.all(15),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start,          
                          children: [
                            CustomText(text: 'Consultation Fee', color: Colors.grey, extraSmall:true, bold:true),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'Free', onChanged: (value){},),
                                CustomText(text: 'Free', small: true, color: AppColors.blue),
                              ]),
                              Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: '1-200', onChanged: (value){},),
                                CustomText(text: '1-200', small: true, color: AppColors.blue),
                              ]),
                              Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: '201-500', onChanged: (value){},),
                                CustomText(text: '201-500', small: true, color: AppColors.blue),
                              ]),
                              Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: '500-1000', onChanged: (value){},),
                                CustomText(text: '500-1000', small: true, color: AppColors.blue),
                              ]),
                          ])             
                        )
              ),
              Card(margin: EdgeInsets.all(5),
                  shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                  elevation: 1,
                  child: Padding(padding: EdgeInsets.all(15),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start,          
                          children: [
                            CustomText(text: 'Consultation Fee', color: Colors.grey, extraSmall:true, bold:true),
                            Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'Male', onChanged: (value){},),
                                CustomText(text: 'Male', small: true, color: AppColors.blue),
                              ]),
                              Row(mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Radio(groupValue: null, value: 'Female', onChanged: (value){},),
                                CustomText(text: 'Female', small: true, color: AppColors.blue),
                              ]),
                          ])             
                        )
              ),
              Align(
                alignment: Alignment.bottomCenter,
                child:Padding(padding: EdgeInsets.only(bottom: 20),child: CustomButton(
                onPress: (){},
                label: 'Continue',
              ))
              )
            ]
          )
          ))
        );
      }
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