import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/helpers/view_arguments.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/vital.dart';
import 'package:pandamedical/widgets/vitals_row.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/views/my_vitals/my_vitals_bloc.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/constants/app_constants.dart';
import 'package:pandamedical/widgets/no_result.dart';


class MyVitalsView extends StatefulWidget {
  @override
  _MyVitalsViewState createState() => _MyVitalsViewState();
}

class _MyVitalsViewState extends State<MyVitalsView> {
  // AuthBloc bloc;
  DateTime initialDate;
  final _key =  GlobalKey<FormState>();
  MyVitalsBloc _bloc;

    RefreshController _refreshController = RefreshController(initialRefresh: false);

  void _onRefresh() async{
    _bloc.add(RefreshMyVitals());
  }

  void _onLoading() async{
    // monitor network fetch
    // if failed,use loadFailed(),if no data return,use LoadNodata(), refreshCompleted, refreshFailed
    //_refreshController.loadComplete();
  }



  @override
  void initState() {
    super.initState();
      _bloc = BlocProvider.of<MyVitalsBloc>(context);
      //_bloc.add(InitMyVitals());
      _bloc.add(VitalsOptions());
      
  }

  @override
  void dispose() {
    //bloc.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    _bloc.add(MyVitals(_refreshController, context));

    initialDate = DateTime(1990);
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Vital(s)', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
        actions: [
          BlocBuilder<MyVitalsBloc, MyVitalsState>(
                                  condition: (previous, current) => previous.vitalOptions != current.vitalOptions,
                                  builder: (context, state) {
                                    if(state.vitalOptions == null){
                                      return GestureDetector(
                                        onTap: ()=> Navigator.pushNamed(context, AddVitalRoute, arguments: state.vitalOptions), 
                                        child: Icon(Icons.add, color: AppColors.primary,size: 30,),);//VitalsDatas().myVitals();
                                    }else{
                                      return GestureDetector(
                                        onTap: ()=> Navigator.pushNamed(context, AddVitalRoute, arguments: state.vitalOptions), 
                                        child: Icon(Icons.add, color: AppColors.primary,size: 30,),);}}),
            
          GestureDetector(
            onTap: ()=> Navigator.pushNamed(context, AddLabResultRoute), 
            child: Icon(Icons.share, color: AppColors.primary,size: 30,),),
            SizedBox(width:10)       
                    ],
      ),
      
      body: Stack(children: <Widget>[
                      Container(height: screenHeight+screenHeight, color: Colors.white,),
                      Container(child: Column(
                          children: [
                            Container(height: 150,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                          ),]
                        )
                      ),
             Container(margin: EdgeInsets.only(top: 100, left: 100,), height: 1000,),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0,
            child: SmartRefresher(
        enablePullDown: true,
        //enablePullUp: true,
        header: WaterDropHeader(),
        controller: _refreshController,
        onRefresh: _onRefresh,
        onLoading: _onLoading,
        child: Container(height: 600, margin: EdgeInsets.only(top:170),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.vertical(top: Radius.circular(45.0)),
            ),
            child:ListView(//shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            children: [Image(height: 40, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/beat.png')),
            Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            //elevation: 45,
                            child: Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical: 30), 
                            child:BlocBuilder<MyVitalsBloc, MyVitalsState>(
                                  condition: (previous, current) => previous.vitalList != current.vitalList,
                                  builder: (context, state) {
                                    if(state.vitalList == null){
                                      return  Column(children: [
                                        SizedBox(height: 100),
                                        Center(child: SizedBox(width: 40, child: CircularProgressIndicator())),
                                        SizedBox(height: 500),
                                      ],);//VitalsDatas().myVitals();
                                    }else if(state.vitalList.isEmpty){
                                      return  Column(children: [NoResult(), SizedBox(height: 200,)],);//VitalsDatas().myVitals();
                                    }else{
                                      return Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                                          //elevation: 45,
                                          child: Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical: 30),
                                          child:Column(children: state.vitalList)));
                                    }
                                  }
                            ),)),
             
               
            ]
            ), ) )
      ),]
            )
        
        
      
    );
  }

}