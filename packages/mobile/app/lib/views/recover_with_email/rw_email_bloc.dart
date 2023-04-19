

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'rw_email_event.dart';
part 'rw_email_state.dart';


class RecoverWithEmailBloc extends Bloc<RecoverWithEmailEvent, RecoverWithEmailState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 RecoverWithEmailState get initialState => const RecoverWithEmailState();

@override
  void onTransition(Transition<RecoverWithEmailEvent, RecoverWithEmailState> transition) {
    print(transition);
    super.onTransition(transition);
  }
  
  @override
  Stream<RecoverWithEmailState> mapEventToState(RecoverWithEmailEvent event) async*{

     if(event is Submit){
        yield state.copyWith(
        );
    }
  }

}