

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'password_otp_event.dart';
part 'password_otp_state.dart';


class PasswordOtpBloc extends Bloc<PasswordOtpEvent, PasswordOtpState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 PasswordOtpState get initialState => const PasswordOtpState();

@override
  void onTransition(Transition<PasswordOtpEvent, PasswordOtpState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<PasswordOtpState> mapEventToState(PasswordOtpEvent event) async*{

     if (event is InitPasswordOtp) {

        yield state.copyWith(
              PasswordOtpVerified: false,
              PasswordOtp: 'true',
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