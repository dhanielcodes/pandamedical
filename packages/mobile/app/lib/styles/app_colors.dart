
import 'package:flutter/material.dart';
import 'dart:ui';

class HexColor extends Color {
  static int _getColorFromHex(String hexColor) {
    hexColor = hexColor.toUpperCase().replaceAll('#', '');
    if (hexColor.length == 6) {
      hexColor = 'FF' + hexColor;
    }
    return int.parse(hexColor, radix: 16);
  }

  HexColor(final String hexColor) : super(_getColorFromHex(hexColor));
}

class AppColors {


// blue - #205072
// blue1 - #329D9C
// blue2 - #68B2A0
// blue3 - #68B2A08C
// green - #7BE495
// green1 - #56C596
// grey - #E0ECDE57
// grey1 - #329D9C36
//pink - #E7B7C8
//bg - #E0ECDE

  static final primary =  HexColor('#56C596');
  static final accent =  HexColor('#205072');
  
  static final blue =  HexColor('#205072');
  static final blue1 =  HexColor('#329D9C');
  static final blue2 =  HexColor('#68B2A0');//68B2A08C
  static final blue3 =  HexColor('#68B2A08C');//
  static final green =  HexColor('#7BE495');
  static final green1 =  HexColor('#56C596');
  static final grey =  HexColor('#E0ECDE57');
  static final grey1 =  HexColor('#329D9C36');
  static final pink =  HexColor('#E7B7C8');
  static final greenBG =  HexColor('#E0ECDE');




final Color disabledTextColor = const Color(0xFFa1a1a1);
final Color disabledListViewColor = Color(0xFFf7f7f7);


final Color toastBackgroundColor = Colors.black87;
final Color toastTextColor = Colors.white;
}