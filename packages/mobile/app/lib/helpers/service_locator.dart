import 'package:get_it/get_it.dart';

import 'local_auth_service.dart';

//GetIt locator = GetI();
final locator = GetIt.instance;

void setupLocator() {
 locator.registerLazySingleton(() => LocalAuthenticationService());
}