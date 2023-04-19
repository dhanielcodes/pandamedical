

import 'dart:convert';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/models/login_response.dart';
import 'package:pandamedical/repositories/auth_repository.dart';
import 'package:pandamedical/widgets/toasts.dart';

import 'package:progress_dialog/progress_dialog.dart';

part 'login_event.dart';
part 'login_state.dart';


class LoginBloc extends Bloc<LoginEvent, LoginState>{
  final _repository =  AuthRepository();

  @override
 LoginState get initialState => const LoginState();

@override
  void onTransition(Transition<LoginEvent, LoginState> transition) {
    print(transition);
    super.onTransition(transition);
  }

  bool validateEmail(String email) {
  Pattern pattern =
      r"^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$";
  var regex =  RegExp(pattern);
  if (email == null){
    return false;
  }else if(!regex.hasMatch(email)){
    print('email false');
    return false;
  }
  print('true');
    return true;
}
  
  @override
  Stream<LoginState> mapEventToState(LoginEvent event) async*{

     if (event is InitLogin) {

        yield state.copyWith(
              emailVerified: false,
              showPassword: true,
            );
    }else if (event is VerifyEmail) {
       if(validateEmail(event.email)){
         yield state.copyWith(
            emailVerified: true,
            email: event.email,
            showPassword: state.showPassword
          );
        }else{
        yield state.copyWith(
              emailVerified: false,
              email: event.email,
              showPassword: state.showPassword
            );
        }
         
    }else if(event is ViewPassword){
      print('state.showPassword: ${state.showPassword}');
      var tempPassword = !state.showPassword;
        yield state.copyWith(
          showPassword: tempPassword,
        );
    }
    else if(event is CheckForm){
        yield state.copyWith(
          initForm: event.value,
        );
    }else if(event is GetInputs) {
       var pr = ProgressDialog(event.context, isDismissible: false);
       pr.style(
         message: 'processing... ',
         borderRadius: 10,
         progressWidget: Container(child: CircularProgressIndicator( valueColor: AlwaysStoppedAnimation<Color>(Colors.green),), 
         width: 20, height: 20, padding: EdgeInsets.all(15),),
         elevation: 10,

       );

       if(state.email == null){
          CustomToast.show('please enter a valid email');
        }else if(!validateEmail(state.email)){
          CustomToast.show('please enter a valid email');
        }else  if(event.password.isEmpty){
          CustomToast.show('Password field is empty');
        }else{
          
          yield state.copyWith(
            loading: true,
            context: event.context
          );
          await pr.show();
          LoginResponse response = await signIn(state.email, event.password, event.context);
          await pr.hide();
          yield state.copyWith(
              loading: false,
            );
          
          if(response.status == 200) {
            CustomToast.show(response.message);
            Navigator.pop(event.context);
            await Navigator.of(event.context).pushNamedAndRemoveUntil(DashboardViewRoute, (Route<dynamic> route) => false);
             //popUntil(ModalRoute.withName(DashboardViewRoute));
          }else {
            String message = '';
            if(response.errMessage != null){
              message = response.errMessage;
            }else{
              message = response.message;
            }
            await _showMyDialog(state.context, '${response.errMessage}');
          }

        }

      yield state.copyWith(
        email: state.email,
        
      );
    }
  }

  Future<LoginResponse> signIn(String email, String password, BuildContext context) async {
    var resBody = {};
    resBody['email'] = email;
    resBody['password'] = password;
    var request = json.encode(resBody);
    print('LOGIN_BLOC* '+request);

    final ret = await _repository.login(resBody);
    return ret;
  }

Future<void> _showMyDialog(context, String message) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Error!'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('$message'),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('OK'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }


}