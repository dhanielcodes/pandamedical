// ignore: library_prefixes
import 'base_url.dart' as BASE_URL;

class _Login {
  final auth = BASE_URL.authProduction;
}

class _User {
  final password = BASE_URL.baseProduction + '/update-password';
  final register = BASE_URL.baseProduction + '/user/register';
  final me = BASE_URL.baseProduction + '/auth/me';

  
  final changeEmail = BASE_URL.baseProduction + '/user/email/update';
  final verifyEmail = BASE_URL.baseProduction + '/user/email/verify';
  final verifyPhone = BASE_URL.baseProduction + '/user/phone/verify';
  final verifyPasscode = BASE_URL.baseProduction + '/user/passcode/verify';
  final setPasscode = BASE_URL.baseProduction + '/user/passcode';
  final changePasscode = BASE_URL.baseProduction + '/user/passcode/update';
  final changePassword = BASE_URL.baseProduction + '/user/password/update';
  final resetPassword = BASE_URL.baseProduction + '/user/password/reset';
  final changePhone = BASE_URL.baseProduction + '/user/phone/update';
  final forgotPassword = BASE_URL.baseProduction + '/user/pasword/forgotpassword';//email or otp
  final forgotPasswordEmail = BASE_URL.baseProduction + '/user/pasword/verify/email';
  final forgotPasswordOtp = BASE_URL.baseProduction + '/user/pasword/verify/otp';
  final passwordVerifyOtp = BASE_URL.baseProduction + '/user/pasword/check/otp';
  final updateAdditionalInfo = BASE_URL.baseProduction + '/user/update/additionalinfo';
  final updateUser = BASE_URL.baseProduction + '/user/update';
}

class _Vitals {
  final history = BASE_URL.baseProduction + '/vitalshistory';
  final vitals = BASE_URL.baseProduction + '/vitals';
}
class _LabTests {
  final labresults = BASE_URL.baseProduction + '/labtestresults';
  final type = BASE_URL.baseProduction + '/labtests';
}

class _Medical {
  final specialty = BASE_URL.baseProduction + '/medicalspecialty';
  final credentials = BASE_URL.baseProduction + '/medicalcredentials';
  final physician = BASE_URL.baseProduction + '/physician';
  final appointments = BASE_URL.baseProduction + '/appointments';
  final timeslots = BASE_URL.baseProduction + '/timeslots';
}
class _Appointment {
  final appointments = BASE_URL.baseProduction + '/appointments';
}

final login = _Login();
final user = _User();
final vital = _Vitals();
final labtest = _LabTests();
final medical = _Medical();
final appointment = _Appointment();