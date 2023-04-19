import 'package:fluttertoast/fluttertoast.dart';
import 'package:pandamedical/Styles/app_colors.dart' as colors;
import 'package:pandamedical/Styles/dimens.dart' as dimens;

class CustomToast {
  static void show(String msg) => Fluttertoast.showToast(
    msg: msg ?? 'Toast message',
    toastLength: Toast.LENGTH_LONG,
    gravity: ToastGravity.BOTTOM,
    timeInSecForIos: 2,
    backgroundColor: colors.AppColors().toastBackgroundColor,
    textColor: colors.AppColors().toastTextColor,
    fontSize: dimens.fontText
  );

  static void cancelAll() => Fluttertoast.cancel();
}