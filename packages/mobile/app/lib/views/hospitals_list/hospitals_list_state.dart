part of 'hospitals_list_bloc.dart';

class HospitalsListState extends Equatable {
  
  final String HospitalsList;
  final bool HospitalsListVerified;
  final BuildContext context;
  
  const HospitalsListState({this.HospitalsList, this.HospitalsListVerified, this.context});

  HospitalsListState copyWith({ String HospitalsList = '', bool HospitalsListVerified, BuildContext context}) {
    return HospitalsListState(
      HospitalsList: HospitalsList ?? this.HospitalsList,
      context: context ?? this.context,
      HospitalsListVerified: HospitalsListVerified ?? this.HospitalsListVerified
    );
  }

  @override
  List<Object> get props => [HospitalsList, HospitalsListVerified, context]; //HospitalsList

  @override
  bool get stringify => true;
}