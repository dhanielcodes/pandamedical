part of 'set_pin_bloc.dart';

class SetPinEvent extends Equatable {
  const SetPinEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifySetPin extends SetPinEvent {
  final String SetPin;
  const VerifySetPin(this.SetPin);
  @override
  List<Object> get props => [SetPin];
}

class Submit extends SetPinEvent {}
class InitSetPin extends SetPinEvent {}


