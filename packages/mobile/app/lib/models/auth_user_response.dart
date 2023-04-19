class AuthUserResponse {
  int status;
  bool response;
  Data data;
  String message;
  String errMessage;

  AuthUserResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  AuthUserResponse.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    response = json['response'];
    data = json['data'] != null ? Data.fromJson(json['data']) : null;
    message = json['message'];
    errMessage = json['errMessage'];
  }

  Map<String, dynamic> toJson() {
    final data = Map<String, dynamic>();
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
  String token;
  User user;

  Data({this.token, this.user});

  Data.fromJson(Map<String, dynamic> json) {
    token = json['token'];
    user = json['user'] != null ? User.fromJson(json['user']) : null;
  }

  Map<String, dynamic> toJson() {
    final data = Map<String, dynamic>();
    data['token'] = this.token;
    if (this.user != null) {
      data['user'] = this.user.toJson();
    }
    return data;
  }
}

class User {
  String profilePic;
  String qrcode;
  String lastName;
  String ip;
  String device;
  String inviteCode;
  String invitedBy;
  String role;
  String street;
  String city;
  String state;
  bool isActive;
  String deviceToken;
  bool isOnline;
  String unitSystem;
  String sId;
  String firstName;
  String email;
  String gender;
  String createdAt;
  String dateOfBirth;
  String phone;
  String username;
  String lastSeen;
  String updatedAt;
  String iV;
  Vitals vitals;
  String id;

  User(
      {this.profilePic,
      this.qrcode,
      this.lastName,
      this.ip,
      this.device,
      this.inviteCode,
      this.invitedBy,
      this.role,
      this.street,
      this.city,
      this.state,
      this.isActive,
      this.deviceToken,
      this.isOnline,
      this.unitSystem,
      this.sId,
      this.firstName,
      this.email,
      this.gender,
      this.createdAt,
      this.dateOfBirth,
      this.phone,
      this.username,
      this.lastSeen,
      this.updatedAt,
      this.iV,
      this.vitals,
      this.id});

  User.fromJson(Map<String, dynamic> json) {
    profilePic = json['profilePic'];
    qrcode = json['qrcode'];
    lastName = json['lastName'];
    ip = json['ip'];
    device = json['device'];
    inviteCode = json['inviteCode'];
    invitedBy = json['invitedBy'];
    role = json['role'];
    street = json['street'];
    city = json['city'];
    state = json['state'];
    isActive = json['isActive'];
    deviceToken = json['deviceToken'];
    isOnline = json['isOnline'];
    unitSystem = json['unit_system'];
    sId = json['_id'];
    firstName = json['firstName'];
    email = json['email'];
    gender = json['gender'];
    createdAt = json['createdAt'];
    dateOfBirth = json['dateOfBirth'];
    phone = json['phone'];
    username = json['username'];
    lastSeen = json['lastSeen'];
    updatedAt = json['updatedAt'];
    iV = "${json['__v']}";
    vitals =
        json['vitals'] != null ? Vitals.fromJson(json['vitals']) : null;
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    final data = Map<String, dynamic>();
    data['profilePic'] = this.profilePic;
    data['qrcode'] = this.qrcode;
    data['lastName'] = this.lastName;
    data['ip'] = this.ip;
    data['device'] = this.device;
    data['inviteCode'] = this.inviteCode;
    data['invitedBy'] = this.invitedBy;
    data['role'] = this.role;
    data['street'] = this.street;
    data['city'] = this.city;
    data['state'] = this.state;
    data['isActive'] = this.isActive;
    data['deviceToken'] = this.deviceToken;
    data['isOnline'] = this.isOnline;
    data['unit_system'] = this.unitSystem;
    data['_id'] = this.sId;
    data['firstName'] = this.firstName;
    data['email'] = this.email;
    data['gender'] = this.gender;
    data['createdAt'] = this.createdAt;
    data['dateOfBirth'] = this.dateOfBirth;
    data['phone'] = this.phone;
    data['username'] = this.username;
    data['lastSeen'] = this.lastSeen;
    data['updatedAt'] = this.updatedAt;
    data['__v'] = this.iV;
    if (this.vitals != null) {
      data['vitals'] = this.vitals.toJson();
    }
    data['id'] = this.id;
    return data;
  }
}

class Vitals {
  Temperature temperature;
  BloodPressure bloodPressure;
  Temperature height;
  Temperature weight;
  Temperature bmi;
  Temperature oxygenSaturation;
  Temperature respirationRate;
  HeartRate heartRate;
  Bsa bsa;

  Vitals(
      {this.temperature,
      this.bloodPressure,
      this.height,
      this.weight,
      this.bmi,
      this.oxygenSaturation,
      this.respirationRate,
      this.heartRate,
      this.bsa});

  Vitals.fromJson(Map<String, dynamic> json) {
    temperature = json['temperature'] != null
        ? Temperature.fromJson(json['temperature'])
        : null;
    bloodPressure = json['blood_pressure'] != null
        ? BloodPressure.fromJson(json['blood_pressure'])
        : null;
    height = json['height'] != null
        ? Temperature.fromJson(json['height'])
        : null;
    weight = json['weight'] != null
        ? Temperature.fromJson(json['weight'])
        : null;
    bmi = json['bmi'] != null ? Temperature.fromJson(json['bmi']) : null;
    oxygenSaturation = json['oxygen_saturation'] != null
        ? Temperature.fromJson(json['oxygen_saturation'])
        : null;
    respirationRate = json['respiration_rate'] != null
        ? Temperature.fromJson(json['respiration_rate'])
        : null;
    heartRate = json['heart_rate'] != null
        ? HeartRate.fromJson(json['heart_rate'])
        : null;
    bsa = json['bsa'] != null ? Bsa.fromJson(json['bsa']) : null;
  }

