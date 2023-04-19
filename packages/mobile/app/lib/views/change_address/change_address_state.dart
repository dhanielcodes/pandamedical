part of 'change_address_bloc.dart';

class ChangeAddressState extends Equatable {
  
  final List<double> values;
  final List<String> vitalNames;
  final DateTime date;
  
  const ChangeAddressState({this.values, this.vitalNames, this.date});

  ChangeAddressState copyWith({DateTime date, List<double> values = const [], List<String> vitalNames = const []}) {
    return ChangeAddressState(
      vitalNames: vitalNames ?? this.vitalNames,
      values: values ?? this.values,
      date: date ?? this.date,
    );
  }

  @override
  List<Object> get props => [values, vitalNames, date]; //ChangeAddress

  @override
  bool get stringify => true;
}