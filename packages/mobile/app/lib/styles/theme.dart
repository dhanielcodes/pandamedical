import 'package:flutter/material.dart';
import 'app_colors.dart' as colors;

final ThemeData theme = ThemeData(
  primaryColor: colors.AppColors.primary,
  accentColor: colors.AppColors.accent,
 // scaffoldBackgroundColor: colors.AppColors().backgroundColor,

  appBarTheme: AppBarTheme(
   // color: colors.AppColors().backgroundColor,
    iconTheme: IconThemeData(color: colors.AppColors.accent)
  ),  

  buttonTheme: ButtonThemeData(
    buttonColor: colors.AppColors.accent,
    disabledColor: colors.AppColors.primary
  )
);
