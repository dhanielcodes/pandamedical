

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pandamedical/models/lab_result_history.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/constants/app_constants.dart';


class LabTestWidget extends StatelessWidget {

  final LabTests data;
  
  LabTestWidget(this.data);

  @override
  Widget build(BuildContext context) {
  
    return Card(margin: EdgeInsets.only(top:25), shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0), 
      side: BorderSide(color:  AppColors.green, width: 1.0)),
        child: Padding(padding: EdgeInsets.all(20),
          child: Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(height:20),
                  CustomText(text: 'Lab Result:', color: AppColors.blue,  bold: true),
                  SizedBox(height:10),
                  Container(width:300, height:60,
                          padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                          decoration: BoxDecoration(
                            color: AppColors.greenBG,
                          border: Border.all(width:1, color: AppColors.green),
                          borderRadius: BorderRadius.all(Radius.circular(15))
                        ),
                        child: CustomText(text: data.labName, color: AppColors.blue, bold:true),
                        ),
                  SizedBox(height:20),
                  CustomText(text: 'Value:', color: AppColors.blue,  bold: true),
                  SizedBox(height:10),
                  Container(width:300, height:60,
                          padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                          decoration: BoxDecoration(
                            color: AppColors.greenBG,
                          border: Border.all(width:1, color: AppColors.green),
                          borderRadius: BorderRadius.all(Radius.circular(15))
                        ),
                        child: CustomText(text: data.labDefaultValue, color: AppColors.blue, bold:true),
                        ),
                  SizedBox(height:20),
                  CustomText(text: 'Unit:', color: AppColors.blue,  bold: true),
                  SizedBox(height:10),
                  Container(width:300, height:60,
                          padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                          decoration: BoxDecoration(
                            color: AppColors.greenBG,
                          border: Border.all(width:1, color: AppColors.green),
                          borderRadius: BorderRadius.all(Radius.circular(15))
                        ),
                        child: CustomText(text: data.unit, color: AppColors.blue, bold:true),
                        ),
                  
                              
                ]
             )
         ));
  }

  
}