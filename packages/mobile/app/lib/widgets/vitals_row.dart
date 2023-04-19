import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/Styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/models/vital_obj.dart';

class VitalRow extends StatelessWidget {
   final String name, value, unit, date, icon;

   const VitalRow({Key key, this.name, this.value, this.icon, this.unit, this.date});
  @override
  Widget build(BuildContext context) {
    
    return Card(elevation: 5,margin: EdgeInsets.symmetric(vertical:10), 
    shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
    child: Padding(padding: EdgeInsets.symmetric(vertical: 25),
        child:ListTile(leading: Image(height:30, color:Colors.orange, image: AssetImage(icon)),
        title: Row(children:[
          CustomText(text: '$value$unit', color: AppColors.blue, bold: true,),
          Spacer(),
          CustomText(text: '--Records', color: AppColors.blue, bold: true,)
        ]),
        subtitle: Row(children:[
          CustomText(text: name, color: Colors.black, bold: true, extraSmall: true),
          Spacer(),
          CustomText(text: 'last recorded on $date', color: Colors.grey, bold: true, extraSmall: true)
        ])
        ),
        ));
  
  }
}