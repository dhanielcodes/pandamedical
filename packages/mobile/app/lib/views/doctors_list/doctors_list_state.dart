part of 'doctors_list_bloc.dart';

class DoctorsListState extends Equatable {
  
  final List<Physicians> datalist;
  final RefreshController controller;
  final BuildContext context;
  final Listt doctorType;
  
  const DoctorsListState({this.datalist, this.doctorType, this.controller, this.context});

  DoctorsListState copyWith({ datalist, BuildContext context, controller, doctorType}) {
    return DoctorsListState(
      context: context ?? this.context,
      datalist: datalist ?? this.datalist,
      controller: controller ?? this.controller,
      doctorType: doctorType ?? this.doctorType
    );
  }

  @override
  List<Object> get props => [datalist, controller, context, doctorType]; 

  @override
  bool get stringify => true;
}