import 'package:flutter/material.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';

class CustomButton extends StatelessWidget {
  final String label;
  final Function onPress;
  final bool disabled;
  final bool transparent;
  final Icon icon;
  final double width, height;
  final Key skey;
  final Gradient gradient;

  //final double _elevation = 3;
  const CustomButton({
    Key key,
    this.skey, 
    this.label,
    this.onPress,
    this.disabled,
    this.transparent,
    this.width, 
    this.height,
    this.icon,
    this.gradient
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final action = disabled == true ? null : onPress;
    

    Color backgroundColor = AppColors.primary;
    var textColor = Colors.white;

    // Color borderColor = AppColors.primary;
    // if (transparent == true) {
    //   backgroundColor = AppColors.primary;
    //   borderColor = AppColors.accent;
    // } else {
    //   backgroundColor = AppColors.primary;
    //   borderColor = AppColors.accent;
    // }

    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 10),
      child: SizedBox(
      width: 370,
      child: 
      
      // RaisedButton(
      //   padding: EdgeInsets.symmetric(vertical: 15.0, horizontal: 10.0),
      //   shape: RoundedRectangleBorder(
      //     borderRadius: BorderRadius.circular(15)
      //   ),
      //   onPressed: action,
      //   elevation: 0,
      //   color: backgroundColor,
      //   key: skey,
      //   child: icon ?? CustomText(text: label ?? 'Label', small: false, bold: true, color: textColor ),
      // ),

      Container(
       width: width ?? 370,
       height: height ?? 50.0,
      decoration: BoxDecoration(gradient: gradient ?? LinearGradient(colors: <Color>[AppColors.green, AppColors.green1, AppColors.primary,],), 
      boxShadow: [BoxShadow(color: Colors.white12, offset: Offset(0.0, 1.5), blurRadius: 7.5,),],
      borderRadius: BorderRadius.all(Radius.circular(20.0))
      ),
      child: Material(color: Colors.transparent,
        child: InkWell(key: skey, onTap: action, 
        child: Center(child: icon ?? CustomText(text: label ?? 'Label', small: false, bold: true, color: textColor ),)),
      ),
    )

    ),
    );
  }
  
}