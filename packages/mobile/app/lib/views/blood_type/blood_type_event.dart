part of 'blood_type_bloc.dart';

class BloodTypeEvent extends Equatable {
  const BloodTypeEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class BloodType extends BloodTypeEvent {}

class RemoveVital extends BloodTypeEvent {
  final int index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}

class SetDate extends BloodTypeEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends BloodTypeEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends BloodTypeEvent {}
class InitBloodType extends BloodTypeEvent {}


