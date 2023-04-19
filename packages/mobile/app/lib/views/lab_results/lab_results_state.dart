part of 'lab_results_bloc.dart';

class LabResultsState extends Equatable {
  
  final List<LabTestRow> vitalList;
  final RefreshController controller;
  final BuildContext context;

  const LabResultsState({this.vitalList, this.controller, this.context});

  LabResultsState copyWith({List<LabTestRow> vitalList = const [], RefreshController controller, context}) {
    return LabResultsState(
      vitalList: vitalList ?? this.vitalList,
      controller: controller ?? this.controller,
      context: context ?? this.context
    );
  }

  @override
  List<Object> get props => [vitalList, controller, context]; //LabResults

  @override
  bool get stringify => true;
}