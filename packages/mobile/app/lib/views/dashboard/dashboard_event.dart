part of 'dashboard_bloc.dart';

class DashboardEvent extends Equatable {
  const DashboardEvent();

  @override
  List<Object> get props => [];

  @override
  bool get stringify => true;
}

class SelectIndex extends DashboardEvent {
  final int index;
  const SelectIndex(this.index);
  @override
  List<Object> get props => [index];
}
class GetUser extends DashboardEvent{}

class Submit extends DashboardEvent {}
class InitDashboard extends DashboardEvent {
  final BuildContext context;
  const InitDashboard(this.context);
  @override
  List<Object> get props => [context];
}


