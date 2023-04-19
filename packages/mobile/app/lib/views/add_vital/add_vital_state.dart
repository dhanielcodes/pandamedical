part of 'add_vital_bloc.dart';

class AddVitalState extends Equatable {
  
  final List<VitalWidget> vitalList;
  final Map<String, String> values;
  final Map<String, String> vitalNames;
  final DateTime date;
  final TimeOfDay time;
  final List<VitalData> vitalOptions;
  final bool loading;
  final BuildContext context;
  
  const AddVitalState({this.vitalList, this.vitalOptions, this.values, this.vitalNames, this.date, this.time, this.loading, this.context});

  AddVitalState copyWith({DateTime date, List<VitalWidget> vitalList = const [], List<VitalData> vitalOptions = const [], 
  BuildContext context, bool loading, Map<String, String> values = const {},TimeOfDay time, Map<String, String> vitalNames = const {}}) {
    return AddVitalState(
      vitalList: vitalList ?? this.vitalList,
      vitalNames: vitalNames ?? this.vitalNames,
      values: values ?? this.values,
      date: date ?? this.date,
      time : time ?? this.time,
      vitalOptions: vitalOptions ?? this.vitalOptions,
      context : context ?? this.context,
      loading : loading ?? this.loading
    );
  }

  @override
  List<Object> get props => [vitalList, values, vitalOptions, vitalNames, date, time, context, loading]; //AddVital

  @override
  bool get stringify => true;
}