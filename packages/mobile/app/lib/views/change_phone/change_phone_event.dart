part of 'change_phone_bloc.dart';

class ChangePhoneEvent extends Equatable {
  const ChangePhoneEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class ChangePhone extends ChangePhoneEvent {}

class ValidateNumber extends ChangePhoneEvent {
  final String phoneNumber;
  const ValidateNumber(this.phoneNumber);

  @override
  List<Object> get props => [phoneNumber];
}

class Submit extends ChangePhoneEvent {}
class InitChangePhone extends ChangePhoneEvent {}


