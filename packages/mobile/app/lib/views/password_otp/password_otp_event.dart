part of 'password_otp_bloc.dart';

class PasswordOtpEvent extends Equatable {
  const PasswordOtpEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyPasswordOtp extends PasswordOtpEvent {
  final String PasswordOtp;
  const VerifyPasswordOtp(this.PasswordOtp);
  @override
  List<Object> get props => [PasswordOtp];
}

class Submit extends PasswordOtpEvent {}
class InitPasswordOtp extends PasswordOtpEvent {}


