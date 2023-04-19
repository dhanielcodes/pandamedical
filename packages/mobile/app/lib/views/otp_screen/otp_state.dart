part of 'otp_bloc.dart';

class OtpState extends Equatable {
  
  final String otp;
  final bool otpVerified;
  final BuildContext context;
  
  const OtpState({this.otp, this.otpVerified, this.context});

  OtpState copyWith({ String otp = '', bool otpVerified, BuildContext context}) {
    return OtpState(
      otp: otp ?? this.otp,
      context: context ?? this.context,
      otpVerified: otpVerified ?? this.otpVerified
    );
  }

  @override
  List<Object> get props => [otp, otpVerified, context]; //Otp

  @override
  bool get stringify => true;
}