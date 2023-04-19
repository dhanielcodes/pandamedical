import 'package:flutter/material.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/constants/routing_constants.dart';



class MedicalRecordsView extends StatelessWidget {  
  
  @override
  Widget build(BuildContext context) {

    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Container(height:screenHeight, child: ListView(children: [
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
            child: Container(height: 700,
            child: ListView(//shrinkWrap: true, 
            physics: const NeverScrollableScrollPhysics(),
            children: [Image(height: 40, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/beat.png')),
                SizedBox(height:10),
                Card(margin: EdgeInsets.symmetric(horizontal:25), shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
                  child: Padding(padding: EdgeInsets.all(20),
                    child: Column(children: [
                      Card(elevation: 5, margin: EdgeInsets.symmetric(vertical:10),
                        shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
                        child: Padding(padding: EdgeInsets.symmetric(vertical: 25),
                            child:ListTile(leading: Image(height:30, color:Colors.orange, image: AssetImage('images/heart.png')),
                            title: CustomText(text: 'Vitals', color: AppColors.blue, bold: true,),
                            onTap: ()=>  Navigator.of(context).pushNamed(MyVitalsRoute),
                            ),
                            )),
                      Card(elevation: 5, margin: EdgeInsets.symmetric(vertical:10),
                        shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
                        child: Padding(padding: EdgeInsets.symmetric(vertical: 25),
                            child:ListTile(leading: Image(height:30, color:Colors.orange, image: AssetImage('images/o2.png')),
                            title: CustomText(text: 'Lab Results', color: AppColors.blue, bold: true,),
                            onTap: ()=>  Navigator.of(context).pushNamed(LabResultsRoute),
                            ),
                            )),
                            SizedBox(height:400)
                    ]),)
                    ),
                      
            // SizedBox(height:900)
            
            ]),)
      ),]
            )
        ])
        
      
    );
  }

}