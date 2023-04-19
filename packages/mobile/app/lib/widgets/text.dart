import 'package:flutter/material.dart';
import 'package:pandamedical/Styles/dimens.dart' as dimens;
//import 'package:pandamedical/Styles/app_colors.dart' as colors;
class CustomText extends StatelessWidget {
  final String text;
  final bool title;
  final bool large;
  final bool bold;
  final bool big;
  final bool small;
  final bool extraSmall;
  final bool center;
  final bool white;
  final bool dark;
  final bool accent;
  final bool primary;
  final bool primaryDark;
  final Color color;
  final int maxLines;
  final Key skey;

  const CustomText({Key key, this.text, this.skey, this.title, this.large, this.bold, this.big, this.small, this.extraSmall, this.center, this.white, this.dark, this.accent, this.primary, this.primaryDark, this.color, this.maxLines}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final dynamic isBold = bold == true ? FontWeight.bold : FontWeight.normal;

    final textValue = text ?? '';

    final  fontSize = title == true ? dimens.fontTextTitle 
        : large == true ? dimens.fontTextLarge
          : big == true ? dimens.fontTextBig 
          : extraSmall == true ? dimens.fontTextExtraSmall 
          : small == true ? dimens.fontTextSmall : dimens.fontText; 

    // final  customColor = primaryDark == true ? 
    //   colors.AppColors.primary
    // : 
    //   white == true ? 
    //     Colors.white 
    //   : 
    //     accent == true ? colors.AppColors.accent :colors.AppColors.primary;

    return Text(
      textValue,
      key: skey,
      overflow: TextOverflow.ellipsis,
      softWrap: true,
      maxLines: maxLines,
      textAlign: center == true ? TextAlign.center : null,
      style: TextStyle(
        decoration: TextDecoration.none,
        fontSize: fontSize,
        color: color ?? dark,// == true ? colors.AppColors.accent : customColor,
        fontWeight: isBold
      )
    );
  }
}