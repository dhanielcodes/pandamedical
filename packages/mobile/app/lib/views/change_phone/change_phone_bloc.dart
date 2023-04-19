

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/widgets/vital.dart';

part 'change_phone_event.dart';
part 'change_phone_state.dart';


class ChangePhoneBloc extends Bloc<ChangePhoneEvent, ChangePhoneState>{
  //final bloc = this;
  //AuthRepository _repository =  AuthRepository();

  @override
 ChangePhoneState get initialState => const ChangePhoneState();

@override
  void onTransition(Transition<ChangePhoneEvent, ChangePhoneState> transition) {
    print(transition);
    super.onTransition(transition);
  }

  bool validatePhone(String phoneNumber){
  
  if(phoneNumber.length == 13 || phoneNumber.length == 14){
    return true;
  }
  
  return false;
}

 
  
  @override
  Stream<ChangePhoneState> mapEventToState(ChangePhoneEvent event) async*{

     if (event is InitChangePhone) {
        yield state.copyWith(
              phoneVerified: false,
            );
    }else if (event is ValidateNumber) {
      print(event.phoneNumber);
       if(validatePhone(event.phoneNumber)){
         yield state.copyWith(
            phoneVerified: true,
            phone: event.phoneNumber
          );
        }else{
        yield state.copyWith(
              phoneVerified: false,
            );
        }    
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