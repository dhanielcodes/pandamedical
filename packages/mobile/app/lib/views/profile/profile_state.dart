part of 'profile_bloc.dart';

class ProfileState extends Equatable {
  
  final BuildContext context;
  final String email;
  
  const ProfileState({this.context, this.email});

  ProfileState copyWith({ BuildContext context, String email}) {
    return ProfileState(
      context: context ?? this.context,
      email: email ?? this.email
    );
  }

  @override
  List<Object> get props => [context, email]; //Profile

  @override
  bool get stringify => true;
}