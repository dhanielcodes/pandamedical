part of 'emergency_info_bloc.dart';

class EmergencyInfoEvent extends Equatable {
  const EmergencyInfoEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class EmergencyInfo extends EmergencyInfoEvent {}

class ValidateNumber extends EmergencyInfoEvent {
  final String phoneNumber;
  const ValidateNumber(this.phoneNumber);

  @override
  List<Object> get props => [phoneNumber];
}

class Submit extends EmergencyInfoEvent {}
class InitEmergencyInfo extends EmergencyInfoEvent {}


