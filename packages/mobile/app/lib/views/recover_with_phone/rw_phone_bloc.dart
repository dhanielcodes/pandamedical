

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'rw_phone_event.dart';
part 'rw_phone_state.dart';


class RecoverWithPhoneBloc extends Bloc<RecoverWithPhoneEvent, RecoverWithPhoneState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 RecoverWithPhoneState get initialState => const RecoverWithPhoneState();

@override
  void onTransition(Transition<RecoverWithPhoneEvent, RecoverWithPhoneState> transition) {
    print(transition);
    super.onTransition(transition);
  }
  
  @override
  Stream<RecoverWithPhoneState> mapEventToState(RecoverWithPhoneEvent event) async*{

     if(event is Submit){
        yield state.copyWith(
        );
    }else if(event is InitBloc){
        yield state.copyWith(
          phoneVerified: false
        );
    }
  }

}