import 'vital_obj.dart';

class VitalHistoryResponse {
  int status;
  bool response;
  List<Data> data;
  String message;
  String errMessage;

  VitalHistoryResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  VitalHistoryResponse.fromJson(Map<String, dynamic> json) {
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
  String sId;
  String source;
  String comment;
  String dateEntered;
  String timestamp;
  String userId;
  String observerId;
  String createdBy;
  String createdAt;
  String updatedAt;
  List<Vitals> vitals;
  int iV;

  Data(
      {this.sId,
      this.source,
      this.comment,
      this.dateEntered,
      this.timestamp,
      this.userId,
      this.observerId,
      this.createdBy,
      this.createdAt,
      this.updatedAt,
      this.vitals,
      this.iV});

  Data.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    source = json['source'];
    comment = json['comment'];
    dateEntered = json['date_entered'];
    timestamp = json['timestamp'];
    userId = json['user_id'];
    observerId = json['observer_id'];
    createdBy = json['created_by'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    if (json['vitals'] != null) {
      vitals = List<Vitals>();
      json['vitals'].forEach((v) {
        vitals.add(Vitals.fromJson(v, timestamp));
      });
    }
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['_id'] = this.sId;
    data['source'] = this.source;
    data['comment'] = this.comment;
    data['date_entered'] = this.dateEntered;
    data['timestamp'] = this.timestamp;
    data['user_id'] = this.userId;
    data['observer_id'] = this.observerId;
    data['created_by'] = this.createdBy;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    if (this.vitals != null) {
      data['vitals'] = this.vitals.map((v) => v.toJson()).toList();
    }
    data['__v'] = this.iV;
    return data;
  }
}

