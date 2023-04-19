

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/models/physician_response.dart';
import 'package:pandamedical/repositories/medical_repository.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/models/available_slots_response.dart';
import 'package:progress_dialog/progress_dialog.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';

part 'confirm_booking_event.dart';
part 'confirm_booking_state.dart';


class ConfirmBookingBloc extends Bloc<ConfirmBookingEvent, ConfirmBookingState>{
  //final bloc = this;
  var _repository = MedicalRepository();

  @override
 ConfirmBookingState get initialState => const ConfirmBookingState();

  @override
  void onTransition(Transition<ConfirmBookingEvent, ConfirmBookingState> transition) {
    print(transition);
    super.onTransition(transition);
  }

  @override
  Stream<ConfirmBookingState> mapEventToState(ConfirmBookingEvent event) async*{

     if (event is CreateEvent) {
       var pr = ProgressDialog(event.context, isDismissible: false);
       pr.style(
         message: 'booking appointment.',
         borderRadius: 10,
         progressWidget: Container(child: CircularProgressIndicator( valueColor: AlwaysStoppedAnimation<Color>(Colors.green),), 
         width: 20, height: 20, padding: EdgeInsets.all(15),),
         elevation: 10,

       );
       var id = await StorageHelper.get(StorageKeys.id);
       var _data = {};
       _data['slot_time'] = event.data['time'];
       _data['slot_date'] = event.data['date'];
       _data['appointee'] = event.data['data'].userId;
       _data['scheduler'] = id;
       pr.show();
      var response  = await _repository.createAppointment(_data);
      pr.hide();
      if(response.status == 200){
        Navigator.pushNamed(event.context, BookingCompleteRoute);
      }else{
        String message = 'your session token has expired. please login again';
            if(response.errMessage != null){
              message = '${response.errMessage}';
            }else{
              message = response.message;
            }
            await _showMyDialog(event.context, '${response.errMessage}');
      }
        yield state.copyWith(
            );
    }
    
  }

  
  Future<void> _showMyDialog(context, String message) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Alert!'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('$message'),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('OK'),
              onPressed: () {
                //StorageHelper.clear();
                Navigator.of(context).pushNamedAndRemoveUntil(LauncherScreen, (Route<dynamic> route) => false); 
              },
            ),
          ],
        );
      },
    );
  }
}