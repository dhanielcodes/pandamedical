part of 'profile_bloc.dart';

class ProfileEvent extends Equatable {
  const ProfileEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyEmail extends ProfileEvent {
  final String email;
  const VerifyEmail(this.email);
  @override
  List<Object> get props => [email];
}

class Submit extends ProfileEvent {}
class InitProfile extends ProfileEvent {}


