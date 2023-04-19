import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/Styles/app_colors.dart';
import 'package:pandamedical/models/vital_history_response.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';

 //vitalsSecondaryValue; sId; vitalsKey;  vitalsDefaultValue; unit;  description; title;
class VitalRow extends StatelessWidget {
   final Data data;

   const VitalRow({this.data});
  @override
  Widget build(BuildContext context) {
    var vital = data.vitals[0];
    
    return Card(elevation: 5, margin: EdgeInsets.symmetric(vertical:10),
    shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
    child: Padding(padding: EdgeInsets.symmetric(vertical: 25),
        child:ListTile(leading: Image(height:30, color:Colors.orange, image: AssetImage(icon(vital.title))),
        title: Row(children:[
          CustomText(text: '${vital.vitalsDefaultValue}${vital.unit}', color: AppColors.blue, bold: true,),
          Spacer(),
          CustomText(text: '${data.vitals.length} Records', color: AppColors.blue, bold: true,)
        ]),
        subtitle: Row(children:[
          CustomText(text: vital.title, color: Colors.black, bold: true, extraSmall: true),
          Spacer(),
          CustomText(text: 'last recorded on ${data.timestamp}', color: Colors.grey, bold: true, extraSmall: true)
        ]),
        onTap: ()=> Navigator.pushNamed(context, VitalDetailViewRoute, arguments: data),
        ),
        ));
  
  }
  String icon(String title){
    switch (title) {
      case 'images/heart.png':
        return 'images/heart.png';
      default:
        return 'images/heart.png';
    }
  }

}