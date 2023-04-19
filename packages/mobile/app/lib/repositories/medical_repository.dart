
import 'package:pandamedical/helpers/connection_helper.dart';
import 'package:pandamedical/models/appointments_response.dart';
import 'package:pandamedical/models/medical_specialty_response.dart';
import 'package:pandamedical/models/physician_response.dart';
import 'package:pandamedical/repositories/sources/network/medical.service.dart';
import 'package:pandamedical/models/available_slots_response.dart';

class MedicalRepository {

  MedicalService api = MedicalService();

  Future<MedicalSpecialtyResponse> getSpecialty() async {
    var response = MedicalSpecialtyResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.getSpecialty();
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  
  Future<AvailableSlotsResponse> createAppointment(data) async {
    var response = AvailableSlotsResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.createAppointment(data);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }

  
  Future<AppointmentsResponse> getAppointments(String id) async {
    var response = AppointmentsResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.getAppointments(id);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  
  //
  Future<AvailableSlotsResponse> availableSlots(String id, date) async {
    var response = AvailableSlotsResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.availableSlots(id, date);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
  
  Future<PhysicianResponse> getPhysician(String specialty) async {
    var response = PhysicianResponse();

    final hasConnection = await ConnectionHelper.hasConnection();

    if (hasConnection) {
      response = await api.physician(specialty);
    } else {
      response.message = 'Device offline';
      response.status = 406;
    }
    return response;
  }
   
  // Future<AddLabResultResponse> addMedical(body) async {
  //   var response = AddLabResultResponse();

  //   final hasConnection = await ConnectionHelper.hasConnection();

  //   if (hasConnection) {
  //     response = await api.addMedical(body);
  //   } else {
  //     response.message = 'Device offline';
  //     response.status = 406;
  //   }
  //   return response;
  // }
  
}
