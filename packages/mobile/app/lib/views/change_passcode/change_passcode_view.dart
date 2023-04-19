import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pinput/pin_put/pin_put.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/views/change_passcode/change_passcode_bloc.dart';

class ChangePasscodeView extends StatelessWidget {
  final TextEditingController _pinPutController = TextEditingController();
  final FocusNode _pinPutFocusNode = FocusNode();
  BoxDecoration get _pinPutDecoration {
      return BoxDecoration(
        border: Border.all(color: AppColors.primary),
        borderRadius: BorderRadius.circular(15.0),
      );
  }
  @override
  Widget build(BuildContext context) {
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Change Passcode', color: AppColors.blue, big:true, bold: true),
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
            child: Column(
            children: [Image(height: 80, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/padlock.png')),
            SizedBox(height:10),
            Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
            elevation: 45,
            child:Padding(padding: EdgeInsets.symmetric(horizontal:20, vertical: 30),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
            SizedBox(height:20),
            CustomText(text: 'Current Passcode*', color: AppColors.blue,  bold: true),
            SizedBox(height:10),
            Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
            elevation: 45,
            child:Container(margin: const EdgeInsets.all(15.0), padding: const EdgeInsets.symmetric(horizontal:20.0),
          child: PinPut(
            fieldsCount: 4,
            onSubmit: (String pin) {},
            focusNode: _pinPutFocusNode,
            controller: _pinPutController,
            submittedFieldDecoration: _pinPutDecoration.copyWith(
              borderRadius: BorderRadius.circular(5.0),
            ),
            textStyle: TextStyle(fontSize: 20, fontWeight: FontWeight.w900),
            selectedFieldDecoration: _pinPutDecoration,
            followingFieldDecoration: _pinPutDecoration.copyWith(
              borderRadius: BorderRadius.circular(5.0),
              border: Border.all(
                width: 2,
                color: Colors.green.withOpacity(.5),
              ),
            ),
          ),
        ),),
        
        SizedBox(height:20),
            CustomText(text: 'New Passcode*', color: AppColors.blue,  bold: true),
            SizedBox(height:10),
            Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
            elevation: 45,
            child:Container(margin: const EdgeInsets.all(15.0), padding: const EdgeInsets.symmetric(horizontal:20.0),
          child: PinPut(
            fieldsCount: 4,
            onSubmit: (String pin) {},
            focusNode: _pinPutFocusNode,
            controller: _pinPutController,
            submittedFieldDecoration: _pinPutDecoration.copyWith(
              borderRadius: BorderRadius.circular(5.0),
            ),
            textStyle: TextStyle(fontSize: 20, fontWeight: FontWeight.w900),
            selectedFieldDecoration: _pinPutDecoration,
            followingFieldDecoration: _pinPutDecoration.copyWith(
              borderRadius: BorderRadius.circular(5.0),
              border: Border.all(
                width: 2,
                color: Colors.green.withOpacity(.5),
              ),
            ),
          ),
        ),),

        
        SizedBox(height:20),
            CustomText(text: 'Current Passcode*', color: AppColors.blue,  bold: true),
            SizedBox(height:10),
            Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
            elevation: 45,
            child:Container(margin: const EdgeInsets.all(15.0), padding: const EdgeInsets.symmetric(horizontal:20.0),
          child: PinPut(
            fieldsCount: 4,
            onSubmit: (String pin) {},
            focusNode: _pinPutFocusNode,
            controller: _pinPutController,
            submittedFieldDecoration: _pinPutDecoration.copyWith(
              borderRadius: BorderRadius.circular(5.0),
            ),
            textStyle: TextStyle(fontSize: 20, fontWeight: FontWeight.w900),
            selectedFieldDecoration: _pinPutDecoration,
            followingFieldDecoration: _pinPutDecoration.copyWith(
              borderRadius: BorderRadius.circular(5.0),
              border: Border.all(
                width: 2,
                color: Colors.green.withOpacity(.5),
              ),
            ),
          ),
        ),),

        

                        
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
