part of 'confirm_booking_bloc.dart';

class ConfirmBookingEvent extends Equatable {
  const ConfirmBookingEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class CreateEvent extends ConfirmBookingEvent {
  final dynamic data;
  final BuildContext context;
  const CreateEvent(this.data, this.context);
  @override
  List<Object> get props => [data, context];
}

class Submit extends ConfirmBookingEvent {}
class InitConfirmBooking extends ConfirmBookingEvent {}


