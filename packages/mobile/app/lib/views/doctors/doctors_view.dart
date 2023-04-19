import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/views/doctors/doctors_bloc.dart';
import 'package:pandamedical/views/my_vitals/my_vitals_bloc.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

class DoctorsView extends StatelessWidget {
  DoctorsBloc _bloc;
  RefreshController _refreshController = RefreshController(initialRefresh: false);

  void _onRefresh() async{
    _bloc.add(RefreshSpecialty());
  }

  void _onLoading() async{
    // monitor network fetch
    // if failed,use loadFailed(),if no data return,use LoadNodata(), refreshCompleted, refreshFailed
    //_refreshController.loadComplete();
  }
  @override
  Widget build(BuildContext context) {
    _bloc = BlocProvider.of<DoctorsBloc>(context);
      //_bloc.add(InitMyVitals());
      _bloc.add(GetSpecialty(context, _refreshController));
    //final  statusBarHeight = MediaQuery.of(context).padding.top;
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
      elevation: 0,
        title: CustomText(text: 'Doctors', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: GestureDetector(
        onTap: (){ Navigator.pop(context);},
        child: Padding(padding: EdgeInsets.only(top:0),
        child: Icon(Icons.close, color: Colors.white, size: 30)),
      ),
      
      ),
      
      body: Stack(children: <Widget>[
                      Container(height: screenHeight, color: Colors.white,),
                      Container(
                        child: Column(children: [Container(height: 40,
                      decoration: BoxDecoration(color: AppColors.greenBG, borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                      ),])
                      ),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0, 
            child: Column(
                children: <Widget>[
                  Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),   ),
                            elevation: 45,
                            child:CustomFormField(
                              prefixIcon: Icon(Icons.search),
                              placeholder: 'Search Doctors'
                            )),
                            SizedBox(height:20),
                            CustomText(text: 'Top Specialities', color: AppColors.blue, big:true, bold: true),
                            SizedBox(height:10),
                              Container(height: 600,
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.vertical(top: Radius.circular(45.0)),
                                ),
                                child: Padding(padding: EdgeInsets.symmetric(horizontal: 40, vertical: 30),
                                child: SmartRefresher(
                                        enablePullDown: true,
                                        //enablePullUp: true,
                                        header: WaterDropHeader(),
                                        controller: _refreshController,
                                        onRefresh: _onRefresh,
                                        onLoading: _onLoading,
                                        child:ListView(
                                            //crossAxisAlignment: CrossAxisAlignment.center,
                                            children: [
                                              BlocBuilder<DoctorsBloc, DoctorsState>(
                                                      condition: (previous, current) => previous.datalist != current.datalist,
                                                      builder: (context, state) {
                                                        if(state.datalist == null){
                                                          return  Center(child: SizedBox(width: 35, child: CircularProgressIndicator()));//VitalsDatas().Vitals();
                                                        }else if(state.datalist.isEmpty){
                                                          return  Center();//VitalsDatas().Vitals();
                                                        }else{
                                                          return Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical: 30),
                                                              child: Column(children: [Column(children: state.datalist.map((e) => 
                                                Column(children: [
                                                  ListTile(title: CustomText(text: e.name, color: Colors.black, big: true, bold: true,  maxLines:2),
                                                onTap: () => Navigator.pushNamed(context, DoctorsListViewRoute, arguments: e),
                                              ),
                                              Container(width: 400, height: 1, color: Colors.grey),],
                                              )).toList()),],));
                                                        }
                                                      }
                                                ),
                                              // ListTile(title: CustomText(text: 'Dermatologist', color: Colors.black, big: true, bold: true),
                                              // ),
                                              // Container(width: 400, height: 1, color: Colors.grey),
                                              // ListTile(title: CustomText(text: 'Cardiologist', color: Colors.black, big: true, bold: true),
                                              // ),
                                              // Container(width: 400, height: 1, color: Colors.grey),
                                              // ListTile(title: CustomText(text: 'Gastroenterologist', color: Colors.black, big: true, bold: true),
                                              // ),
                                              // Container(width: 400, height: 1, color: Colors.grey),
                                              // ListTile(title: CustomText(text: 'Psychiatrist', color: Colors.black, big: true, bold: true),
                                              // ), 
                                              // Container(width: 400, height: 1, color: Colors.grey),
                                              // ListTile(title: CustomText(text: 'Ear-Nose-Throat (ENT) Specialist', color: Colors.black, big: true, bold: true),
                                              // ),
                                              // Container(width: 400, height: 1, color: Colors.grey),
                                              // ListTile(title: CustomText(text: 'Gynecologist/Opstetrician', color: Colors.black, big: true, bold: true),
                                              // ),
                                              // Container(width: 400, height: 1, color: Colors.grey),
                                              // ListTile(title: CustomText(text: 'Neurologist', color: Colors.black, big: true, bold: true),
                                              // ), 
                                            ]
                                          )
                                          )
                                
                                )),
                                
                              
                  
                ],
              )
          ),
                       
                  ]
            )
      
    );
  }

}

/*
Positioned(top:0,
                    child: Container(height: 70,
                          decoration: BoxDecoration(
                            color: AppColors.greenBG,
                            borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),
                          ),
                        ),
                  ),
                  Positioned(top:20,
                  child: Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),   ),
                            elevation: 5,
                            child:CustomFormField(
                              prefixIcon: Icon(Icons.search),
                              placeholder: 'Doctors. specialities, clinics'
                            ))
                  ),
                  Positioned(top:50,
                    child: Container(height: 270,
                          decoration: BoxDecoration(
                            color: AppColors.greenBG,
                            borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),
                          ),
                          child: Column(
                            children: [
                              SizedBox(height:20),
                              Container(height: 170,
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.vertical(top: Radius.circular(45.0)),
                                ),
                                child: Column(
                                  children: [
                                        Card(margin: EdgeInsets.symmetric(vertical:5, horizontal: 15),
                                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),   ),
                                            elevation: 0,
                                            child:CustomFormField(
                                              prefixIcon: Icon(Icons.search),
                                              placeholder: 'Doctors. specialities, clinics'
                                            ))
                                  ]
                                )
                              )
                            ]
                          )
                        ),
                  )     
                  */