part of 'dashboard_bloc.dart';

class DashboardState extends Equatable {

  final int selectedIndex;
  final BuildContext context;
  final  List<UserVital> vitals;
  final int touchedIndex;
  final User user;
  

  const DashboardState({this.selectedIndex, this.user, this.context, this.touchedIndex, this.vitals});

  DashboardState copyWith({int selectedIndex = 0, BuildContext context, User user, int touchedIndex, List<UserVital> vitals = const []}) {
    return DashboardState(
        context: context ?? this.context,
        selectedIndex: selectedIndex ?? this.selectedIndex,
        touchedIndex: touchedIndex ?? this.touchedIndex,
        vitals: vitals ?? this.vitals,
        user: user ?? this.user,

    );
  }

  @override
  List<Object> get props => [selectedIndex, context, touchedIndex, user, vitals]; //Dashboard

  @override
  bool get stringify => true;
}