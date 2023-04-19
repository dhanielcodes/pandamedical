
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:local_auth/local_auth.dart';
//import 'package:pandamedical/helpers/local_auth_service.dart';
//import 'package:pandamedical/helpers/service_locator.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/button2.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';

class FingerPrintView extends StatefulWidget {
  @override
  _FingerPrintViewState createState() => _FingerPrintViewState();
}

class _FingerPrintViewState extends State<FingerPrintView> {
  final LocalAuthentication auth = LocalAuthentication();
  bool _canCheckBiometrics;
  bool _isAuthenticating = false;
  List<BiometricType> _availableBiometrics;
  var _authorized = 'Not Authorized';

  Future<void> _checkBiometrics() async {
    bool canCheckBiometrics;
    try {
      canCheckBiometrics = await auth.canCheckBiometrics;
    } on PlatformException catch (e) {
      print(e);
    }
    if (!mounted) return;

    setState(() {
      _canCheckBiometrics = canCheckBiometrics;
    } );
  }


  Future<void> _getAvailableBiometrics() async {
    List<BiometricType> availableBiometrics;
    try {
      availableBiometrics = await auth.getAvailableBiometrics();
    } on PlatformException catch (e) {
      print(e);
    }
    if (!mounted) return;

    setState(() {
      _availableBiometrics = availableBiometrics;
    });
  }

  Future<void> _authenticate() async {
    var authenticated = false;
    try {
      setState(() {
        _isAuthenticating = true;
        _authorized = 'Authenticating';
      });
      authenticated = await auth.authenticateWithBiometrics(
          localizedReason: 'Scan your fingerprint to authenticate',
          useErrorDialogs: true,
          stickyAuth: true);
      setState(() {
        _isAuthenticating = false;
        _authorized = 'Authenticating';
      });
    } on PlatformException catch (e) {
      print(e);
    }
    if (!mounted) return;

    final  message = authenticated ? 'Authorized' : 'Not Authorized';
    setState(() {
      _authorized = message;
    });
  }

  // void _cancelAuthentication() {
  //   auth.stopAuthentication();
  // }

  @override
  Widget build(BuildContext context) {
     _checkBiometrics;

    final  statusBarHeight = MediaQuery.of(context).padding.top;
    return Scaffold(
      appBar: AppBar(centerTitle: true,
        title: CustomText(text: 'Set Touch ID', color: AppColors.blue, bold: true),
        backgroundColor: Colors.white,
        elevation: 0,
        leading:GestureDetector(
          key: Key('goBack'),
              onTap: (){ Navigator.pop(context);},
              child: Padding(padding: EdgeInsets.all(10), child: Icon(FontAwesomeIcons.arrowLeft, color:AppColors.blue),),
            ),
      ),
      body: Padding(padding: EdgeInsets.symmetric(vertical: statusBarHeight, horizontal: 15),
          child: SingleChildScrollView(
          controller:  ScrollController(),
          child: Column(crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(height:20),
            CustomText(text: 'Login faster, set up', color: AppColors.green, bold: true),
            CustomText(text: 'Touch ID', color: AppColors.green, bold: true),
            SizedBox(height:50),
            Container(
              height:200,
              child: Image(fit: BoxFit.fitHeight,
              image: AssetImage('images/security.png'),),
            ),
            SizedBox(height:30),
            Container(
                      color: Colors.transparent,
                      margin: const EdgeInsets.all(15.0),
                      padding: const EdgeInsets.all(20.0),
                      child: Center()
                    ),
            
            SizedBox(height:50),
            CustomButton(key: Key('setPinBtn'),
              label:'ENABLED', onPress:(){

                if(_canCheckBiometrics == true){
                  print('can check');
                   _getAvailableBiometrics;
                  if(_availableBiometrics.isNotEmpty){
                    print('available length: ${_availableBiometrics.length}');
                     _authenticate;
                  }else{
                    print('available length: 0');
                  }
                }else{
                  print('cant check');

                }

               // _isAuthenticating ? _cancelAuthentication : _authenticate;
              }
              
              ),

            SizedBox(height: 20.0),
              CustomButton2(key: Key('skipBtn'),
                  label:'SKIP', onPress:(){
                    Navigator.pushNamed(context, DashboardViewRoute);
                  }),
          ],
      )),
     ),
   );
 }
}