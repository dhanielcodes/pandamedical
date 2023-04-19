import 'package:flutter/material.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/small_button.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

class HospitalView extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    //final  statusBarHeight = MediaQuery.of(context).padding.top;
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: Colors.white,
      body: NestedScrollView(
          headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
            return <Widget>[
              SliverOverlapAbsorber(
                  handle: NestedScrollView.sliverOverlapAbsorberHandleFor(context),
                  sliver: SliverAppBar(
                    shadowColor: AppColors.blue,
                    backgroundColor: AppColors.blue,
                    title: CustomText(text: 'Ophtamologist', color: Colors.white, large:true, bold: true),
                    leading: BackButton(color: Colors.white, onPressed:(){
                      Navigator.pop(context);
                    }),
                    actions: [Padding(padding: EdgeInsets.symmetric(vertical:20, horizontal: 15),
                      child: CustomText(text: 'Lagos', color: Colors.white, extraSmall: true,  bold: true),)],
                    expandedHeight: 250.0,
                    floating: false,

                    pinned: true,
                    flexibleSpace: FlexibleSpaceBar(
                        centerTitle: true,
                        background: Container(
                          decoration: BoxDecoration(
                            shape: BoxShape.rectangle,
                            image: DecorationImage(scale: 5,
                              fit: BoxFit.fill,
                              image: AssetImage('images/header.png'),
                              // image: CachedNetworkImageProvider(
                              //     newsPost.photos[0].url),
                            ),
                          ),
                        )),
                    forceElevated: innerBoxIsScrolled,
                  ))
            ];
          },
          body: Card(margin: EdgeInsets.only(top:85, left: 15, right: 15),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.only(topLeft: Radius.circular(20), topRight: Radius.circular(20))),
                    elevation: 1,
                    child: Padding(padding: EdgeInsets.symmetric(horizontal:15),
                    child: ListView(
                  children: [
                  CustomText(text: 'Medplus Clinic', color: AppColors.blue, large: true, bold: true),
                  Row(
                    children: [Image(fit: BoxFit.fitHeight, height:15, image: AssetImage('images/placeholder.png', )),
                    CustomText(text: '  Lekki Phase 1', color: Colors.grey,  bold: true, small: true,),],),
                  SizedBox(height: 5,),
                  RatingBarIndicator(
                      rating: 3.5,
                      itemBuilder: (context, index) => Icon(
                          Icons.star,
                          color: Colors.amber,
                      ),
                      itemCount: 5,
                      itemSize: 20.0,
                      direction: Axis.horizontal,
                  ),
                  SizedBox(height: 15,),
                  Container(height: 1, color: Colors.grey, width: 700),
                  SizedBox(height: 15,),
                  Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                    CustomText(text: 'Closed Today', color: Colors.red,   small: true, bold: true),
                    CustomText(text: '9.30AM - 8.00PM', small: true,),
                    CustomText(text: 'All Timing', color: Colors.green, small: true, bold: true),],),
                  SizedBox(height: 15,),
                  Container(height: 1, color: Colors.grey, width: 700),
                  SizedBox(height: 15,),
                  Row(
                    children: [Image(fit: BoxFit.fitHeight, height:15, color: Colors.green, image: AssetImage('images/placeholder.png', )), 
                    CustomText(text: '   92/6, 3rd Floor Outer Ring Road, Chandra Layout', color: Colors.grey,  bold: true, extraSmall: true,),],),
                  Padding(padding: EdgeInsets.all(5),
                  child: Image(fit: BoxFit.fill, image: AssetImage('images/map-pic.png', )),),
                  SizedBox(height: 15,),
                  ListTile(leading: Image(fit: BoxFit.fitHeight, height: 30, image: AssetImage('images/doctor2.png')  ),
                  title: CustomText(text:'Dr. Anyila Idahosa', color: AppColors.blue, bold: true),
                  subtitle: Row(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                  children: [Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CustomText(text:'Dermatoloist', color: Colors.grey, bold: true, extraSmall: true,),
                    SizedBox(height: 4,),
                    CustomText(text:'\$70', color: AppColors.blue, bold: true,  extraSmall: true,),
                  ]),
                  Spacer(),
                  CustomSmallButton(label: 'Book', width: 120, onPress: (){},)
                  ],
                  ) ),
                  SizedBox(height: 10,),
                  Container(height: 1, color: Colors.grey[200], width: 700),
                  SizedBox(height: 10,),

                  ListTile(leading: Image(fit: BoxFit.fitHeight, height: 30, image: AssetImage('images/doctor2.png')  ),
                  title: CustomText(text:'Dr. Anyila Idahosa', color: AppColors.blue, bold: true),
                  subtitle: Row(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                  children: [Column(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CustomText(text:'Dermatoloist', color: Colors.grey, bold: true, extraSmall: true,),
                    SizedBox(height: 4,),
                    CustomText(text:'\$70', color: AppColors.blue, bold: true,  extraSmall: true,),
                  ]),
                  Spacer(),
                  CustomSmallButton(label: 'Book', width: 120, onPress: (){},)
                  ],
                  ) ),
                  SizedBox(height: 10,),
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
                  ],),

                  SizedBox(height: 10,),
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
                   SizedBox(height: 30,),
                  ],),
                  
                  ]),
                  ),
                  



                  )
                  
          ),
    );
  }

}
