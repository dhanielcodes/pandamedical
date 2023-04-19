part of 'my_vitals_bloc.dart';

class MyVitalsState extends Equatable {
  
  final List<VitalRow> vitalList;
  final List<VitalData> vitalOptions;
  final RefreshController controller;
  final BuildContext context;
  

  const MyVitalsState({this.vitalList, this.controller, this.vitalOptions, this.context});

  MyVitalsState copyWith({List<VitalRow> vitalList = const [], context, List<VitalData> vitalOptions = const [], RefreshController controller}) {
    return MyVitalsState(
      vitalList: vitalList ?? this.vitalList,
      controller: controller ?? this.controller,
      vitalOptions: vitalOptions ?? this.vitalOptions,
      context: context ?? this.context,
    );
  }

  @override
  List<Object> get props => [vitalList, vitalOptions, controller, context]; //MyVitals

  @override
  bool get stringify => true;
}