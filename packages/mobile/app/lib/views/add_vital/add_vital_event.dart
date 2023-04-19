part of 'add_vital_bloc.dart';

class AddVitalEvent extends Equatable {
  const AddVitalEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class AddVital extends AddVitalEvent {}

class RemoveVital extends AddVitalEvent {
  final String index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}


class UpdateVitalValue extends AddVitalEvent {
  final String index;
  final String value;
  const UpdateVitalValue(this.index, this.value);
  @override
  List<Object> get props => [index, value];
}

class UpdateVitalSelected extends AddVitalEvent {
  final String index, value;
  const UpdateVitalSelected(this.index, this.value);
  @override
  List<Object> get props => [index, value];
}


class SetDate extends AddVitalEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends AddVitalEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends AddVitalEvent {
  final String comment, date_entered, timestamp;
  final BuildContext context;
  const Submit(this.comment, this.date_entered, this.timestamp, this.context);
  @override
  List<Object> get props => [comment, date_entered, timestamp, context];
}

class InitAddVital extends AddVitalEvent {
  final List<VitalData> vitalOptions;
  const InitAddVital(this.vitalOptions);
  @override
  List<Object> get props => [vitalOptions];
}


