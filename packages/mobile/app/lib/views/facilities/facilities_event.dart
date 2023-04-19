part of 'facilities_bloc.dart';

class FacilitiesEvent extends Equatable {
  const FacilitiesEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyFacilities extends FacilitiesEvent {
  final String Facilities;
  const VerifyFacilities(this.Facilities);
  @override
  List<Object> get props => [Facilities];
}

class Submit extends FacilitiesEvent {}
class InitFacilities extends FacilitiesEvent {}


