part of 'reset_pin_bloc.dart';

class ResetPinState extends Equatable {
  
  final String ResetPin;
  final bool ResetPinVerified;
  final BuildContext context;
  
  const ResetPinState({this.ResetPin, this.ResetPinVerified, this.context});

  ResetPinState copyWith({ String ResetPin = '', bool ResetPinVerified, BuildContext context}) {
    return ResetPinState(
      ResetPin: ResetPin ?? this.ResetPin,
      context: context ?? this.context,
      ResetPinVerified: ResetPinVerified ?? this.ResetPinVerified
    );
  }

  @override
  List<Object> get props => [ResetPin, ResetPinVerified, context]; //ResetPin

  @override
  bool get stringify => true;
}