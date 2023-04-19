

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

part 'doctor_detail_event.dart';
part 'doctor_detail_state.dart';


class DoctorDetailBloc extends Bloc<DoctorDetailEvent, DoctorDetailState>{
  //AuthRepository _repository = new AuthRepository();

  @override
 DoctorDetailState get initialState => const DoctorDetailState();

@override
  void onTransition(Transition<DoctorDetailEvent, DoctorDetailState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<DoctorDetailState> mapEventToState(DoctorDetailEvent event) async*{

     if (event is InitDoctorDetail) {

        yield state.copyWith(
              DoctorDetailVerified: false,
              DoctorDetail: 'true',
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