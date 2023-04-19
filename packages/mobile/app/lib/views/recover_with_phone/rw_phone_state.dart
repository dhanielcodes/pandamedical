part of 'rw_phone_bloc.dart';

class RecoverWithPhoneState extends Equatable {
  
  final BuildContext context;
  final bool phoneVerified;
  
  const RecoverWithPhoneState({this.context, this.phoneVerified});

  RecoverWithPhoneState copyWith({ BuildContext context, bool phoneVerified}) {
    return RecoverWithPhoneState(
      context: context ?? this.context,
      phoneVerified: phoneVerified ?? this.phoneVerified
    );
  }

  @override
  List<Object> get props => [context, phoneVerified]; //RecoverWithPhone

  @override
  bool get stringify => true;
}