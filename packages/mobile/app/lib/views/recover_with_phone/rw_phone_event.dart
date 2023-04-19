part of 'rw_phone_bloc.dart';

class RecoverWithPhoneEvent extends Equatable {
  const RecoverWithPhoneEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}


class ValidateNumber extends RecoverWithPhoneEvent {
  final String phoneNumber;
  const ValidateNumber(this.phoneNumber);

  @override
  List<Object> get props => [phoneNumber];
}

class Submit extends RecoverWithPhoneEvent {}
class InitBloc extends RecoverWithPhoneEvent {}


