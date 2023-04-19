part of 'my_appointments_bloc.dart';

class MyAppointmentEvent extends Equatable {
  const MyAppointmentEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class MyAppointment extends MyAppointmentEvent {
  final RefreshController controller;
  final BuildContext context;
  const MyAppointment(this.controller, this.context);
  @override
  List<Object> get props => [controller, context];  
}
class RefreshMyAppointment extends MyAppointmentEvent {}

class VitalsOptions extends MyAppointmentEvent {} 
class InitMyAppointment extends MyAppointmentEvent {}


