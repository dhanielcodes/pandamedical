import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';

class ForgotPassScreen extends StatelessWidget {

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
              height:160,
              //color: Colors.white,
              margin:  EdgeInsets.all(15.0),
              child: Image(fit: BoxFit.fitHeight, image: AssetImage('images/forgot_password.png')),
            ),
            SizedBox(height:40),
            CustomText(text: 'Choose a password reset option', color: AppColors.blue, bold: true),
            
            SizedBox(height:20),
            GestureDetector(onTap: (){ Navigator.pushNamed(context, RecoverWithPhoneRoute);},
            child: Card(margin: EdgeInsets.all(10),
            color: Colors.blue[50],
              shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                elevation: 1,
                child: Padding(padding: EdgeInsets.all(20),
                child: Row(crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Icon(FontAwesomeIcons.mobileAlt, size: 30, color: Colors.grey),
                    SizedBox(width:60),
                  CustomText(text: 'Via SMS', color: Colors.grey, large: true, bold: true),
                ]),
            ), ),),
            SizedBox(height: 15.0),
            GestureDetector(onTap: (){ Navigator.pushNamed(context, RecoverWithEmailRoute);},
            child: Card(margin: EdgeInsets.all(10),
            color: Colors.blue[50],
            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                elevation: 1,
                child: Padding(padding: EdgeInsets.all(20),
                child: Row(crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Icon(FontAwesomeIcons.envelope, size: 30, color: Colors.grey),
                    SizedBox(width:60),
                  CustomText(text: 'Via Email', color: Colors.grey, large: true, bold: true),
                ]),
            ), ),),
          ],
          )),),
    );
  }

}