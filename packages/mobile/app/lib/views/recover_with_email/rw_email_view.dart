import 'package:flutter/material.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/constants/routing_constants.dart';

class RecoverWithEmailScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    final  statusBarHeight = MediaQuery.of(context).padding.top;
    return Scaffold(
      appBar: AppBar(centerTitle: true,
      elevation: 0,
        title: Image(fit: BoxFit.fitHeight, image: AssetImage('images/app-icon.png'),),
        backgroundColor: Colors.white,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
      ),
      body: Padding(padding: EdgeInsets.symmetric(vertical: statusBarHeight, horizontal: 15),
          child: SingleChildScrollView(
          controller:  ScrollController(),
          child: Column(crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(height:20),
            CustomText(text: 'Forogt your password?', color: AppColors.blue, bold: true),
            SizedBox(height:20),
            Container(
              height:200,
              //color: Colors.white,
              margin:  EdgeInsets.all(15.0),
              child: Image(fit: BoxFit.fitHeight, image: AssetImage('images/email_locked.png')),
            ),
            SizedBox(height:40),
            CustomText(text: 'Enter your registered email address', color: AppColors.blue, bold: true),
            SizedBox(height:4),
            CustomText(text: 'We\'ll send a recovery link to your email address', color: Colors.grey, extraSmall:true, bold: true),
            
            SizedBox(height:20),
            Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                    shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),   ),
                    elevation: 10,
                    child:CustomFormField(
                      prefixIcon: Icon(Icons.search),
                      placeholder: 'Email'
                    )),
            SizedBox(height: 20.0),
            CustomButton(key: Key('rwEmail'),
                        label:'VERIFY', onPress:(){
                          //_bloc.add(CheckForm(true));
                            // if(_key.currentState.validate()){
                            //   _bloc.add(GetInputs(passwordController.text, context));
                            Navigator.pushNamed(context, PasswordSuccessRoute);
                            // }
                        }),
          ],
          )),),
    );
  }

}