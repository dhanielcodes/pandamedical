import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/helpers/view_arguments.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/views/lab_results/lab_results_bloc.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/constants/app_constants.dart';
import 'package:pandamedical/widgets/no_result.dart';
import 'package:pandamedical/widgets/text.dart';


class LabResultsView extends StatefulWidget {
  @override
  _LabResultsViewState createState() => _LabResultsViewState();
}

class _LabResultsViewState extends State<LabResultsView> {
  // AuthBloc bloc;
  DateTime initialDate;
  final _key =  GlobalKey<FormState>();
  LabResultsBloc _bloc;

    RefreshController _refreshController = RefreshController(initialRefresh: false);

  void _onRefresh() async{
    _bloc.add(RefreshLabResults());
  }

  void _onLoading() async{
    // monitor network fetch
    // if failed,use loadFailed(),if no data return,use LoadNodata(), refreshCompleted, refreshFailed
    //_refreshController.loadComplete();
  }



  @override
  void initState() {
    super.initState();
      _bloc = BlocProvider.of<LabResultsBloc>(context);
      //_bloc.add(InitLabResults());
     // _bloc.add(VitalsOptions());
      
  }

  @override
  void dispose() {
    //bloc.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    _bloc.add(LabResults(_refreshController, context));

    initialDate = DateTime(1990);
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Lab Result(s)', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
        actions: [
          GestureDetector(
          onTap: ()=> Navigator.pushNamed(context, AddLabResultRoute), 
          child: Icon(Icons.add, color: AppColors.primary,size: 40,),),
          GestureDetector(
            onTap: ()=> Navigator.pushNamed(context, AddLabResultRoute), 
            child: Icon(Icons.share, color: AppColors.primary,size: 30,),),
            SizedBox(width:10)        
                    ],
      ),
      
      body: SmartRefresher(
        enablePullDown: true,
        //enablePullUp: true,
        header: WaterDropHeader(),
        controller: _refreshController,
        onRefresh: _onRefresh,
        onLoading: _onLoading,
        child: ListView(children: [
          Stack(children: <Widget>[
                      Container(height: screenHeight+screenHeight, color: Colors.white,),
                      Container(child: Column(
                          children: [
                            Container(height: 150,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(40.0)),),
                          ),]
                        )
                      ),
             Container(margin: EdgeInsets.only(top: 100, left: 100,), height: 1000,),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0, bottom:0.0,
            child:  ListView(//shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            children: [Image(height: 40, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/beat.png')),
             Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            child: Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical: 30),
                                child: BlocBuilder<LabResultsBloc, LabResultsState>(
                                  condition: (previous, current) => previous.vitalList != current.vitalList,
                                  builder: (context, state) {
                                    if(state.vitalList == null){
                                      return Column(children: [
                                        SizedBox(height: 100),
                                        Center(child: SizedBox(width: 30, child: CircularProgressIndicator())),
                                        SizedBox(height: 500),
                                      ],);
                                    }else if(state.vitalList.isEmpty){
                                      return  NoResult();//VitalsDatas().LabResults();
                                    }else{
                                      return Column(children: [Column(children: state.vitalList), SizedBox(height:500)]);
                                    }
                                  }
                            ),)
            )
               
            ]),
      ),]
            )
        ]))
        
      
    );
  }

}