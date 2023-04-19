
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:provider/provider.dart';
import 'package:pandamedical/views/dashboard/dashboard_bloc.dart';
import 'package:pandamedical/views/login/login_bloc.dart';
import 'package:pandamedical/views/register/register_bloc.dart';
import 'package:pandamedical/views/doctors_list/doctors_list_bloc.dart';
import 'package:pandamedical/views/hospitals_list/hospitals_list_bloc.dart';
import 'package:pandamedical/views/recover_with_phone/rw_phone_bloc.dart';
import 'package:pandamedical/views/recover_with_email/rw_email_bloc.dart';
import 'package:pandamedical/views/add_vital/add_vital_bloc.dart';
import 'package:pandamedical/views/my_vitals/my_vitals_bloc.dart';
import 'package:pandamedical/views/vitals/vitals_bloc.dart';
import 'package:pandamedical/views/add_lab_result/add_lab_result_bloc.dart';
import 'package:pandamedical/views/change_phone/change_phone_bloc.dart';

import 'package:pandamedical/views/change_address/change_address_bloc.dart';
import 'package:pandamedical/views/change_unit/change_unit_bloc.dart';
import 'package:pandamedical/views/change_email/change_email_bloc.dart';
import 'package:pandamedical/views/change_password/change_password_bloc.dart';
import 'package:pandamedical/views/change_passcode/change_passcode_bloc.dart';
import 'package:pandamedical/views/change_insurance/change_insurance_bloc.dart';
import 'package:pandamedical/views/emergency_info/emergency_info_bloc.dart';
import 'package:pandamedical/views/blood_type/blood_type_bloc.dart';
import 'package:pandamedical/views/primary_specialist/primary_specialist_bloc.dart';
import 'package:pandamedical/views/lab_results/lab_results_bloc.dart';
import 'package:pandamedical/views/doctors/doctors_bloc.dart';
import 'package:pandamedical/views/select_slot/select_slot_bloc.dart';
import 'package:pandamedical/views/confirm_booking/confirm_booking_bloc.dart';
import 'package:pandamedical/views/my_appointments/my_appointments_bloc.dart';


// import 'package:opsmanagerapp/blocs/auth.bloc.dart';
// import 'package:opsmanagerapp/blocs/drawer.bloc.dart'; 

class AppBlocProvider extends StatelessWidget {
  final Widget child;

  const AppBlocProvider({Key key, this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Provider.debugCheckInvalidValueType = null;

    return MultiProvider(
      providers: [
         // ignore: unnecessary_new
         Provider<LoginBloc>.value(value: LoginBloc()),
         BlocProvider<RegisterBloc>.value(value: RegisterBloc()),
         BlocProvider<DashboardBloc>.value(value: DashboardBloc()),
         BlocProvider<DoctorsListBloc>.value(value: DoctorsListBloc()),
         BlocProvider<RecoverWithPhoneBloc>.value(value: RecoverWithPhoneBloc()),
         BlocProvider<RecoverWithEmailBloc>.value(value: RecoverWithEmailBloc()),
         BlocProvider<AddVitalBloc>.value(value: AddVitalBloc()),
         BlocProvider<AddLabResultBloc>.value(value: AddLabResultBloc()),
         BlocProvider<HospitalsListBloc>.value(value: HospitalsListBloc()),
         BlocProvider<ChangePhoneBloc>.value(value: ChangePhoneBloc()),
         BlocProvider<ChangeEmailBloc>.value(value: ChangeEmailBloc()),
         BlocProvider<ChangePasscodeBloc>.value(value: ChangePasscodeBloc()),
         BlocProvider<ChangeInsuranceBloc>.value(value: ChangeInsuranceBloc()),
         BlocProvider<ChangePasswordBloc>.value(value: ChangePasswordBloc()),
         BlocProvider<ChangeUnitBloc>.value(value: ChangeUnitBloc()),
         BlocProvider<BloodTypeBloc>.value(value: BloodTypeBloc()),
         BlocProvider<ChangeAddressBloc>.value(value: ChangeAddressBloc()),
         BlocProvider<EmergencyInfoBloc>.value(value: EmergencyInfoBloc()),
         BlocProvider<PrimarySpecialistBloc>.value(value: PrimarySpecialistBloc()),
         BlocProvider<MyVitalsBloc>.value(value: MyVitalsBloc()),
         BlocProvider<VitalsBloc>.value(value: VitalsBloc()),
         BlocProvider<LabResultsBloc>.value(value: LabResultsBloc()),
         BlocProvider<DoctorsBloc>.value(value: DoctorsBloc()),
         BlocProvider<DoctorsListBloc>.value(value: DoctorsListBloc()),
         BlocProvider<SelectSlotBloc>.value(value: SelectSlotBloc()),
         BlocProvider<ConfirmBookingBloc>.value(value: ConfirmBookingBloc()),
         BlocProvider<MyAppointmentBloc>.value(value: MyAppointmentBloc()),
         
        // BlocProvider<BillBloc>(create: (context) => BillBloc(),
        //   child: BillDashboard(),),
      ],
      child: child
    );
  }
}