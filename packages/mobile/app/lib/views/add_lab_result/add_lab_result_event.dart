part of 'add_lab_result_bloc.dart';

class AddLabResultEvent extends Equatable {
  const AddLabResultEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class AddLabResult extends AddLabResultEvent {}

class RemoveVital extends AddLabResultEvent {
  final String index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}


class UpdateVitalValue extends AddLabResultEvent {
  final String index;
  final String value;
  const UpdateVitalValue(this.index, this.value);
  @override
  List<Object> get props => [index, value];
}

class UpdateVitalSelected extends AddLabResultEvent {
  final String index, value;
  const UpdateVitalSelected(this.index, this.value);
  @override
  List<Object> get props => [index, value];
}


class SetDate extends AddLabResultEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends AddLabResultEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends AddLabResultEvent {
  final String comment, date_entered, timestamp, observedBy;
  final BuildContext context;
  const Submit(this.comment, this.date_entered, this.timestamp, this.context, this.observedBy);
  @override
  List<Object> get props => [comment, date_entered, timestamp, context, observedBy];
}

class InitAddLabResult extends AddLabResultEvent {
  //final List<VitalData> vitalOptions;
  const InitAddLabResult();
  @override
  List<Object> get props => [];
}


