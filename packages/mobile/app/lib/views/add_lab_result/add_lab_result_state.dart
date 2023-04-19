part of 'add_lab_result_bloc.dart';

class AddLabResultState extends Equatable {
  
  final List<VitalLabWidget> vitalList;
  final Map<String, String> values;
  final Map<String, String> vitalNames;
  final DateTime date;
  final TimeOfDay time;
final List<VitalData> vitalOptions;
  final bool loading;
  final BuildContext context;
  
  const AddLabResultState({this.vitalList, this.vitalOptions, this.values, this.vitalNames, this.date, this.time, this.loading, this.context});

  AddLabResultState copyWith({DateTime date, List<VitalLabWidget> vitalList = const [], List<VitalData> vitalOptions = const [], 
  BuildContext context, bool loading, Map<String, String> values = const {},TimeOfDay time, Map<String, String> vitalNames = const {}}) {
    return AddLabResultState(
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
  List<Object> get props => [vitalList, values, vitalOptions, vitalNames, date, time, context, loading]; //AddLabResult

  @override
  bool get stringify => true;
}