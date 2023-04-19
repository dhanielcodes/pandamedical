

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'hospitals_list_event.dart';
part 'hospitals_list_state.dart';


class HospitalsListBloc extends Bloc<HospitalsListEvent, HospitalsListState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 HospitalsListState get initialState => const HospitalsListState();

@override
  void onTransition(Transition<HospitalsListEvent, HospitalsListState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<HospitalsListState> mapEventToState(HospitalsListEvent event) async*{

     if (event is InitHospitalsList) {

        yield state.copyWith(
              HospitalsListVerified: false,
              HospitalsList: 'true',
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