class LoginResponse {
  int status;
  bool response;
  Data data;
  String message;
  String errMessage;

  LoginResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  LoginResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    data = json['data'] != null ?  Data.fromJson(json['data']) : null;
    message = '${json['message']}';
    errMessage = '${json['errMessage']}';
  }

  Map<String, dynamic> toJson() {
    var data =  <String, dynamic>{};
    data['status'] = status;
    data['response'] = response;
    if (this.data != null) {
      data['data'] = this.data.toJson();
    }
    data['message'] = message;
    data['errMessage'] = errMessage;
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
