
import 'package:pandamedical/helpers/connection_helper.dart';
import 'package:pandamedical/models/add_lab_result_response.dart';
import 'package:pandamedical/models/fetch_lab_result.dart';
import 'package:pandamedical/models/lab_result_history.dart';
import 'package:pandamedical/repositories/sources/network/labresults.service.dart';

class LabResultRepository {

  LabResultService api = LabResultService();

  Future<LabResultHistoryResponse> getlabResults() async {
    var response = LabResultHistoryResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.getlabResults();
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  
  Future<FetchLabResultResponse> labResults() async {
    var response = FetchLabResultResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.labResults();
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
   
  Future<AddLabResultResponse> addLabResults(body) async {
    var response = AddLabResultResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.addLabResults(body);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  
}
