part of 'hospital_bloc.dart';

class HospitalState extends Equatable {
  
  final String Hospital;
  final bool HospitalVerified;
  final BuildContext context;
  
  const HospitalState({this.Hospital, this.HospitalVerified, this.context});

  HospitalState copyWith({ String Hospital = '', bool HospitalVerified, BuildContext context}) {
    return HospitalState(
      Hospital: Hospital ?? this.Hospital,
      context: context ?? this.context,
      HospitalVerified: HospitalVerified ?? this.HospitalVerified
    );
  }

  @override
  List<Object> get props => [Hospital, HospitalVerified, context]; //Hospital

  @override
  bool get stringify => true;
}