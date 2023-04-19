part of 'booking_complete_bloc.dart';

class BookingCompleteState extends Equatable {
  
  final String BookingComplete;
  final bool BookingCompleteVerified;
  final BuildContext context;
  
  const BookingCompleteState({this.BookingComplete, this.BookingCompleteVerified, this.context});

  BookingCompleteState copyWith({ String BookingComplete = '', bool BookingCompleteVerified, BuildContext context}) {
    return BookingCompleteState(
      BookingComplete: BookingComplete ?? this.BookingComplete,
      context: context ?? this.context,
      BookingCompleteVerified: BookingCompleteVerified ?? this.BookingCompleteVerified
    );
  }

  @override
  List<Object> get props => [BookingComplete, BookingCompleteVerified, context]; //BookingComplete

  @override
  bool get stringify => true;
}