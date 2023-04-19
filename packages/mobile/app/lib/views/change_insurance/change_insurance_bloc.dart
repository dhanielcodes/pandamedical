

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/widgets/vital.dart';

part 'change_insurance_event.dart';
part 'change_insurance_state.dart';


class ChangeInsuranceBloc extends Bloc<ChangeInsuranceEvent, ChangeInsuranceState>{
  //final bloc = this;
  //AuthRepository _repository =  AuthRepository();

  @override
 ChangeInsuranceState get initialState => const ChangeInsuranceState();

@override
  void onTransition(Transition<ChangeInsuranceEvent, ChangeInsuranceState> transition) {
    print(transition);
    super.onTransition(transition);
  }

 
  
  @override
  Stream<ChangeInsuranceState> mapEventToState(ChangeInsuranceEvent event) async*{

     if (event is InitChangeInsurance) {
       List<VitalWidget> _vitalList = []..add(  VitalWidget(hideClose: true, position:0, onPressed: (){this.add(RemoveVital(0));}));
      List<double> _values = state.values;
      List<String> _vitalNames = state.vitalNames;
      //_vitalList.add( VitalWidget(onPressed: (){this.add(RemoveVital(1));}));
        yield state.copyWith(
              vitalList: _vitalList,
            );
    }else if(event is ChangeInsurance){
      List<VitalWidget> _vitalList = List.from(state.vitalList);
      List<double> _values = List.from(state.values);
      List<String> _vitalNames = List.from(state.vitalNames);
      List<VitalWidget> _list = [];
      // for(int i = 0; i < _vitalList.length; i++){
      //   _list..add( VitalWidget(value: _vitalList[i].value, 
      //   selected: _vitalList[i].selected, hideClose: _vitalList[i].hideClose,
      //   onPressed: (){this.add(RemoveVital(i));}));
      // }
      //_list..add( VitalWidget(value: 0, onPressed: (){this.add(RemoveVital(_vitalList.length));}));
      print(_list);
      
        yield state.copyWith(
          vitalList: _list,
        );
    }else if(event is RemoveVital){
      List<VitalWidget> _vitalList = List.from(state.vitalList);
      List<double> _values = List.from(state.values);
      List<String> _vitalNames = List.from(state.vitalNames);
      _vitalList.removeAt(event.index);
      List<VitalWidget> _list = [];
      // for(int i = 0; i < _vitalList.length; i++){
      //   _list..add(  VitalWidget(value: _vitalList[i].value, hideClose: _vitalList[i].hideClose, 
      //   selected: _vitalList[i].selected, 
      //   onPressed: (){this.add(RemoveVital(i));}));
      // }
      

        yield state.copyWith(
          vitalList: _list,
        );
    } else if(event is SetDate){
      List<VitalWidget> _vitalList = List.from(state.vitalList);
      List<VitalWidget> _list = [];
      // for(int i = 0; i < _vitalList.length; i++){
      //   _list..add( VitalWidget(value: _vitalList[i].value, hideClose: _vitalList[i].hideClose, 
      //   selected: _vitalList[i].selected, 
      //   onPressed: (){this.add(RemoveVital(i));}));
      // }
        yield state.copyWith(
          date: event.date,
          vitalList: _list,
        );
    }else if(event is SetTime){
      List<VitalWidget> _vitalList = List.from(state.vitalList);
      List<VitalWidget> _list = [];
      // for(int i = 0; i < _vitalList.length; i++){
      //   _list..add( VitalWidget(value: _vitalList[i].value, hideClose: _vitalList[i].hideClose, 
      //   selected: _vitalList[i].selected, 
      //   onPressed: (){this.add(RemoveVital(i));}));
      // }
        yield state.copyWith(
          time: event.time,
          vitalList: _list,
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