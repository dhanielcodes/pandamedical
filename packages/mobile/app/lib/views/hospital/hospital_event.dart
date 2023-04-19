part of 'hospital_bloc.dart';

class HospitalEvent extends Equatable {
  const HospitalEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyHospital extends HospitalEvent {
  final String Hospital;
  const VerifyHospital(this.Hospital);
  @override
  List<Object> get props => [Hospital];
}

class Submit extends HospitalEvent {}
class InitHospital extends HospitalEvent {}


