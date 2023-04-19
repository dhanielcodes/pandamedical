part of 'blood_type_bloc.dart';

class BloodTypeState extends Equatable {
  
  final List<VitalWidget> vitalList;
  final List<double> values;
  final List<String> vitalNames;
  final DateTime date;
  final TimeOfDay time;
  
  const BloodTypeState({this.vitalList, this.values, this.vitalNames, this.date, this.time});

  BloodTypeState copyWith({DateTime date, List<VitalWidget> vitalList = const [], List<double> values = const [],TimeOfDay time, List<String> vitalNames = const []}) {
    return BloodTypeState(
      vitalList: vitalList ?? this.vitalList,
      vitalNames: vitalNames ?? this.vitalNames,
      values: values ?? this.values,
      date: date ?? this.date,
      time : time ?? this.time,
    );
  }

  @override
  List<Object> get props => [vitalList, values, vitalNames, date, time]; //BloodType

  @override
  bool get stringify => true;
}