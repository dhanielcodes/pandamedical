import 'dart:core';

class MedicalSpecialtyResponse {
  int status;
  bool response;
  Data data;
  String message;
  String errMessage;

  MedicalSpecialtyResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  MedicalSpecialtyResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    data = json['data'] != null ?  Data.fromJson(json['data']) : null;
    message = json['message'];
    errMessage = json['errMessage'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data =  Map<String, dynamic>();
    data['status'] = this.status;
    data['response'] = this.response;
    if (this.data != null) {
      data['data'] = this.data.toJson();
    }
    data['message'] = this.message;
    data['errMessage'] = this.errMessage;
    return data;
  }
}

class Data {
  List<Listt> list;

  Data({this.list});

  Data.fromJson(Map<String, dynamic> json) {
    if (json['list'] != null) {
      list =  List<Listt>();
      json['list'].forEach((v) {
        list.add( Listt.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data =  Map<String, dynamic>();
    if (this.list != null) {
      data['list'] = this.list.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Listt {
  String description;
  List<Null> children;
  String status;
  String name;
  String title;
  String key;
  int iV;

  Listt(
      {this.description,
      this.children,
      this.status,
      this.name,
      this.title,
      this.key,
      this.iV});

  Listt.fromJson(Map<String, dynamic> json) {
    description = json['description'];
    // if (json['children'] != null) {
    //   children =  List<Null>();
    //   json['children'].forEach((v) {
    //     children.add( Null.fromJson(v));
    //   });
    // }
    status = json['status'];
    name = json['name'];
    title = json['title'];
    key = json['key'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data =  Map<String, dynamic>();
    data['description'] = this.description;
    // if (this.children != null) {
    //   data['children'] = this.children.map((v) => v.toJson()).toList();
    // }
    data['status'] = this.status;
    data['name'] = this.name;
    data['title'] = this.title;
    data['key'] = this.key;
    data['__v'] = this.iV;
    return data;
  }
}
