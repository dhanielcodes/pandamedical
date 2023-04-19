part of 'select_slot_bloc.dart';

class SelectSlotState extends Equatable {
  
  final Physicians data;
  final List<Timeslots> slots;
  final RefreshController controller;
  final BuildContext context;
  final Listt doctorType;
  final String date;
  final String nextAvailableSlot;
  
  const SelectSlotState({this.data, this.doctorType, this.controller, this.slots, this.context, this.date, this.nextAvailableSlot});

  SelectSlotState copyWith({ data, BuildContext context, controller, slots, doctorType, date, nextAvailableSlot}) {
    return SelectSlotState(
      context: context ?? this.context,
      data: data ?? this.data,
      controller: controller ?? this.controller,
      doctorType: doctorType ?? this.doctorType,
      slots: slots ?? this.slots,
      date: date ?? date,nextAvailableSlot: nextAvailableSlot ?? nextAvailableSlot
    );
  }

  @override
  List<Object> get props => [data, controller, context, nextAvailableSlot, doctorType, slots, date]; 

  @override
  bool get stringify => true;
}