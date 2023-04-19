import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/helpers/view_arguments.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/vital.dart';
import 'package:pandamedical/widgets/Appointment_row.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/views/my_appointments/my_appointments_bloc.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/constants/app_constants.dart';
import 'package:pandamedical/widgets/no_result.dart';


class MyAppointmentView extends StatefulWidget {
  @override
  _MyAppointmentViewState createState() => _MyAppointmentViewState();
}

class _MyAppointmentViewState extends State<MyAppointmentView> {
  // AuthBloc bloc;
  DateTime initialDate;
  final _key =  GlobalKey<FormState>();
  MyAppointmentBloc _bloc;

    RefreshController _refreshController = RefreshController(initialRefresh: false);

  void _onRefresh() async{
    _bloc.add(RefreshMyAppointment());
  }

  void _onLoading() async{
    // monitor network fetch
    // if failed,use loadFailed(),if no data return,use LoadNodata(), refreshCompleted, refreshFailed
    //_refreshController.loadComplete();
  }



  @override
  void initState() {
    super.initState();
      _bloc = BlocProvider.of<MyAppointmentBloc>(context);
      //_bloc.add(InitMyAppointment());
     // _bloc.add(AppointmentOptions());
      
  }

  @override
  void dispose() {
    //bloc.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    _bloc.add(MyAppointment(_refreshController, context));

    initialDate = DateTime(1990);
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Stack(children: <Widget>[
                      Container(height: screenHeight+screenHeight, color: Colors.white,),
                      Container(child: Column(
                          children: [
                            Container(height: 150,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                          ),]
                        )
                      ),
             //Container(margin: EdgeInsets.only(top: 100, left: 100,), height: 1000,),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0,
            child: Container(height: screenHeight,
            child: SmartRefresher(
        enablePullDown: true,
        //enablePullUp: true,
        header: WaterDropHeader(),
        controller: _refreshController,
        onRefresh: _onRefresh,
        onLoading: _onLoading,
        child: Container(height: screenHeight, margin: EdgeInsets.only(top:0),
            decoration: BoxDecoration(
              //color: Colors.white,
              borderRadius: BorderRadius.vertical(top: Radius.circular(45.0)),
            ),
            child:ListView(//shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            children: [Image(height: 40, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/beat.png')),
            Card(margin: EdgeInsets.symmetric(horizontal:25), shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),),
                  child: Container(height: screenHeight, 
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.vertical(top: Radius.circular(45.0)),
            ),
            child: Padding(padding: EdgeInsets.symmetric(horizontal:20, vertical: 30), 
                            child:BlocBuilder<MyAppointmentBloc, MyAppointmentState>(
                                  condition: (previous, current) => previous.vitalList != current.vitalList,
                                  builder: (context, state) {
                                    if(state.vitalList == null){
                                      return  Column(children: [
                                        SizedBox(height: 100),
                                        Center(child: SizedBox(width: 40, child: CircularProgressIndicator())),
                                        SizedBox(height: 500),
                                      ],);//AppointmentDatas().myAppointment();
                                    }else if(state.vitalList.isEmpty){
                                      return  Column(children: [NoResult(), SizedBox(height: 200,)],);//AppointmentDatas().myAppointment();
                                    }else{
                                      return Column(children: state.vitalList);
                                    }
                                  }
                            ),
                            )
                            ),
             
            )
            ]
            ), ) )
     ,) ),]
            )
        
        
      
    ;
  }

}