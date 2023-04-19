part of 'confirm_booking_bloc.dart';

class ConfirmBookingState extends Equatable {
  
  final BuildContext context;
  
  const ConfirmBookingState({this.context});

  ConfirmBookingState copyWith({BuildContext context}) {
    return ConfirmBookingState(
      context: context ?? this.context,
    );
  }
  
  @override
  List<Object> get props => [context]; //ConfirmBooking

  @override
  bool get stringify => true;
}