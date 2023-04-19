

import 'dart:io';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/constants/app_constants.dart';
import 'package:pandamedical/models/auth_user_response.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/repositories/auth_repository.dart';
import 'package:pandamedical/repositories/vitals_repository.dart';
import 'package:pandamedical/widgets/my_vital_row.dart';
import 'package:progress_dialog/progress_dialog.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/widgets/my_vital_row.dart';

part 'vitals_event.dart';
part 'vitals_state.dart';


class VitalsBloc extends Bloc<VitalsEvent, VitalsState>{
  //final bloc = this;
 final _repository =  AuthRepository();
 final _vitalRepository =  VitalRepository();

 @override
 VitalsState get initialState => const VitalsState();

  @override
  void onTransition(Transition<VitalsEvent, VitalsState> transition) {
    print(transition);
    super.onTransition(transition);
  }
  
  @override
  Stream<VitalsState> mapEventToState(VitalsEvent event) async*{

     if (event is InitVitals) {
      
        yield state.copyWith(
              vitalList: [],
              //context: event.context
            );
    }else if (event is Vitals) {
      //event.controller.loadData();
       //if failed,use loadFailed(),if no data return,use LoadNodata(), refreshCompleted, refreshFailed
       List<MyVitalRow> _vitalList = [];
      final data = await _repository.me();
      if(data.status == 200){
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
       _data.forEach((v) {
          _vitalList.add(MyVitalRow(data:v));
        });

       yield state.copyWith(
              vitalList: _vitalList,
              vitals: _data,
              user: _user
            );
      if(_data.isEmpty){
        event.controller.loadComplete();
        CustomToast.show('you have no saved vitals');
      }
      }else{
        event.controller.loadComplete();
        
        String message = 'your session token has expired. please login again';
            if(data.errMessage != null){
              message = data.errMessage;
            }else{
              message = data.message;
            }
            await _showMyDialog(event.context, '${data.errMessage}');
      }
        yield state.copyWith(
              vitalList: _vitalList,
              controller: event.controller,
              context: event.context
            );
    }else if(event is RefreshVitals){
       List<MyVitalRow> _vitalList = [];
      var data = await _repository.me();

      if(data.status == 200){
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
       _data.forEach((v) {
          _vitalList.add(MyVitalRow(data:v));
        });

       yield state.copyWith(
              vitalList: _vitalList,
              vitals: _data,
              user: _user
            );
        if(_data.isEmpty){
          CustomToast.show('you have no saved vitals');
        }
      state.controller.refreshCompleted();

      }else{
        state.controller.loadFailed();
        String message = 'your session token has expired. please login again';
            if(data.errMessage != null){
              message = '${data.errMessage}';
            }else{
              message = data.message;
            }
            await _showMyDialog(state.context, '${data.errMessage}');
      }
        yield state.copyWith(
          vitalList: _vitalList,
              user: state.user,
              controller: state.controller,
              //vitalOptions: odata.data
            );
    }else if(event is VitalsOptions) {
      var data = await _vitalRepository.vitals();
      print('option: ${data.data}');
        yield state.copyWith(
              vitalOptions: data.data
            );
    }else if(event is ViewVitals) {
      var pr = ProgressDialog(event.context, isDismissible: false);
       pr.style(
         message: 'loading vital.',
         borderRadius: 10,
         progressWidget: Container(child: CircularProgressIndicator( valueColor: AlwaysStoppedAnimation<Color>(Colors.green),), 
         width: 20, height: 20, padding: EdgeInsets.all(15),),
         elevation: 10,
       );
       await pr.show();
          CustomToast.show('vital: ${event.vital}');
      var data = await _vitalRepository.specificVitals(event.vital);
      await pr.hide();
      print(data.data.length);
      if(data.data.isEmpty){
          CustomToast.show('failed to load data');
        }else{
          
          Navigator.pushNamed(event.context, VitalHistoryViewRoute, arguments: data.data);
        }
      

        
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