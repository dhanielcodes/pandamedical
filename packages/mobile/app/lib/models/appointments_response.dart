class AppointmentsResponse {
  int status;
  bool response;
  Data data;
  String message;
  String errMessage;

  AppointmentsResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  AppointmentsResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    data = json['data'] != null ? Data.fromJson(json['data']) : null;
    message = json['message'];
    errMessage = json['errMessage'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
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
  List<Appointments> appointments;

  Data({this.appointments});

  Data.fromJson(Map<String, dynamic> json) {
    if (json['appointments'] != null) {
      appointments = <Appointments>[];
      json['appointments'].forEach((v) {
        appointments.add(Appointments.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    if (this.appointments != null) {
      data['appointments'] = this.appointments.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Appointments {
  String sId;
  Appointee appointee;
  Appointee scheduler;
  Timeslots timeslots;
  String createdAt;
  String updatedAt;
  int iV;

  Appointments(
      {this.sId,
      this.appointee,
      this.scheduler,
      this.timeslots,
      this.createdAt,
      this.updatedAt,
      this.iV});

  Appointments.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    appointee = json['appointee'] != null
        ? Appointee.fromJson(json['appointee'])
        : null;
    scheduler = json['scheduler'] != null
        ? Appointee.fromJson(json['scheduler'])
        : null;
    timeslots = json['timeslots'] != null
        ? Timeslots.fromJson(json['timeslots'])
        : null;
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['_id'] = this.sId;
    if (this.appointee != null) {
      data['appointee'] = this.appointee.toJson();
    }
    if (this.scheduler != null) {
      data['scheduler'] = this.scheduler.toJson();
    }
    if (this.timeslots != null) {
      data['timeslots'] = this.timeslots.toJson();
    }
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    data['__v'] = this.iV;
    return data;
  }
}

class Appointee {
  String profilePic;
  String lastName;
  String role;
  bool isOnline;
  String sId;
  String email;
  String phone;
  String firstName;
  String username;
  String gender;
  String dateOfBirth;
  String lastSeen;
  int iV;
  String id;

  Appointee(
      {this.profilePic,
      this.lastName,
      this.role,
      this.isOnline,
      this.sId,
      this.email,
      this.phone,
      this.firstName,
      this.username,
      this.gender,
      this.dateOfBirth,
      this.lastSeen,
      this.iV,
      this.id});

  Appointee.fromJson(Map<String, dynamic> json) {
    profilePic = json['profilePic'];
    lastName = json['lastName'];
    role = json['role'];
    isOnline = json['isOnline'];
    sId = json['_id'];
    email = json['email'];
    phone = json['phone'];
    firstName = json['firstName'];
    username = json['username'];
    gender = json['gender'];
    dateOfBirth = json['dateOfBirth'];
    lastSeen = json['lastSeen'];
    iV = json['__v'];
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['profilePic'] = this.profilePic;
    data['lastName'] = this.lastName;
    data['role'] = this.role;
    data['isOnline'] = this.isOnline;
    data['_id'] = this.sId;
    data['email'] = this.email;
    data['phone'] = this.phone;
    data['firstName'] = this.firstName;
    data['username'] = this.username;
    data['gender'] = this.gender;
    data['dateOfBirth'] = this.dateOfBirth;
    data['lastSeen'] = this.lastSeen;
    data['__v'] = this.iV;
    data['id'] = this.id;
    return data;
  }
}

class Timeslots {
  bool isActive;
  bool isOverdue;
  bool isClosed;
  String status;
  String sId;
  String slotTime;
  String slotDate;
  String appointeeId;
  int iV;

  Timeslots(
      {this.isActive,
      this.isOverdue,
      this.isClosed,
      this.status,
      this.sId,
      this.slotTime,
      this.slotDate,
      this.appointeeId,
      this.iV});

  Timeslots.fromJson(Map<String, dynamic> json) {
    isActive = json['isActive'];
    isOverdue = json['isOverdue'];
    isClosed = json['isClosed'];
    status = json['status'];
    sId = json['_id'];
    slotTime = json['slot_time'];
    slotDate = json['slot_date'];
    appointeeId = json['appointee_id'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['isActive'] = this.isActive;
    data['isOverdue'] = this.isOverdue;
    data['isClosed'] = this.isClosed;
    data['status'] = this.status;
    data['_id'] = this.sId;
    data['slot_time'] = this.slotTime;
    data['slot_date'] = this.slotDate;
    data['appointee_id'] = this.appointeeId;
    data['__v'] = this.iV;
    return data;
  }
}
