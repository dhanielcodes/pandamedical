import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/constants/app_constants.dart';
import 'package:pandamedical/models/auth_user_response.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/views/dashboard/dashboard_bloc.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/invert_small_button.dart';

// ignore: must_be_immutable
class DashboardView extends StatelessWidget {
  DashboardBloc _bloc;
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
  var _user = User();

  Widget bottomIcon(icon, text, colour){
    return Column(
      children: [IconButton(icon: Icon(FontAwesomeIcons.home), onPressed: (){})],
    );
  }

  void logout(context) {
    print('out');
    StorageHelper.clear();
    Navigator.of(context).pushNamedAndRemoveUntil(LauncherScreen, (Route<dynamic> route) => false);
  }

  void menuRoute(String title, context) {
    switch(title){
      case 'Medical Records':
        Navigator.of(context).pop();
        Navigator.of(context).pushNamed(MedicalRecordsRoute);
        break;
      case 'Logout':
        StorageHelper.clear();
        Navigator.of(context).pushNamedAndRemoveUntil(LauncherScreen, (Route<dynamic> route) => false);
        break;
       
    }
  }

  String greetings(){
    var hour = DateTime.now().hour;
    if(hour < 12){
      return 'Morning';
    }
    if(hour < 17){
      return 'Afternoon';
    }
    return 'Evening';
  }

