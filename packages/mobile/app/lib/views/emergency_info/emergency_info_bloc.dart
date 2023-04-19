

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/widgets/vital.dart';

part 'emergency_info_event.dart';
part 'emergency_info_state.dart';


class EmergencyInfoBloc extends Bloc<EmergencyInfoEvent, EmergencyInfoState>{
  //final bloc = this;
  //AuthRepository _repository =  AuthRepository();

  @override
 EmergencyInfoState get initialState => const EmergencyInfoState();

@override
  void onTransition(Transition<EmergencyInfoEvent, EmergencyInfoState> transition) {
    print(transition);
    super.onTransition(transition);
  }

  bool validatePhone(String phoneNumber){
  
  if(phoneNumber.length == 13 || phoneNumber.length == 14){
    return true;
  }
  return false;
}

 
  
  @override
  Stream<EmergencyInfoState> mapEventToState(EmergencyInfoEvent event) async*{

     if (event is InitEmergencyInfo) {
        yield state.copyWith(
              phoneVerified: false,
            );
    }else if (event is ValidateNumber) {
      print(event.phoneNumber);
       if(validatePhone(event.phoneNumber)){
         yield state.copyWith(
            phoneVerified: true,
            phone: event.phoneNumber
          );
        }else{
        yield state.copyWith(
              phoneVerified: false,
            );
        }    
    }
  }


}