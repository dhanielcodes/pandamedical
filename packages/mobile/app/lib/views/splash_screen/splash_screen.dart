import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/raised_button.dart';
import 'package:pandamedical/widgets/text.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with TickerProviderStateMixin {


  @override
  Widget build(BuildContext context) {
    final statusBarHeight = MediaQuery.of(context).padding.top;
    return Scaffold(
        body: Stack(children: <Widget>[
          // Container(child:  Positioned(
          //       bottom: 0,
          //       child: Opacity(
          //         opacity: 0.9,
          //         child: Image(
          //             alignment: Alignment.bottomCenter,
          //             fit: BoxFit.fitHeight,
          //             image:  AssetImage('images/login-bg.png')),
          //       ),
          //     ),),
          Padding(padding: EdgeInsets.only(top: statusBarHeight),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(height: 20,),
            Row(crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
              Icon(FontAwesomeIcons.solidStar, color:AppColors.green, size: 20), SizedBox(width:10),
            Icon(FontAwesomeIcons.solidStar, color:AppColors.green, size: 20)],),
            SizedBox(height: 40,),
            CustomText(text:'This is Panda Health,', color: AppColors.blue, large: true, bold:true),
            SizedBox(height: 5,),
            CustomText(text:'Welcome!', color: AppColors.blue, large: true,  bold:true),
            SizedBox(height: 40,),
            CustomText(text:'Your best friend for all your,', color: AppColors.green, small: true, bold:true),
            SizedBox(height: 5,),
            CustomText(text:'medical needs', color: AppColors.green, small: true, bold:true),
            SizedBox(height: 55,),
            Image(
              height:170,
                image: AssetImage('images/splash.png'),
                 fit: BoxFit.fill,
                ),
            SizedBox(height: 55,),
            

                     ])
            ),
            Positioned(left:0, right: 0,
              //alignment: Alignment.bottomCenter, 
              bottom: 5,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                  CustomButton(key: Key('getStarted'),
                    label:'GET STARTED', onPress:(){
                    Navigator.pushNamed(context, RegisterViewRoute);
                  }),
                  SizedBox(height: 25,),
                  Row(crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                    CustomText(text:'already have an account? ',
                     color: AppColors.green, small: true, bold:true),
                    GestureDetector(child:CustomText(text:' sign in', color: AppColors.blue, bold:true, small: true),
                    key: Key('signIn'),
                    onTap:(){
                      Navigator.pushNamed(context, LoginViewRoute); //
                    })
                    
                  ],),
                  SizedBox(height: 25,),
                  ],),
                )
          
        ],));
  
//      Navigator.of(context).pushReplacementNamed(LoginViewRoute );


}


}