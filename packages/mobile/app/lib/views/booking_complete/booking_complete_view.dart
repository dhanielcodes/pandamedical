import 'package:flutter/material.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';

class BookingCompleteView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
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
                            child:Padding(padding: EdgeInsets.symmetric(horizontal:20, vertical: 30),
                            child: Column(
                              children: [
                                SizedBox(height:20),
                                CustomText(text: 'Hurray!!!', color: Colors.green, big: true, bold: true),
                                SizedBox(height:20),
                                Image(height: 200, fit: BoxFit.fill, image: AssetImage('images/confirmation.png')),
                                SizedBox(height:20),
                                CustomText(text: 'You\'re all set!', color: AppColors.blue, big: true, bold: true),
                                SizedBox(height:10),
                                CustomText(text: 'Please ensure you arrive on time for your appointment', color: Colors.grey,  bold: true, extraSmall: true,),
                                SizedBox(height:20),
                              ]
                            ))),
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