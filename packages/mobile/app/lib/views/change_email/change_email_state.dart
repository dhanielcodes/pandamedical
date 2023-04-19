part of 'change_email_bloc.dart';

class ChangeEmailState extends Equatable {
  
  final String password;
  final String confirmEmail;
  final bool showPassword;
  final String email;
  
  const ChangeEmailState({this.password, this.confirmEmail, this.showPassword, this.email});

  ChangeEmailState copyWith({bool showPassword, String password, String confirmEmail,String email,}) {
    return ChangeEmailState(
      password: password ?? this.password,
      confirmEmail: confirmEmail ?? this.confirmEmail,
      showPassword: showPassword ?? this.showPassword,
      email : email ?? this.email,
    );
  }

  @override
  List<Object> get props => [password, confirmEmail, showPassword, email]; //ChangeEmail

  @override
  bool get stringify => true;
}