import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/button.dart';
import 'package:pandamedical/widgets/vital.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/views/add_lab_result/add_lab_result_bloc.dart';
import 'package:flutter_rounded_date_picker/rounded_picker.dart';
//import 'package:flutter_rounded_date_picker/material_rounded_date_picker_style.dart';
//import 'package:flutter_rounded_date_picker/material_rounded_year_picker_style.dart';

class AddLabResultView extends StatefulWidget {
  //const AddLabResultView();

  @override
  _AddLabResultViewState createState() => _AddLabResultViewState();
}

class _AddLabResultViewState extends State<AddLabResultView> {
  // AuthBloc bloc;
  DateTime initialDate;
  var _key =  GlobalKey<FormState>();
  AddLabResultBloc _bloc;
  //final List<VitalData> vitalOptions;
  String comment, source, generated_by, timestamp, date_entered, user_id, observedBy;
   _AddLabResultViewState();

  @override
  void initState() {
    super.initState();
     _bloc = BlocProvider.of<AddLabResultBloc>(context);
     _bloc.add(InitAddLabResult());
  }

  @override
  void dispose() {
    _bloc.add(InitAddLabResult());
    super.dispose();
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
        body1: TextStyle(color: Colors.black),
        caption: TextStyle(color: Colors.black),
      ),
      accentTextTheme: TextTheme(
       // body2 : TextStyle(color: Colors.green[200]),
      ),),
      
      initialDate: DateTime.now(),
      firstDate: DateTime(DateTime.now().year - 1),
      lastDate: DateTime(DateTime.now().year + 1),
      borderRadius: 16,
                          
                          
    );
    return newDateTime;
  }
  void _setDate(context)async{
    DateTime time = await showPicker(context);
    date_entered = '${time.toLocal()}';
    //var dateTime = DateFormat('yyyy-MM-ddTHH:mm:ss').parse(date_entered, true);
    print(date_entered);
    _bloc.add(SetDate(time));
  }

  void _setTime(context)async{
    final timePicked = await showRoundedTimePicker(
      context: context,
      theme: ThemeData(
      primaryColor: Colors.green[400],
      accentColor: Colors.green[200],
      dialogBackgroundColor: Colors.white,
      textTheme: TextTheme(
        body1: TextStyle(color: Colors.black),
        caption: TextStyle(color: Colors.black),
      ),
      accentTextTheme: TextTheme(
       // body2 : TextStyle(color: Colors.green[200]),
      ),),
      initialTime: TimeOfDay.now(),
    );
    timestamp = formatTOD(timePicked);
    print(formatTOD(timePicked));
    _bloc.add(SetTime(timePicked));
  }
  String formatTOD(TimeOfDay tod){
    final now = DateTime.now();
    final dt = DateTime(now.year, now.month, now.day, tod.hour, tod.minute);
    final format = DateFormat.jm();
    return format.format(dt);

  }

  @override
  Widget build(BuildContext context) {
    initialDate = DateTime(1990);
    
    final  screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(elevation: 0, centerTitle: true,
        title: CustomText(text: 'Add Lab Results(s)', color: AppColors.blue, big:true, bold: true),
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
                            Container(height: 150,
                            decoration: BoxDecoration(color: AppColors.greenBG,borderRadius: BorderRadius.vertical(bottom: Radius.circular(45.0)),),
                          ),]
                        )
                      ),
             Container(margin: EdgeInsets.only(top: 100, left: 100,), height: screenHeight,),
          Positioned(
            top: 15.0, left: 0.0, right: 0.0,
            child: Container(height: screenHeight,
            child:ListView(//shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            controller: ScrollController(),
            children: [Image(height: 40, width: 100, fit: BoxFit.fitHeight, image: AssetImage('images/beat.png')),
            Card(margin: EdgeInsets.symmetric(vertical:10, horizontal: 15),
                            shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0),   ),
                            //elevation: 45,
                            child:Padding(padding: EdgeInsets.symmetric(horizontal:10, vertical: 30),
                            child: Column(children: <Widget>[
                            BlocBuilder<AddLabResultBloc, AddLabResultState>(
                            condition: (previous, current) => previous.vitalList != current.vitalList,
                            builder: (context, state) {
                              if(state.vitalList == null){
                                return Container();
                              }else{ return Column(
                                children: state.vitalList,//.map((e){ return e;}).toList(),
                              );}
                            }),
                            SizedBox(height:20),
                            Card(shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),
                              side: BorderSide(color: AppColors.green, width: 1.0)),
                              elevation: 2, child:IconButton(onPressed: (){ _bloc.add(AddLabResult());}, 
                              icon: Icon(Icons.add, color:AppColors.green, size: 25 ))),
                            SizedBox(height:20),
                            Align(alignment: Alignment.centerLeft, child: CustomText(text: 'Date', color: AppColors.blue, bold: true),),
                            SizedBox(height:10),
                            BlocBuilder<AddLabResultBloc,AddLabResultState>(
                          condition: (previous, current) => previous.date != current.date,
                          builder: (context, state){
                            return GestureDetector(onTap:(){
                            _setDate(context);
                              },
                              child: Container(
                                height:60,
                                padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                                decoration: BoxDecoration(
                                  color: AppColors.greenBG,
                                border: Border.all(width:1, color: AppColors.green),
                                borderRadius: BorderRadius.all(Radius.circular(15))
                              ),
                              child: Row(
                                children: <Widget>[
                                  CustomText(text: 
                                  state.date != null ? 
                                  '${state.date.day}/${state.date.month}/${state.date.year}'
                                  : 'Date', 
                                color: AppColors.blue, bold:true),Spacer(),
                                Icon(FontAwesomeIcons.calendar, color: AppColors.green, size: 25,)
                                ],
                              ),
                              ));
                          },
                        ),
                            SizedBox(height:10),
                            Align(alignment: Alignment.centerLeft, child: CustomText(text: 'Time', color: AppColors.blue, bold: true),),
                            SizedBox(height:10),
                            BlocBuilder<AddLabResultBloc,AddLabResultState>(
                          condition: (previous, current) => previous.time != current.time,
                          builder: (context, state){
                            return GestureDetector(onTap:(){
                            _setTime(context);
                              },
                              child: Container(
                                height:60,
                                padding: EdgeInsets.symmetric(horizontal:30, vertical:10),
                                decoration: BoxDecoration(
                                  color: AppColors.greenBG,
                                border: Border.all(width:1, color: AppColors.green),
                                borderRadius: BorderRadius.all(Radius.circular(15))
                              ),
                              child: Row(
                                children: <Widget>[
                                  CustomText(text: 
                                  state.time != null ? 
                                  '${state.time.format(context)}'
                                  : 'Set Time', 
                                color: AppColors.blue, bold:true),Spacer(),
                                //Icon(FontAwesomeIcons.watch, color: AppColors.green, size: 25,)
                                ],
                              ),
                              ));
                          },
                        ),
                        SizedBox(height:20),
                            Align(alignment: Alignment.centerLeft, child: CustomText(text: 'Observed by', color: AppColors.blue, bold: true),),
                            SizedBox(height:10),
                            Container(decoration: BoxDecoration(color: AppColors.greenBG,
                                  borderRadius: BorderRadius.all(Radius.circular(15))),
                                  child: CustomFormField(keyboardType: TextInputType.text,
                                  compulsory: true,
                                  onChange: (value){
                                    observedBy = value;
                                    print(value);
                                    },
                                ),),
                        SizedBox(height:10),
                            Align(alignment: Alignment.centerLeft, child: CustomText(text: 'Comment', color: AppColors.blue, bold: true),),
                        SizedBox(height:10),
                        Form(key: _key,
                          child: Column(children:  [
                          Container(decoration: BoxDecoration(color: AppColors.greenBG,
                              borderRadius: BorderRadius.all(Radius.circular(15))),
                              child: CustomFormField(keyboardType: TextInputType.text, minLines: 4, 
                              compulsory: true, multiline: true,
                              onChange: (value){
                                comment = value;
                                print(value);
                                },
                            ),),
                        ])),
                          SizedBox(height:20),
                          CustomButton(label:'SUBMIT', key: Key('submit'),
                          onPress:(){
                              
                              if( _key.currentState.validate()){ 
                                _bloc.add(Submit(comment, date_entered, timestamp, context, observedBy));
                                  //Navigator.pushNamed(context, OtpViewRoute);
                                }
                            }),
                            SizedBox(height:70),
                              
                ],
                            )),
              
              )
            ])
          )
          ),
                       
                  ]
            )
        ])
      )
      
    );
  }

}
