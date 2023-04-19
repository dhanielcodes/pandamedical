import 'dart:convert';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/models/register_response.dart';
import 'package:pandamedical/helpers/storage/storage.helper.dart';
import 'package:pandamedical/helpers/storage/storage.keys.dart';

import 'package:pandamedical/repositories/auth_repository.dart';
import 'package:pandamedical/widgets/toasts.dart';
import 'package:progress_dialog/progress_dialog.dart';

part 'register_event.dart';
part 'register_state.dart';


class RegisterBloc extends Bloc<RegisterEvent, RegisterState>{
  final _repository =  AuthRepository();

  @override
 RegisterState get initialState => const RegisterState();

@override
  void onTransition(Transition<RegisterEvent, RegisterState> transition) {
    print(transition);
    super.onTransition(transition);
  }

  bool validateEmail(String email) {
  Pattern pattern =
      r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
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

bool validatePassword(String password){
  Pattern pattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$';
  var regex = RegExp(pattern);
  if(password.isEmpty){
    return false;
  } else if(!regex.hasMatch(password)){
    print("password isn't valid");
    return false;
  }
  print('password is valid');
  return true;
}

bool validatePhone(String phoneNumber){
  
  if(phoneNumber.length == 13 || phoneNumber.length == 14){
    print('true phone: $phoneNumber length: ${phoneNumber.length}');
    return true;
  }
  print('false phone: $phoneNumber length: ${phoneNumber.length}');
  
  return false;
}
  
  @override
  Stream<RegisterState> mapEventToState(RegisterEvent event) async*{

     if (event is InitRegister) {
        yield state.copyWith(
              emailVerified: false,
              phoneVerified: false,
              showPassword: true,
              showConfirmPassword: true,
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
            showPassword: state.showPassword
            );
        }    
    }else if (event is ValidateNumber) {
      print(event.phoneNumber);
       if(validatePhone(event.phoneNumber)){
         yield state.copyWith(
            phoneVerified: true,
            phone: event.phoneNumber
          );
        }else{
        yield state.copyWith(
              phoneVerified: false,
            );
        }    
    }else if(event is ViewPassword){
        yield state.copyWith(
          showPassword: !state.showPassword,
        );
    }else if(event is ViewConfirmPassword){
        yield state.copyWith(
          showConfirmPassword: !state.showConfirmPassword,
        );
    }else if(event is SetDateOfBirth){
        yield state.copyWith(
          dateOfBirth: event.date,
        );
    }else if(event is CheckForm){
        yield state.copyWith(
          initForm: event.value,
        );
    }else if(event is GetInputs) {
       var pr = ProgressDialog(event.context, isDismissible: false);
       pr.style(
         message: 'proccessing... ',
         borderRadius: 10,
         progressWidget: Container(child: CircularProgressIndicator( valueColor: AlwaysStoppedAnimation<Color>(Colors.green),), 
         width: 20, height: 20, padding: EdgeInsets.all(15),),
         elevation: 10,

       );

       if(state.email == null){
          CustomToast.show('please enter a valid email');
        }else if(!validateEmail(state.email)){
          CustomToast.show('please enter a valid email');
        }else if(event.password.isEmpty){
          CustomToast.show('Password field is empty');
        }else if(event.password != event.confirmPassword){
          CustomToast.show('Passwords do not match.');
        }else if(state.phone == null || state.phone == '' ){
          CustomToast.show('Phone number is required');
        }else if(event.dateOfBirth == null || event.dateOfBirth == ''){
          CustomToast.show('Your date of birth is required');
        }else if(event.gender == null || event.gender == ''){
          CustomToast.show('Your gender is required');
        }else{
          
          yield state.copyWith(
            loading: true,
            context: event.context
          );
          await pr.show();
          var resBody = {};
          resBody['firstName'] = event.firstName;
          resBody['lastName'] = event.lastName;
          resBody['email'] = state.email;
          resBody['phone'] = state.phone;
          resBody['password'] = event.password;
          resBody['gender'] = event.gender;
          resBody['dateOfBirth'] = event.dateOfBirth;

          var response = await register(resBody, event.context);
          await pr.hide();
          yield state.copyWith(
              loading: false,
            );          
          if(response.status == 200) {
            // StorageHelper.set(StorageKeys.firstName, event.firstName);
            // StorageHelper.set(StorageKeys.lastName, event.lastName);
            // StorageHelper.set(StorageKeys.email, state.email);
            // StorageHelper.set(StorageKeys.phone, state.phone);
            // StorageHelper.set(StorageKeys.gender, event.gender);
            // StorageHelper.set(StorageKeys.dateOfBirth, event.dateOfBirth);
            
            CustomToast.show(response.message);
            Navigator.pop(event.context);
            await Navigator.of(event.context).pushNamedAndRemoveUntil(DashboardViewRoute, (Route<dynamic> route) => false);
             //popUntil(ModalRoute.withName(DashboardViewRoute));
          }else {
            
            await _showMyDialog(state.context, response.errMessage);
          }

        }

      yield state.copyWith(
        email: state.email,
        
      );
    }
    //
  }

  Future<RegisterResponse> register(dynamic resBody, BuildContext context) async {
    
    var request = json.encode(resBody);
    print(request);

    final ret = await _repository.register(resBody);
    return ret;
  }

Future<void> _showMyDialog(context, dynamic message) async {
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
            FlatButton(child: Text('OK'),
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