part of 'otp_bloc.dart';

class OtpEvent extends Equatable {
  const OtpEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyOtp extends OtpEvent {
  final String otp;
  const VerifyOtp(this.otp);
  @override
  List<Object> get props => [otp];
}

class Submit extends OtpEvent {}
class InitOtp extends OtpEvent {}


