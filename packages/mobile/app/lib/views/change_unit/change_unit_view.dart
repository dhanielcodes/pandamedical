import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/views/primary_specialist/primary_specialist_bloc.dart';

class ChangeUnitView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Change Unit', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
      ),
      
      body: SingleChildScrollView(
        child: Column(children: [
          Stack(children: <Widget>[
                      Container(height: screenHeight, color: Colors.white,),
                      Container(child: Column(
                          children: [
                            Container(height: 160,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                          ),]
                        )
                      ),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0,
            child: Column(
            children: [Image(height: 80, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/units.png')),
            SizedBox(height:10),
            Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            elevation: 45,
                            child:Padding(padding: EdgeInsets.symmetric(horizontal:20, vertical: 30),
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Imperial', color: AppColors.blue, bold: true, ),
                          Spacer(),
                          CustomText(text: 'ft, lbs, farenheit', color: Colors.grey, bold: true, extraSmall: true,),
                          SizedBox(width:5),
                          Icon(Icons.check_circle, size: 30, color: Colors.green),
                          SizedBox(width:20),
                          ]),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),

                          
                          Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                          children:[SizedBox(width:20),
                            CustomText(text: 'Metric', color: AppColors.blue, bold: true, ),
                          Spacer(),
                          CustomText(text: 'cm, Kg, celcius', color: Colors.grey, bold: true, extraSmall: true,),
                          SizedBox(width:5),
                          Icon(Icons.check_circle, size: 30, color: Colors.grey),
                          SizedBox(width:20),
                          ]),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),

                          SizedBox(height:40),
                          CustomButton(label:'UPDATE', key: Key('submit'),
                          onPress:(){
                              // _bloc.add(CheckForm(true));
                              // if( _key.currentState.validate()){ 
                              //     Navigator.pushNamed(context, OtpViewRoute);
                              //   }
                            }),
                              
                ],
                            )),
              
              )
            ])
          ),
                       
                  ]
            )
        ])
      )
      
    );
  }

}
