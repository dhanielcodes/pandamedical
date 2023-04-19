part of 'change_password_bloc.dart';

class ChangePasswordState extends Equatable {
  
  final List<VitalWidget> vitalList;
  final List<double> values;
  final List<String> vitalNames;
  final DateTime date;
  final TimeOfDay time;
  
  const ChangePasswordState({this.vitalList, this.values, this.vitalNames, this.date, this.time});

  ChangePasswordState copyWith({DateTime date, List<VitalWidget> vitalList = const [], List<double> values = const [],TimeOfDay time, List<String> vitalNames = const []}) {
    return ChangePasswordState(
      vitalList: vitalList ?? this.vitalList,
      vitalNames: vitalNames ?? this.vitalNames,
      values: values ?? this.values,
      date: date ?? this.date,
      time : time ?? this.time,
    );
  }

  @override
  List<Object> get props => [vitalList, values, vitalNames, date, time]; //ChangePassword

  @override
  bool get stringify => true;
}