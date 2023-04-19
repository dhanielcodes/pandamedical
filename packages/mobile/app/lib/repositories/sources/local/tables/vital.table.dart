// import 'package:pandamedical/models/vitals.dart';

// class VitalTable {
//   static final String tableName = 'vitals';
//   static final String columnId = 'id';
//   static final String columnName = 'name';
//   static final String columnValue = 'value';
//   static final String columnIcon = 'icon';
//   static final String columnUnit = 'unit';

//   int id;
//   String name;
//   int value;
//   String icon;
//   int unit;

//   Map<String, dynamic> toJson() => {
//     columnId: id,
//     columnName: name,
//     columnValue: value,
//     columnIcon: icon,
//     columnUnit: unit
//   };

//   Map<String, dynamic> toMap() {
//     var map = new Map<String, dynamic>();
//     map["id"] = id;
//     map["name"] = name;
//     map["value"] = value;
//     map["icon"] = icon;
//     map["unit"] = unit;
//     return map;
//   }

//   VitalModel toVital() {
//     var vital = new VitalModel();
//     vital.id = id;
//     vital.name = name;
//     vital.value = value;
//     vital.icon = icon;
//     vital.unit = unit;
//     //print("vital table ${map}");
//     return vital;
//   }
//   VitalTable.fromWidget(Vital vital) {
//     name = vital.name;
//     icon = vital.icon;
//     unit = vital.unit;
//     value = vital.value;
//   }
  
//   static List<VitalTable> fromWidgetList(List<Vital> json)
//    => json.map((i) => VitalTable.fromWidget(i)).toList();

//   static List<VitalTable> fromJsonList(List<dynamic> json)
//    => json.map((i) => VitalTable.fromJson(i)).toList();

//   VitalTable.fromJson(Map<String, dynamic> json) {
//     id = json[id];
//     name = json[name];
//     value = json[value];
//   }

//   VitalTable.fromvital(Vital vital) {
//     id = vital.id;
//     name = vital.name;
//     value = vital.value;
//   }

//   static String create() {
//     return "CREATE TABLE $tableName (" +
//       "$columnId INTEGER PRIMARY KEY, " +"$columnName TEXT, " +
//       "$columnValue TEXT, " +"$columnIcon TEXT, " +
//       "$columnUnit TEXT" +
//     ")";
//   }
// }
