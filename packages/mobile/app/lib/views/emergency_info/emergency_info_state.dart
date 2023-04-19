part of 'emergency_info_bloc.dart';

class EmergencyInfoState extends Equatable {
  
  
  final String phone, name;
  final bool phoneVerified;
  
  const EmergencyInfoState({this.phoneVerified, this.name, this.phone});

  EmergencyInfoState copyWith({bool phoneVerified, String name, String phone,}) {
    return EmergencyInfoState(
      phone : phone ?? this.phone,
      phoneVerified: phoneVerified ?? this.phoneVerified,
      name: name ?? this.name,
    );
  }

  @override
  List<Object> get props => [phoneVerified, name, phone]; //EmergencyInfo

  @override
  bool get stringify => true;
}