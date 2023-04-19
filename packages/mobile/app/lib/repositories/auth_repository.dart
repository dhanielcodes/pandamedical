
import 'package:pandamedical/helpers/connection_helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/models/auth_user_response.dart';
import 'package:pandamedical/models/login_response.dart';
import 'package:pandamedical/models/register_response.dart';
import 'package:pandamedical/repositories/sources/network/auth.service.dart';
import 'package:pandamedical/widgets/toasts.dart';

class AuthRepository {
  AuthService api = AuthService();

  Future<LoginResponse> login(dynamic request) async {
    var response = LoginResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.login(request);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  
  Future<RegisterResponse> register(dynamic request) async {
    var response = RegisterResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.register(request);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  Future<AuthUserResponse> me() async {
    var response = AuthUserResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.me();
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }

  Future<LoginResponse> changePassword(dynamic request) async {
   // print('Validation_REPO ${request}');
    var response = LoginResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.changePassword(request);
    } else {
      response.message = 'Device offline';
      CustomToast.show(response.message);
    }

    return response;
  }

  
  void logout()  {
   
    StorageHelper.remove(StorageKeys.token);
    StorageHelper.remove(StorageKeys.id);
    //StorageHelper.remove(StorageKeys.email, response.user.email);
    StorageHelper.set(StorageKeys.login, 'false');
    StorageHelper.remove(StorageKeys.response);
    //StorageHelper.remove(StorageKeys.user, json.encode(response.user.toJson()));

  }
}
