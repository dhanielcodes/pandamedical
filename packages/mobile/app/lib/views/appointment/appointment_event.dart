part of 'appointment_bloc.dart';

class AppointmentEvent extends Equatable {
  const AppointmentEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class GetSpecialty extends AppointmentEvent {
  final BuildContext context;
  const GetSpecialty(this.context);
  @override
  List<Object> get props => [context];
}

class Submit extends AppointmentEvent {}
class InitAppointment extends AppointmentEvent {}


