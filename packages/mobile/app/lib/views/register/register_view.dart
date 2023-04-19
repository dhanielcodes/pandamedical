import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:intl_phone_number_input/intl_phone_number_input.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/views/register/register_bloc.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/constants/routing_constants.dart';
import 'package:flutter_rounded_date_picker/rounded_picker.dart';

class RegisterScreen extends StatefulWidget {
  @override
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  // AuthBloc bloc;
  RegisterBloc _bloc;
  TextEditingController emailController, passwordController, passwordConfirmController;
  DateTime initialDate;
  String password, confirmPassword;
  
  final TextEditingController controller = TextEditingController();
  var initialCountry = 'NG';
  PhoneNumber number = PhoneNumber(isoCode: 'NG');
  final _key =  GlobalKey<FormState>();

  String firstName, lastName, gender, dateOfBirth;



  @override
  void initState() {
    super.initState();
    passwordController =  TextEditingController();
    passwordConfirmController = TextEditingController();
     _bloc = BlocProvider.of<RegisterBloc>(context);
     _bloc.add(InitRegister());
  }

  @override
  void dispose() {
    //bloc.dispose();
    super.dispose();
    emailController.dispose();
    passwordController.dispose();
    passwordConfirmController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    //_bloc = BlocProvider.of<RegisterBloc>(context);
    final  statusBarHeight = MediaQuery.of(context).padding.top;
    initialDate = DateTime(1990);

    

    return Scaffold(
      appBar: AppBar(centerTitle: true,
        leading: BackButton(color: AppColors.blue, onPressed:(){
          Navigator.pop(context);
        }),
      backgroundColor: Colors.white,
      elevation:0,
      title: CustomText(text: 'Sign Up', color: AppColors.blue, bold: true, large: true,)),
         resizeToAvoidBottomInset : false,
        body: SingleChildScrollView(
          controller:  ScrollController(),
          child: Padding(padding: EdgeInsets.only(top: statusBarHeight, left:15, right: 15),

        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(height: 10,),
            GestureDetector(onTap: (){ Navigator.pushNamed(context, DashboardViewRoute);},
                            child:Image(height: 40, fit: BoxFit.fitHeight, image: AssetImage('images/facebook.png'))),
            SizedBox(height: 10,),
            GestureDetector(onTap: (){ Navigator.pushNamed(context, DashboardViewRoute);},
                            child:Image(height: 40, fit: BoxFit.fitHeight, image: AssetImage('images/google.png'))),
            SizedBox(height: 5,),
            CustomText(text:'or continue with email', color: AppColors.blue, small: true, bold:true),
            SizedBox(height: 15,),
            Form(
          key: _key,
          child: Column(
            children: [
              Card(
            shadowColor: AppColors.grey1,
            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
            elevation: 54,
            child: CustomFormField(
              key: Key('firstname'),
              keyboardType: TextInputType.text,
              labelText: 'First Name',
              compulsory: true,
              errorText: 'please enter your firstname',
              onChange: (value){
                _key.currentState.validate(); 
                firstName = value;
                print(value);
                },
            )
            ),
            SizedBox(height: 5,),
            Card(
            shadowColor: AppColors.grey1,
            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
            elevation: 54,
            child: CustomFormField(
              key: Key('lastname'),
              keyboardType: TextInputType.text,
              labelText: 'Last Name',
              errorText: 'please enter your lastname',
              compulsory: true,
              onChange: (value){
                _key.currentState.validate(); 
                lastName= value;
                print(value);
                },
            )
            ),
            SizedBox(height: 5,),
            //Register form
            BlocBuilder<RegisterBloc, RegisterState>(
                      condition: (previous, current) => previous.emailVerified != current.emailVerified,
                      builder: (context, state) {
                        if(state.emailVerified == null){
                          return Container();
                        }else{
                          return Card(
                            shadowColor: AppColors.grey1,
                          shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(15.0),   ),
                          elevation: 54,
                          child: CustomFormField(
                            key: Key('email'),
                            keyboardType: TextInputType.emailAddress,
                            labelText: 'Email',
                            suffixIcon: state.emailVerified == true 
                            ? Icon(FontAwesomeIcons.checkCircle, size: 20, color: AppColors.primary,)
                              : Icon(Icons.cancel, size: 20, color: Colors.red,),
                            errorText: 'please enter a valid email',
                            //compulsory: true,
                            onChange: (value){
                              _key.currentState.validate(); 
                              _bloc.add(VerifyEmail(value));
                              emailController.text = value;
                              print(emailController.text);
                              },
                          )
                          );
                        }
                          }),
            //email(_bloc, emailController),
            SizedBox(height: 5.0),
            BlocBuilder<RegisterBloc, RegisterState>(
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
                              _key.currentState.validate(); 
                              passwordController.text = value;
                              print(value);
                            },
                          ),
                    );
                    }
                }),
            SizedBox(height: 5.0),

            BlocBuilder<RegisterBloc, RegisterState>(
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
                            key: Key('confirmPassword'),
                            password: state.showPassword,
                            placeholder: 'Confirm Password',
                            //errorText: 'please re-enter your password',
                            //compulsory: true,
                            validator: (text) {
                              print(text);
                              if(text.isEmpty){
                                return 'please re-enter your password';
                              }else if(text == passwordController.text){
                                return null; 
                                print(text+'11 passwordConfirmController.text ${passwordConfirmController.text} 11');
                                }
                               // print(text+'passwordConfirmController.text ${passwordConfirmController.text}');
                                return null;//'Passwords don\'t match';
                              },
                            onChange: (value){
                              _key.currentState.validate(); 

                              passwordConfirmController.text = value;
                              print(passwordConfirmController.text);
                            },
                          ),
                          
                    );
                    }
                }),
            
            ]
          ),
            ),
                
            SizedBox(height: 15.0),
            CustomText(text:'Password should at least be 8 characters in length and  contain,', color: AppColors.blue, extraSmall: true,),
            CustomText(text:'at least one uppercase letter, lowercase letter, one number', color: AppColors.blue, extraSmall: true,),
            CustomText(text:'and one special character', color: AppColors.blue, extraSmall: true,),
            SizedBox(height: 15.0),
            BlocBuilder<RegisterBloc,RegisterState>(
                      condition: (previous, current) => previous.dateOfBirth != current.dateOfBirth,
                      builder: (context, state){
                         return GestureDetector(onTap:(){
                           _setDate(context);
                          },
                          child: Container(
                            height:60,
                            padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                            decoration: BoxDecoration(
                              color: Colors.white,
                            border: Border.all(width:1, color: AppColors.green),
                            borderRadius: BorderRadius.all(Radius.circular(15))
                          ),
                          child: Row(
                            children: <Widget>[
                              CustomText(text: 
                              state.dateOfBirth != null ? 
                              '${state.dateOfBirth.day}/${state.dateOfBirth.month}/${state.dateOfBirth.year}'
                              : 'Date of Birth', 
                            color: AppColors.green, bold:true),Spacer(),
                            Icon(FontAwesomeIcons.calendar, color: AppColors.green, size: 25,)
                            ],
                          ),
                          ));
                        
                      },
                    ),
            SizedBox(height: 15.0),
            Container(
                      height:84,
                      padding: EdgeInsets.symmetric(horizontal:20, vertical:5),
                      decoration: BoxDecoration(
                        color: Colors.white,
                      border: Border.all(width:1, color: AppColors.green),
                      borderRadius: BorderRadius.all(Radius.circular(15))
                    ),
                    child: BlocBuilder<RegisterBloc, RegisterState>(
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
                                    _bloc.add(ValidateNumber(number.phoneNumber));
                                    //print(number.phoneNumber);
                                    if( _key.currentState.validate()){ 

                                    }
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
            SizedBox(height: 5.0),
            CustomText(text:'A valid cell number is required for managing appointments', color: AppColors.blue, extraSmall: true,),
            SizedBox(height: 15.0),
            Container(
                      height:60,
                      padding: EdgeInsets.symmetric(horizontal:20, vertical:5),
                      decoration: BoxDecoration(
                        color: Colors.white,
                      border: Border.all(width:1, color: AppColors.green),
                      borderRadius: BorderRadius.all(Radius.circular(15))
                    ),
                    child:DropdownButtonFormField(
                      key: Key('genderMenu'),
                elevation: 3,
                //value: null,
                decoration: InputDecoration(
                  disabledBorder: InputBorder.none,
                  contentPadding: EdgeInsets.only(right: 10),
                  border: InputBorder.none,
                  focusedBorder: InputBorder.none,
                  enabledBorder: InputBorder.none,
                ),
                hint: Padding(padding: EdgeInsets.symmetric(horizontal: 5), child: CustomText(text:'Gender',),),
                items: ['Male', 'Female'].map((book){
                  return DropdownMenuItem(
                    key: Key('${book.toLowerCase()}'),
                      value: book,
                      child: Row(
                        children: <Widget>[
                          Padding(padding: EdgeInsets.symmetric(horizontal: 5), child:CustomText(text:book)),
                        ],)
                  );
                }).toList(),
                onChanged: (value){
                  print(value.toLowerCase());
                  gender = value.toUpperCase();
                },
                onTap: (){
                },
              ),
             ),

             
             
            SizedBox(height: 15.0),
            CustomText(text:'By clicking Join Now or Sign Up with Google or', color: AppColors.blue, extraSmall: true, bold: true),
            Row(mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              CustomText(text:'Facebook you agree to Panda Health\'s ', color: AppColors.blue, extraSmall: true, bold: true),
              CustomText(text:' Terms of Use ', color: Colors.yellow, small: true, bold: true,),
            ],),
            Row(mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
              CustomText(text:'and', color: AppColors.blue, extraSmall: true, bold: true),
              CustomText(text:' Privacy Policy ', color: Colors.yellow, small: true, bold: true),
              CustomText(text:'and', color: AppColors.blue, extraSmall: true, bold: true),
              CustomText(text:' HIPAA ', color: Colors.yellow, small: true, bold: true),
              CustomText(text:'Authorization', color: AppColors.blue, extraSmall: true, bold: true),
            ],),
              CustomText(text:'Statement.', color: AppColors.blue, extraSmall: true, bold: true),
            SizedBox(height: 10.0),
            CustomButton(label:'JOIN NOW', key: Key('joinNow'),
             onPress:(){
                _bloc.add(CheckForm(true));
                if( _key.currentState.validate()){ 
                  _bloc.add(GetInputs(passwordController.text, passwordConfirmController.text, firstName, lastName, gender, dateOfBirth, context));
                    //Navigator.pushReplacementNamed(context, OtpViewRoute);
                  }
              }),
            SizedBox(height: 50.0),
                ])
           
           
            
          
        
        )
    ));
  }

  Future<DateTime> showPicker(context) async{
    DateTime newDateTime = await showRoundedDatePicker(
      height: 220,
      context: context,
      customWeekDays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      theme: ThemeData(
      primaryColor: Colors.green[400],
      accentColor: Colors.green[200],
      dialogBackgroundColor: Colors.white,
      textTheme: TextTheme(
        bodyText2: TextStyle(color: Colors.black),
        caption: TextStyle(color: Colors.black),
      ),
      accentTextTheme: TextTheme(
       // body2 : TextStyle(color: Colors.green[200]),
      ),),
      
      initialDate: DateTime(DateTime.now().year - 3),
      firstDate: DateTime(DateTime.now().year - 71),
      lastDate: DateTime(DateTime.now().year ),
      borderRadius: 16,
                          
                          
    );
    return newDateTime;
  }
  void _setDate(context)async{
    var time = await showPicker(context);
    dateOfBirth = '${time.day}-${time.month}-${time.year}';
    _bloc.add(SetDateOfBirth(time));
  }

}