part of 'password_otp_bloc.dart';

class PasswordOtpState extends Equatable {
  
  final String PasswordOtp;
  final bool PasswordOtpVerified;
  final BuildContext context;
  
  const PasswordOtpState({this.PasswordOtp, this.PasswordOtpVerified, this.context});

  PasswordOtpState copyWith({ String PasswordOtp = '', bool PasswordOtpVerified, BuildContext context}) {
    return PasswordOtpState(
      PasswordOtp: PasswordOtp ?? this.PasswordOtp,
      context: context ?? this.context,
      PasswordOtpVerified: PasswordOtpVerified ?? this.PasswordOtpVerified
    );
  }

  @override
  List<Object> get props => [PasswordOtp, PasswordOtpVerified, context]; //PasswordOtp

  @override
  bool get stringify => true;
}