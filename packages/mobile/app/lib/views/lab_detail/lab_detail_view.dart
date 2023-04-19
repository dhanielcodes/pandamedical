import 'package:flutter/material.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/models/lab_result_history.dart';
import 'package:pandamedical/widgets/labtest_item.dart';


class LabDetailView extends StatelessWidget {  
  DateTime initialDate;
  final _key =  GlobalKey<FormState>();
  //LabDetailBloc _bloc;
  final Data data;

  LabDetailView(this.data);
  @override
  Widget build(BuildContext context) {

    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Lab Result Details', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
      ),
      
      body: ListView(children: [
          Stack(children: <Widget>[
                      Container(height: screenHeight-65, color: Colors.white,),
                      Container(child: Column(
                          children: [
                            Container(height: 150,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(40.0)),),
                          ),]
                        )
                      ),
             //Container(margin: EdgeInsets.only(top: 100, left: 100,), height: 1000,),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0, bottom:0.0,
            child:  Container(height: 700,
            child: ListView(//shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            controller: ScrollController(),
                children: [Image(height: 40, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/beat.png')),
                SizedBox(height:10),
                Card(margin: EdgeInsets.symmetric(horizontal:20), shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
                  child: Padding(padding: EdgeInsets.all(15),
                    child: Column(children: [
                      Column(children: data.labTests.map((test){
                  return LabTestWidget(test);
                }).toList()),
                SizedBox(height:10),
                Card(shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   side: BorderSide(color:  AppColors.green, width: 1.0)),
                    child:Padding(padding: EdgeInsets.symmetric(horizontal:20, vertical: 30),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                SizedBox(height:20),
                CustomText(text: 'Observed by:', color: AppColors.blue,  bold: true),
                SizedBox(height:10),
                Container(width:300, height:60,
                        padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                        decoration: BoxDecoration(
                          color: AppColors.greenBG,
                        border: Border.all(width:1, color: AppColors.green),
                        borderRadius: BorderRadius.all(Radius.circular(15))
                      ),
                      child: CustomText(text: data.createdBy, color: AppColors.blue, bold:true),
                      ),
                SizedBox(height:20),
                CustomText(text: 'Source:', color: AppColors.blue,  bold: true),
                SizedBox(height:10),
                Container(width:300, height:60,
                        padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                        decoration: BoxDecoration(
                          color: AppColors.greenBG,
                        border: Border.all(width:1, color: AppColors.green),
                        borderRadius: BorderRadius.all(Radius.circular(15))
                      ),
                      child: CustomText(text: data.source, color: AppColors.blue, bold:true),
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
                      child: CustomText(text: data.dateEntered.substring(0,10), color: AppColors.blue, bold:true),
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
                      child: CustomText(text: data.timestamp, color: AppColors.blue, bold:true),
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
                      child: CustomText(text: data.comment, color: AppColors.blue, bold:true),
                      ),         
                ],
                            )),
              
              )
             
                    ])))
                
               
            ]),
             )
      ),]
            )
        
        
      ] )
    );
  }

}