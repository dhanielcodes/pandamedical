import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:pandamedical/Styles/app_colors.dart';
import 'package:pandamedical/Styles/dimens.dart' as dimens;

class EditText extends StatefulWidget {
  final bool autofocus;
  final Stream<dynamic> value;
  final Function(dynamic) onChange;
  final String placeholder;
  final TextInputType keyboardType;
  final bool password;
  final bool dark;
  final bool multiline;
  final String labelText;
  final String mask;
  final double radius;
  final TextEditingController controller;

  const EditText({Key key, this.controller, this.radius, this.autofocus, this.value, this.onChange, this.placeholder, this.keyboardType, this.password, this.dark, this.multiline, this.labelText, this.mask}) : super(key: key);

  @override
  _EditTextState createState() => _EditTextState();
}

class _EditTextState extends State<EditText> {
  //TextEditingController _controller;
  @override
  void didChangeDependencies() {
   // _controller = new TextEditingController();
    super.didChangeDependencies();
  }
  @override
  Widget build(BuildContext context) {
    //var widget2 =  widget.radius == null ? 0: widget.radius;
    return TextFormField(
              controller: widget.controller,
              obscureText: widget.password == true ? true : false,
              onChanged: (text) {
                if (widget.onChange != null) widget.onChange(text);
              },
              maxLines: widget.multiline == true ? null : 1,
              keyboardType: widget.multiline == true ? TextInputType.multiline : widget.keyboardType,
              style: TextStyle(
                fontSize: 18,
                decorationColor: Colors.transparent,
                  //color: widget.dark == true ? colors.AppColors().backgroundColor : AppColors.primary  //cor do texto ao digitar,
              ),
              autofocus: widget.autofocus == null ? false : true,
              textCapitalization: TextCapitalization.none,
              decoration: InputDecoration(
                disabledBorder: InputBorder.none,
                contentPadding: EdgeInsets.all(-5),
                floatingLabelBehavior: FloatingLabelBehavior.never,
                focusColor: Colors.grey,
                prefixIcon: Icon(FontAwesomeIcons.search, color: AppColors.primary, size: 17,),
                  labelText: widget.labelText ?? widget.placeholder,
                
                  hintStyle: TextStyle(
                      color: Colors.transparent, //cor do placeholder com foco
                      fontSize: dimens.fontEditText
                  ),
                  border: InputBorder.none,
                  focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(
                          color: widget.dark == true ? AppColors.primary : Colors.transparent, //cor da label quando esta com focus
                          width: 1
                      )
                  )
              )
          );
  }
}


