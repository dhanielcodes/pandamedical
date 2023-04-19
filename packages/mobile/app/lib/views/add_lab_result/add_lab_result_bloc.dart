
import 'dart:convert';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/models/add_lab_result_response.dart';
import 'package:pandamedical/repositories/lab_results_repository.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:progress_dialog/progress_dialog.dart';
import 'package:pandamedical/widgets/vital_lab.dart';

part 'add_lab_result_event.dart';
part 'add_lab_result_state.dart';


class AddLabResultBloc extends Bloc<AddLabResultEvent, AddLabResultState>{
  LabResultRepository _repository = new LabResultRepository();

  @override
 AddLabResultState get initialState => const AddLabResultState();

@override
  void onTransition(Transition<AddLabResultEvent, AddLabResultState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<AddLabResultState> mapEventToState(AddLabResultEvent event) async*{

     if (event is InitAddLabResult) {

       List<VitalLabWidget> _vitalList = []..add(  VitalLabWidget(data: [], hideClose: true, position:0, visible:true, onPressed: (){this.add(RemoveVital('0'));}));
      
      Map<String, String> _values = {};
      Map<String, String> _vitalNames = {};
      //print('event.vitalOptions ${event.vitalOptions}');
      yield state.copyWith(
            values: _values,
            vitalNames: _vitalNames,
            vitalList: _vitalList);

      var oresponse = await _repository.labResults();
      print('option: ${oresponse.data}');
       
      _vitalList = []..add(  VitalLabWidget(data: oresponse.data, hideClose: true, position:0, visible:true, onPressed: (){this.add(RemoveVital('0'));}));
      
      yield state.copyWith(
            values: _values,
            vitalNames: _vitalNames,
            vitalList: _vitalList,
            vitalOptions: oresponse.data);
    }else if(event is AddLabResult){
       List<VitalLabWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      List<VitalLabWidget> _list = [];
      // for(int i = 0; i < _vitalList.length; i++){
      //   _list..add( VitalLabWidget(value: _vitalList[i].value, visible:true,
      //   selected: _vitalList[i].selected, hideClose: _vitalList[i].hideClose,
      //   onPressed: (){this.add(RemoveVital(i));}));
      // } 
      final index = _vitalList.length;
      _vitalList..add( VitalLabWidget(data: state.vitalOptions, value: 0,  visible:true, position: index));
      print(index);
      
        yield state.copyWith(
          vitalList: _vitalList,
          vitalOptions: _vitalOptions,
          values: _values,
          vitalNames: _vitalNames,
        );
    }else if(event is RemoveVital){
      List<VitalLabWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
       _vitalList.removeWhere((item){
         int end = event.index.indexOf('-');
         String position = event.index.substring(0, end);
         return item.position == int.parse(position);
       });
       _values[event.index] = '0.0';
       _vitalNames[event.index] = '';

      print(event.index);
      
      
        yield state.copyWith(
          vitalList: _vitalList,
          vitalOptions: _vitalOptions,
          values: _values,
          vitalNames: _vitalNames,
        );
    } else if(event is UpdateVitalSelected){
      List<VitalLabWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      
      print('_vitalNames[${event.index}] = ${event.value};');
      _vitalNames[event.index] = event.value;
      print('_vitalNames: $_vitalNames');
      
        yield state.copyWith(
          date: state.date,
          vitalList: _vitalList,
          vitalOptions: _vitalOptions,
          values: _values,
          vitalNames: _vitalNames
        );
    } else if(event is UpdateVitalValue){
      List<VitalLabWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      _values[event.index] = event.value;
      print('UpdateVitalValue ;  _values[${event.index}] = ${event.value};');
      _values[event.index] = event.value;
      print('_values: \$ $_values');
      
        yield state.copyWith(
          date: state.date,
          vitalList: _vitalList,
          vitalOptions: _vitalOptions,
          values: _values,
          vitalNames: _vitalNames
        );
    }else if(event is SetDate){
      List<VitalLabWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      List<VitalLabWidget> _list = [];
      print('SET DATE: _vitalNames: $_vitalNames');
      print('_values: $_values');
        yield state.copyWith(
          date: event.date,
          vitalList: _vitalList,
          vitalOptions: _vitalOptions,
          values: _values,
          vitalNames: _vitalNames,
        );
    }else if(event is SetTime){
      List<VitalLabWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      print('SET TIME: _vitalNames: $_vitalNames');
      print('_values: $_values');
        yield state.copyWith(
          time: event.time,
          vitalList: _vitalList,
          vitalOptions: _vitalOptions,
          values: _values,
          vitalNames: _vitalNames,
        );
    }else if(event is Submit){
      List<VitalLabWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      String userId = await StorageHelper.get(StorageKeys.id);
      print('SUBMIT: _vitalNames: $_vitalNames');
      print('_values: $_values');
    
      var pr = ProgressDialog(event.context, isDismissible: false);
       pr.style(
         message: 'proccessing... ',
         borderRadius: 10,
         progressWidget: Container(child: CircularProgressIndicator( valueColor: AlwaysStoppedAnimation<Color>(Colors.green),), 
         width: 20, height: 20, padding: EdgeInsets.all(15),),
         elevation: 10,

       );

       if(event.comment == null){
          CustomToast.show('please enter a comment');
        }else if(event.comment.isEmpty){
          CustomToast.show('please enter a comment');
        }else if(event.timestamp == null){
          CustomToast.show('please select a time');
        }else if(event.timestamp.isEmpty){
          CustomToast.show('please select a time');
        }else if(event.date_entered == null){
          CustomToast.show('please select a date'); //
        }else if(event.date_entered.isEmpty){
          CustomToast.show('Please select a date.');
        }else if(event.observedBy.isEmpty){
          CustomToast.show('Please enter the observer\'s name');
        }else{
          
          yield state.copyWith(
            loading: true,
            context: event.context,
            vitalList: _vitalList,
            vitalOptions: _vitalOptions,
            values: _values,
            vitalNames: _vitalNames,
          );
          await pr.show();

          List<dynamic> _vital = [];
          print('_vitalList: $_vitalNames');
          print('_values: $_values');
          print('_options $_vitalOptions');

          //print('e.value= ${e.getValue} ${e.getSelect}');

            _vitalOptions.forEach((option){
              //print(option.title);
              for(final name in _vitalNames.keys){
                
                if(_vitalNames[name] != ''){
                  //print(name);
                  if(option.title == _vitalNames[name]){
                    var obj = {};
                    obj['lab_secondary_value'] = '${_values[name]}';
                    obj['lab_key'] = '${option.key}';
                    obj['lab_default_value'] = _values[name] == null ? 0: double.parse('${_values[name]}');
                    obj['unit'] = ' ';
                    obj['description'] = '${option.description}';
                    obj['lab_name'] = '${option.title}';
                    _vital..add(obj);
                  }
                }
              }
          });
          
          var resBody = {};
          resBody['lab_tests'] = _vital;
          resBody['comment'] = event.comment;
          resBody['user_id'] = userId;
          resBody['date_entered'] = event.date_entered;
          resBody['timestamp'] = event.timestamp;
          resBody['source'] = 'patient generated';
          resBody['observer_id'] = userId;
          resBody['created_by'] = event.observedBy;
          var req = json.encode(resBody);
          print(req);

          AddLabResultResponse response = await _repository.addLabResults(resBody);
          await pr.hide();
          yield state.copyWith(
            loading: false,
            vitalList: _vitalList,
            vitalOptions: _vitalOptions,
            values: _values,
            vitalNames: _vitalNames,
            );          
          if(response.status == 200) {
            
            CustomToast.show('${response.message} ${response.status}');
            Navigator.pop(event.context);
            //await Navigator.of(event.context).pushNamedAndRemoveUntil(DashboardViewRoute, (Route<dynamic> route) => false);
             //popUntil(ModalRoute.withName(DashboardViewRoute));
          }else {
             CustomToast.show('${response.status}');
            await _showMyDialog(state.context, response.errMessage);
          }

        }
    }
  }



Future<void> _showMyDialog(context, dynamic message) async {
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
            FlatButton(child: Text('OK'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }
}