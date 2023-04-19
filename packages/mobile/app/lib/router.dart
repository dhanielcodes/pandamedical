
import 'package:flutter/material.dart';
import 'package:pandamedical/views/booking_complete/booking_complete_view.dart';
import 'package:pandamedical/views/dashboard/dashboard_view.dart';
import 'package:pandamedical/views/dashboard/home.dart';
import 'package:pandamedical/views/doctor_detail/doctor_detail_view.dart';
import 'package:pandamedical/views/doctors/doctors_view.dart';
import 'package:pandamedical/views/doctors_list/doctors_list_view.dart';
import 'package:pandamedical/views/hospitals_list/hospitals_list_view.dart';
import 'package:pandamedical/views/lab_detail/lab_detail_view.dart';
import 'package:pandamedical/views/login/login_view.dart';
import 'package:pandamedical/views/my_appointments/my_appointments_view.dart';
import 'package:pandamedical/views/otp_screen/otp_view.dart';
import 'package:pandamedical/views/select_slot/select_slot_view.dart';
import 'package:pandamedical/views/set_pin/set_pin_view.dart';
import 'package:pandamedical/views/reset_pin/reset_pin_view.dart';
import 'package:pandamedical/views/register/register_view.dart';
import 'package:pandamedical/views/splash_screen/splash_screen.dart';
import 'package:pandamedical/views/set_fingerprint/fingerprint_view.dart';
import 'package:pandamedical/views/appointment/appointment_view.dart';

import 'package:pandamedical/views/forgot_pass/forgot_pass_view.dart';
import 'package:pandamedical/views/recover_with_email/rw_email_view.dart';
import 'package:pandamedical/views/recover_with_phone/rw_phone_view.dart';
import 'package:pandamedical/views/password_otp/password_otp_view.dart';
import 'package:pandamedical/views/hospital/hospital_view.dart';
import 'package:pandamedical/views/confirm_booking/confirm_booking_view.dart';
import 'package:pandamedical/views/add_vital/add_vital_view.dart';
import 'package:pandamedical/views/my_vitals/my_vitals_view.dart';
import 'package:pandamedical/views/vitals/vitals_view.dart';
import 'package:pandamedical/views/lab_results/lab_results_view.dart';
import 'package:pandamedical/views/add_lab_result/add_lab_result_view.dart';
import 'package:pandamedical/views/facilities/facilities_view.dart';
import 'package:pandamedical/views/profile/profile_view.dart';
import 'package:pandamedical/views/primary_specialist/primary_specialist_view.dart';
import 'package:pandamedical/views/change_address/change_address_view.dart';
import 'package:pandamedical/views/change_email/change_email_view.dart';
import 'package:pandamedical/views/change_insurance/change_insurance_view.dart';
import 'package:pandamedical/views/change_password/change_password_view.dart';
import 'package:pandamedical/views/change_passcode/change_passcode_view.dart';
import 'package:pandamedical/views/change_phone/change_phone_view.dart';
import 'package:pandamedical/views/change_unit/change_unit_view.dart';
import 'package:pandamedical/views/emergency_info/emergency_info_view.dart';
import 'package:pandamedical/views/blood_type/blood_type_view.dart';
import 'package:pandamedical/views/vital_detail/vital_detail_view.dart';
import 'package:pandamedical/views/vital_detail/list_detail_view.dart';
import 'package:pandamedical/views/medical_records/records.dart';


import 'constants/routing_constants.dart';
import 'views/password_success/password_success_view.dart';