  @override
  Widget build(BuildContext context) {
    final  screenHeight = MediaQuery.of(context).size.height;
    _bloc = BlocProvider.of<DashboardBloc>(context);
    _bloc.add(InitDashboard(context));


    return Container(height: screenHeight, child:ListView(
          children: [Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Container(height: 270,
                decoration: BoxDecoration(
                  color: AppColors.greenBG,
                  borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),
                ),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Padding(padding: EdgeInsets.symmetric(horizontal:30),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Padding(padding: EdgeInsets.symmetric(horizontal:25,),
                                  child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      children: [
                                        CustomText(text: 'Good ${greetings()}', color: AppColors.blue, bold: true, large: true,),
                                        BlocBuilder<DashboardBloc, DashboardState>(
                                          condition: (previous, current) =>previous.user != current.user,
                                          builder: (context, state){
                                            if(state.user != null){
                                              _user = state.user;
                                              return CustomText(text: '${state.user.firstName}', color: AppColors.blue, bold: true, large: true,);
                                            }else{
                                              return CustomText(text: '', color: AppColors.blue, bold: true, large: true,);
                                            }
                                          }),
                                        SizedBox(height: 10,),
                                        Wrap(children: [CustomText(text: 'Your target for today is to keep a \npositive mindset and smile.',
                                            color: AppColors.green1, small: true),],),
                                        SizedBox(height: 25,),
                                      ]
                                  ),
                                ),
                                Row(children: [
                                  CustomText(text: 'Latest results', color: AppColors.blue, bold: true, small: true,),
                                  Spacer(),
                                  GestureDetector(onTap: ()=> Navigator.pushNamed(context, MyVitalsRoute), 
                                  child: CustomText(text: 'View All', color: AppColors.blue, bold: true, small: true,),),
                                  
                                ]),
                              ])
                      ),
                      SizedBox(height: 10,),
                      BlocBuilder<DashboardBloc, DashboardState>(
                          condition: (previous, current) =>previous.vitals != current.vitals,
                          builder: (context, state){
                            if(state.vitals == null){
                              return Center(child: CircularProgressIndicator());
                            }else if(state.vitals.isEmpty){
                                      return  Center(child: GestureDetector(onTap: ()=> _bloc.add(InitDashboard(context)), 
                                  child: CustomText(text: '  Reload ', color: AppColors.blue, bold: true, small: true,),));//VitalsDatas().LabResults();
                                    }else{
                                      print(state.vitals.length);
                              return Container(padding: EdgeInsets.only(left:20),
                                  width: 400,
                                  height: 70,
                                  child: ListView.builder(
                                      scrollDirection: Axis.horizontal,
                                      itemCount: state.vitals.length,
                                      itemBuilder: (BuildContext context, int i) =>
                                      
                                          GestureDetector(
                                            //onTap: (){Navigator.pushNamed(context, VitalDetailViewRoute, arguments: state.vitals);},
                                            child:SizedBox(  height: 70,
                                              child: Card(
                                                  margin: EdgeInsets.all(5),
                                                  shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(10.0),   ),
                                                  elevation: 0,
                                                  child: Container(
                                                      padding: EdgeInsets.only(left: 5),
                                                      margin: EdgeInsets.all(5),
                                                      width: 165.0,
                                                      height: 50,
                                                      child: Row(crossAxisAlignment: CrossAxisAlignment.center,
                                                          mainAxisAlignment: MainAxisAlignment.start,
                                                          children: [
                                                            Image(height:35, width:35, image: AssetImage(state.vitals[i].icon),
                                                             color:state.vitals[i].color),
                                                            Padding(padding: EdgeInsets.only(left: 7),
                                                              child: Column(
                                                                  crossAxisAlignment: CrossAxisAlignment.start,
                                                                  mainAxisAlignment: MainAxisAlignment.center,
                                                                  children: [ CustomText(text: '${state.vitals[i].value} ${state.vitals[i].unit}', color: AppColors.blue, bold: true, small: true,),
                                                                    CustomText(text: state.vitals[i].key, color: Colors.grey, bold: true, extraSmall: true,)]),)

                                                            //ListTile(title: CustomText(text: '${state.vitals[i].count} bmp', color: AppColors.blue, bold: true, small: true,),
                                                            //subtitle: CustomText(text: state.vitals[i].key, color: Colors.grey, bold: true, extraSmall: true,),)
                                                          ])
                                                  )
                                              )
                                          ))
                                  ));
                            }

                          }
                      )
                    ]
                ),
              ),

              Container(
                  padding: EdgeInsets.symmetric(horizontal: 25, vertical: 30),
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        BlocListener<DashboardBloc, DashboardState>(
                            listener: (context, state) {
                              if(state.touchedIndex > 100){

                              }
                            },
                            child: Card(
                                    margin: EdgeInsets.all(5),
                                    shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(10.0),   ),
                                    elevation: 1,
                                    child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        children: [
                                          SizedBox(height:15),
                                          CustomText(text: 'Heart Rate', color: AppColors.blue, bold: true,),
                                          SizedBox(height: 10),
                                          Stack(
                                            children: [
                                              Column(
                                              mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.center,
                                              children: [
                                                PieChart(
                                            PieChartData(

                                              pieTouchData: PieTouchData(touchCallback: (pieTouchResponse) {
                                                //context.bloc<TargetBloc>().add(TargetTouched(touchedIndex:pieTouchResponse.touchedSectionIndex));

                                              }),
                                              borderData: FlBorderData(
                                                show: false,
                                              ),
                                              sectionsSpace: 4,
                                              centerSpaceRadius: 100,
                                              sections: showingSections(0),
                                            ),
                                          ),
                                              ]),
                                               
                                          Positioned(
                                            top: 90, left: 80, right: 80,
                                            child: Column(
                                              mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.center,
                                              children: [
                                                CustomText(text: 'Average', color: AppColors.blue, big: true, bold: true),
                                                BlocBuilder<DashboardBloc, DashboardState>(
                                                  condition: (previous, current) =>previous.vitals != current.vitals,
                                                    builder: (context, state) {
                                                      var heartRate = ' 00 ';
                                                      
                                                      if(state.vitals == null){
                                                        return Text(heartRate, style: TextStyle(fontSize:00, color: AppColors.blue));
                                                      }else if(state.vitals.isEmpty){
                                                                return Text(heartRate, style: TextStyle(fontSize:60, color: AppColors.blue));//VitalsDatas().LabResults();
                                                      }else{
                                                        print(state.vitals.length);
                                                        for (var i = 0; i < state.vitals.length; i++) {
                                                        if(state.vitals[i].key == 'heartRate'){
                                                          heartRate = state.vitals[i].value.toString();
                                                        }
                                                      }
                                                        return Text(heartRate, style: TextStyle(fontSize:75, color: AppColors.blue));
                                                        }
                                                    },
                                                  ),
                                                CustomText(text: 'bpm', color: AppColors.blue, big: true, bold: true)
                                              ]
                                            )
                                          )
                                            ]
                                          ),
                                          Container(margin: EdgeInsets.all(10),
                                            color: Colors.grey,
                                            width: double.infinity, height: 1,),
                                          Row(
                                            //crossAxisAlignment: CrossAxisAlignment.center,
                                            mainAxisAlignment: MainAxisAlignment.center,
                                            children: <Widget>[
                                              Container(width: 10, height: 10, color: Colors.yellow, margin: EdgeInsets.all(10),),
                                              CustomText(text: 'Lows: 2', color: AppColors.blue, small: true, bold: true),
                                              Container(width: 10, height: 10, color: AppColors.green, margin: EdgeInsets.all(10),),
                                              CustomText(text: 'High: 1', color: AppColors.blue, small: true, bold: true),
                                              Container(width: 10, height: 10, color: Colors.red, margin: EdgeInsets.all(10),),
                                              CustomText(text: 'Normal: 1', color: AppColors.blue, small: true, bold: true,)
                                            ],),SizedBox(height: 10,)
                                        ]
                                    )
                                )

                        ),
                        Card(
                            margin: EdgeInsets.all(5),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(10.0),),
                            elevation: 1,
                            child: ListTile(
                              leading: Image(height:40, image: AssetImage('images/blood-pressure.png'),
                              color: Colors.orange, fit: BoxFit.fill, ),
                              
                              title: BlocBuilder<DashboardBloc, DashboardState>(
                                                  condition: (previous, current) =>previous.vitals != current.vitals,
                                                    builder: (context, state) {
                                                      var bloodPressure = '--';
                                                      
                                                      if(state.vitals == null){
                                                        return CustomText(text: '$bloodPressure mmHg', color: AppColors.blue, small: true, bold: true,);
                                                      }else if(state.vitals.isEmpty){
                                                                return CustomText(text: '$bloodPressure mmHg', color: AppColors.blue, small: true, bold: true,);//VitalsDatas().LabResults();
                                                      }else{
                                                        print(state.vitals.length);
                                                        for (var i = 0; i < state.vitals.length; i++) {
                                                        if(state.vitals[i].key == 'bloodPressure'){
                                                          bloodPressure = state.vitals[i].value.toString();
                                                        }
                                                      }
                                                        return CustomText(text: '$bloodPressure mmHg', color: AppColors.blue, small: true, bold: true,);
                                                        }
                                                    },
                                                  ),
                              subtitle:  CustomText(text: 'Blood Pressure', color: Colors.grey, small: true, bold: true,),
                            )),

                            

                        Card(
                            margin: EdgeInsets.all(5),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(10.0),),
                            elevation: 1,
                            child: ListTile(
                              leading: Image(height:40, image: AssetImage('images/thermometer.png'),
                               fit: BoxFit.fill, ),                              
                              title: BlocBuilder<DashboardBloc, DashboardState>(
                                                  condition: (previous, current) =>previous.vitals != current.vitals,
                                                    builder: (context, state) {
                                                      var temperature = '--';
                                                      
                                                      if(state.vitals == null){
                                                        return CustomText(text: '$temperature mmHg', color: AppColors.blue, small: true, bold: true,);
                                                      }else if(state.vitals.isEmpty){
                                                                return CustomText(text: '$temperature mmHg', color: AppColors.blue, small: true, bold: true,);//VitalsDatas().LabResults();
                                                      }else{
                                                        print(state.vitals.length);
                                                        for (var i = 0; i < state.vitals.length; i++) {
                                                        if(state.vitals[i].key == 'temperature'){
                                                          temperature = state.vitals[i].value.toString();
                                                        }
                                                      }
                                                        return CustomText(text: '$temperature mmHg', color: AppColors.blue, small: true, bold: true,);
                                                        }
                                                    },
                                                  ),
                              subtitle:  CustomText(text: 'Body Temperature', color: Colors.grey, small: true, bold: true,),
                            )),
                        Card(
                            margin: EdgeInsets.all(5),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(10.0),),
                            elevation: 1,
                            child: ListTile(
                              leading: Image(height:40, image: AssetImage('images/lungs.png'),
                               fit: BoxFit.fill, ),
                              title: BlocBuilder<DashboardBloc, DashboardState>(
                                                  condition: (previous, current) =>previous.vitals != current.vitals,
                                                    builder: (context, state) {
                                                      var respirationRate = '--';
                                                      
                                                      if(state.vitals == null){
                                                        return CustomText(text: '$respirationRate mmHg', color: AppColors.blue, small: true, bold: true,);
                                                      }else if(state.vitals.isEmpty){
                                                                return CustomText(text: '$respirationRate mmHg', color: AppColors.blue, small: true, bold: true,);//VitalsDatas().LabResults();
                                                      }else{
                                                        print(state.vitals.length);
                                                        for (var i = 0; i < state.vitals.length; i++) {
                                                        if(state.vitals[i].key == 'respirationRate'){
                                                          respirationRate = state.vitals[i].value.toString();
                                                        }
                                                      }
                                                        return CustomText(text: '$respirationRate mmHg', color: AppColors.blue, small: true, bold: true,);
                                                        }
                                                    },
                                                  ),
                              subtitle:  CustomText(text: 'Respiration Rate', color: Colors.grey, small: true, bold: true,),
                            ))

                      ])
              ),

            ],
          )]
        )
    );
  }

  Widget menuPop(String label, String icon, String link, BuildContext context){
    return Column(children: [
                            GestureDetector(onTap: (){ Navigator.pop(context);Navigator.pushNamed(context, link);},
                            child: Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical:18),
                            child: Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                          children: [Image(height:15, fit: BoxFit.fitHeight, color: AppColors.primary, image: AssetImage(icon) ),
                            SizedBox(width:15),
                            CustomText(text: label, color: AppColors.primary, bold: true, small: true,),
                            SizedBox(width:5),
                            ],),)),
                            label == 'Healthcare Provider(s)' ? Container() : Container(color: Colors.grey[300], height:1, width: 600)
                          ],);
  }


  Future<void> _popDialog(context) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: true, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                CustomText(text:'Add New', color:AppColors.blue, large:true, bold: true),
                SizedBox(height:10),
                menuPop('Appointment(s)', 'images/appointment.png', AppointmentViewRoute, context),
                menuPop('Vital(s)', 'images/monitoring.png', MyVitalsRoute, context),
                menuPop('Family Member(s)', 'images/family.png', AppointmentViewRoute, context),
                menuPop('Healthcare Provider(s)', 'images/healthcare.png', FacilitiesRoute, context),
                SizedBox(height:20),
              ],
            ),
          ),
        );
      },
    );
  }

  List<PieChartSectionData> showingSections(int touchedIndex) {
    return List.generate(3, (i) {
      final isTouched = i == touchedIndex;
      final fontSize = isTouched ? 25.0 : 16.0;
      //final double radius = isTouched ? 60 : 50;
      final radius = 10.0;
      switch (i) {
        case 0:
          return PieChartSectionData(
            color: Colors.yellow,
            value: 60,
            //title: '38%',
            radius: radius,
            showTitle: false,
            titleStyle: TextStyle(
                fontSize: fontSize, fontWeight: FontWeight.bold, color: AppColors.green),
          );
        case 1:
          return PieChartSectionData(
            color: AppColors.green,
            value: 20,
            //title: '62%',
            showTitle: false,
            radius: radius,
            titleStyle: TextStyle(
                fontSize: fontSize, fontWeight: FontWeight.bold, color: AppColors.green),
          );
        case 2:
          return PieChartSectionData(
            color: Colors.red,
            value: 20,
            //title: '62%',
            showTitle: false,
            radius: radius,
            titleStyle: TextStyle(
                fontSize: fontSize, fontWeight: FontWeight.bold, color: AppColors.green),
          );
        default:
          return null;
      }
    });
  }

}