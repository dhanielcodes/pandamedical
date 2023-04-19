part of 'change_passcode_bloc.dart';

class ChangePasscodeEvent extends Equatable {
  const ChangePasscodeEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class ChangePasscode extends ChangePasscodeEvent {}

class RemoveVital extends ChangePasscodeEvent {
  final int index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}

class SetDate extends ChangePasscodeEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends ChangePasscodeEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends ChangePasscodeEvent {}
class InitChangePasscode extends ChangePasscodeEvent {}


