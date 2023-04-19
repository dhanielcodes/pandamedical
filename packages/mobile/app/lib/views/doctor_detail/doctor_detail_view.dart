import 'package:flutter/material.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/small_button.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

class DoctorDetailView extends StatelessWidget {

final double circleRadius = 100.0;
  final double circleBorderWidth = 5.0;

  @override
  Widget build(BuildContext context) {
    //final  statusBarHeight = MediaQuery.of(context).padding.top;
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: AppColors.greenBG,
      appBar: AppBar(
      elevation: 0,
        title: CustomText(text: 'Specialist', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(onPressed: (){ Navigator.pop(context);},  color: AppColors.blue,
      ),
      ),
      body: Stack(
      alignment: Alignment.topCenter,
      children: <Widget>[
        ListView(shrinkWrap: true, controller: ScrollController(),
        children: [Padding(
          padding: EdgeInsets.only(top: circleRadius / 2.0, left:10, right:10),
          child: Column(children: [
            Card(//margin: EdgeInsets.only(top:85, left: 15, right: 15),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all( Radius.circular(20))),
                    elevation: 1,
                    child: Padding(padding: EdgeInsets.symmetric(horizontal:25, vertical: 10),
                    child: ListView(shrinkWrap: true,
                  children: [
                    Column(crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [Padding(padding: EdgeInsets.symmetric(horizontal: 15),
                  child: Row(
                    children: [
                    CustomText(text: 'Online', color: Colors.green,  bold: true, small: true,),
                      Spacer(),
                      RatingBarIndicator(rating: 1,
                        itemBuilder: (context, index) => Icon(Icons.star, color: Colors.amber,),
                        itemCount: 1, itemSize: 20.0, direction: Axis.horizontal),
                    CustomText(text: '  4.2', color: Colors.grey,  bold: true, small: true,),],),),
                    SizedBox(height: 25),
                    CustomText(text: 'Dr Janet Paul', color: AppColors.blue,  bold: true, small: true,),
                    SizedBox(height: 10),
                    CustomText(text: 'B.Sc, MBBS, DDVL, MD-Dermitologist', color: Colors.grey,  bold: true, extraSmall: true,),
                    SizedBox(height: 10),
                    Row(
                    children: [
                    CustomText(text: '16 ', color: AppColors.blue,  bold: true, small: true,),
                    CustomText(text: 'yrs. Experience', color: Colors.grey,  bold: true, extraSmall: true,),
                    Spacer(),
                    CustomText(text: '89% ', color: AppColors.blue,  bold: true, extraSmall: true,),
                    CustomText(text: ' (443 votes)', color: Colors.grey,  bold: true, extraSmall: true,),],),
                    ],),
                  SizedBox(height: 10),
                    
                  ]) )),
  
            Card(//margin: EdgeInsets.only(top:85, left: 15, right: 15),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(20),)),
                    elevation: 1,
                    child: Padding(padding: EdgeInsets.symmetric(horizontal:15),
                    child: ListView(shrinkWrap: true,
                  children: [
                    SizedBox(height: 15,),
                  Row(children: [
                    CustomText(text: 'In Clinic Fees:', color: Colors.grey,  bold: true, small: true,),
                    CustomText(text: '\$10 ', color: AppColors.blue,  bold: true, small: true,),
                    Spacer(),
                  CustomSmallButton(label: 'Book', width: 120, onPress: (){
                    Navigator.pushNamed(context, SelectSlotViewRoute);
                  },)
                  ],),
                  SizedBox(height: 15,),
                  Container(height: 1, color: Colors.grey[300], width: 700),
                  SizedBox(height: 15,),
                  Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                    CustomText(text: 'Closed Today', color: Colors.red,   small: true, bold: true),
                    CustomText(text: '9.30AM - 8.00PM', small: true,),
                    CustomText(text: 'All Timing', color: Colors.green, small: true, bold: true),],),
                  SizedBox(height: 15,),
                  Container(height: 1, color: Colors.grey[300], width: 700),
                  SizedBox(height: 15,),
                  Row(
                    children: [Image(fit: BoxFit.fitHeight, height:15, color: Colors.green, image: AssetImage('images/placeholder.png', )), 
                    CustomText(text: '   92/6, 3rd Floor Outer Ring Road, Chandra Layout', color: Colors.grey,  bold: true, extraSmall: true,),],),
                  Padding(padding: EdgeInsets.all(5),
                  child: Image(fit: BoxFit.fill, image: AssetImage('images/map-pic.png', )),),
                  SizedBox(height: 15,),
                  Container(height: 1, color: Colors.grey[300], width: 700),
                  SizedBox(height: 10,),

                  Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CustomText(text:'FEEDBACK', color: Colors.grey, bold: true, small: true,),
                    SizedBox(height: 7,),
                    CustomText(text:'Very good, courteous and efficient staff.', color: AppColors.blue, bold: true,  small: true,),
                    SizedBox(height: 4),
                    CustomText(text:'Jitu Raut. 2 month ago', color: Colors.grey, bold: true, extraSmall: true,),
                    SizedBox(height: 10,),
                  CustomText(text:'ALL FEEDBACK', color: Colors.green, bold: true, small: true,),
                  ],),
                  SizedBox(height: 15,),
                  Container(height: 1, color: Colors.grey[300], width: 700),
                  SizedBox(height: 10,),

                  Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CustomText(text:'SERVICES', color: Colors.grey, bold: true, small: true,),
                    SizedBox(height: 7,),
                    CustomText(text:'Ophthalmologist', color: AppColors.blue, bold: true,  small: true,),
                    SizedBox(height: 4,),
                    CustomText(text:'Glaucoma', color: AppColors.blue, bold: true, small: true,),
                    SizedBox(height: 4,),
                    CustomText(text:'Cataract', color: AppColors.blue, bold: true, small: true,),
                    SizedBox(height: 10,),
                  CustomText(text:'ALL SERVICES', color: Colors.green, bold: true, small: true,),
                 //SizedBox(height: 30,),
                  ],),
                  SizedBox(height: 15,),
                  Container(height: 1, color: Colors.grey[300], width: 700),
                  SizedBox(height: 15,),
                   Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CustomText(text:'SPECIALIZATION', color: Colors.grey, bold: true, small: true,),
                    SizedBox(height: 7,),
                    CustomText(text:'Dermitologist', color: AppColors.blue, bold: true,  small: true,),
                    SizedBox(height: 4,),
                    CustomText(text:'Trichologist', color: AppColors.blue, bold: true, small: true,),
                    SizedBox(height: 4,),
                    CustomText(text:'Cosmetologist', color: AppColors.blue, bold: true, small: true,),                 //SizedBox(height: 30,),
                  ],),
                  SizedBox(height: 15,),
                  Container(height: 1, color: Colors.grey[300], width: 700),
                  SizedBox(height: 15,),
                  Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CustomText(text:'VERIFICATION DONE FOR', color: Colors.grey, bold: true, small: true,),
                    SizedBox(height: 7,),
                    CustomText(text:'- Medical License', color: AppColors.blue, bold: true,  small: true,),
                  ],),
                  SizedBox(height: 15,),
                  ]),
                  ),
                  )
          ],),
        ),
        ],),
        Container(
          width: circleRadius,
          height: circleRadius,
          decoration:
              ShapeDecoration(shape: CircleBorder(), color: Colors.white),
          child: Padding(
            padding: EdgeInsets.all(circleBorderWidth),
            child: DecoratedBox(
              decoration: ShapeDecoration(
                  shape: CircleBorder(),
                  image: DecorationImage(
                      fit: BoxFit.cover,
                      image: AssetImage('images/pic2.png'))),

            )
            )
            )
      ]
            )   
          );
  }

}
