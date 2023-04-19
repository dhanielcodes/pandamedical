class LabResultHistoryResponse {
  int status;
  bool response;
  List<Data> data;
  String message;
  String errMessage;

  LabResultHistoryResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  LabResultHistoryResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    if (json['data'] != null) {
      data = <Data>[];
      json['data'].forEach((v) {
        data.add(Data.fromJson(v));
      });
    }
    message = '${json['message']}';
    errMessage = '${json['errMessage']}';
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['status'] = this.status;
    data['response'] = this.response;
    if (this.data != null) {
      data['data'] = this.data.map((v) => v.toJson()).toList();
    }
    data['message'] = this.message;
    data['errMessage'] = this.errMessage;
    return data;
  }
}

class Data {
  String source;
  String comment;
  String sId;
  String dateEntered;
  String timestamp;
  List<LabTests> labTests;
  String userId;
  String observerId;
  String createdBy;
  int iV;

  Data(
      {this.source,
      this.comment,
      this.sId,
      this.dateEntered,
      this.timestamp,
      this.labTests,
      this.userId,
      this.observerId,
      this.createdBy, 
      this.iV});

  Data.fromJson(Map<String, dynamic> json) {
    source = json['source'];
    comment = json['comment'];
    sId = json['_id'];
    dateEntered = json['date_entered'];
    timestamp = json['timestamp'];
    if (json['lab_tests'] != null) {
      labTests = List<LabTests>();
      json['lab_tests'].forEach((v) {
        labTests.add(LabTests.fromJson(v));
      });
    }
    userId = json['user_id'];
    observerId = json['observer_id'];
    createdBy = json['created_by'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['source'] = this.source;
    data['comment'] = this.comment;
    data['_id'] = this.sId;
    data['date_entered'] = this.dateEntered;
    data['timestamp'] = this.timestamp;
    if (this.labTests != null) {
      data['lab_tests'] = this.labTests.map((v) => v.toJson()).toList();
    }
    data['user_id'] = this.userId;
    data['observer_id'] = this.observerId;
    data['created_by'] = this.createdBy;
    data['__v'] = this.iV;
    return data;
  }
}

class LabTests {
  String labSecondaryValue;
  String sId;
  String labKey;
  String labDefaultValue;
  String unit;
  String description;
  String labName;

  LabTests(
      {this.labSecondaryValue,
      this.sId,
      this.labKey,
      this.labDefaultValue,
      this.unit,
      this.description,
      this.labName});

  LabTests.fromJson(Map<String, dynamic> json) {
    labSecondaryValue = json['lab_secondary_value'].toString();
    sId = json['_id'];
    labKey = json['lab_key'].toString();
    labDefaultValue = json['lab_default_value'].toString();
    unit = json['unit'];
    description = json['description'].toString();
    labName = json['lab_name'].toString();
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['lab_secondary_value'] = this.labSecondaryValue;
    data['_id'] = this.sId;
    data['lab_key'] = this.labKey;
    data['lab_default_value'] = this.labDefaultValue;
    data['unit'] = this.unit;
    data['description'] = this.description;
    data['lab_name'] = this.labName;
    return data;
  }
}
