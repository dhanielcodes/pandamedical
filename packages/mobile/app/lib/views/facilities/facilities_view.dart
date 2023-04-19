import 'package:flutter/material.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';

class FacilitiesView extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    //final  statusBarHeight = MediaQuery.of(context).padding.top;
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
      elevation: 0,
        title: CustomText(text: 'Healthcare Facility', color: AppColors.blue, big:true, bold: true),
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
                      height: 40,
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
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),   ),
                            elevation: 45,
                            child:CustomFormField(
                              prefixIcon: Icon(Icons.search),
                              placeholder: 'Doctors. specialities, clinics'
                            )),
                            SizedBox(height:20),
                              Container(height: 670,
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.vertical(top: Radius.circular(45.0)),
                                ),
                                child: Padding(padding: EdgeInsets.symmetric(horizontal: 40, vertical: 30),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    ListTile(title: CustomText(text: 'Hospitals', color: Colors.black, big: true, bold: true),
                                      onTap: () => Navigator.pushNamed(context, HospitalsListViewRoute, arguments: 'Hospitals'),
                                    ),
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Maternity Clinic', color: Colors.black, big: true, bold: true),
                                    ),
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Health Centre', color: Colors.black, big: true, bold: true),
                                    ),
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Ambulatory Surgical Centers', color: Colors.black, big: true, bold: true),
                                    ),
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Blood Banks', color: Colors.black, big: true, bold: true),
                                    ), 
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Clinics and Medical Offices', color: Colors.black, big: true, bold: true),
                                      //onTap: () => Navigator.pushNamed(context, DoctorsViewRoute),
                                    ),
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Hospice Homes', color: Colors.black, big: true, bold: true),
                                    ),
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Nursing Homes', color: Colors.black, big: true, bold: true),
                                    ),
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Orthopedic and Other Rehabilitation Centers', color: Colors.black, big: true, bold: true),
                                    ),
                                    Container(width: 400, height: 1, color: Colors.grey),
                                    ListTile(title: CustomText(text: 'Urgent Care', color: Colors.black, big: true, bold: true),
                                    ),
                                    SizedBox(height:20),
                             
                                  ]
                                ))),
                                
                              
                  
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