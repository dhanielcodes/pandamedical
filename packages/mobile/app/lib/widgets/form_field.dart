import 'package:flutter/material.dart';

class CustomFormField extends StatefulWidget {
  final bool autofocus;
  final bool compulsory;
  final String value;
  final Function(dynamic) onChange;
  final Function(dynamic) validator;
  final String placeholder;
  final TextInputType keyboardType;
  final bool password;
  final bool dark;
  final int minLines;
  final bool multiline;
  final String labelText;
  final String errorText;
  final String mask;
  final double radius;
  final TextEditingController controller;
  final Widget prefixIcon, suffixIcon;
  final bool enabled;
  final Key skey;

  const CustomFormField({Key key, this.prefixIcon, this.skey, this.minLines, this.suffixIcon, this.compulsory, this.errorText, this.controller, this.validator, this.radius, this.autofocus, this.value, this.onChange, this.placeholder, this.keyboardType, this.password, this.dark, this.multiline, this.labelText, this.mask,this.enabled}) : super(key: key);

  @override
  _CustomFormFieldState createState() => _CustomFormFieldState();
}

class _CustomFormFieldState extends State<CustomFormField> {
  @override
  Widget build(BuildContext context) {
    var  _value = '';
    if(widget.value != null){
      _value = widget.value;
    }
    print(_value);
    
    return TextFormField(
     // key: widget.skey,
      minLines: widget.minLines ?? 1,
          initialValue: _value,
          controller: widget.controller,
          obscureText: widget.password == true ? true : false,
          onChanged: (text) {
            if (widget.onChange != null) widget.onChange(text);
          },
          validator: (text) {
            if(widget.compulsory == true){
              if (text.isEmpty) {
                if (widget.errorText  != null) { 
                  return widget.errorText;
                }
                return 'This field is required';
              }
              return null; 
            }
            else{
              if (widget.validator != null) return widget.validator(text);
            }
            return null;
          },
          maxLines: widget.multiline == true ? null : 1,
          keyboardType: widget.multiline == true ? TextInputType.multiline : widget.keyboardType,
          autofocus: widget.autofocus == null ? false : true,
          enabled:widget.enabled==null? true: false,
          textCapitalization: TextCapitalization.none,
          decoration: InputDecoration(
            prefixIcon: widget.prefixIcon,
            //suffixIcon: widget.suffixIcon != null ? widget.suffixIcon : null,
            suffixIcon: widget.suffixIcon,
          hintText:  widget.labelText ?? widget.placeholder,
          contentPadding: EdgeInsets.fromLTRB(20.0, 20.0, 0.0, 20.0),
          border:  InputBorder.none,
         focusedBorder:  InputBorder.none
            
            ),
          );
     }

}