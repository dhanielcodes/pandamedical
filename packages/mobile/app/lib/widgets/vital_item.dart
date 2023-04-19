

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pandamedical/models/vital_obj.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/constants/app_constants.dart';
import 'package:pandamedical/models/vital_history_response.dart';


class VitalItemWidget extends StatelessWidget {

  final Vitals data;
  Data e;
  
  VitalItemWidget(this.data, this.e);

  @override
  Widget build(BuildContext context) {
  
    return Column(children: [
      Card(margin: EdgeInsets.only(top:25), shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0), 
      side: BorderSide(color:  AppColors.green, width: 1.0)),
        child: Padding(padding: EdgeInsets.all(20),
          child: Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(height:20),
                  CustomText(text: 'Vital:', color: AppColors.blue,  bold: true),
                  SizedBox(height:10),
                  Container(width:300, height:60,
                          padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                          decoration: BoxDecoration(
                            color: AppColors.greenBG,
                          border: Border.all(width:1, color: AppColors.green),
                          borderRadius: BorderRadius.all(Radius.circular(15))
                        ),
                        child: CustomText(text: data.title, color: AppColors.blue, bold:true),
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
                        child: CustomText(text: data.vitalsDefaultValue, color: AppColors.blue, bold:true),
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
         )),
         SizedBox(height: 10),
         Card(margin: EdgeInsets.only(top:25), shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0), 
      side: BorderSide(color:  AppColors.green, width: 1.0)),
        child: Padding(padding: EdgeInsets.all(20),
          child: Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                        CustomText(text: 'Observed by:', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Container(width:300, height:60,
                                padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                                decoration: BoxDecoration(
                                  color: AppColors.greenBG,
                                border: Border.all(width:1, color: AppColors.green),
                                borderRadius: BorderRadius.all(Radius.circular(15))
                              ),
                              child: CustomText(text: e.createdBy, color: AppColors.blue, bold:true),
                              ),
                        SizedBox(height:20),
                        CustomText(text: 'Date:', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Container(width:300, height:60,
                                padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                                decoration: BoxDecoration(
                                  color: AppColors.greenBG,
                                border: Border.all(width:1, color: AppColors.green),
                                borderRadius: BorderRadius.all(Radius.circular(15))
                              ),
                              child: CustomText(text: e.dateEntered.substring(0,10), color: AppColors.blue, bold:true),
                              ),
                        SizedBox(height:20),
                        CustomText(text: 'Time:', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Container(width:300, height:60,
                                padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                                decoration: BoxDecoration(
                                  color: AppColors.greenBG,
                                border: Border.all(width:1, color: AppColors.green),
                                borderRadius: BorderRadius.all(Radius.circular(15))
                              ),
                              child: CustomText(text: e.timestamp, color: AppColors.blue, bold:true),
                              ),
                        SizedBox(height:20),
                        CustomText(text: 'Comment:', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Container(width:300, height:100,
                                padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                                decoration: BoxDecoration(
                                  color: AppColors.greenBG,
                                border: Border.all(width:1, color: AppColors.green),
                                borderRadius: BorderRadius.all(Radius.circular(15))
                              ),
                              child: CustomText(text: e.comment, color: AppColors.blue, bold:true),
                              ),
                              
                ]
             )
         ))
    ],)
         ;
  }

  
}