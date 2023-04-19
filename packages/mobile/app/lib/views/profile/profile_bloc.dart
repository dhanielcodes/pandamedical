

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'profile_event.dart';
part 'profile_state.dart';


class ProfileBloc extends Bloc<ProfileEvent, ProfileState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 ProfileState get initialState => const ProfileState();

@override
  void onTransition(Transition<ProfileEvent, ProfileState> transition) {
    print(transition);
    super.onTransition(transition);
  }
  
  @override
  Stream<ProfileState> mapEventToState(ProfileEvent event) async*{

     if(event is Submit){
        yield state.copyWith(
        );
    }
  }

}