part of 'reset_pin_bloc.dart';

class ResetPinEvent extends Equatable {
  const ResetPinEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyResetPin extends ResetPinEvent {
  final String ResetPin;
  const VerifyResetPin(this.ResetPin);
  @override
  List<Object> get props => [ResetPin];
}

class Submit extends ResetPinEvent {}
class InitResetPin extends ResetPinEvent {}


