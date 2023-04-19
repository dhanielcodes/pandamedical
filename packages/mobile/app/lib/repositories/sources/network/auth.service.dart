import 'dart:convert';
import 'package:dio/dio.dart';

import 'package:pandamedical/helpers/http_helper.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';
import 'package:pandamedical/models/auth_user_response.dart';
import 'package:pandamedical/models/login_response.dart';
import 'package:pandamedical/models/register_response.dart';
// ignore: library_prefixes
import './base/endpoints.dart' as Endpoints;

class AuthService{
  Future<LoginResponse> login(dynamic data) async {
    var response = LoginResponse();

    final url = Endpoints.login.auth;
    
    final retAuth = HttpHelper.post(url, body: data);
    print('URL:$url DATA: $data');
    await retAuth.then((res) {
      //response.status = res.statusCode;
      response = LoginResponse.fromJson(res.data);

      if(response.status == 200){
        StorageHelper.set(StorageKeys.token, response.data.token);
        StorageHelper.set(StorageKeys.id, response.data.sId); 
        //StorageHelper.set(StorageKeys.email, response.user.email);
        StorageHelper.set(StorageKeys.login, 'true');
        StorageHelper.set(StorageKeys.response, json.encode(response.toJson()));
        //StorageHelper.set(StorageKeys.user, json.encode(response.user.toJson()));
      }
    
      
    })
    .catchError((e) {
     
      StorageHelper.set(StorageKeys.login, 'false');
      
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= LoginResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
              //response.errMessage = e.toString();    
          }
      
    }else{
      
    }
    response.message = 'Please check your network connection and try again';
      response.errMessage = 'Please check your network connection and try again';
    });
    
    return response;
  }


  Future<RegisterResponse> register(dynamic data) async {
    var response = RegisterResponse();
    final url = Endpoints.user.register;
    print(url);
    final retAuth = HttpHelper.post(url, body: data);
    await retAuth.then((res) {
      //response.status = res.statusCode;
      response = RegisterResponse.fromJson(res.data);
      if(response.status == 200){
        StorageHelper.set(StorageKeys.token, response.data.token);
        StorageHelper.set(StorageKeys.id, response.data.sId);
        //StorageHelper.set(StorageKeys.email, response.user.email);
        StorageHelper.set(StorageKeys.login, 'true');
        StorageHelper.set(StorageKeys.response, json.encode(response.toJson()));
        //StorageHelper.set(StorageKeys.user, json.encode(response.user.toJson()));
      }
    })
    .catchError((e) {
      StorageHelper.set(StorageKeys.login, 'false');
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= RegisterResponse.fromJson(e.response.data);
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

  
  Future<AuthUserResponse> me()  async {
    var response = AuthUserResponse();

    final url = Endpoints.user.me;

    final ret= HttpHelper.get(url);

    await ret.then((res) {
      print(res.data);
      response= AuthUserResponse.fromJson(res.data);
    })
    .catchError((e) {
      response.status = 500;
      if(e is DioError){
        if(e.response != null) {
              print(e);
              print(e.response.data);
              response= AuthUserResponse.fromJson(e.response.data);
          } else{
              // Something happened in setting up or sending the request that triggered an Error
              print(e.request);
              print(e.message);
          }    
    }else{
      response.message = '$e dio error';
    }
    });
    
    return response;
  }

  Future<LoginResponse> changePassword(dynamic body) async {
    var response = LoginResponse();
    final url = Endpoints.user.password;
    final ret= HttpHelper.post(url, body: body);
    await ret.then((res) {
      response.status = res.statusCode;
      response.data = res.data;
      response.message = res.data['message'];
    })
    .catchError((e) {
      print('e -> $e');
      response.status = 500;
      response.data = e;
      response.message = 'Server Error';
      response.message = 'Please check your network connection and try again';
      response.errMessage = 'Please check your network connection and try again';
    });   
    return response;
  }
}