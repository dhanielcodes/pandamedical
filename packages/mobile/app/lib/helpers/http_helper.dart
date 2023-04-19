import 'dart:io';

import 'package:dio/adapter.dart';
import 'package:dio/dio.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';

class HttpHelper {
  static Dio _client;

  static Future<Dio> _getInstance() async {
    final storageToken = await StorageHelper.get(StorageKeys.token);
    //print('Bearer $storageToken');

    _client ??= Dio();
    (_client.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
        (HttpClient client) {
      client.badCertificateCallback =
          (X509Certificate cert, String host, int port) => true;
      return client;
    };

    var headers = <String, dynamic>{};
    headers['Content-Type'] = 'application/json';
    if (storageToken != null) headers['Authorization'] = 'Bearer $storageToken';

    _client.options.headers = headers;
    return _client;
  }

  static Future<Response> get(String url) async {
    final instance = await _getInstance();
    return instance.get(url);
  }

  static Future<Response> post(String url, { dynamic body }) async {
    final instance = await _getInstance();
    return instance.post(url, data: body);
  } 

  static Future<Response> put(String url, { dynamic body }) async {
    final instance = await _getInstance();
    return instance.put(url, data: body);
  } 

  static Future<Response> delete(String url, { dynamic body }) async {
    final instance = await _getInstance();
    return instance.delete(url);
  } 
}