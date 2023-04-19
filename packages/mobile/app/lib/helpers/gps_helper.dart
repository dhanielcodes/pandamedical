// import 'dart:async';

// import 'package:android_intent/android_intent.dart';
// import 'package:geolocation/geolocation.dart';

// class GPSHelper {
//   static GeolocationResult result;

//   static Future _connect() async {
//     result = await Geolocation.requestLocationPermission(
//     permission: const LocationPermission(  android: LocationPermissionAndroid.fine, ios: LocationPermissionIOS.always,),
//     openSettingsIfDenied: true,);
// }

//   static Future<bool> hasGPS() async {
//     await _connect();
//     if(result.isSuccessful) {
//       print("gps "+result.toString());
//       return true;
//     } 
    
//     toastError(result.error.type);
//       return false;
//       } 
  
//   static Future<Location> GPSListener() async {
//     await _connect();
//     StreamSubscription<LocationResult> subscription = Geolocation.currentLocation(accuracy: LocationAccuracy.best)
//     .listen((result) {
//       if(result.isSuccessful) {
//          //result.location.;
//         // todo with result
//       }
//     });
  
//   }

//   static toastError(GeolocationResultErrorType error){
//     switch (error) {
//       case GeolocationResultErrorType.locationNotFound:
//         print('location not found');
//         break;
//       case GeolocationResultErrorType.permissionNotGranted:
//         print('permission not granted');
//         break;
//       case GeolocationResultErrorType.permissionDenied:
//         print('permission denied');
//         break;
//       case GeolocationResultErrorType.serviceDisabled:
//         print('service disabled');
//         break;
//       case GeolocationResultErrorType.playServicesUnavailable:
//         print('play services unavailable');
//         break;
//       default:
//         assert(false);
//         print('gps service unavailable');
//       }


//     }
//     static openLocationSetting() async {
//       final AndroidIntent intent = new AndroidIntent(action: 'action_location_source_settings');
//       intent.launch();
//     }

// }
