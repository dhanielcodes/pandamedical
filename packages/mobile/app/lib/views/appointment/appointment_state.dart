part of 'appointment_bloc.dart';

class AppointmentState extends Equatable {
  
  final BuildContext context;
  final List<Listt> datalist;
  
  const AppointmentState({this.datalist, this.context});

  AppointmentState copyWith({ datalist, BuildContext context}) {
    return AppointmentState(
      context: context ?? this.context,
      datalist: datalist ?? this.datalist,
    );
  }

  @override
  List<Object> get props => [datalist, context]; //Appointment

  @override
  bool get stringify => true;
}