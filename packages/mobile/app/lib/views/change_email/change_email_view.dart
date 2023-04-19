import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/views/change_email/change_email_bloc.dart';

class ChangeEmailView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    var _bloc = BlocProvider.of<ChangeEmailBloc>(context);
     _bloc.add(InitChangeEmail());
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Change Email Address', color: AppColors.blue, big:true, bold: true),
        backgroundColor: AppColors.greenBG,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
      ),
      
      body: SingleChildScrollView(
        child: Column(children: [
          Stack(children: <Widget>[
                      Container(height: screenHeight, color: Colors.white,),
                      Container(child: Column(
                          children: [
                            Container(height: 170,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                          ),]
                        )
                      ),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0,
            child: Column(
            children: [Image(height: 80, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/email.png')),
            SizedBox(height:10),
            Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            elevation: 45,
                            child:Padding(padding: EdgeInsets.symmetric(horizontal:20, vertical: 30),
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                            SizedBox(height:20),
                            CustomText(text: 'Current Password*', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        BlocBuilder<ChangeEmailBloc, ChangeEmailState>(
                condition: (previous, current) => previous.showPassword != current.showPassword,
                builder: (context, state) {
                  
                    if(state.showPassword == null){
                      return Container();
                    }else{
                      print('state.showPassword:: ${state.showPassword}');
                      return Card(
                        shadowColor: AppColors.grey1,
                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                          elevation: 14,
                          child: CustomFormField(
                            key: Key('password'),
                            password: state.showPassword,
                            placeholder: 'Password',
                            suffixIcon: GestureDetector(
                              key: Key('togglePassword'),
                              child: Icon(state.showPassword == true ? FontAwesomeIcons.eye : FontAwesomeIcons.eyeSlash, size: 20,
                               color: AppColors.blue,),
                              onTap: (){ _bloc.add(ViewPassword());},
                            ),
                            errorText: 'please enter a valid password',
                            compulsory: true,
                            onChange: (value){
                              //_key.currentState.validate(); 
                              print(value);
                            },
                          ),
                    );
                    }
                }),
                        SizedBox(height:20),
                        CustomText(text: 'New Email*', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Card(shadowColor: AppColors.grey1, elevation: 14,
                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                          child: CustomFormField(compulsory: true,
                            onChange: (value){
                              //_key.currentState.validate(); 
                              print(value);
                            },
                          ),),
                          SizedBox(height:20),
                          CustomText(text: 'Confirm Email*', color: AppColors.blue,  bold: true),
                        SizedBox(height:10),
                        Card(shadowColor: AppColors.grey1, elevation: 14,
                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                          child: CustomFormField(compulsory: true,
                            onChange: (value){
                              //_key.currentState.validate(); 
                              print(value);
                            },
                          ),),
                          SizedBox(height: 5.0),
            Center(child:CustomText(text: 'Use a verified email address e.g. mail@me.com \n we will send a verification mail to this address', color: AppColors.blue, extraSmall:true, bold: true),),
                          SizedBox(height:40),
                          CustomButton(label:'UPDATE', key: Key('submit'),
                          onPress:(){
                              // _bloc.add(CheckForm(true));
                              // if( _key.currentState.validate()){ 
                              //     Navigator.pushNamed(context, OtpViewRoute);
                              //   }
                            }),
                              
                ],
                            )),
              
              )
            ])
          ),
                       
                  ]
            )
        ])
      )
      
    );
  }

}
