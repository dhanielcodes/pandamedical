part of 'change_insurance_bloc.dart';

class ChangeInsuranceEvent extends Equatable {
  const ChangeInsuranceEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class ChangeInsurance extends ChangeInsuranceEvent {}

class RemoveVital extends ChangeInsuranceEvent {
  final int index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}

class SetDate extends ChangeInsuranceEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends ChangeInsuranceEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends ChangeInsuranceEvent {}
class InitChangeInsurance extends ChangeInsuranceEvent {}


