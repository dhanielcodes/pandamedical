// import 'package:connectivity/connectivity.dart';
// import 'package:permission_handler/permission_handler.dart';

// class PermissionHelper {
//   static ConnectivityResult _connectivityResult;
//   static Permission _permission;
//   PermissionStatus _permissionStatus = PermissionStatus.undetermined;

//   // static Future _connect() async {
//   //   _connectivityResult = await Connectivity().checkConnectivity();
//   // }

//   static Future<bool> hasPermission(Permission permission) async {
//     final status = await permission.request();
//     switch (status) {
//       case PermissionStatus.denied:
//         return false;
//       case PermissionStatus.granted:
//         return true;
//       default:
//         return false;
//     }
//   }

//   static Future<void> requestPermission(Permission permission) async {
//     //final status = await permission.request();

//     // setState(() {
//     //   print(status);
//     //   _permissionStatus = status;
//     //   print(_permissionStatus);
//     // });
//   }
// }