import 'package:flutter/material.dart';
import 'package:pandamedical/Styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/widgets/small_button.dart';


class HospitalRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(margin: EdgeInsets.all(5),
              shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
              elevation: 1,
              child: Padding(padding: EdgeInsets.all(20),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                  Column(crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Image(height:50, image: AssetImage('images/hospital2.png')),
                    SizedBox(height:5),
                    CustomText(text:'36 votes', small:true, color: Colors.grey, bold: true),
                    SizedBox(height:5),
                    CustomText(text:'95 Feedbacks', small:true, color: Colors.black, bold: true),
                  ],

                  ),
                  Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical:8),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    CustomText(text:'Evacare Hospital', small:true, color: AppColors.blue, bold: true),
                    SizedBox(height:10),
                    CustomText(text:'MBBS,DOMS,MS - Ophthalmology', extraSmall:true, color: Colors.grey, bold: true),
                    CustomText(text:'Ophthalmologist', extraSmall:true, color: Colors.grey, bold: true),
                    CustomText(text:'26 years of experience', extraSmall:true, color: Colors.grey, bold: true),
                    SizedBox(height:10),
                      Row(crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image(height:12, image: AssetImage('images/doctor.png')),
                        SizedBox(width:5),
                        CustomText(text:'Doctor', extraSmall:true, color: Colors.grey, bold: true),
                        SizedBox(width:30),
                        Image(height:12, image: AssetImage('images/placeholder.png')),
                        SizedBox(width:5),
                        CustomText(text:'Lagos Island', extraSmall:true, color: Colors.grey, bold: true),
                      ])
                  ],

                  ),
                  
                  ),

                  

                ],),
                SizedBox(height:5),
              Row(crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Card(child: Padding(padding: EdgeInsets.all(5), 
                  child: CustomText(text: '  LASIK Eye...  ', color: AppColors.blue, extraSmall:true, bold:true)),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                  color: Colors.white,),
                  Card(child: Padding(padding: EdgeInsets.all(5), 
                  child: CustomText(text: '  Anterior seg...  ', color: AppColors.blue, extraSmall:true, bold:true)),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                  color: Colors.white),
                  Card(child: Padding(padding: EdgeInsets.all(5), 
                  child: CustomText(text: '  +2 more  ', color: AppColors.blue, extraSmall:true, bold:true)),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    color: Colors.white)
                ],
              ),
              SizedBox(height:5),
              Center(child: 
              CustomSmallButton(label: 'Get Appointment', width: 170, onPress: (){Navigator.pushNamed(context, HospitalRoute);},))
              
              

              ],

              )),
              color: Colors.white,);
  
  }
}