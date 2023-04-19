import 'package:pandamedical/models/vital_options_response.dart';

class FetchLabResultResponse {
  int status;
  bool response;
  List<VitalData> data;
  String message;
  String errMessage;

  FetchLabResultResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  FetchLabResultResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    if (json['data'] != null) {
      data = List<VitalData>();
      json['data'].forEach((v) {
        data.add(VitalData.fromJson(v));
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