  Map<String, dynamic> toJson() {
    final data = Map<String, dynamic>();
    if (this.temperature != null) {
      data['temperature'] = this.temperature.toJson();
    }
    if (this.bloodPressure != null) {
      data['blood_pressure'] = this.bloodPressure.toJson();
    }
    if (this.height != null) {
      data['height'] = this.height.toJson();
    }
    if (this.weight != null) {
      data['weight'] = this.weight.toJson();
    }
    if (this.bmi != null) {
      data['bmi'] = this.bmi.toJson();
    }
    if (this.oxygenSaturation != null) {
      data['oxygen_saturation'] = this.oxygenSaturation.toJson();
    }
    if (this.respirationRate != null) {
      data['respiration_rate'] = this.respirationRate.toJson();
    }
    if (this.heartRate != null) {
      data['heart_rate'] = this.heartRate.toJson();
    }
    if (this.bsa != null) {
      data['bsa'] = this.bsa.toJson();
    }
    return data;
  }
}

class Temperature {
  String value;
  String unit;
  String numberOfRecords;
  String latestRecord;

  Temperature({this.value, this.unit, this.numberOfRecords, this.latestRecord});

  Temperature.fromJson(Map<String, dynamic> json) {
    value = "${json['value']}";
    unit = json['unit'];
    numberOfRecords = "${json['number_of_records']}";
    latestRecord = json['latest_record'];
  }

  Map<String, dynamic> toJson() {
    final data =  Map<String, dynamic>();
    data['value'] = this.value;
    data['unit'] = this.unit;
    data['number_of_records'] = this.numberOfRecords;
    data['latest_record'] = this.latestRecord;
    return data;
  }
}

class BloodPressure {
  String systolic;
  String diastolic;
  String unit;
  String numberOfRecords;
  String latestRecord;
  History history;

  BloodPressure(
      {this.systolic,
      this.diastolic,
      this.unit,
      this.numberOfRecords,
      this.latestRecord,
      this.history});

  BloodPressure.fromJson(Map<String, dynamic> json) {
    systolic = json['systolic'].toString();
    diastolic = json['diastolic'].toString();
    unit = json['unit'];
    numberOfRecords = json['number_of_records'].toString();
    latestRecord = json['latest_record'];
    history =
        json['history'] != null ? History.fromJson(json['history']) : null;
  }

  Map<String, dynamic> toJson() {
    final data = Map<String, dynamic>();
    data['systolic'] = this.systolic;
    data['diastolic'] = this.diastolic;
    data['unit'] = this.unit;
    data['number_of_records'] = this.numberOfRecords;
    data['latest_record'] = this.latestRecord;
    if (this.history != null) {
      data['history'] = this.history.toJson();
    }
    return data;
  }
}

class History {
  String low;
  String normal;
  String high;
  String average;

  History({this.low, this.normal, this.high, this.average});

  History.fromJson(Map<String, dynamic> json) {
    low = json['low'].toString();
    normal = json['normal'].toString();
    high = json['high'].toString();
    average = json['average'].toString();
  }

  Map<String, dynamic> toJson() {
    final data = Map<String, dynamic>();
    data['low'] = this.low;
    data['normal'] = this.normal;
    data['high'] = this.high;
    data['average'] = this.average;
    return data;
  }
}

class HeartRate {
  String value;
  String unit;
  String numberOfRecords;
  String latestRecord;
  History history;

  HeartRate(
      {this.value,
      this.unit,
      this.numberOfRecords,
      this.latestRecord,
      this.history});

  HeartRate.fromJson(Map<String, dynamic> json) {
    value = json['value'].toString();
    unit = json['unit'];
    numberOfRecords = json['number_of_records'].toString();
    latestRecord = json['latest_record'];
    history =
        json['history'] != null ? History.fromJson(json['history']) : null;
  }

  Map<String, dynamic> toJson() {
    final data = Map<String, dynamic>();
    data['value'] = this.value;
    data['unit'] = this.unit;
    data['number_of_records'] = this.numberOfRecords;
    data['latest_record'] = this.latestRecord;
    if (this.history != null) {
      data['history'] = this.history.toJson();
    }
    return data;
  }
}

class Bsa {
  String value;
  String unit;
  String numberOfRecords;
  String latestRecord;

  Bsa({this.value, this.unit, this.numberOfRecords, this.latestRecord});

  Bsa.fromJson(Map<String, dynamic> json) {
    value = json['value'].toString();
    unit = json['unit'];
    numberOfRecords = json['number_of_records'].toString();
    latestRecord = json['latest_record'];
  }

  Map<String, dynamic> toJson() {
    final data = Map<String, dynamic>();
    data['value'] = this.value;
    data['unit'] = this.unit;
    data['number_of_records'] = this.numberOfRecords;
    data['latest_record'] = this.latestRecord;
    return data;
  }
}
