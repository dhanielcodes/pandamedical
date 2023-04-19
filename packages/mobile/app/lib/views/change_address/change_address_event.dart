part of 'change_address_bloc.dart';

class ChangeAddressEvent extends Equatable {
  const ChangeAddressEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class ChangeAddress extends ChangeAddressEvent {}

class RemoveVital extends ChangeAddressEvent {
  final int index;
  const RemoveVital(this.index);
  @override
  List<Object> get props => [index];
}

class SetDate extends ChangeAddressEvent {
  final DateTime date;
  const SetDate(this.date);
  @override
  List<Object> get props => [date];
}

class SetTime extends ChangeAddressEvent {
  final TimeOfDay time;
  const SetTime(this.time);
  @override
  List<Object> get props => [time];
}

class Submit extends ChangeAddressEvent {}
class InitChangeAddress extends ChangeAddressEvent {}


