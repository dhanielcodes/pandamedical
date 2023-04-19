part of 'login_bloc.dart';

class LoginEvent extends Equatable {
  const LoginEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class GetInputs extends LoginEvent {
  final String password;
  final BuildContext context;

  const GetInputs(this.password, this.context);

  @override
  List<Object> get props => [password, context];
}
class VerifyEmail extends LoginEvent {
  final String email;
  const VerifyEmail(this.email);

  @override
  List<Object> get props => [email];
}

class CheckForm extends LoginEvent {
  final bool value;
  const CheckForm(this.value);

  @override
  List<Object> get props => [value];
}
class Submit extends LoginEvent {}
class InitLogin extends LoginEvent {}

class ViewPassword extends LoginEvent {}

