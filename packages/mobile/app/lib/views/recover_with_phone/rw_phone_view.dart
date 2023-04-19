import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:intl_phone_number_input/intl_phone_number_input.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/views/recover_with_phone/rw_phone_bloc.dart';

class RecoverWithPhoneScreen extends StatelessWidget {
  RecoverWithPhoneBloc _bloc;
  final TextEditingController controller = TextEditingController();
  var initialCountry = 'NG';
  PhoneNumber number = PhoneNumber(isoCode: 'NG');

  @override
  Widget build(BuildContext context) {
    _bloc = BlocProvider.of<RecoverWithPhoneBloc>(context);
    _bloc.add(InitBloc());
    final  statusBarHeight = MediaQuery.of(context).padding.top;
    return Scaffold(
      appBar: AppBar(centerTitle: true,
      elevation: 0,
        title: Image(fit: BoxFit.fitHeight, image: AssetImage('images/app-icon.png'),),
        backgroundColor: Colors.white,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
      ),
      body: Padding(padding: EdgeInsets.only(top: statusBarHeight, right: 15, left: 15),
          child: SingleChildScrollView(
          controller:  ScrollController(),
          child: Column(crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(height:20),
            CustomText(text: 'Forogt your password?', color: AppColors.blue, bold: true),
            SizedBox(height:10),
            Container(
              height:160,
              //color: Colors.white,
              margin:  EdgeInsets.all(15.0),
              child: Image(fit: BoxFit.fitHeight, image: AssetImage('images/phone-locked-pass.png')),
            ),
            SizedBox(height:20),
            CustomText(text: 'Enter your registered phone number', color: AppColors.blue, bold: true),
            SizedBox(height:4),
            CustomText(text: 'We\'ll send a recovery link to your number', color: Colors.grey, extraSmall:true, bold: true),
            
            SizedBox(height:20),
            
            Container(
                      height:84,
                      padding: EdgeInsets.symmetric(horizontal:20, vertical:5),
                      decoration: BoxDecoration(
                        color: Colors.white,
                      border: Border.all(width:1, color: AppColors.green),
                      borderRadius: BorderRadius.all(Radius.circular(15))
                    ),
                    child: BlocBuilder<RecoverWithPhoneBloc, RecoverWithPhoneState>(
                      condition: (previous, current) => previous.phoneVerified != current.phoneVerified,
                      builder: (context, state){
                        if(state.phoneVerified == null){
                          return Container();
                        }else{
                          return Row(crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Expanded(flex: 9,
                              child: InternationalPhoneNumberInput(
                                key: Key('phone'),
                                  onInputChanged: (PhoneNumber number) {
                                    //_bloc.add(ValidateNumber(number.phoneNumber));
                                    //print(number.phoneNumber);
                                    // if( _key.currentState.validate()){ 

                                    // }
                                  },
                                  onInputValidated: (bool value) {
                                   // print(value);
                                  },
                                  selectorConfig: SelectorConfig(
                                    selectorType: PhoneInputSelectorType.BOTTOM_SHEET,
                                  //  backgroundColor: Colors.black,
                                  ),
                                  formatInput: false,
                                  ignoreBlank: false,
                                  maxLength: 15,
                                  //autoValidate: AutovalidateMode.disabled,
                                  
                                  //autoValidate: true,
                                  selectorTextStyle: TextStyle(color: Colors.black),
                                  initialValue: number,
                                  textFieldController: controller,
                                  inputBorder: InputBorder.none,
                                ) ),
                                Expanded(child: state.phoneVerified == true 
                                    ? Icon(FontAwesomeIcons.checkCircle, size: 20, color: AppColors.primary,)
                                      : Icon(Icons.cancel, size: 20, color: Colors.red,),
                                      flex: 1,),
                            ],
                            );
                        }
                        } )
            ),
            SizedBox(height: 20.0),
            CustomButton(key: Key('logIn'),
                        label:'VERIFY', onPress:(){
                          //_bloc.add(CheckForm(true));
                            // if(_key.currentState.validate()){
                            //   _bloc.add(GetInputs(passwordController.text, context));
                            Navigator.pushNamed(context, PasswordOtpRoute);
                            // }
                        }),
          ],
          )),),
    );
  }

}