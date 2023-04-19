part of 'password_success_bloc.dart';

class PasswordSuccessState extends Equatable {
  
  final BuildContext context;
  final String email;
  
  const PasswordSuccessState({this.context, this.email});

  PasswordSuccessState copyWith({ BuildContext context, String email}) {
    return PasswordSuccessState(
      context: context ?? this.context,
      email: email ?? this.email
    );
  }

  @override
  List<Object> get props => [context, email]; //PasswordSuccess

  @override
  bool get stringify => true;
}