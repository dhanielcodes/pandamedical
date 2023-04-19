class VitalField {
  NorminalValues norminalValues;
  ResultSource resultSource;
  String description;
  String sId;
  String title;
  String key;
  List<Unit> unit;
  int iV;

  VitalField(
      {this.norminalValues,
      this.resultSource,
      this.description,
      this.sId,
      this.title,
      this.key,
      this.unit,
      this.iV});

  VitalField.fromJson(Map<String, dynamic> json) {
    norminalValues = json['norminal_values'] != null
        ? NorminalValues.fromJson(json['norminal_values'])
        : null;
    resultSource = json['result_source'] != null
        ? ResultSource.fromJson(json['result_source'])
        : null;
    description = json['description'];
    sId = json['_id'];
    title = json['title'];
    key = json['key'];
    if (json['unit'] != null) {
      unit = List<Unit>();
      json['unit'].forEach((v) {
        unit.add(Unit.fromJson(v));
      });
    }
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    if (this.norminalValues != null) {
      data['norminal_values'] = this.norminalValues.toJson();
    }
    if (this.resultSource != null) {
      data['result_source'] = this.resultSource.toJson();
    }
    data['description'] = this.description;
    data['_id'] = this.sId;
    data['title'] = this.title;
    data['key'] = this.key;
    if (this.unit != null) {
      data['unit'] = this.unit.map((v) => v.toJson()).toList();
    }
    data['__v'] = this.iV;
    return data;
  }
}

class NorminalValues {
  int low;
  int normal;
  int high;

  NorminalValues({this.low, this.normal, this.high});

  NorminalValues.fromJson(Map<String, dynamic> json) {
    low = json['low'];
    normal = json['normal'];
    high = json['high'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['low'] = this.low;
    data['normal'] = this.normal;
    data['high'] = this.high;
    return data;
  }
}

class ResultSource {
  String patient;
  String physician;
  String lab;
  String clinic;

  ResultSource({this.patient, this.physician, this.lab, this.clinic});

  ResultSource.fromJson(Map<String, dynamic> json) {
    patient = json['patient'];
    physician = json['physician'];
    lab = json['lab'];
    clinic = json['clinic'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['patient'] = this.patient;
    data['physician'] = this.physician;
    data['lab'] = this.lab;
    data['clinic'] = this.clinic;
    return data;
  }
}

class Unit {
  String sId;
  String system;
  String symbol;

  Unit({this.sId, this.system, this.symbol});

  Unit.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    system = json['system'];
    symbol = json['symbol'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['_id'] = this.sId;
    data['system'] = this.system;
    data['symbol'] = this.symbol;
    return data;
  }
}
