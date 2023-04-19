part of 'forgot_pass_bloc.dart';

class ForgotPassEvent extends Equatable {
  const ForgotPassEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyForgotPass extends ForgotPassEvent {
  final String ForgotPass;
  const VerifyForgotPass(this.ForgotPass);
  @override
  List<Object> get props => [ForgotPass];
}

class Submit extends ForgotPassEvent {}
class InitForgotPass extends ForgotPassEvent {}


