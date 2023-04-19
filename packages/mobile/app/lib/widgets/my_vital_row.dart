import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/Styles/app_colors.dart';
import 'package:pandamedical/constants/app_constants.dart';
import 'package:pandamedical/models/vital_history_response.dart';
import 'package:pandamedical/views/vitals/vitals_bloc.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';

class MyVitalRow extends StatelessWidget {
   final UserVital data;

   const MyVitalRow({this.data});
  @override
  Widget build(BuildContext context) {
    final bloc =  BlocProvider.of<VitalsBloc>(context);
    var vital = data;
    
    return Card(elevation: 5, margin: EdgeInsets.symmetric(vertical:10),
    shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
    child: Padding(padding: EdgeInsets.symmetric(vertical: 25),
        child:ListTile(leading: Image(height:30, color:Colors.orange, image: AssetImage(vital.icon)),
        title: Row(children:[
          CustomText(text: '${vital.value} ${vital.unit}', color: AppColors.blue, bold: true,),
          Spacer(),
          CustomText(text: '${vital.number_of_records} Records', color: AppColors.blue, bold: true,)
        ]),
        subtitle: Row(children:[
          CustomText(text: vital.name, color: Colors.black, bold: true, extraSmall: true),
          Spacer(),
          CustomText(text: data.latest_record == ''? 'last recorded on  ----/--/--' : 'last recorded on ${data.latest_record.substring(0,10)}', color: Colors.grey, bold: true, extraSmall: true)
        ]),
        onTap: ()=> int.parse(vital.number_of_records) > 0 ? bloc.add(ViewVitals(vital.key, context)) : null,
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