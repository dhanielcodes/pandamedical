part of 'booking_complete_bloc.dart';

class BookingCompleteEvent extends Equatable {
  const BookingCompleteEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyBookingComplete extends BookingCompleteEvent {
  final String BookingComplete;
  const VerifyBookingComplete(this.BookingComplete);
  @override
  List<Object> get props => [BookingComplete];
}

class Submit extends BookingCompleteEvent {}
class InitBookingComplete extends BookingCompleteEvent {}


