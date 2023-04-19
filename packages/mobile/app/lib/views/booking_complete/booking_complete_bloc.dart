

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'booking_complete_event.dart';
part 'booking_complete_state.dart';


class BookingCompleteBloc extends Bloc<BookingCompleteEvent, BookingCompleteState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 BookingCompleteState get initialState => const BookingCompleteState();

@override
  void onTransition(Transition<BookingCompleteEvent, BookingCompleteState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<BookingCompleteState> mapEventToState(BookingCompleteEvent event) async*{

     if (event is InitBookingComplete) {

        yield state.copyWith(
              BookingCompleteVerified: false,
              BookingComplete: 'true',
            );
    }else if(event is Submit){
        yield state.copyWith(
        );
    }
  }

// Future<void> _showMyDialog(context, role, String message, String token) async {
//     return showDialog<void>(
//       context: context,
//       barrierDismissible: false, // user must tap button!
//       builder: (BuildContext context) {
//         return AlertDialog(
//           title: Text('Error Message!'),
//           content: SingleChildScrollView(
//             child: ListBody(
//               children: <Widget>[
//                 Text(message),
//               ],
//             ),
//           ),
//           actions: <Widget>[
//             FlatButton(
//               child: Text('OK'),
//               onPressed: () {
//                 Navigator.of(context).pop();
//               },
//             ),
//             message == "Device offline" && token.isNotEmpty ?
//             FlatButton(
//               child: Text('work offline?'),
//               onPressed: () {
//                 //Navigator.of(context).pushReplacementNamed(DashboardViewRoute);
                
//                   // if(role == 1){
//                   //   Navigator.pushReplacementNamed(context, TargetsViewRoute);
//                   // }else {
//                   //   Navigator.of(context).pushReplacementNamed(DashboardViewRoute);
//                   // }
          
//               },
//             ) : null,
//           ],
//         );
//       },
//     );
//   }

}