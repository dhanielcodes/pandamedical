class LabResult {
  ResultSource resultSource;
  String description;
  Null unit;
  String sId;
  String title;
  String key;
  int iV;

  LabResult(
      {this.resultSource,
      this.description,
      this.unit,
      this.sId,
      this.title,
      this.key,
      this.iV});

  LabResult.fromJson(Map<String, dynamic> json) {
    resultSource = json['result_source'] != null
        ? ResultSource.fromJson(json['result_source'])
        : null;
    description = json['description'];
    unit = json['unit'];
    sId = json['_id'];
    title = json['title'];
    key = json['key'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    if (this.resultSource != null) {
      data['result_source'] = this.resultSource.toJson();
    }
    data['description'] = this.description;
    data['unit'] = this.unit;
    data['_id'] = this.sId;
    data['title'] = this.title;
    data['key'] = this.key;
    data['__v'] = this.iV;
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
