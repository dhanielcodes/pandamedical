import 'package:flutter/material.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pinput/pin_put/pin_put.dart';
import 'package:pandamedical/constants/routing_constants.dart';

class PasswordOtpScreen extends StatelessWidget {

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
            CustomText(text: 'Please enter 6-digit recovery pin', color: AppColors.blue, bold: true, small: true),
            SizedBox(height:20),
            Container(
              height:180,
              //color: Colors.white,
              margin:  EdgeInsets.all(15.0),
              child: Image(fit: BoxFit.fitHeight, image: AssetImage('images/phone-locked.png')),
            ),
            SizedBox(height:10),
            Container(
                      margin: const EdgeInsets.all(15.0),
                      padding: const EdgeInsets.all(20.0),
                      child: PinPut(
                        key: Key('PasswordOtp'),
                        fieldsCount: 6,
                        onSubmit: (String pin) => _showSnackBar(pin, context),
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
                    ),
            Row(crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                CustomText(text: 'I didn\'t recieve the code', color: AppColors.primary, small: true, bold: true),
                CustomText(key: Key('resendPasswordOtp'),
                  text: '  Resend  ', color: AppColors.blue, bold: true),
              ]
            ),
            SizedBox(height:40),
            CustomButton(key: Key('continue'),
              label:'CONTINUE', onPress:(){
                Navigator.pushNamed(context, PasswordSuccessRoute);
                  }),
            SizedBox(height: 20.0),
          ],
          )),),
    );
  }

  void _showSnackBar(String pin, BuildContext context) {
    final snackBar = SnackBar(
      duration: const Duration(seconds: 3),
      content: Container(
        height: 80.0,
        child: Center(
          child: Text(
            'Pin Submitted. Value: $pin',
            style: const TextStyle(fontSize: 25.0),
          ),
        ),
      ),
      backgroundColor: AppColors.primary,
    );
    Scaffold.of(context)
      ..hideCurrentSnackBar()
      ..showSnackBar(snackBar);
  }
}