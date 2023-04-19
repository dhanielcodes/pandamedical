

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/models/vital_options_response.dart';
import 'package:pandamedical/widgets/text.dart';
import 'package:pandamedical/widgets/form_field.dart';
import 'package:pandamedical/styles/app_colors.dart';
import 'package:pandamedical/constants/app_constants.dart';

import 'package:pandamedical/views/add_lab_result/add_lab_result_bloc.dart';

class VitalLabWidget extends StatelessWidget {

  final double height;
  final Function onPressed;
  final Key skey;
  final bool hideClose, visible;
  final int value, position;
  final String selected;
  final List<VitalData> data;

  String get getSelect => selected;
  String get getValue => value.toString();
  String get getPosition => position.toString();

  

  const VitalLabWidget({
    this.data,
    this.visible,
    this.position,
    this.skey,
    this.height,
    this.onPressed,
    this.value, 
    this.selected,
    this.hideClose,
  }) : super(key: skey);

  @override
  Widget build(BuildContext context) {
    String setSelected = '';

    AddLabResultBloc _bloc = BlocProvider.of<AddLabResultBloc>(context);
    //visible = true;
     List<VitalsData> _data = [];
    if(data.isEmpty){
      _data = VitalsDatas().dashboardData();
    }else{
      data.forEach((element) {
        _data..add(VitalsData( element.title, 'images/blood-pressure.png', element.key, 100, HexColor('#338BFD'), element));
        });
    }
    return Visibility(
      visible: true,
      child: Stack(children: [
      Card(margin: EdgeInsets.only(top:25), shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(25.0), 
    side: BorderSide(color:  AppColors.green, width: 1.0)),
      child: Padding(padding: EdgeInsets.all(10),
    child: Column(mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(height:20),
                                CustomText(text: 'Vital', color: AppColors.blue, bold: true),
                                SizedBox(height:10),
                      Container(
                      height:60,
                      padding: EdgeInsets.symmetric(horizontal:20, vertical:5),
                      decoration: BoxDecoration(
                        color: Colors.white,
                      border: Border.all(width:1, color: AppColors.green),
                      borderRadius: BorderRadius.all(Radius.circular(15))
                    ),
                    child:DropdownButtonFormField(//key: key, 
                    elevation: 3, value: selected,
                decoration: InputDecoration(
                  disabledBorder: InputBorder.none,
                  contentPadding: EdgeInsets.only(right: 10),
                  border: InputBorder.none,
                  focusedBorder: InputBorder.none,
                  enabledBorder: InputBorder.none,
                ),
                hint: Padding(padding: EdgeInsets.symmetric(horizontal: 5), 
                child: Row(
                        children: <Widget>[
                          Padding(padding: EdgeInsets.symmetric(horizontal: 5), child:CustomText(text:'Please select', color: Colors.green, maxLines:2, bold: true)),
                        ],),),
                items: _data.map((vital){
                  return DropdownMenuItem(value: vital.name, //key: Key('${vital.name.toLowerCase()}'), 
                      child: Row(
                        children: <Widget>[//Image(height: 20, color: AppColors.green, fit: BoxFit.fill, image: AssetImage(vital.icon)), SizedBox(width: 20),
                          Container(width:240,
                            child: SizedBox(child: CustomText(text:vital.name, color: AppColors.green, bold: true, small:true, maxLines:2),),),
                        ],)
                  );
                }).toList(),
                onChanged: (value){
                  setSelected = value;
                  _bloc.add(UpdateVitalSelected('$position-$value', value));
                  print('selected value $value');
                },
                onTap: (){},
              ),
             ),
        SizedBox(height:20),
        CustomText(text: 'Value', color: AppColors.blue, bold: true),
        SizedBox(height:10),
        Container(decoration: BoxDecoration(color: AppColors.greenBG,
              borderRadius: BorderRadius.all(Radius.circular(15))),
              child: CustomFormField(key: skey, keyboardType: TextInputType.number,
              value: value == null ? '' : (value != 0 ? '$value' : ''), compulsory: true,
              onChange: (value){
                  print('form value $value $position-$setSelected');
                _bloc.add(UpdateVitalValue('$position-$setSelected', value));
                print('form value $value');
                },
            ),),
          SizedBox(height:20),
              ]
            )
      )
    ),
    Container(height: 270),
    // Align(
    //           alignment: FractionalOffset.bottomCenter,
    //             child: Padding(
    //               padding: EdgeInsets.only(top: 255.0),
    //                 child: 
    //           ),
    //         ),
            hideClose != true ? Positioned(top: 0, right: 20,
              child:Card(shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(50.0),
              side: BorderSide(color: Colors.red[300], width: 1.0)),
              elevation: 2, child:IconButton(onPressed: (){_bloc.add(RemoveVital('$position-$selected'));}, 
              icon: Icon(FontAwesomeIcons.minus, color:Colors.red[300], size: 20 )))
            ) : Container()
    ])
    );
  }
}