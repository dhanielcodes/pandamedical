part of 'change_unit_bloc.dart';

class ChangeUnitEvent extends Equatable {
  const ChangeUnitEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class ChangeUnit extends ChangeUnitEvent {}

class RemoveVital extends ChangeUnitEvent {
  final int index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}

class SetDate extends ChangeUnitEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends ChangeUnitEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends ChangeUnitEvent {}
class InitChangeUnit extends ChangeUnitEvent {}


