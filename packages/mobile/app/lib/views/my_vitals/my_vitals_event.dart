part of 'my_vitals_bloc.dart';

class MyVitalsEvent extends Equatable {
  const MyVitalsEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class MyVitals extends MyVitalsEvent {
  final RefreshController controller;
  final BuildContext context;
  const MyVitals(this.controller, this.context);
  @override
  List<Object> get props => [controller, context];  
}
class RefreshMyVitals extends MyVitalsEvent {}

class VitalsOptions extends MyVitalsEvent {} 
class InitMyVitals extends MyVitalsEvent {}


