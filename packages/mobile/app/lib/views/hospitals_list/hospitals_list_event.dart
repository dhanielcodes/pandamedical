part of 'hospitals_list_bloc.dart';

class HospitalsListEvent extends Equatable {
  const HospitalsListEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class SortList extends HospitalsListEvent {
  final String value;
  const SortList(this.value);
  @override
  List<Object> get props => [value];
}

class Submit extends HospitalsListEvent {}
class InitBlock extends HospitalsListEvent{}
class InitHospitalsList extends HospitalsListEvent {}


