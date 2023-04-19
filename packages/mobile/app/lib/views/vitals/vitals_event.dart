part of 'vitals_bloc.dart';

class VitalsEvent extends Equatable {
  const VitalsEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class Vitals extends VitalsEvent {
  final RefreshController controller;
  final BuildContext context;
  const Vitals(this.controller, this.context);
  @override
  List<Object> get props => [controller, context];  
}
class RefreshVitals extends VitalsEvent {}

class VitalsOptions extends VitalsEvent {} 
class InitVitals extends VitalsEvent {}

class ViewVitals extends VitalsEvent {
  final String vital;
  final BuildContext context;
  const ViewVitals(this.vital, this.context);
  @override
  List<Object> get props => [ vital, context]; 
}


