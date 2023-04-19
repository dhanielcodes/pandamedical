

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/repositories/medical_repository.dart';
import 'package:pandamedical/widgets/appointment_row.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';

part 'my_appointments_event.dart';
part 'my_appointments_state.dart';


class MyAppointmentBloc extends Bloc<MyAppointmentEvent, MyAppointmentState>{
  //final bloc = this;
  final _repository = MedicalRepository();

  @override
 MyAppointmentState get initialState => const MyAppointmentState();

@override
  void onTransition(Transition<MyAppointmentEvent, MyAppointmentState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<MyAppointmentState> mapEventToState(MyAppointmentEvent event) async*{

     if (event is InitMyAppointment) {
      
        yield state.copyWith(
              vitalList: [],
              //context: event.context
            );
    }else if (event is MyAppointment) {
      var id = await StorageHelper.get(StorageKeys.id);
       List<AppointmentRow> _vitalList = [];
      var response = await _repository.getAppointments(id);
      if(response.status == 200){
        response.data.appointments.forEach((v) {
        _vitalList.add(AppointmentRow(data:v));
      });
      print('${response.status}');
      if(response.data.appointments.isEmpty){
        event.controller.loadComplete();
        CustomToast.show('you have no saved vitals');
      }
      }else{
        event.controller.loadComplete();
        
        String message = 'your session token has expired. please login again';
            if(response.errMessage != null){
              message = response.errMessage;
            }else{
              message = response.message;
            }
            await _showMyDialog(event.context, '${response.errMessage}');
      }
        yield state.copyWith(
              vitalList: _vitalList,
              controller: event.controller,
              context: event.context
            );
    }else if(event is RefreshMyAppointment){
      var id = await StorageHelper.get(StorageKeys.id);
       List<AppointmentRow> _vitalList = [];
      var response = await _repository.getAppointments(id);


      if(response.status == 200){
        response.data.appointments.forEach((v) {
        _vitalList.add(AppointmentRow(data:v));
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
              vitalList: _vitalList,
              controller: state.controller,
              //vitalOptions: oresponse.data
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