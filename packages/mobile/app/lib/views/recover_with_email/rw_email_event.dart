part of 'rw_email_bloc.dart';

class RecoverWithEmailEvent extends Equatable {
  const RecoverWithEmailEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyEmail extends RecoverWithEmailEvent {
  final String email;
  const VerifyEmail(this.email);
  @override
  List<Object> get props => [email];
}

class Submit extends RecoverWithEmailEvent {}
class InitRecoverWithEmail extends RecoverWithEmailEvent {}


