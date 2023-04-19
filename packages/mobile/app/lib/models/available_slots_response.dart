class AvailableSlotsResponse {
  int status;
  bool response;
  Data data;
  String message;
  String errMessage;

  AvailableSlotsResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  AvailableSlotsResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
    message = json['message'];
    errMessage = json['errMessage'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
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
  List<Timeslots> timeslots;
  String nextAvailableSlot;

  Data({this.timeslots, this.nextAvailableSlot});

  Data.fromJson(Map<String, dynamic> json) {
    if (json['timeslots'] != null) {
      timeslots = new List<Timeslots>();
      json['timeslots'].forEach((v) {
        timeslots.add(new Timeslots.fromJson(v));
      });
    }
    nextAvailableSlot = json['next_available_slot'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.timeslots != null) {
      data['timeslots'] = this.timeslots.map((v) => v.toJson()).toList();
    }
    data['next_available_slot'] = this.nextAvailableSlot;
    return data;
  }
}

class Timeslots {
  String slotTime;
  String slotDate;

  Timeslots({this.slotTime, this.slotDate});

  Timeslots.fromJson(Map<String, dynamic> json) {
    slotTime = json['slot_time'];
    slotDate = json['slot_date'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['slot_time'] = this.slotTime;
    data['slot_date'] = this.slotDate;
    return data;
  }
}
