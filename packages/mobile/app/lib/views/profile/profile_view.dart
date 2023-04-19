import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/models/auth_user_response.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/constants/routing_constants.dart';

class ProfileScreen extends StatelessWidget {

final User user;
const ProfileScreen({this.user});
  @override
  Widget build(BuildContext context) {
    final  statusBarHeight = MediaQuery.of(context).padding.top;
    return Scaffold(
      appBar: AppBar(centerTitle: true,
      elevation: 0,
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
        actions: [Icon(Icons.settings, size: 25, color: AppColors.blue), SizedBox(width: 10)]

      ),
      body: SingleChildScrollView(
        child: Column(children: [
          Stack(children: <Widget>[
                      Container(height: 1000, color: Colors.white,),
                      Container(child: Column(
                          children: [
                            Container(height: 70,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                          ),]
                        )
                      ),
             Container(margin: EdgeInsets.only(top: 100, left: 100,), height: 1000,),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0,
            child: ListView(shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            children: [Column(children: [SizedBox(width:10),
              CircleAvatar(radius:50, backgroundColor: AppColors.primary,
                      child: CircleAvatar(radius:48, backgroundColor: Colors.white,
                      child: Image(fit: BoxFit.fitHeight, image: AssetImage('images/pic2.png')),),),

                    SizedBox(height:5),
                    Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.center,
                      children:[
                      Column(children: [CustomText(text: 'Arinze Panda', color: AppColors.blue, bold: true, small: true,),
                    SizedBox(height:5),
                    CustomText(text: '02/01/1995', color: AppColors.blue, bold: true, extraSmall: true,),
                    SizedBox(height:10),
                    CustomText(text: 'Male', color: AppColors.blue, bold: true, extraSmall: true,),]),
                    SizedBox(width:5),
                    Icon(FontAwesomeIcons.edit, size: 25, color: AppColors.blue),
                    ]),

            ]),
            Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            elevation: 45,
                            child:Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical: 30),
                            child: Column(children: [
                              Container(width: 350, decoration: BoxDecoration(color: AppColors.greenBG, 
                              borderRadius: BorderRadius.all(Radius.circular(25))),
                              child: Padding(padding: EdgeInsets.all(15),
                              child: CustomText(text: 'Contact', color: AppColors.blue, bold: true, ),
                              ),),
                          SizedBox(height:20),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Phone No.', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          CustomText(text: '+234709930495', color: Colors.grey, bold: true, extraSmall: true,),
                          SizedBox(width:5),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          ]), onTap: (){Navigator.pushNamed(context, ChangePhoneRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Email', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          CustomText(text: 'arinze@panda.com', color: Colors.grey, bold: true, extraSmall: true,),
                          SizedBox(width:5),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          
                          ]), onTap: (){Navigator.pushNamed(context, ChangeEmailRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Address', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          CustomText(text: 'Lekki Phase 1, Lekki, Nigeria', color: Colors.grey, bold: true, extraSmall: true,),
                          SizedBox(width:5),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          
                          ]), onTap: (){Navigator.pushNamed(context, ChangeAddressRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                          

                          Container(width: 350, decoration: BoxDecoration(color: AppColors.greenBG, 
                              borderRadius: BorderRadius.all(Radius.circular(25))),
                              child: Padding(padding: EdgeInsets.all(15),
                              child: CustomText(text: 'Security', color: AppColors.blue, bold: true, ),
                              ),),
                          SizedBox(height:20),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Password', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          
                          ]), onTap: (){Navigator.pushNamed(context, ChangePasswordRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Passcode', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          ]), onTap: (){Navigator.pushNamed(context, ChangePasscodeRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                         

                          Container(width: 350, decoration: BoxDecoration(color: AppColors.greenBG, 
                              borderRadius: BorderRadius.all(Radius.circular(25))),
                              child: Padding(padding: EdgeInsets.all(15),
                              child: CustomText(text: 'Extra', color: AppColors.blue, bold: true, ),
                              ),),
                          SizedBox(height:20),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Units.', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          CustomText(text: 'Imperial', color: Colors.grey, bold: true, extraSmall: true,),
                          SizedBox(width:5),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          
                          ]), onTap: (){Navigator.pushNamed(context, ChangeUnitsRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Insurance', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          ]), onTap: (){Navigator.pushNamed(context, ChangeInsuranceRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Blood Type', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          ]), onTap: (){Navigator.pushNamed(context, BloodTypeRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Primary Care Physician', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          ]), onTap: (){Navigator.pushNamed(context, PrimarySpecialistRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                          GestureDetector(child: Column(children: [
                            Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                            children:[SizedBox(width:20),
                              CustomText(text: 'Emergency Information', color: AppColors.blue, bold: true, small: true,),
                          Spacer(),
                          Icon(Icons.arrow_right, size: 20, color: Colors.black),
                          SizedBox(width:20),
                          ]),
                          ]), onTap: (){Navigator.pushNamed(context, EmergencyInformationRoute);}),
                          Padding(padding: EdgeInsets.symmetric(vertical:15),
                          child:Container(height:1, color: Colors.grey[300], width: 300),),
                            ])),
              )
            ])
          ),
                       
                  ]
            )
        ])
      )
      
    );
  }

}