part of 'login_bloc.dart';

class LoginState extends Equatable {
  
  final String email;
  final String password;
  final bool loading, initForm;
  final bool showPassword;
  final bool emailVerified;
  final BuildContext context;
  
  const LoginState({this.email, this.password, this.loading, this.initForm, this.emailVerified, this.showPassword, this.context});

  LoginState copyWith({ String email, String password, bool initForm, bool rememberMe, bool emailVerified, bool loading,
   BuildContext context, bool showPassword}) {
    return LoginState(
      email: email ?? this.email,
      password: password ?? this.password,
      loading: loading ?? this.loading,
      showPassword: showPassword ?? this.showPassword,
      context: context ?? this.context,
      emailVerified: emailVerified ?? this.emailVerified,
      initForm: initForm ?? this.initForm
    );
  }

  @override
  List<Object> get props => [email, password, loading, showPassword, emailVerified, initForm, context]; //Login

  @override
  bool get stringify => true;
}