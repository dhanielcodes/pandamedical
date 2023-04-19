

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/models/physician_response.dart';
import 'package:pandamedical/repositories/medical_repository.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/models/medical_specialty_response.dart';
import 'package:pandamedical/models/available_slots_response.dart';

part 'select_slot_event.dart';
part 'select_slot_state.dart';


class SelectSlotBloc extends Bloc<SelectSlotEvent, SelectSlotState>{
  //final bloc = this;
  var _repository = MedicalRepository();

  @override
 SelectSlotState get initialState => const SelectSlotState();

  @override
  void onTransition(Transition<SelectSlotEvent, SelectSlotState> transition) {
    print(transition);
    super.onTransition(transition);
  }

  @override
  Stream<SelectSlotState> mapEventToState(SelectSlotEvent event) async*{

     if (event is InitBlock) {
       yield state.copyWith(
              slots: null
            );
       var _slots = <Timeslots>[];
      var response  = await _repository.availableSlots(event.data.userInfo.id, event.date);
      if(response.status == 200){
        print('response.data.timeslots: ${response.data}');
        response.data.timeslots.forEach((v) {
        _slots.add(v);
      });
      
      if(response.data.timeslots.isEmpty){
        event.controller.loadComplete();
        CustomToast.show('failed to fetch timeslots');
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
      var _nextAvailableSlot = state.nextAvailableSlot;
      if(response.data != null){
        _nextAvailableSlot= response.data.nextAvailableSlot;
      }
      var finalSlot = state.slots;
      if(!_slots.isEmpty){
        finalSlot = _slots;
      }
      _nextAvailableSlot = '$_nextAvailableSlot';
        yield state.copyWith(
              slots: finalSlot,
              nextAvailableSlot: _nextAvailableSlot,
              controller: event.controller,
              context: event.context,
              data: event.data
            );
    }else if(event is RefreshTimeSlot){
       var _slots = <Timeslots>[];
      var response = await _repository.availableSlots(state.data.userInfo.id, state.date);


      if(response.status == 200){
        response.data.timeslots.forEach((v) {
        _slots.add(v);
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
      var _nextAvailableSlot = state.nextAvailableSlot;
      if(response.data != null){
        _nextAvailableSlot= _nextAvailableSlot;
      }
      _nextAvailableSlot = ' $_nextAvailableSlot';
        yield state.copyWith(
              slots: _slots,
              nextAvailableSlot: _nextAvailableSlot,
              controller: state.controller,
              data: state.data
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
                if(message == 'your session token has expired. please login again'){
                  Navigator.of(context).pushNamedAndRemoveUntil(LauncherScreen, (Route<dynamic> route) => false);
                } 
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }
}