part of 'password_success_bloc.dart';

class PasswordSuccessEvent extends Equatable {
  const PasswordSuccessEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyEmail extends PasswordSuccessEvent {
  final String email;
  const VerifyEmail(this.email);
  @override
  List<Object> get props => [email];
}

class Submit extends PasswordSuccessEvent {}
class InitPasswordSuccess extends PasswordSuccessEvent {}


