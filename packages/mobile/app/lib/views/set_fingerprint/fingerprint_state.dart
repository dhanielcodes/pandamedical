part of 'fingerprint_bloc.dart';

class FingerPrintState extends Equatable {
  
  final bool fingerPrintVerified;
  final BuildContext context;
  final bool canCheckBiometrics;
  final bool isAuthenticating;
  final List<BiometricType> availableBiometrics;
  
  const FingerPrintState({this.fingerPrintVerified, this.isAuthenticating, this.canCheckBiometrics, this.context, this.availableBiometrics});

  FingerPrintState copyWith({bool fingerPrintVerified, BuildContext context, bool isAuthenticating, bool canCheckBiometrics, List<BiometricType> availableBiometric}) {
    return FingerPrintState(
      context: context ?? this.context,
      fingerPrintVerified: fingerPrintVerified ?? this.fingerPrintVerified,
      isAuthenticating: isAuthenticating ?? this.isAuthenticating,
      canCheckBiometrics: canCheckBiometrics ?? this.canCheckBiometrics,
      availableBiometrics: availableBiometrics ?? this.availableBiometrics,
    );
  }

  @override
  List<Object> get props => [fingerPrintVerified, context, isAuthenticating, canCheckBiometrics, availableBiometrics]; //FingerPrint

  @override
  bool get stringify => true;
}