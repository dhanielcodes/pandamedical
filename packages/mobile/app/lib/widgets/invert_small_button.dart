import 'package:flutter/material.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';

class CustomInvertButton extends StatelessWidget {
  final String label;
  final Function onPress;
  final bool disabled;
  final bool transparent;
  final Icon icon;
  final Key skey;
  final double width;

  //final double _elevation = 3;
  const CustomInvertButton({
    this.width,
    Key key,
    this.skey, 
    this.label,
    this.onPress,
    this.disabled,
    this.transparent,
    this.icon,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final action = disabled == true ? null : onPress; 

    var textColor = Colors.white;

    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 10),
      child: SizedBox(
      width: width ?? 370,
      child: RaisedButton(
        padding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 10.0),
        shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0), side:  BorderSide(color: Colors.white)),
        onPressed: action,
        elevation: 1,
        color: AppColors.primary,
        key: skey,
        child: icon ?? CustomText(text: label ?? 'Label', extraSmall: true, bold: true, color: textColor ),
      ),
    ),
    );
  }
}