

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/models/vital_history_response.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/repositories/vitals_repository.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/widgets/vitalrow.dart';

part 'my_vitals_event.dart';
part 'my_vitals_state.dart';


class MyVitalsBloc extends Bloc<MyVitalsEvent, MyVitalsState>{
  //final bloc = this;
  final _repository = VitalRepository();

  @override
 MyVitalsState get initialState => const MyVitalsState();

@override
  void onTransition(Transition<MyVitalsEvent, MyVitalsState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<MyVitalsState> mapEventToState(MyVitalsEvent event) async*{

     if (event is InitMyVitals) {
      
        yield state.copyWith(
              vitalList: [],
              //context: event.context
            );
    }else if (event is MyVitals) {
      //event.controller.loadData();
       //if failed,use loadFailed(),if no data return,use LoadNodata(), refreshCompleted, refreshFailed
       List<VitalRow> _vitalList = [];
      var response = await _repository.getVitals();
      if(response.status == 200){
        response.data.forEach((v) {
        _vitalList.add(VitalRow(data:v));
      });
      print('${response.status}');
      if(response.data.isEmpty){
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
    }else if(event is RefreshMyVitals){
       List<VitalRow> _vitalList = [];
      var response = await _repository.getVitals();

      //var oresponse = await _repository.vitals();

      //print('option: ${oresponse.data}');

      if(response.status == 200){
        response.data.forEach((v) {
        _vitalList.add(VitalRow(data:v));
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
    }else if(event is VitalsOptions) {
      var response = await _repository.vitals();
      print('option: ${response.data}');
        yield state.copyWith(
              vitalOptions: response.data
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