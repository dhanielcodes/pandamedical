part of 'facilities_bloc.dart';

class FacilitiesState extends Equatable {
  
  final String Facilities;
  final bool FacilitiesVerified;
  final BuildContext context;
  
  const FacilitiesState({this.Facilities, this.FacilitiesVerified, this.context});

  FacilitiesState copyWith({ String Facilities = '', bool FacilitiesVerified, BuildContext context}) {
    return FacilitiesState(
      Facilities: Facilities ?? this.Facilities,
      context: context ?? this.context,
      FacilitiesVerified: FacilitiesVerified ?? this.FacilitiesVerified
    );
  }

  @override
  List<Object> get props => [Facilities, FacilitiesVerified, context]; //Facilities

  @override
  bool get stringify => true;
}