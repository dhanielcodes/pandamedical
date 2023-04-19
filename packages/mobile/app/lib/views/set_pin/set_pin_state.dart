part of 'set_pin_bloc.dart';

class SetPinState extends Equatable {
  
  final String SetPin;
  final bool SetPinVerified;
  final BuildContext context;
  
  const SetPinState({this.SetPin, this.SetPinVerified, this.context});

  SetPinState copyWith({ String SetPin = '', bool SetPinVerified, BuildContext context}) {
    return SetPinState(
      SetPin: SetPin ?? this.SetPin,
      context: context ?? this.context,
      SetPinVerified: SetPinVerified ?? this.SetPinVerified
    );
  }

  @override
  List<Object> get props => [SetPin, SetPinVerified, context]; //SetPin

  @override
  bool get stringify => true;
}