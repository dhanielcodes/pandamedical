import 'package:flutter/material.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/models/vital_history_response.dart';
import 'package:pandamedical/widgets/vital_history.dart';


class VitalHistoryView extends StatelessWidget {  
  final List<Data> data;

  VitalHistoryView(this.data);
  @override
  Widget build(BuildContext context) {

    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Vital History', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
        actions: [
          GestureDetector(
            onTap: ()=> Navigator.pushNamed(context, AddVitalRoute), 
            child: Icon(Icons.add, color: AppColors.primary,size: 30,),),
            SizedBox(width:10)       
                    ],
      ),
      
      body: ListView(children: [
          Stack(children: <Widget>[
                      Container(height: screenHeight-60, color: Colors.white,),
                      Container(child: Column(
                          children: [
                            Container(height: 150,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                          ),]
                        )
                      ),
             //Container(margin: EdgeInsets.only(top: 100, left: 100,), height: 1000,),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0, bottom: 00,
            child:  Container(height: 700,
            child: ListView(//shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            controller: ScrollController(),
            children: [Image(height: 40, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/beat.png')),
                SizedBox(height:10),
                Card(margin: EdgeInsets.symmetric(horizontal:25), shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
                  child: Padding(padding: EdgeInsets.all(20),
                    child: Column(children: [
                      Column(children: data.map((e) =>  Column(children: [
                          Column(children: e.vitals.map((test){
                            print(test);
                        return VitalHistory(data:e,vital: test);
                      }).toList()),
                      SizedBox(height:10),
                      ])).toList(),),
                      SizedBox(height:400),
                    ]),)),
                      
            // SizedBox(height:900)
            
            ]),)
      ),]
            )
        ])
        
      
    );
  }

}