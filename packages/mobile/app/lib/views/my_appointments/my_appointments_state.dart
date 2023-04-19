part of 'my_appointments_bloc.dart';

class MyAppointmentState extends Equatable {
  
  final List<AppointmentRow> vitalList;
  final List<VitalData> vitalOptions;
  final RefreshController controller;
  final BuildContext context;
  

  const MyAppointmentState({this.vitalList, this.controller, this.vitalOptions, this.context});

  MyAppointmentState copyWith({List<AppointmentRow> vitalList = const [], context, List<VitalData> vitalOptions = const [], RefreshController controller}) {
    return MyAppointmentState(
      vitalList: vitalList ?? this.vitalList,
      controller: controller ?? this.controller,
      vitalOptions: vitalOptions ?? this.vitalOptions,
      context: context ?? this.context,
    );
  }

  @override
  List<Object> get props => [vitalList, vitalOptions, controller, context]; //MyAppointment

  @override
  bool get stringify => true;
}