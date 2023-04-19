
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
import 'package:pandamedical/views/my_appointments/my_appointments_view.dart';
import 'package:pandamedical/views/dashboard/dashboard_view.dart';
import 'package:pandamedical/views/medical_records/records.dart';


class Home extends StatefulWidget {
  Home({Key key}) : super(key: key);
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  PageController _myPage;
  var selectedPage;
  var title = 'Dashboard';

  DashboardBloc _bloc;
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  var _user = User();

  @override
  void initState() {
    super.initState();
    _myPage = PageController(initialPage: 0);
    selectedPage = 0;
  }

  @override
  Widget build(BuildContext context) {
    
    _bloc = BlocProvider.of<DashboardBloc>(context);
    _bloc.add(InitDashboard(context));
    return Scaffold(
      key:_scaffoldKey,
        appBar: AppBar(
          leading: GestureDetector(
            onTap: (){ _scaffoldKey.currentState.openDrawer();},
            child: Padding(padding: EdgeInsets.all(10), child: Icon(FontAwesomeIcons.bars, color: AppColors.blue, size: 20,)),
          ),
          //title: CustomText(text: title, color: AppColors.blue, big:true, bold: true),
          //centerTitle: true,
          backgroundColor: AppColors.greenBG,
          actions: [Icon(FontAwesomeIcons.users, size: 23, color: AppColors.green,),
            SizedBox(width: 10,),
            CircleAvatar(child: Icon(FontAwesomeIcons.user, size: 20, color: AppColors.blue,), backgroundColor: Colors.white),  SizedBox(width: 5,)],
          elevation: 0,
        ),
        drawer: Drawer(
          child: Container(
            color: Colors.white,
            child: Column(
             // crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Expanded(child: Column(children: <Widget>[
                      GestureDetector(child:Container(
                        padding: EdgeInsets.only(top:10, left:10, right:10),
                      color: Colors.white,
                      child: Card(margin: EdgeInsets.only(top:15), color: AppColors.primary,
                      shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),
                      elevation: 0,
                      child: Padding(padding: EdgeInsets.all(10),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Row(crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children:[
                      Image(fit: BoxFit.fitHeight, height:20, color:Colors.white, image: AssetImage('images/user.png')),
                      Spacer(),
                      CircleAvatar(radius:40, backgroundColor: Colors.white,
                      child: CircleAvatar(radius:38, backgroundColor: Colors.white,
                      child: Image(fit: BoxFit.fitHeight, image: AssetImage('images/pic2.png')),),),
                      Spacer(),
                      Icon(FontAwesomeIcons.bars, size: 15, color: Colors.white)
                      //Image(fit: BoxFit.fitHeight, image: AssetImage('images/user.png'))
                    ]),
                    SizedBox(height:5),
                    BlocBuilder<DashboardBloc, DashboardState>(
                          condition: (previous, current) =>previous.user != current.user,
                          builder: (context, state){
                            if(state.user != null){
                              return Column(children: [
                                CustomText(text: '${state.user.firstName} ${state.user.lastName}', color: Colors.white, bold: true, small: true,),
                                SizedBox(height:5),
                                CustomText(text: '${state.user.phone}', color: Colors.white, bold: true, extraSmall: true,),
                              ]);
                            }else{
                              return Column(children: [
                                CustomText(text: '- -', color: Colors.white, bold: true, small: true,),
                                SizedBox(height:5),
                                CustomText(text: '+234 000 000 0000', color: Colors.white, bold: true, extraSmall: true,),
                              ]);
                            }
                          }),
                    SizedBox(height:10),
                    CustomText(text: '22%', color: Colors.white, bold: true, extraSmall: true,),
                    SizedBox(height:3),
                    Container(color:AppColors.blue2,
                    child: Padding(padding:EdgeInsets.all(1), child: LinearProgressIndicator(backgroundColor: AppColors.blue2, value: 0.22,
                    valueColor: AlwaysStoppedAnimation<Color>(Colors.white)),)),
                    SizedBox(height:10),
                    CustomInvertButton(label: 'Complete your profile', width: 170, onPress: (){
                      //Navigator.pushNamed(context, HospitalRoute);
                      Navigator.pushNamed(context, ProfileRoute, arguments: _user);
                      },)
                    ])),
                      )),
                      onTap: (){Navigator.pop(context);
                        Navigator.pushNamed(context, ProfileRoute);
                      }
                      ),
                      ListView(
                        shrinkWrap: true,
                        scrollDirection: Axis.vertical, 
                        children: [
                          Column(children: [
                          Padding(padding: EdgeInsets.symmetric(horizontal:10),
                        child: Card(margin: EdgeInsets.only(top:15), elevation: 1,
                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(20.0),   ),    
                          child: Padding(padding: EdgeInsets.all(10),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                          children: VitalsDatas().dashboardMenu().map((e) =>  //StorageHelper.set(StorageKeys.login, 'true');
                          GestureDetector(child: Column(children: [
                            Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical:18),
                            child: Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start,
                          children: [Image(height:15, fit: BoxFit.fitHeight, color: AppColors.primary, image: AssetImage(e.icon) ),
                            SizedBox(width:15),
                            CustomText(text: e.label, color: Colors.grey, bold: true, small: true,),
                            Spacer(),
                            Icon(FontAwesomeIcons.angleRight, color: Colors.grey, size: 20),
                            SizedBox(width:5),
                            ],),),
                            e.label == 'Logout' ? Container() : Container(color: Colors.grey[300], height:1, width: 600)
                          ],), onTap:()=> menuRoute( e.label, context))
                          ).toList()
                          )
                          )))
                        ],)
                        ]
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        body: PageView(
          physics: NeverScrollableScrollPhysics(),
          controller: _myPage,
          children: <Widget>[
            DashboardView(),
            MedicalRecordsView(),
            MyAppointmentView(),
            Center(child: Text('Connect')),
          ]
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
        floatingActionButton: FloatingActionButton(child: Icon(Icons.add),
            onPressed: (){
              _popDialog(context);
             // Navigator.pushNamed(context, AppointmentViewRoute);
            }),
        bottomNavigationBar: BottomAppBar(
            shape: CircularNotchedRectangle(),
            child: Container(
              height: 56,
              child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  SizedBox(width: 10),
                  GestureDetector(child: Padding(padding: EdgeInsets.only(top:10), 
                  child: Column(children: [Image(height:20, fit: BoxFit.fitHeight, color: selectedPage == 0 ? AppColors.blue : Colors.grey, image: AssetImage('images/Path.png') ),
                  CustomText(text: 'Home', color: selectedPage == 0 ? AppColors.blue : Colors.grey, bold: true, extraSmall: true,),]),), 
                    onTap: () {
                      _myPage.jumpToPage(0);
                      setState(() {
                        selectedPage = 0;
                        title = 'Dashboard';
                      });
                    },),
                  GestureDetector(child: Padding(padding: EdgeInsets.only(top:10), 
                  child: Column(children: [Image(height:23, fit: BoxFit.fitHeight, color: selectedPage == 1 ? AppColors.blue : Colors.grey, image: AssetImage('images/chemistry.png') ),
                  CustomText(text: 'Medical Records', color: selectedPage == 1 ? AppColors.blue : Colors.grey, bold: true, extraSmall: true,),]),), 
                  //onTap: (){Navigator.of(context).pushNamed(MedicalRecordsRoute);}
                  onTap: () {
                  _myPage.jumpToPage(1);
                  setState(() {
                    selectedPage = 1;
                    title = 'Medical Records';
                  });
                },),                  
                  SizedBox(width: 40),
                  GestureDetector(child: Padding(padding: EdgeInsets.only(top:10), 
                  child: Column(children: [Image(height:20, fit: BoxFit.fitHeight, color: selectedPage == 2 ? AppColors.blue : Colors.grey, image: AssetImage('images/appointment.png') ),
                  CustomText(text: 'Appointments', color: selectedPage == 2 ? AppColors.blue : Colors.grey, bold: true, extraSmall: true,),]),), 
                  //onTap: (){Navigator.pushNamed(context, MyAppointmentViewRoute);}
                  onTap: () {
                  _myPage.jumpToPage(2);
                  setState(() {
                    selectedPage = 2;
                    title = 'Appointments';
                  });
                },),
                  GestureDetector(child: Padding(padding: EdgeInsets.only(top:10), 
                  child: Column(children: [Image(height:20, fit: BoxFit.fitHeight, color: selectedPage == 3 ? AppColors.blue : Colors.grey, image: AssetImage('images/placeholder.png') ),
                  CustomText(text: 'Connect', color: selectedPage == 3 ? AppColors.blue : Colors.grey, bold: true, extraSmall: true,),]),), 
                  onTap: (){}
                //   onTap: () {
                //   _myPage.jumpToPage(1);
                //   setState(() {
                //     selectedPage = 1;
                //   });
                // },),
                  ),
                  SizedBox(width: 10),
                ],
              ),
            )
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

  
  void logout(context) {
    print('out');
    StorageHelper.clear();
    Navigator.of(context).pushNamedAndRemoveUntil(LauncherScreen, (Route<dynamic> route) => false);
  }

  void menuRoute(String title, context) {
    switch(title){
      case 'Medical Records':
        Navigator.of(context).pop();
        _myPage.jumpToPage(1);
                  setState(() {
                    selectedPage = 1;
                    title = 'Medical Records';
                  });
        break;
      case 'Logout':
        StorageHelper.clear();
        Navigator.of(context).pushNamedAndRemoveUntil(LauncherScreen, (Route<dynamic> route) => false);
        break;
       
    }
  }
}
