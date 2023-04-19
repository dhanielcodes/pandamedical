import 'package:flutter/material.dart';
import 'package:pandamedical/Styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/models/lab_result_history.dart';
import 'package:pandamedical/models/vital_obj.dart';
import 'package:pandamedical/constants/routing_constants.dart';


 //labTestsSecondaryValue; sId; labTestsKey;  labTestsDefaultValue; unit;  description; title;
class LabTestRow extends StatelessWidget {
   final Data data;

   const LabTestRow({this.data});
  @override
  Widget build(BuildContext context) {
    LabTests labTest = data.labTests[0];
    
    return Card(elevation: 5, margin: EdgeInsets.symmetric(vertical:10), 
    shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
    child: Padding(padding: EdgeInsets.symmetric(vertical: 25),
        child:ListTile(leading: Image(height:30, color:Colors.orange, image: AssetImage(icon(labTest.labName))),
        title: Row(children:[
          CustomText(text: '${labTest.labDefaultValue}${labTest.unit}', color: AppColors.blue, bold: true,),
          Spacer(),
          CustomText(text: '${data.labTests.length} Records', color: AppColors.blue, bold: true,)
        ]),
        subtitle: Row(children:[
          CustomText(text: labTest.labName, color: Colors.black, bold: true, extraSmall: true),
          Spacer(),
          CustomText(text: 'last recorded on ${data.timestamp}', color: Colors.grey, bold: true, extraSmall: true)
        ]),
        onTap: ()=> Navigator.pushNamed(context, LabDetailViewRoute, arguments: data),
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