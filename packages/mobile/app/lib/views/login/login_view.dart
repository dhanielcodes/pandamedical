import 'package:firebase_auth/firebase_auth.dart';
import 'dart:convert' show json;
import "package:http/http.dart" as http;
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/views/login/login_bloc.dart';
import 'package:pandamedical/views/custom_webview.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/widgets/text.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

GoogleSignIn _googleSignIn = GoogleSignIn(
  scopes: <String>[
    'email',
    'https://www.googleapis.com/auth/contacts.readonly',
  ],
);

class _LoginScreenState extends State<LoginScreen> {
  GoogleSignInAccount _currentUser;
  String _contactText;
  // AuthBloc bloc;
  LoginBloc _bloc;
  TextEditingController emailController, passwordController;
  final _key =  GlobalKey<FormState>();
  
  String your_client_id = '2764108833820718';
String your_redirect_url = 'https://my-starter-project-bc4e2.firebaseapp.com/';

void loginWithFacebook() async{
String result = await Navigator.push(
  context, MaterialPageRoute(
      builder: (context) => CustomWebView(
            selectedUrl: 'https://www.facebook.com/dialog/oauth?client_id=$your_client_id&redirect_uri=$your_redirect_url&response_type=token&scope=email,public_profile,',
          ), maintainState: true),
);

if (result != null) {
  try {
    final facebookAuthCred = FacebookAuthProvider.getCredential(accessToken: result);
    print('${facebookAuthCred}');
    // final user = await FirebaseAuth.signInWithCredential(facebookAuthCred);
    // print('${user.additionalUserInfo}');
  } catch (e) {
    print('try error $e');
  }
}
}



  @override
  void initState() {
    super.initState();
    emailController =  TextEditingController();
    passwordController =  TextEditingController();
     _bloc = BlocProvider.of<LoginBloc>(context);
     _bloc.add(InitLogin());

     _googleSignIn.onCurrentUserChanged.listen((GoogleSignInAccount account) {
      setState(() {
        _currentUser = account;
      });
      if (_currentUser != null) {
        _handleGetContact();
      }
    });
    _googleSignIn.signInSilently();
  }

  
  Future<void> _handleGetContact() async {
    setState(() {
      _contactText = "Loading contact info...";
    });
    final http.Response response = await http.get(
      'https://people.googleapis.com/v1/people/me/connections'
      '?requestMask.includeField=person.names',
      headers: await _currentUser.authHeaders,
    );
    if (response.statusCode != 200) {
      setState(() {
        _contactText = "People API gave a ${response.statusCode} "
            "response. Check logs for details.";
      });
      print('People API ${response.statusCode} response: ${response.body}');
      return;
    }
    final Map<String, dynamic> data = json.decode(response.body);
    final String namedContact = _pickFirstNamedContact(data);
    setState(() {
      if (namedContact != null) {
        _contactText = "I see you know $namedContact!";
      } else {
        _contactText = "No contacts to display.";
      }
    });
  }

  String _pickFirstNamedContact(Map<String, dynamic> data) {
    final List<dynamic> connections = data['connections'];
    final Map<String, dynamic> contact = connections?.firstWhere(
      (dynamic contact) => contact['names'] != null,
      orElse: () => null,
    );
    if (contact != null) {
      final Map<String, dynamic> name = contact['names'].firstWhere(
        (dynamic name) => name['displayName'] != null,
        orElse: () => null,
      );
      if (name != null) {
        return name['displayName'];
      }
    }
    return null;
  }

  Future<void> _handleSignIn() async {
    try {
      await _googleSignIn.signIn();
    } catch (error) {
      print(error);
    }
  }

