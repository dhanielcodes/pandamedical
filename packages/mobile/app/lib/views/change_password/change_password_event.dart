part of 'change_password_bloc.dart';

class ChangePasswordEvent extends Equatable {
  const ChangePasswordEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class ChangePassword extends ChangePasswordEvent {}

class RemoveVital extends ChangePasswordEvent {
  final int index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}

class SetDate extends ChangePasswordEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends ChangePasswordEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends ChangePasswordEvent {}
class InitChangePassword extends ChangePasswordEvent {}


