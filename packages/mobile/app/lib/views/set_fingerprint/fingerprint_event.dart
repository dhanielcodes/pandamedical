part of 'fingerprint_bloc.dart';

class FingerPrintEvent extends Equatable {
  const FingerPrintEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyFingerPrint extends FingerPrintEvent {
  final String FingerPrint;
  const VerifyFingerPrint(this.FingerPrint);
  @override
  List<Object> get props => [FingerPrint];
}


class CheckBiometrics extends FingerPrintEvent {
  final bool canCheckBiometrics;
  const CheckBiometrics(this.canCheckBiometrics);
  @override
  List<Object> get props => [canCheckBiometrics];
}

class AvailableBiometrics extends FingerPrintEvent {
  final List<BiometricType> availableBiometrics;
  const AvailableBiometrics(this.availableBiometrics);
  @override
  List<Object> get props => [availableBiometrics];
}

class SetAuthenticated extends FingerPrintEvent {
  final bool authenticated;
  final String message;
  const SetAuthenticated(this.authenticated, this.message);
  @override
  List<Object> get props => [authenticated, message];
}


class Submit extends FingerPrintEvent {}
class InitFingerPrint extends FingerPrintEvent {}


