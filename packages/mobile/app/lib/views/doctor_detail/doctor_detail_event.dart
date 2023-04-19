part of 'doctor_detail_bloc.dart';

class DoctorDetailEvent extends Equatable {
  const DoctorDetailEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class VerifyDoctorDetail extends DoctorDetailEvent {
  final String DoctorDetail;
  const VerifyDoctorDetail(this.DoctorDetail);
  @override
  List<Object> get props => [DoctorDetail];
}

class Submit extends DoctorDetailEvent {}
class InitDoctorDetail extends DoctorDetailEvent {}


