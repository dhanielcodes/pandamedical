

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'password_success_event.dart';
part 'password_success_state.dart';


class PasswordSuccessBloc extends Bloc<PasswordSuccessEvent, PasswordSuccessState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 PasswordSuccessState get initialState => const PasswordSuccessState();

@override
  void onTransition(Transition<PasswordSuccessEvent, PasswordSuccessState> transition) {
    print(transition);
    super.onTransition(transition);
  }
  
  @override
  Stream<PasswordSuccessState> mapEventToState(PasswordSuccessEvent event) async*{

     if(event is Submit){
        yield state.copyWith(
        );
    }
  }

}