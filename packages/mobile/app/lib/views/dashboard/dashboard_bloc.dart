import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/constants/app_constants.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/models/auth_user_response.dart';
import 'package:pandamedical/repositories/auth_repository.dart';

part 'dashboard_event.dart';
part 'dashboard_state.dart';


class DashboardBloc extends Bloc<DashboardEvent, DashboardState>{
  AuthRepository _repository = new AuthRepository();

  @override
 DashboardState get initialState => const DashboardState();

@override
  void onTransition(Transition<DashboardEvent, DashboardState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<DashboardState> mapEventToState(DashboardEvent event) async*{

     if (event is InitDashboard) {
       //List<VitalsData> _data = VitalsDatas().dashboardData();

       yield state.copyWith(
              selectedIndex: 0,
              touchedIndex: 0,
              vitals: null
            );
       final data = await _repository.me();
        if(data.status != 200){
          yield state.copyWith(
              selectedIndex: 0,
              touchedIndex: 0,
              vitals: []
            );
          String message = 'your session token has expired. please login again';
            if(data.errMessage != null){
              message = '${data.errMessage}';
            }else{
              message = data.message;
            }
            if(data.errMessage == 'your session token has expired. please login again'){
              await _showMyDialog(event.context, '${data.errMessage}');
            }
            
        }else{
          var _user = data.data.user;
      List<UserVital> _data = [];
       if(_user.vitals.temperature != null){
         _data..add(UserVital('Temperature', 'temperature', _user.vitals.temperature.value, _user.vitals.temperature.unit,
        _user.vitals.temperature.numberOfRecords, _user.vitals.temperature.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Temperature', 'temperature', '--', 'Celcius',
        '', '', '', ''));
       }
       if(_user.vitals.bloodPressure != null){
       _data..add(UserVital('Blood Pressure', 'bloodPressure', _user.vitals.bloodPressure.systolic, _user.vitals.bloodPressure.unit,
        _user.vitals.bloodPressure.numberOfRecords, _user.vitals.bloodPressure.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Blood Pressure',  'bloodPressure', '--', 'kPa',
        '', '', '', ''));
       }
       if(_user.vitals.height != null){
       _data..add(UserVital('Height', 'height', _user.vitals.height.value, _user.vitals.height.unit,
        _user.vitals.height.numberOfRecords, _user.vitals.height.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Height', 'height',  '--', 'cm',
        '', '', '', ''));
       }
       if(_user.vitals.weight != null){
       _data..add(UserVital('Weight', 'weight',  _user.vitals.weight.value, _user.vitals.weight.unit,
        _user.vitals.weight.numberOfRecords, _user.vitals.weight.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Weight', 'weight',  '--', 'kg',
        '', '', '', ''));
       }
       if(_user.vitals.bmi != null){
       _data..add(UserVital('Body Mass Index (BMI)', 'bmi', _user.vitals.bmi.value, _user.vitals.bmi.unit,
        _user.vitals.bmi.numberOfRecords, _user.vitals.bmi.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Body Mass Index (BMI)', 'bmi', '--', 'kg/m2',
        '', '', '', ''));
       }
       if(_user.vitals.oxygenSaturation != null){
       _data..add(UserVital('Oxygen Saturation', 'oxygenSaturation',  _user.vitals.oxygenSaturation.value, _user.vitals.oxygenSaturation.unit,
        _user.vitals.oxygenSaturation.numberOfRecords, _user.vitals.oxygenSaturation.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Oxygen Saturation', 'oxygenSaturation', '--', '%',
        '', '', '', ''));
       }
       if(_user.vitals.respirationRate != null){
       _data..add(UserVital('Respiration Rate', 'respirationRate', _user.vitals.respirationRate.value, _user.vitals.respirationRate.unit,
        _user.vitals.respirationRate.numberOfRecords, _user.vitals.respirationRate.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Respiration Rate', 'respirationRate',  '--', 'breaths/min',
        '', '', '', ''));
       }
       if(_user.vitals.heartRate != null){
       _data..add(UserVital('Heart Rate', 'heartRate', _user.vitals.heartRate.value, _user.vitals.heartRate.unit,
        _user.vitals.heartRate.numberOfRecords, _user.vitals.heartRate.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Heart Rate', 'heartRate',  '--', 'bpm',
        '', '', '', ''));
       }
       if(_user.vitals.bsa != null){
       _data..add(UserVital('Body Surface Area', 'bsa', _user.vitals.bsa.value, _user.vitals.bsa.unit,
        _user.vitals.bsa.numberOfRecords, _user.vitals.bsa.latestRecord, '', ''));
       }else{
         _data..add(UserVital('Body Surface Area', 'bsa', '--', 'm2',
        '', '', '', ''));
       }

       yield state.copyWith(
              selectedIndex: 0,
              vitals: _data,
              touchedIndex: 0,
              user: _user
            );
      }
      
       
    }else if(event is SelectIndex){
         yield state.copyWith(
              selectedIndex: event.index,
            );
    }
  }


  Future<void> _showMyDialog(context, String message) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Error!'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('$message'),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('OK'),
              onPressed: () {
                StorageHelper.clear();
                Navigator.of(context).pushNamedAndRemoveUntil(LauncherScreen, (Route<dynamic> route) => false); 
              },
            ),
          ],
        );
      },
    );
  }

}