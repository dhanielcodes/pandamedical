import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/Styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';

class NoResult extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    
    return Center(child: Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        SizedBox(height: 40),
        Image(height:180, fit: BoxFit.fitHeight, image: AssetImage('images/norecords.png') ),
        Padding(padding: EdgeInsets.only(top: 20),
        child: CustomText(text: 'Empty!', color: AppColors.blue, bold: true, large: true,)),
        CustomText(text: 'No records found', color: Colors.grey, bold: true,)
      ],

    ),);
  
  }
}