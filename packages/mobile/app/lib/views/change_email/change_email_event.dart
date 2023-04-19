part of 'change_email_bloc.dart';

class ChangeEmailEvent extends Equatable {
  const ChangeEmailEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class ChangeEmail extends ChangeEmailEvent {}
class ViewPassword extends ChangeEmailEvent {}
class Submit extends ChangeEmailEvent {}
class InitChangeEmail extends ChangeEmailEvent {}


