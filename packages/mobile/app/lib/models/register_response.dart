class RegisterResponse {
  int status;
  bool response;
  Data data;
  String message;
  String errMessage;

  RegisterResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  RegisterResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    data = json['data'] != null ?  Data.fromJson(json['data']) : null;
    message = json['message'];
    if (json['errMessage'] != null) {
      errMessage = '${json['errMessage']}';
      // errMessage = String();
      // json['errMessage'].forEach((v) {
      //   errMessage.add(ErrMessage.fromJson(v));
      // });
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
      data['errMessage'] = '${this.errMessage[0]}';//.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Data {
  String token;
  String sId;

  Data({this.token, this.sId});

  Data.fromJson(Map<String, dynamic> json) {
    token = json['token'];
    sId = json['_id'];
  }

  Map<String, dynamic> toJson() {
    var data =  <String, dynamic>{};
    data['token'] = token;
    data['_id'] = sId;
    return data;
  }
}

class ErrMessage {
  String dateOfBirth;

  ErrMessage({this.dateOfBirth});

  ErrMessage.fromJson(Map<String, dynamic> json) {
    dateOfBirth = json['dateOfBirth'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['dateOfBirth'] = this.dateOfBirth;
    return data;
  }
}
