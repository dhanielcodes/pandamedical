import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/views/change_address/change_address_bloc.dart';

class ChangeAddressView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Change Address', color: AppColors.blue, big:true, bold: true),
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
            children: [Image(height: 80, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/address.png')),
            SizedBox(height:10),
            Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            elevation: 45,
                            child:Padding(padding: EdgeInsets.symmetric(horizontal:20, vertical: 30),
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                            SizedBox(height:20),
                            CustomText(text: 'Country*', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Card(shadowColor: AppColors.grey1, elevation: 14,
                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                          child: CustomFormField(keyboardType: TextInputType.text, compulsory: true,
                              prefixIcon: Icon(Icons.search),
                                onChange: (value){
                                  print(value);
                                  },
                              )),
                            SizedBox(height:20),
                            CustomText(text: 'City/Province*', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Card(shadowColor: AppColors.grey1, elevation: 14,
                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                          child: CustomFormField(keyboardType: TextInputType.text, compulsory: true,
                                onChange: (value){
                                  print(value);
                                  },
                              )),
                            SizedBox(height:20),
                            CustomText(text: 'Address*', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Card(shadowColor: AppColors.grey1, elevation: 14,
                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                          child: CustomFormField(keyboardType: TextInputType.text, compulsory: true,
                                onChange: (value){
                                  print(value);
                                  },
                              )),
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
