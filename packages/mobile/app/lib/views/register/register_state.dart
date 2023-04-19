part of 'register_bloc.dart';

class RegisterState extends Equatable {
  
  final String email, phone;
  final String password;
  final bool loading;
  final bool showPassword, showConfirmPassword;
  final bool emailVerified, phoneVerified, initForm;
  final BuildContext context;
  final DateTime dateOfBirth;
  
  const RegisterState({this.email, this.phone, this.password, this.loading, this.initForm, this.emailVerified, this.phoneVerified, this.showPassword, this.showConfirmPassword, this.context,this.dateOfBirth});

  RegisterState copyWith({ String email, String phone, String password, bool rememberMe, bool emailVerified, bool phoneVerified, bool loading ,
   BuildContext context, bool showPassword, bool initForm, bool showConfirmPassword, DateTime dateOfBirth}) {
    return RegisterState(
      email: email ?? this.email,
      password: password ?? this.password,
      loading: loading ?? this.loading,
      showPassword: showPassword ?? this.showPassword,
      phoneVerified: phoneVerified ?? this.phoneVerified,
      showConfirmPassword: showConfirmPassword ?? this.showConfirmPassword,
      context: context ?? this.context,
      emailVerified: emailVerified ?? this.emailVerified,
      dateOfBirth: dateOfBirth ?? this.dateOfBirth,
      initForm: initForm ?? this.initForm,
      phone: phone ?? this.phone
    );
  }

  @override
  List<Object> get props => [email, password, phone, loading, showPassword, showConfirmPassword, emailVerified, phoneVerified, context, initForm, dateOfBirth]; //Register

  @override
  bool get stringify => true;
}