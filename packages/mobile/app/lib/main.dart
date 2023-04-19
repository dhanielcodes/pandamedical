import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:responsive_framework/responsive_framework.dart';
//import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';
import 'package:pandamedical/blocs/base_bloc.dart';

import 'package:pandamedical/router.dart' as router;
import 'helpers/storage/storage.helper.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'views/splash_screen/splash_screen.dart';

void main() {
  runApp(MyApp());
}

Future<bool> isFirstLaunch() async {
  var check = await StorageHelper.get(StorageKeys.firstUser);
  if(check == null){
    return true;
  }
  return false;
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AppBlocProvider(
      child: MaterialApp(
        builder: (context, widget) => ResponsiveWrapper.builder(
          BouncingScrollWrapper.builder(context, widget),
          maxWidth: 1200,
          minWidth: 450,
          defaultScale: true,
          breakpoints: [
            ResponsiveBreakpoint.resize(440, name: MOBILE),
            ResponsiveBreakpoint.autoScale(480, name: TABLET),
            ResponsiveBreakpoint.resize(1000, name: DESKTOP),
          ],
          background: Container(color: Color(0xFFF5F5F5))),
      debugShowCheckedModeBanner: false,
      localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
    ],
    supportedLocales: [
          const Locale('en', 'US'), // English
          const Locale('th', 'TH'), // Thai
    ],
      title: 'Panda Medical',
      onGenerateRoute: router.generateRoute,
      theme: ThemeData(
        primarySwatch: Colors.green,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        textTheme: GoogleFonts.montserratTextTheme(
          Theme.of(context).textTheme,
        ),
      ),
      home:SplashScreen(),// MyVitalsView DashboardView(), //DoctorDetailView  AddVitalView MyVitalsView
    ),
    );
  }
}

