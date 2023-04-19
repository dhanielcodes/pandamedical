
import 'package:flutter/material.dart';

import 'package:pandamedical/helpers/hexcolor.dart';
import 'package:pandamedical/widgets/vitals_row.dart';
import 'package:pandamedical/widgets/lab_result.dart';




class VitalsData {
    String icon, name, unit;
    Color color;
    int count;
    dynamic data;

    String get getIcon => icon;
    String get getName => name;
    String get getUnit => unit;
    String get getData => data; 

    VitalsData( String name, String icon, String unit, int count, Color color, dynamic data){
        this.icon = icon;
        this.name = name;
        this.unit = unit;
        this.count = count;
        this.color = color;
        this.data = data;
    }

}


class UserVital {
    String icon, name, unit, value, number_of_records, latest_record, key;
    dynamic blood_pressure, history;
    Color color;

    String get getIcon => icon;
    String get getName => name;
    String get getUnit => unit;
    String get getNumberOfRecords =>  number_of_records;
    String get getLatestRecord => latest_record;
    dynamic get getBlood => blood_pressure; 
    dynamic get getHistory => blood_pressure; 

    UserVital(name, key, value, unit, number_of_records, latest_record, blood_pressure, history){
        this.icon = icons(key);
        this.name = name;
        this.key = key;
        this.unit = unit;
        this.value = value;
        this.color = HexColor('#338BFD');
        this.number_of_records = number_of_records;
        this.latest_record = latest_record;
        this.blood_pressure = blood_pressure;
        this.history = history;
    }
    
String icons(String title){
    switch (title) {
      case 'temperature':
        return 'images/thermometer.png';
      case 'bloodPressure':
        return 'images/blood-pressure.png';
      case 'height':
        return 'images/body-weight.png';
      case 'weight':
        return 'images/kg.png';
      case 'bmi':
        return 'images/body-weight.png';
      case 'oxygenSaturation':
        return 'images/o2.png';
      case 'respirationRate':
        return 'images/lungs.png';
      case 'heartRate':
        return 'images/heart.png';
      case 'bsa':
        return 'images/thermometer.png';
      default:
        return 'images/heart.png';
    }
  }

}

class MenuData {
    String icon, label, link;


    MenuData( String label, String icon, String link){
        this.icon = icon;
        this.label = label;
        this.link = link;
    }

}

class VitalsDatas  {
      List<VitalsData> dashboardData() {

          List<VitalsData> dashboardMenu = []
        ..add(VitalsData('Heart Rate','images/heart.png', 'bpm', 0, HexColor('#338BFD'), null))
        ..add(VitalsData('Oxygen Saturation','images/o2.png', '%', 0, HexColor('#FEB944'), null))        
        ..add(VitalsData('Weight','images/kg.png', 'kg', 0, HexColor('#338BFD'), null))
        ..add(VitalsData('Respiration Rate','images/lungs.png', 'Breadths/min', 0, HexColor('#FEB944'), null))
        ..add(VitalsData('Height','images/body-weight.png', 'cm', 0, HexColor('#338BFD'), null))
        ..add(VitalsData('Blood Pressure','images/blood-pressure.png', 'mmHg', 0, HexColor('#FEB944'), null))
        ..add(VitalsData('Body Temperature','images/thermometer.png', 'Celcius', 0, HexColor('#FEB944'), null))
        ..add(VitalsData('Body Surface Area','images/thermometer.png', 'm2', 0, HexColor('#FEB944'), null))
        ..add(VitalsData('Body Mass Index','images/body-weight.png', 'kg/m2', 0, HexColor('#FF6074'), null));
        return dashboardMenu;
      }

      List<MenuData> dashboardMenu() {
          var dashboardMenu = <MenuData>[]
        ..add(MenuData('Healthcare Providers','images/healthcare.png', 'bpm'))
        ..add(MenuData('Family Members','images/family.png', 'bpm'))
        ..add(MenuData('Wallet','images/chemistry.png', 'bpm'))
        ..add(MenuData('Medical Records','images/chemistry.png', 'bpm'))
        ..add(MenuData('Policies','images/file.png', 'bpm'))
        ..add(MenuData('Contact Support','images/user.png', 'bpm'))
        ..add(MenuData('Settings','images/gear.png', 'bpm'))
        ..add(MenuData('Logout','images/gear.png', 'bpm'));
        return dashboardMenu;
      }

      List<VitalRow> myVitals() {
          var myVitals = <VitalRow>[]
        ..add(VitalRow(name: 'Heart Rate',icon:'images/heart.png', unit: 'bpm', value: '10',  date: '11/02/2020'))
        ..add(VitalRow(name: 'Oxygen Saturation',icon:'images/o2.png', unit: '%', value: '10',  date: '11/11/2020'))        
        ..add(VitalRow(name: 'Weight', icon: 'images/kg.png', unit: 'kg', value: '10',  date: '11/12/2020'))
        ..add(VitalRow(name: 'Respiration Rate', icon: 'images/lungs.png', unit:  'Breadths/min', value: '10',  date: '11/12/2020'))
        ..add(VitalRow(name: 'Height', icon: 'images/body-weight.png', unit:  'cm', value: '10',  date: '11/12/2020'))
        ..add(VitalRow(name: 'Blood Pressure', icon: 'images/blood-pressure.png', unit:  'mmHg', value: '10',  date: '11/12/2020'))
        ..add(VitalRow(name: 'Body Temperature', icon: 'images/thermometer.png',  unit:'Celcius', value: '10',  date: '11/12/2020'))
        ..add(VitalRow(name: 'Body Surface Area', icon: 'images/thermometer.png', unit:  'm2', value: '10',  date: '11/12/2020'))
        ..add(VitalRow(name: 'Body Mass Index', icon: 'images/body-weight.png', unit: 'kg/m2', value: '10',  date: '11/12/2020'));
        return myVitals;
      }

      List<LabResultRow> myLabResults() {
          List<LabResultRow> myLabResults = []
        ..add(LabResultRow(name: 'Medplus', description: 'Body Surface Area',  unit:'Celcius', value: '80',  date: '11/12/2020'))
        ..add(LabResultRow(name: 'Star Labs', description: 'Body Surface Area', unit:  'm2', value: '90',  date: '07/12/2020'))
        ..add(LabResultRow(name: 'Nkechi\'s Lab', description: 'Respiration Rate', unit: 'kg/m2', value: '47',  date: '02/12/2020'));
        return myLabResults;
      }
      
}

