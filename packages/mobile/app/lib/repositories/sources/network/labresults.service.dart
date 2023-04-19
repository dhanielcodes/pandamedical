import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:pandamedical/helpers/http_helper.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';
import 'package:pandamedical/models/add_lab_result_response.dart';
import 'package:pandamedical/models/fetch_lab_result.dart';
import 'package:pandamedical/models/data_response.dart';
import 'package:pandamedical/models/lab_result_history.dart';
// ignore: library_prefixes
import './base/endpoints.dart' as Endpoints;

class LabResultService{

  Future<LabResultHistoryResponse> getlabResults() async {
    var response = LabResultHistoryResponse();

    final url = Endpoints.labtest.labresults;

    final ret= HttpHelper.get(url);
    await ret.then((res) { response= LabResultHistoryResponse.fromJson(res.data);})
    .catchError((e) {
     
      print('e lab history -> ${e}');
      response.status = 500;
      //response.data = e;
      response.message = 'Server Error';

      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              print(e.response.headers);
              print(e.response.request);
              response= LabResultHistoryResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
          }
      }
      response.message = 'Please check your network connection and try again';
      response.errMessage = 'Please check your network connection and try again';
    });
  
    return response;
  }

  Future<FetchLabResultResponse> labResults() async {
    var response = FetchLabResultResponse();

    final url = Endpoints.labtest.type;

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      response= FetchLabResultResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= FetchLabResultResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
              //response.errMessage = e.toString();    
          }    
    }else{
      response.message = 'Please check your network connection and try again';
    }
    response.message = 'Please check your network connection and try again';
      response.errMessage = 'Please check your network connection and try again';
    });
    
    return response;
  }

  Future<AddLabResultResponse> addLabResults(dynamic data) async {
    var response = AddLabResultResponse();

    final url = Endpoints.labtest.labresults;

    final ret= HttpHelper.post(url, body:data);
    print('URL:$url DATA: $data');
    await ret.then((res) {
      print('res.data: ${res.data}');
      response= AddLabResultResponse.fromJson(res.data);
      print('res.data: ${response.data}');
      if(response.status == 200){
        print('e -> 200');
      }else{
        print('e -> 500');
      }
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= AddLabResultResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
              //response.errMessage = e.toString();    
          }    
    }else{
      response.message = 'Please check your network connection and try again';
    }
    });
    // response.message = 'Please check your network connection and try again';
    //   response.errMessage = 'Please check your network connection and try again';
    return response;
  }
}
