

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/models/physician_response.dart';
import 'package:pandamedical/repositories/medical_repository.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/models/medical_specialty_response.dart';

part 'doctors_list_event.dart';
part 'doctors_list_state.dart';


class DoctorsListBloc extends Bloc<DoctorsListEvent, DoctorsListState>{
  //final bloc = this;
  var _repository = MedicalRepository();

  @override
 DoctorsListState get initialState => const DoctorsListState();

  @override
  void onTransition(Transition<DoctorsListEvent, DoctorsListState> transition) {
    print(transition);
    super.onTransition(transition);
  }

  @override
  Stream<DoctorsListState> mapEventToState(DoctorsListEvent event) async*{

     if (event is InitBlock) {
       yield state.copyWith(
              datalist: null
            );
       var _datalist = <Physicians>[];
      var response  = await _repository.getPhysician(event.doctorType.key);
      if(response.status == 200){
        response.data.physicians.forEach((v) {
        _datalist.add(v);
      });
      print('response.data.physicians: ${response.data.physicians}');
      if(response.data.physicians.isEmpty){
        event.controller.loadComplete();
        CustomToast.show('failed to fetch physicians');
      }else{
        //event.controller.loadComplete();
      }
      }else{
        String message = 'your session token has expired. please login again';
            if(response.errMessage != null){
              message = '${response.errMessage}';
            }else{
              message = response.message;
            }
            await _showMyDialog(event.context, '${response.errMessage}');
      }
        yield state.copyWith(
              datalist: _datalist,
              controller: event.controller,
              context: event.context,
              doctorType: event.doctorType
            );
    }else if(event is RefreshSpecialty){
       var _datalist = <Physicians>[];
      var response = await _repository.getPhysician(state.doctorType.key);


      if(response.status == 200){
        response.data.physicians.forEach((v) {
        _datalist.add(v);
      });
      state.controller.refreshCompleted();

      }else{
        state.controller.loadFailed();
        String message = 'your session token has expired. please login again';
            if(response.errMessage != null){
              message = '${response.errMessage}';
            }else{
              message = response.message;
            }
            await _showMyDialog(state.context, '${response.errMessage}');
      }
        yield state.copyWith(
              datalist: _datalist,
              controller: state.controller,
              doctorType: state.doctorType
            );
    }
    
  }

  
  Future<void> _showMyDialog(context, String message) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Alert!'),
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
                //StorageHelper.clear();
                Navigator.of(context).pushNamedAndRemoveUntil(LauncherScreen, (Route<dynamic> route) => false); 
              },
            ),
          ],
        );
      },
    );
  }
}