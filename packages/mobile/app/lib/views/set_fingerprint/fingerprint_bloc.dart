

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:local_auth/local_auth.dart';

part 'fingerprint_event.dart';
part 'fingerprint_state.dart';


class FingerPrintBloc extends Bloc<FingerPrintEvent, FingerPrintState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 FingerPrintState get initialState => const FingerPrintState();

@override
  void onTransition(Transition<FingerPrintEvent, FingerPrintState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<FingerPrintState> mapEventToState(FingerPrintEvent event) async*{

     if (event is InitFingerPrint) {

        yield state.copyWith(
              fingerPrintVerified: false,
            );
    }else if(event is Submit){
        yield state.copyWith(
        );
    }
  }
}