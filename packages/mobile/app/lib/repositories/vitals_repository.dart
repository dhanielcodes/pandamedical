
import 'package:pandamedical/helpers/connection_helper.dart';
import 'package:pandamedical/models/appointments_response.dart';
import 'package:pandamedical/models/vital_history_response.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/models/add_vital_response.dart';
import 'package:pandamedical/repositories/sources/network/vitals.service.dart';

class VitalRepository {

  VitalService api = VitalService();

  Future<VitalHistoryResponse> getVitals() async {
    var response = VitalHistoryResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.getVitals();
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }


  //
  
  Future<VitalHistoryResponse> specificVitals(String vital) async {
    var response = VitalHistoryResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.specificVitals(vital);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  
  Future<VitalOptionsResponse> vitals() async {
    var response = VitalOptionsResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.vitals();
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
   
  Future<AddVitalResponse> addVitals(body) async {
    var response = AddVitalResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.addVitals(body);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  
}
