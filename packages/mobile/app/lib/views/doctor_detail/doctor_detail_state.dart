part of 'doctor_detail_bloc.dart';

class DoctorDetailState extends Equatable {
  
  final String DoctorDetail;
  final bool DoctorDetailVerified;
  final BuildContext context;
  
  const DoctorDetailState({this.DoctorDetail, this.DoctorDetailVerified, this.context});

  DoctorDetailState copyWith({ String DoctorDetail = '', bool DoctorDetailVerified, BuildContext context}) {
    return DoctorDetailState(
      DoctorDetail: DoctorDetail ?? this.DoctorDetail,
      context: context ?? this.context,
      DoctorDetailVerified: DoctorDetailVerified ?? this.DoctorDetailVerified
    );
  }

  @override
  List<Object> get props => [DoctorDetail, DoctorDetailVerified, context]; //DoctorDetail

  @override
  bool get stringify => true;
}