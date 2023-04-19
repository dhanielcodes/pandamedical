import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/views/change_insurance/change_insurance_bloc.dart';

class ChangeInsuranceView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Insurance', color: AppColors.blue, big:true, bold: true),
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
                            Container(height: 150,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                          ),]
                        )
                      ),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0,
            child: Column(crossAxisAlignment: CrossAxisAlignment.center,
            children: [Image(height: 80, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/padlock.png')),
            SizedBox(height:10),
            Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            elevation: 45,
                            child:Padding(padding: EdgeInsets.symmetric(horizontal:20, vertical: 30),
                            child: Column(crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                            SizedBox(height:20),
                            Image(height: 200,  fit: BoxFit.fitHeight, image: AssetImage('images/forgot_password.png')),
                          SizedBox(height:10),
                            CustomText(text: 'Empty!', color: AppColors.blue,  bold: true),
                        SizedBox(height:10, width: 300,),
                        Center(child: CustomText(text: 'No insurance information Found', color: Colors.grey,  small:true, bold: true),),
                        SizedBox(height:10),
                        
                              
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
