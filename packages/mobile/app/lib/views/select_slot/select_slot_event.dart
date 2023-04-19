part of 'select_slot_bloc.dart';

class SelectSlotEvent extends Equatable {
  const SelectSlotEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}
class SortList extends SelectSlotEvent {
  final String value;
  const SortList(this.value);
  @override
  List<Object> get props => [value];
}

class InitBlock extends SelectSlotEvent{
  final Physicians data;
  final BuildContext context;
  final RefreshController controller;
  final String date;
  const InitBlock(this.data, this.context, this.controller, this.date);
  @override
  List<Object> get props => [data, context, controller, date];
}
class RefreshTimeSlot extends SelectSlotEvent {}

class Submit extends SelectSlotEvent {}


