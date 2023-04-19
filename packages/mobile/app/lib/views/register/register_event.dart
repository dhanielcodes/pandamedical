part of 'register_bloc.dart';

class RegisterEvent extends Equatable {
  const RegisterEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class GetInputs extends RegisterEvent {
  final String password, confirmPassword, firstName, lastName, gender, dateOfBirth;
  final BuildContext context;

  const GetInputs(this.password, this.confirmPassword, this.firstName, this.lastName, this.gender, this.dateOfBirth, this.context);

  @override
  List<Object> get props => [password, confirmPassword, firstName, lastName, gender, dateOfBirth, context];
}
class SetDateOfBirth extends RegisterEvent{
final DateTime date;
  const SetDateOfBirth(this.date);

  @override
  List<Object> get props => [date];
}
class VerifyEmail extends RegisterEvent {
  final String email;
  const VerifyEmail(this.email);

  @override
  List<Object> get props => [email];
}
class CheckForm extends RegisterEvent {
  final bool value;
  const CheckForm(this.value);

  @override
  List<Object> get props => [value];
}
class ValidateNumber extends RegisterEvent {
  final String phoneNumber;
  const ValidateNumber(this.phoneNumber);

  @override
  List<Object> get props => [phoneNumber];
}

class Submit extends RegisterEvent {}
class InitRegister extends RegisterEvent {}

class ViewConfirmPassword extends RegisterEvent {}
class ViewPassword extends RegisterEvent {}

