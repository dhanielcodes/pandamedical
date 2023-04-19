import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:pandamedical/helpers/http_helper.dart';
import 'package:pandamedical/models/appointments_response.dart';
import 'package:pandamedical/models/medical_credential_response.dart';
import 'package:pandamedical/models/medical_specialty_response.dart';
import 'package:pandamedical/models/physician_response.dart';
import 'package:pandamedical/models/available_slots_response.dart';
// ignore: library_prefixes
import './base/endpoints.dart' as Endpoints;

class MedicalService{

  Future<MedicalSpecialtyResponse> getSpecialty() async {
    var response = MedicalSpecialtyResponse();

    final url = Endpoints.medical.specialty;

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      response= MedicalSpecialtyResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= MedicalSpecialtyResponse.fromJson(e.response.data);
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
  
 Future<PhysicianResponse> physician(String specialty) async {
    var response = PhysicianResponse();

    final url = Endpoints.medical.physician;//+'/$specialty';
    print(url);

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      response= PhysicianResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= PhysicianResponse.fromJson(e.response.data);
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
 Future<AvailableSlotsResponse> availableSlots(String id, date) async {
    var response = AvailableSlotsResponse();

    final url = Endpoints.medical.timeslots+'/?appointee_id=$id&slot_date=$date';
    print(url);

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      response= AvailableSlotsResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= AvailableSlotsResponse.fromJson(e.response.data);
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
  
  
  Future<AppointmentsResponse> getAppointments(dynamic id) async {
    var response = AppointmentsResponse();

    final url = Endpoints.medical.appointments;

    final ret= HttpHelper.get(url+'/$id');

    await ret.then((res) {
      response= AppointmentsResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= AppointmentsResponse.fromJson(e.response.data);
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
  
 Future<AvailableSlotsResponse> createAppointment(data) async {
    var response = AvailableSlotsResponse();

    final url = Endpoints.medical.appointments;
    print(url);

    final ret= HttpHelper.post(url, body: data);

    await ret.then((res) {
      response= AvailableSlotsResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= AvailableSlotsResponse.fromJson(e.response.data);
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
//createAppointment
  Future<MedicalCredentialResponse> getCredential() async {
    var response = MedicalCredentialResponse();

    final url = Endpoints.medical.credentials;

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      response= MedicalCredentialResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= MedicalCredentialResponse.fromJson(e.response.data);
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

  // Future<AddMedicalResponse> addMedicals(dynamic data) async {
  //   var response = AddMedicalResponse();

  //   final url = Endpoints.Medical.Medicals;

  //   final ret= HttpHelper.post(url, body:data);
  //   print('URL:$url DATA: $data');
  //   await ret.then((res) {
  //     print('res.data: ${res.data}');
  //     response= AddMedicalResponse.fromJson(res.data);
  //     print('res.data: ${response.data}');
      
  //   })
  //   .catchError((e) {
  //     response.status = 500;
  //     if(e is DioError){
  //       if(e.response != null) {
  //             print(e);
  //             print(e.response.data);
  //             response= AddMedicalResponse.fromJson(e.response.data);
  //         } else{
  //             // Something happened in setting up or sending the request that triggered an Error
  //             print(e.request);
  //             print(e.message);
  //         }    
  //   }else{
  //     response.message = 'Please check your network connection and try again';
  //   }
  //   });
    
  //   return response;
  // }

}
