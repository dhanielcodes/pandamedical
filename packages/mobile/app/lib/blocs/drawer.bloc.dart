import 'package:flutter/cupertino.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';

class DrawerBloc {
  void logout(BuildContext context) {
    
    StorageHelper.set(StorageKeys.token, '');
    StorageHelper.set(StorageKeys.login, '');
    //Navigator.pushReplacement(context, NavNoAnimation(page: LoginPage()));
  }


  void dispose() {
    //dispose observables if make sense
  }
}