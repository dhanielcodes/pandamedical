import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/constants/routing_constants.dart';

class PasswordSuccessScreen extends StatelessWidget {

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
            SizedBox(height:40),
            CustomText(text: 'HURRAY!', color: AppColors.blue, bold: true, large:true),
            SizedBox(height:4),
            CustomText(text: 'Your password change was successful.', color: Colors.grey, extraSmall:true, bold: true),
            SizedBox(height:20),
            Container(
              height:260,
              //color: Colors.white,
              margin:  EdgeInsets.all(15.0),
              child: Image(fit: BoxFit.fitHeight, image: AssetImage('images/pass-success.png')),
            ),
            
            SizedBox(height:40),
            
            CustomButton(key: Key('logIn'),
                        label:'CONTINUE', onPress:(){
                          //_bloc.add(CheckForm(true));
                            // if(_key.currentState.validate()){
                            //   _bloc.add(GetInputs(passwordController.text, context));
                            //   //Navigator.pushNamed(context, DashboardViewRoute);
                            // }
                        }),
          ],
          )),),
    );
  }

}