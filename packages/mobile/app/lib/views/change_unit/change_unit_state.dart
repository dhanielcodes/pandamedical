part of 'change_unit_bloc.dart';

class ChangeUnitState extends Equatable {
  
  final List<VitalWidget> vitalList;
  final List<double> values;
  final List<String> vitalNames;
  final DateTime date;
  final TimeOfDay time;
  
  const ChangeUnitState({this.vitalList, this.values, this.vitalNames, this.date, this.time});

  ChangeUnitState copyWith({DateTime date, List<VitalWidget> vitalList = const [], List<double> values = const [],TimeOfDay time, List<String> vitalNames = const []}) {
    return ChangeUnitState(
      vitalList: vitalList ?? this.vitalList,
      vitalNames: vitalNames ?? this.vitalNames,
      values: values ?? this.values,
      date: date ?? this.date,
      time : time ?? this.time,
    );
  }

  @override
  List<Object> get props => [vitalList, values, vitalNames, date, time]; //ChangeUnit

  @override
  bool get stringify => true;
}