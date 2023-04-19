part of 'rw_email_bloc.dart';

class RecoverWithEmailState extends Equatable {
  
  final BuildContext context;
  final String email;
  
  const RecoverWithEmailState({this.context, this.email});

  RecoverWithEmailState copyWith({ BuildContext context, String email}) {
    return RecoverWithEmailState(
      context: context ?? this.context,
      email: email ?? this.email
    );
  }

  @override
  List<Object> get props => [context, email]; //RecoverWithEmail

  @override
  bool get stringify => true;
}