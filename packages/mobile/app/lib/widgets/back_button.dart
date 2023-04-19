import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/styles/app_colors.dart';

class BackButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
          key: Key('goBack'),
              onTap: (){ Navigator.pop(context);},
              child: Padding(padding: EdgeInsets.all(10), child: Icon(FontAwesomeIcons.arrowLeft, color:AppColors.blue),),
            );
  }
}