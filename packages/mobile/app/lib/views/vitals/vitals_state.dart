part of 'vitals_bloc.dart';

class VitalsState extends Equatable {
  
  final List<MyVitalRow> vitalList;
  final List<VitalData> vitalOptions;
  final RefreshController controller;
  final BuildContext context;
  final  List<UserVital> vitals;
  final User user;

  const VitalsState({this.vitalList, this.user, this.vitals, this.controller, this.vitalOptions, this.context});

  VitalsState copyWith({List<MyVitalRow> vitalList = const [], context, user, vitals, List<VitalData> vitalOptions = const [], RefreshController controller}) {
    return VitalsState(
      vitalList: vitalList ?? this.vitalList,
      controller: controller ?? this.controller,
      vitalOptions: vitalOptions ?? this.vitalOptions,
      context: context ?? this.context,
        vitals: vitals ?? this.vitals,
        user: user ?? this.user,
    );
  }

  @override
  List<Object> get props => [vitalList, vitalOptions, controller, user, vitals, context]; //Vitals

  @override
  bool get stringify => true;
}