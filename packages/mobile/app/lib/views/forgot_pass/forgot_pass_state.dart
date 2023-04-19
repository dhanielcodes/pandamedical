part of 'forgot_pass_bloc.dart';

class ForgotPassState extends Equatable {
  
  final BuildContext context;
  
  const ForgotPassState({this.context});

  ForgotPassState copyWith({ BuildContext context}) {
    return ForgotPassState(
      context: context ?? this.context,
    );
  }

  @override
  List<Object> get props => [context]; //ForgotPass

  @override
  bool get stringify => true;
}