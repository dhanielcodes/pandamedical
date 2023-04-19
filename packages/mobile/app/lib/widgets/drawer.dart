import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/widgets/text.dart';

class CustomDrawer extends StatelessWidget{
  final List<dynamic> modules;
  const CustomDrawer(this.modules);

  @override
  Widget build(BuildContext context) {
    //modules..add();
    //, 'Enumeration'
    var _modules = <String>['Profile','Dashboard', 'Logout'];
    return Column(
      children: _modules.map((f){
        return  Padding(
          padding: const EdgeInsets.only(bottom: 0),
          child: GestureDetector(
              onTap: () => setLink(f, context),
              child: Padding(
                padding: EdgeInsets.symmetric(vertical: 10, horizontal: 15),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Icon(setIcon(f, context), color: Colors.white, size: 17, ),
                    SizedBox(width: 10,),
                    CustomText(text: f == 'Dashboard' ? 'Validation' : f, color: Colors.white,)
                  ],
                ),
              )
          ),
        );
      }).toList(),
    );
  }


  dynamic setIcon(String f, BuildContext context){
    switch (f) {
      case 'Profile':
        return FontAwesomeIcons.user;
      case 'Dashboard':
        return Icons.verified_user;
      case 'Targets':
        return Icons.control_point;
      case 'Meterbook':
        return Icons.library_books;
      case 'Bill Distribution':
        return Icons.attach_money;
      case 'Evaluation':
        return Icons.phone_iphone;
      case 'Enumeration':
        return Icons.system_update_alt;
      case 'Meter Reading':
        return Icons.phone_iphone;
      case 'Settings':
        return Icons.settings;
      case 'Logout':
        return Icons.exit_to_app;
        break;
      default:
        return FontAwesomeIcons.infoCircle;
    }
  }


  dynamic setLink(String f, BuildContext context){
    Navigator.of(context).pop();
    switch (f) {
      case 'Profile':
      //  return Navigator.pushNamed(context, ProfileRoute);
      
      case 'Settings':
        return Navigator.of(context).pushNamed(f);
      case 'Logout':
        return null;// notifier.logout(context);
        break;
      default:
        return FontAwesomeIcons.infoCircle;
    }
  }

}