Route<dynamic> generateRoute(RouteSettings settings) {
  // Here we'll handle all the routing
  switch (settings.name) {
     case LauncherScreen:
       return MaterialPageRoute(settings: RouteSettings(name: LauncherScreen), 
         builder: (context) => SplashScreen());

    case LoginViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: LoginViewRoute), 
         builder: (context) => LoginScreen());//
      
    case RegisterViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: RegisterViewRoute), 
         builder: (context) => RegisterScreen());//
    case OtpViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: OtpViewRoute), 
         builder: (context) => OtpScreen());
    case SetPinViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: SetPinViewRoute), 
         builder: (context) => SetPinScreen());
    case ResetPinViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ResetPinViewRoute), 
         builder: (context) => ResetPinScreen());
    case FingerprintViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: FingerprintViewRoute), 
         builder: (context) => FingerPrintView());
    case HomeRoute:
      return MaterialPageRoute(settings: RouteSettings(name: HomeRoute), 
         builder: (context) => DashboardView());
    case DashboardViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: DashboardViewRoute), 
         builder: (context) => Home());
    case AppointmentViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: AppointmentViewRoute), 
         builder: (context) => AppointmentView());
    case MyAppointmentViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: MyAppointmentViewRoute), 
         builder: (context) => MyAppointmentView());
    case DoctorsViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: DoctorsViewRoute), 
         builder: (context) => DoctorsView());
    case DoctorsListViewRoute:
      var obj = settings.arguments;
      return MaterialPageRoute(settings: RouteSettings(name: DoctorsListViewRoute),
         builder: (context) => DoctorsListView(doctorType:obj));
    case HospitalsListViewRoute:
      var obj = settings.arguments; // arguments: 'Ophthalmologist'
      return MaterialPageRoute(settings: RouteSettings(name: HospitalsListViewRoute), 
         builder: (context) => HospitalsListView(hospitalType:obj));
         
    case LabDetailViewRoute:
      var obj = settings.arguments; // arguments: 'Ophthalmologist'
      return MaterialPageRoute(settings: RouteSettings(name: LabDetailViewRoute), 
         builder: (context) => LabDetailView(obj));
         //View
    case VitalHistoryViewRoute:
      var obj = settings.arguments; // arguments: 'Ophthalmologist'
      return MaterialPageRoute(settings: RouteSettings(name: VitalHistoryViewRoute), 
         builder: (context) => VitalHistoryView(obj));
      case VitalDetailViewRoute:
      var obj = settings.arguments; // arguments: 'Ophthalmologist'
      return MaterialPageRoute(settings: RouteSettings(name: VitalDetailViewRoute), 
         builder: (context) => VitalDetailView(obj));
    case ForgotPassRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ForgotPassRoute), 
         builder: (context) => ForgotPassScreen());
    case RecoverWithEmailRoute:
      return MaterialPageRoute(settings: RouteSettings(name: RecoverWithEmailRoute), 
         builder: (context) => RecoverWithEmailScreen());
    case RecoverWithPhoneRoute:
      return MaterialPageRoute(settings: RouteSettings(name: RecoverWithPhoneRoute), 
         builder: (context) => RecoverWithPhoneScreen());
    case PasswordOtpRoute:
      return MaterialPageRoute(settings: RouteSettings(name: PasswordOtpRoute), 
         builder: (context) => PasswordOtpScreen());
    case PasswordSuccessRoute:
      return MaterialPageRoute(settings: RouteSettings(name: PasswordSuccessRoute), 
         builder: (context) => PasswordSuccessScreen());
    case HospitalRoute:
      return MaterialPageRoute(settings: RouteSettings(name: HospitalRoute), 
         builder: (context) => HospitalView());
    case DoctorDetailViewRoute:
      return MaterialPageRoute(settings: RouteSettings(name: DoctorDetailViewRoute), 
         builder: (context) => DoctorDetailView());
    case SelectSlotViewRoute:
      var obj = settings.arguments;
      return MaterialPageRoute(settings: RouteSettings(name: SelectSlotViewRoute), 
         builder: (context) => SelectSlotView(data:obj));
    case ConfirmBookingViewRoute:
      var obj = settings.arguments;
      return MaterialPageRoute(settings: RouteSettings(name: ConfirmBookingViewRoute), 
         builder: (context) => ConfirmBookingView(data:obj));
    case BookingCompleteRoute:
      return MaterialPageRoute(settings: RouteSettings(name: BookingCompleteRoute), 
         builder: (context) => BookingCompleteView()); 
    case MyVitalsRoute:
      return MaterialPageRoute(settings: RouteSettings(name: MyVitalsRoute), 
         builder: (context) => VitalsView());
    case VitalsRoute:
      return MaterialPageRoute(settings: RouteSettings(name: VitalsRoute), 
         builder: (context) => VitalsView());
    case LabResultsRoute:
      return MaterialPageRoute(settings: RouteSettings(name: LabResultsRoute), 
         builder: (context) => LabResultsView());
    case MedicalRecordsRoute:
      return MaterialPageRoute(settings: RouteSettings(name: MedicalRecordsRoute), 
         builder: (context) => MedicalRecordsView());
    case AddLabResultRoute:
            //var obj = settings.arguments;
      return MaterialPageRoute(settings: RouteSettings(name: AddLabResultRoute), 
         builder: (context) => AddLabResultView());
/*
         */
    case AddVitalRoute:
      var obj = settings.arguments;
      return MaterialPageRoute(settings: RouteSettings(name: AddVitalRoute), 
         builder: (context) => AddVitalView(obj));
    case FacilitiesRoute:
      return MaterialPageRoute(settings: RouteSettings(name: FacilitiesRoute), 
         builder: (context) => FacilitiesView());
    case ProfileRoute:
      var obj = settings.arguments;
      return MaterialPageRoute(settings: RouteSettings(name: ProfileRoute), 
         builder: (context) => ProfileScreen(user:obj));
    case PrimarySpecialistRoute:
      return MaterialPageRoute(settings: RouteSettings(name: PrimarySpecialistRoute), 
         builder: (context) => PrimarySpecialistView());

    case ChangePhoneRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ChangePhoneRoute), 
         builder: (context) => ChangePhoneView());
    case ChangeEmailRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ChangeEmailRoute), 
         builder: (context) => ChangeEmailView());
    case ChangeAddressRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ChangeAddressRoute), 
         builder: (context) => ChangeAddressView());
    case ChangePasswordRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ChangePasswordRoute), 
         builder: (context) => ChangePasswordView());
    case ChangePasscodeRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ChangePasscodeRoute), 
         builder: (context) => ChangePasscodeView());
    case ChangeUnitsRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ChangeUnitsRoute), 
         builder: (context) => ChangeUnitView());
    case ChangeInsuranceRoute:
      return MaterialPageRoute(settings: RouteSettings(name: ChangeInsuranceRoute), 
         builder: (context) => ChangeInsuranceView());
    case BloodTypeRoute:
      return MaterialPageRoute(settings: RouteSettings(name: BloodTypeRoute), 
         builder: (context) => BloodTypeView());
    
    case EmergencyInformationRoute:
      return MaterialPageRoute(settings: RouteSettings(name: EmergencyInformationRoute), 
      builder: (context) => EmergencyInfoView());
         
     default:
       return null;
  }


}