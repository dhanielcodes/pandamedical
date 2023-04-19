part of 'doctors_list_bloc.dart';

class DoctorsListEvent extends Equatable {
  const DoctorsListEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}
class SortList extends DoctorsListEvent {
  final String value;
  const SortList(this.value);
  @override
  List<Object> get props => [value];
}

class InitBlock extends DoctorsListEvent{
  final Listt doctorType;
  final BuildContext context;
  final RefreshController controller;
  const InitBlock(this.doctorType, this.context, this.controller);
  @override
  List<Object> get props => [doctorType, context, controller];
}
class RefreshSpecialty extends DoctorsListEvent {}

class Submit extends DoctorsListEvent {}