  @override
  void dispose() {
    //bloc.dispose();
    super.dispose();
    emailController.dispose();
    passwordController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    //_bloc = BlocProvider.of<LoginBloc>(context);
    final  statusBarHeight = MediaQuery.of(context).padding.top;
    final  screenHeight = MediaQuery.of(context).size.height;
    

    return Scaffold(
         resizeToAvoidBottomInset : false,
        body: Stack(
          children: <Widget>[
            Container(height: screenHeight,
                decoration: BoxDecoration(
                  image: DecorationImage(
                      //alignment: Alignment.bottomCenter,
                      fit: BoxFit.fitWidth,
                      image:  AssetImage('images/login-bg.png')),
                ),
                child: SingleChildScrollView(
                      controller:  ScrollController(),
                      child: Padding(padding: EdgeInsets.only(top: statusBarHeight),
                    child: Stack(
                      children: [GestureDetector(
                        key: Key('goBack'),
                              onTap: (){ Navigator.pop(context);},
                              child: Padding(padding: EdgeInsets.all(20), child: Icon(FontAwesomeIcons.arrowLeft, color:AppColors.blue),),
                            ),
                        Padding(padding: EdgeInsets.only(top: statusBarHeight, left:20, right: 20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        SizedBox(height: 30,),
                        CustomText(text:'Login', color: AppColors.blue, large: true, bold:true),
                        SizedBox(height: 15,),
                        CustomText(text:'Enter your login details,', color: AppColors.green, small: true, bold:true),
                        SizedBox(height: 5,),
                        CustomText(text:'to access your account', color: AppColors.green, small: true, bold:true),
                        SizedBox(height: 55,),
                        //login form
                        Form(
                          key: _key,
                          child: Column(children: [
                          BlocBuilder<LoginBloc, LoginState>(
                                  condition: (previous, current) => previous.emailVerified != current.emailVerified,
                                  builder: (context, state) {
                                    if(state.emailVerified == null){
                                      return Container();
                                    }else{
                                      return Card(
                                        shadowColor: AppColors.grey1,
                                      shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                                      elevation: 54,
                                      child: Padding(padding: EdgeInsets.symmetric(horizontal:10,vertical: 20),
                                        child: CustomFormField(
                                          key: Key('email'),
                                        keyboardType: TextInputType.emailAddress,
                                        labelText: 'Email/Phone',
                                        //prefixIcon: Icon(FontAwesomeIcons.envelope, size: 20, color: Colors.grey[400],),
                                        suffixIcon: state.emailVerified == true 
                                        ? Icon(FontAwesomeIcons.checkCircle, size: 20, color: AppColors.primary,)
                                          : Icon(Icons.cancel, size: 20, color: Colors.red,),
                                         //controller: emailController,
                                        compulsory: true,
                                        errorText: 'please enter your email',
                                        onChange: (value){
                                         
                                          _bloc.add(VerifyEmail(value));
                                          emailController.text = value;
                                          // if(_bloc.state.initForm == true){
                                          //   if(_key.currentState.validate()){
                                                  
                                          //     }   
                                          // }
                                          
                                          },
                                      ))
                                      );
                                    }
                                      }),
                        SizedBox(height: 15.0),

                        BlocBuilder<LoginBloc, LoginState>(
                            condition: (previous, current) => previous.showPassword != current.showPassword,
                            builder: (context, state) {
                              
                                if(state.showPassword == null){
                                  return Container();
                                }else{
                                  return Card(
                                    shadowColor: AppColors.grey1,
                                      shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                                      elevation: 14,
                                      child: Padding(padding: EdgeInsets.symmetric(horizontal:10,vertical: 20),
                                        child: 
                                          CustomFormField(
                                            key: Key('password'),
                                        password: state.showPassword,
                                        placeholder: 'Password',
                                        //prefixIcon: Icon(FontAwesomeIcons.lock, size: 20, color: Colors.grey[400],),
                                        suffixIcon: GestureDetector(
                                          key: Key('togglePassword'),
                                          child: Icon(state.showPassword == true ? FontAwesomeIcons.eye : FontAwesomeIcons.eyeSlash, size: 20,
                                          color: AppColors.blue,),
                                          onTap: (){ _bloc.add(ViewPassword());},
                                        ),
                                         errorText: 'enter your password',
                                        compulsory: true,
                                        onChange: (value){
                                          passwordController.text = value;
                                          print(value);
                                          if(_bloc.state.initForm == true){
                                            if(_key.currentState.validate()){
                                                  
                                              }   
                                          }
                                        },
                                      ),
                                      )
                                );
                                }
                            }),SizedBox(height: 30,),
                            GestureDetector(
                              child: CustomText(text:'Forgot password?', color: AppColors.primary, bold:true),
                        onTap: () {
                                Navigator.pushNamed(context, ForgotPassRoute);
                              }
                            ),
                        SizedBox(height: 5,),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            CustomText(text:'Not a member?', color: AppColors.green, small: true,),
                            GestureDetector(
                              child: CustomText(text:'  Sign Up  ', color: AppColors.blue, small: true, bold:true),
                              onTap: () {
                                Navigator.pushNamed(context, RegisterViewRoute);
                              }
                            )
                          ]
                        ),
                        SizedBox(height: 30.0),

                        ],)),
                        CustomButton(key: Key('logIn'),
                        label:'LOG IN', onPress:(){
                          _bloc.add(CheckForm(true));
                            if(_key.currentState.validate()){
                              _bloc.add(GetInputs(passwordController.text, context));
                              //Navigator.pushNamed(context, DashboardViewRoute);
                            }
                        }),
                        SizedBox(height: 30.0),
                        
SizedBox(height: 10,),
            GestureDetector(onTap: _handleSignIn,//,loginWithFacebook()
                            child:Image(height: 40, fit: BoxFit.fitHeight, image: AssetImage('images/facebook.png'))),
                            ])
                        ),
                        
                      ])
                    )
                    )
                    ,
              ),
              
              ]
        )
    );
  }
  // _launchURL() async {
  //   const url = 'https://forgot.pass';
  //   if (await canLaunch(url)) {
  //     await launch(url);
  //   } else {
  //     throw 'Could not launch $url';
  //   }
  // }
}