part of 'doctors_bloc.dart';

class DoctorsEvent extends Equatable {
  const DoctorsEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class GetSpecialty extends DoctorsEvent {
  final RefreshController controller;
  final BuildContext context;
  const GetSpecialty(this.context, this.controller);
  @override
  List<Object> get props => [context];
}

class RefreshSpecialty extends DoctorsEvent {}

class Submit extends DoctorsEvent {}
class InitDoctors extends DoctorsEvent {}


