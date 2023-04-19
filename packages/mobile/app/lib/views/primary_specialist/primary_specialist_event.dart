part of 'primary_specialist_bloc.dart';

class PrimarySpecialistEvent extends Equatable {
  const PrimarySpecialistEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class PrimarySpecialist extends PrimarySpecialistEvent {}

class RemoveVital extends PrimarySpecialistEvent {
  final int index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}

class SetDate extends PrimarySpecialistEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends PrimarySpecialistEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends PrimarySpecialistEvent {}
class InitPrimarySpecialist extends PrimarySpecialistEvent {}


