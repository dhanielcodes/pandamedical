part of 'doctors_bloc.dart';

class DoctorsState extends Equatable {
  
  final BuildContext context;
  final List<Listt> datalist;
  final RefreshController controller;
  
  const DoctorsState({this.datalist, this.context, this.controller});

  DoctorsState copyWith({ datalist, BuildContext context, controller}) {
    return DoctorsState(
      context: context ?? this.context,
      datalist: datalist ?? this.datalist,
      controller: controller ?? this.controller,
    );
  }

  @override
  List<Object> get props => [datalist, context, controller]; //Doctors

  @override
  bool get stringify => true;
}