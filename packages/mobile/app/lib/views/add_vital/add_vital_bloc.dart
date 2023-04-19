
import 'dart:convert';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/models/add_vital_response.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:progress_dialog/progress_dialog.dart';
import 'package:pandamedical/repositories/vitals_repository.dart';
import 'package:pandamedical/widgets/vital.dart';

part 'add_vital_event.dart';
part 'add_vital_state.dart';


class AddVitalBloc extends Bloc<AddVitalEvent, AddVitalState>{
  VitalRepository _repository = new VitalRepository();

  @override
 AddVitalState get initialState => const AddVitalState();

@override
  void onTransition(Transition<AddVitalEvent, AddVitalState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<AddVitalState> mapEventToState(AddVitalEvent event) async*{

     if (event is InitAddVital) {

       List<VitalWidget> _vitalList = []..add(  VitalWidget(data: [], hideClose: true, position:0, visible:true, onPressed: (){this.add(RemoveVital('0'));}));
      
      Map<String, String> _values = {};
      Map<String, String> _vitalNames = {};
      print('event.vitalOptions ${event.vitalOptions}');
      yield state.copyWith(
            values: _values,
            vitalNames: _vitalNames,
            vitalList: _vitalList);

      var oresponse = await _repository.vitals();
      print('option: ${oresponse.data}');
       
      _vitalList = []..add(  VitalWidget(data: oresponse.data, hideClose: true, position:0, visible:true, onPressed: (){this.add(RemoveVital('0'));}));
      
      print('event.vitalOptions ${event.vitalOptions}');
      yield state.copyWith(
            values: _values,
            vitalNames: _vitalNames,
            vitalList: _vitalList,
            vitalOptions: oresponse.data);
    }else if(event is AddVital){
       List<VitalWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      List<VitalWidget> _list = [];
      // for(int i = 0; i < _vitalList.length; i++){
      //   _list..add( VitalWidget(value: _vitalList[i].value, visible:true,
      //   selected: _vitalList[i].selected, hideClose: _vitalList[i].hideClose,
      //   onPressed: (){this.add(RemoveVital(i));}));
      // } 
      final index = _vitalList.length;
      _vitalList..add( VitalWidget(data: state.vitalOptions, value: 0,  visible:true, position: index));
      print(index);
      
        yield state.copyWith(
          vitalList: _vitalList,
          vitalOptions: _vitalOptions,
          values: _values,
          vitalNames: _vitalNames,
        );
    }else if(event is RemoveVital){
      List<VitalWidget> _vitalList = List.from(state.vitalList);
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
      List<VitalWidget> _vitalList = List.from(state.vitalList);
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
      List<VitalWidget> _vitalList = List.from(state.vitalList);
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
      List<VitalWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      List<VitalWidget> _list = [];
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
      List<VitalWidget> _vitalList = List.from(state.vitalList);
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
      List<VitalWidget> _vitalList = List.from(state.vitalList);
      List<VitalData> _vitalOptions = List.from(state.vitalOptions);
      Map<String, String> _values = Map.from(state.values);
      Map<String, String> _vitalNames= Map.from(state.vitalNames);
      String userId = await StorageHelper.get(StorageKeys.id);
      print('SUBMIT: _vitalNames: $_vitalNames');
      print('_values: $_values');
    
      var pr = ProgressDialog(event.context, isDismissible: false);
       pr.style(
         message: 'processing... ',
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
          CustomToast.show('please select a date');
        }else if(event.date_entered.isEmpty){
          CustomToast.show('Please select a date.');
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
              print(option.title);
              for(final name in _vitalNames.keys){
                if(_vitalNames[name] != ''){
                  if(option.title == _vitalNames[name]){
                    var obj = {};
                    obj['vitals_secondary_value'] = '${_values[name]}';
                    obj['vitals_key'] = '${option.key}';
                    obj['vitals_default_value'] = _values[name] == null ? 0: double.parse('${_values[name]}');
                    obj['unit'] = '${option.getUnit.symbol}';
                    obj['description'] = '${option.description}';
                    obj['title'] = '${option.title}';
                    _vital..add(obj);
                  }
                }
              }
          });
          
          var resBody = {};
          resBody['vitals'] = _vital;
          resBody['comment'] = event.comment;
          resBody['user_id'] = userId;
          resBody['date_entered'] = event.date_entered;
          resBody['timestamp'] = event.timestamp;
          resBody['source'] = 'patient generated';
          resBody['observer_id'] = userId;
          resBody['created_by'] = 'Ozichukwu Ezike';
          var req = json.encode(resBody);
          print(req);

          AddVitalResponse response = await _repository.addVitals(resBody);
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