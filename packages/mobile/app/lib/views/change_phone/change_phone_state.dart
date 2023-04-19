part of 'change_phone_bloc.dart';

class ChangePhoneState extends Equatable {
  
  
  final String phone;
  final bool phoneVerified;
  
  const ChangePhoneState({this.phoneVerified, this.phone});

  ChangePhoneState copyWith({bool phoneVerified, String phone,}) {
    return ChangePhoneState(
      phone : phone ?? this.phone,
      phoneVerified: phoneVerified ?? this.phoneVerified,
    );
  }

  @override
  List<Object> get props => [phoneVerified, phone]; //ChangePhone

  @override
  bool get stringify => true;
}