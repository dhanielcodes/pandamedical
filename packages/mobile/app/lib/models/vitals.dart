import 'package:pandamedical/widgets/vital.dart';

class VitalModel {
  String name, icon, unit;
  double value;

  VitalModel({this.name, this.value, this.unit, this.icon});

  VitalModel.fromWidget(VitalWidget vital) {
    // name = vital.name;
    // icon = vital.icon;
    // unit = vital.unit;
    // value = vital.value;
  }
  // VitalModel.fromJson(Map<String, dynamic> json) {
  //   name = json['name'];
  //   id = json['_id'];
  // }

  Map<String, dynamic> toJson() {
    var vitalModel =  <String, dynamic>{};
    vitalModel['name'] = name;
    vitalModel['value'] = value;
    vitalModel['icon'] = icon;
    vitalModel['unit'] = unit;
    return vitalModel;
  }
}
