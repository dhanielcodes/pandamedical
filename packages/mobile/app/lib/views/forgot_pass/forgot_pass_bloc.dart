

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'forgot_pass_event.dart';
part 'forgot_pass_state.dart';


class ForgotPassBloc extends Bloc<ForgotPassEvent, ForgotPassState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 ForgotPassState get initialState => const ForgotPassState();

@override
  void onTransition(Transition<ForgotPassEvent, ForgotPassState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<ForgotPassState> mapEventToState(ForgotPassEvent event) async*{

     if(event is Submit){
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