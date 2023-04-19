part of 'lab_results_bloc.dart';

class LabResultsEvent extends Equatable {
  const LabResultsEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class LabResults extends LabResultsEvent {
  final RefreshController controller;
  final BuildContext context;
  const LabResults(this.controller, this.context);
  @override
  List<Object> get props => [controller, context];  
}
class RefreshLabResults extends LabResultsEvent {}

class VitalsOptions extends LabResultsEvent {} 
class InitLabResults extends LabResultsEvent {}


