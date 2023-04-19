class AddVitalResponse {
  int status;
  bool response;
  Data data;
  String message;
  String errMessage;

  AddVitalResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  AddVitalResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    data = json['data'] != null ? Data.fromJson(json['data']) : null;
    message = json['message'];
    if (json['errMessage'] != null) {
      errMessage = '${json['errMessage']}';

    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['status'] = this.status;
    data['response'] = this.response;
    if (this.data != null) {
      data['data'] = this.data.toJson();
    }
    data['message'] = this.message;
    if (this.errMessage != null) {
      data['errMessage'] = '${this.errMessage}';//.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Data {
  String source;
  String comment;
  String sId;
  String dateEntered;
  String timestamp;
  List<Vitals> vitals;
  String userId;
  String observerId;
  String createdBy;
  String createdAt;
  String updatedAt;
  int iV;

  Data(
      {this.source,
      this.comment,
      this.sId,
      this.dateEntered,
      this.timestamp,
      this.vitals,
      this.userId,
      this.observerId,
      this.createdBy,
      this.createdAt,
      this.updatedAt,
      this.iV});

  Data.fromJson(Map<String, dynamic> json) {
    source = json['source'];
    comment = json['comment'];
    sId = json['_id'];
    dateEntered = json['date_entered'];
    timestamp = json['timestamp'];
    if (json['vitals'] != null) {
      vitals = List<Vitals>();
      json['vitals'].forEach((v) {
        vitals.add(Vitals.fromJson(v));
      });
    }
    userId = json['user_id'];
    observerId = json['observer_id'];
    createdBy = json['created_by'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['source'] = this.source;
    data['comment'] = this.comment;
    data['_id'] = this.sId;
    data['date_entered'] = this.dateEntered;
    data['timestamp'] = this.timestamp;
    if (this.vitals != null) {
      data['vitals'] = this.vitals.map((v) => v.toJson()).toList();
    }
    data['user_id'] = this.userId;
    data['observer_id'] = this.observerId;
    data['created_by'] = this.createdBy;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    data['__v'] = this.iV;
    return data;
  }
}

class Vitals {
  String vitalsSecondaryValue;
  String sId;
  String vitalsKey;
  String vitalsDefaultValue;
  String unit;
  String description;
  String title;

  Vitals(
      {this.vitalsSecondaryValue,
      this.sId,
      this.vitalsKey,
      this.vitalsDefaultValue,
      this.unit,
      this.description,
      this.title});

  Vitals.fromJson(Map<String, dynamic> json) {
    vitalsSecondaryValue = json['vitals_secondary_value'];
    sId = json['_id'];
    vitalsKey = json['vitals_key'];
    vitalsDefaultValue = json['vitals_default_value'];
    unit = json['unit'];
    description = json['description'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['vitals_secondary_value'] = this.vitalsSecondaryValue;
    data['_id'] = this.sId;
    data['vitals_key'] = this.vitalsKey;
    data['vitals_default_value'] = this.vitalsDefaultValue;
    data['unit'] = this.unit;
    data['description'] = this.description;
    data['title'] = this.title;
    return data;
  }
}

class ErrMessage {
  String vitals;

  ErrMessage({this.vitals});

  ErrMessage.fromJson(Map<String, dynamic> json) {
    vitals = json['vitals'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['vitals'] = this.vitals;
    return data;
  }
}
