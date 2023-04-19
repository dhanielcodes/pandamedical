

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/widgets/labtest_row.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pandamedical/models/fetch_lab_result.dart';
import 'package:pandamedical/repositories/lab_results_repository.dart';
import 'package:pandamedical/models/vital_obj.dart';
import 'package:pandamedical/widgets/vital.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';

part 'lab_results_event.dart';
part 'lab_results_state.dart';


class LabResultsBloc extends Bloc<LabResultsEvent, LabResultsState>{
  //final bloc = this;
  var _repository = LabResultRepository();

  @override
 LabResultsState get initialState => const LabResultsState();

  @override
  void onTransition(Transition<LabResultsEvent, LabResultsState> transition) {
    print(transition);
    super.onTransition(transition);
  }

  @override
  Stream<LabResultsState> mapEventToState(LabResultsEvent event) async*{

     if (event is InitLabResults) {
      
        yield state.copyWith(
              vitalList: [],
            );
    }else if (event is LabResults) {
      //event.controller.loadData();
       //if failed,use loadFailed(),if no data return,use LoadNodata(), refreshCompleted, refreshFailed
       List<LabTestRow> _vitalList = [];
      var response  = await _repository.getlabResults();
      if(response.status == 200){
        response.data.forEach((v) {
        _vitalList.add(LabTestRow(data:v));
      });
      print('${response.status}');
      if(response.data.isEmpty){
        event.controller.loadComplete();
        CustomToast.show('you have no saved medicals');
      }else{
        event.controller.loadComplete();
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
              vitalList: _vitalList,
              controller: event.controller,
              context: event.context
            );
    }else if(event is RefreshLabResults){
       List<LabTestRow> _vitalList = [];
      var response = await _repository.getlabResults();

      var oresponse = await _repository.labResults();

      print('option: ${oresponse.data}');

      if(response.status == 200){
        response.data.forEach((v) {
        _vitalList.add(LabTestRow(data:v));
      });
      state.controller.refreshCompleted();

      }else{
        state.controller.loadFailed();
        
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
              controller: state.controller
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