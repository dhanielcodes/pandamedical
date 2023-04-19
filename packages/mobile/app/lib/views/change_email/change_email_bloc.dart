

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/widgets/vital.dart';

part 'change_email_event.dart';
part 'change_email_state.dart';


class ChangeEmailBloc extends Bloc<ChangeEmailEvent, ChangeEmailState>{
  //final bloc = this;
  //AuthRepository _repository =  AuthRepository();

  @override
 ChangeEmailState get initialState => const ChangeEmailState();

@override
  void onTransition(Transition<ChangeEmailEvent, ChangeEmailState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<ChangeEmailState> mapEventToState(ChangeEmailEvent event) async*{

     if (event is InitChangeEmail) {
       yield state.copyWith(
              showPassword: true,
            );
    }else if(event is ViewPassword){
        yield state.copyWith(
          showPassword: !state.showPassword,
        );
    }
    }

}