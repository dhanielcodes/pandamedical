import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/Styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';

class LabResultRow extends StatelessWidget {
   final String name, value, unit, date, description;

   const LabResultRow({Key key, this.name, this.value, this.description, this.unit, this.date});
  @override
  Widget build(BuildContext context) {
    
    return Card(elevation: 1,//margin: EdgeInsets.symmetric(vertical:10, horizontal: 15), 
    shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
    child: Padding(padding: EdgeInsets.symmetric(vertical: 25, horizontal: 15),
        child:Row(children:[
          Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.start,
            children: [
            CustomText(text: name, color: AppColors.blue, bold: true,),
            CustomText(text: description, color: Colors.black, bold: true, extraSmall: true),
          SizedBox(height:7),
          CustomText(text: 'last recorded on $date', color: Colors.grey, bold: true, extraSmall: true)
          ]),
          Spacer(),
          Column(crossAxisAlignment: CrossAxisAlignment.end, mainAxisAlignment: MainAxisAlignment.end,
          children: [
            CustomText(text: value, color: AppColors.blue, bold: true, large: true),
            CustomText(text: unit, color: AppColors.green, bold: true, small: true),
          ])
        ])

        ));
  
  }
}