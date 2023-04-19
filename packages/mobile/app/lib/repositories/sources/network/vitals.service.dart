import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:pandamedical/helpers/http_helper.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';
import 'package:pandamedical/models/appointments_response.dart';
import 'package:pandamedical/models/vital_history_response.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/models/data_response.dart';
import 'package:pandamedical/models/add_vital_response.dart';
// ignore: library_prefixes
import './base/endpoints.dart' as Endpoints;

class VitalService{

  Future<VitalHistoryResponse> getVitals() async {
    var response = VitalHistoryResponse();

    final url = Endpoints.vital.history;

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      response= VitalHistoryResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= VitalHistoryResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
          }    
    }else{
      response.message = '$e';
    }
    });
    
    return response;
  }
  
  Future<VitalHistoryResponse> specificVitals(String vital) async {
    var response = VitalHistoryResponse();

    final url = Endpoints.vital.history+'/$vital';

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      response= VitalHistoryResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= VitalHistoryResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
          }    
    }else{
      response.message = 'Please check your network connection and try again';
    }
    });
    
    return response;
  }

  Future<VitalOptionsResponse> vitals() async {
    var response = VitalOptionsResponse();

    final url = Endpoints.vital.vitals;

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      response= VitalOptionsResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= VitalOptionsResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
          }    
    }else{
      response.message = 'Please check your network connection and try again';
    }
    });
    
    return response;
  }

  Future<AddVitalResponse> addVitals(dynamic data) async {
    var response = AddVitalResponse();

    final url = Endpoints.vital.vitals;

    final ret= HttpHelper.post(url, body:data);
    print('URL:$url DATA: $data');
    await ret.then((res) {
      print('res.data: ${res.data}');
      response= AddVitalResponse.fromJson(res.data);
      print('res.data: ${response.data}');
      
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= AddVitalResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
          }    
    }else{
      response.message = 'Please check your network connection and try again';
    }
    });
    
    return response;
  }
}
