class PhysicianResponse {
  int status;
  bool response;
  Data data;
  String message;
  String errMessage;

  PhysicianResponse(
      {this.status, this.response, this.data, this.message, this.errMessage});

  PhysicianResponse.fromJson(Map<String, dynamic> json) {
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
  List<Physicians> physicians;

  Data({this.physicians});

  Data.fromJson(Map<String, dynamic> json) {
    if (json['physicians'] != null) {
      physicians = List<Physicians>();
      json['physicians'].forEach((v) {
        physicians.add(Physicians.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    if (this.physicians != null) {
      data['physicians'] = this.physicians.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Physicians {
  Specialty specialty;
  String title;
  String userId;
  int iV;
  List<Subspecialty> subspecialty;
  List<Credentials> credentials;
  String titles;
  String startedPractice;
  List<Null> documents;
  UserInfo userInfo;
  List<Null> ratingsInfo;
  List<Null> feedback;
  String practiceInfo;
  String id;

  Physicians(
      {this.specialty,
      this.title,
      this.titles,
      this.userId,
      this.iV,
      this.subspecialty,
      this.credentials,
      this.startedPractice,
      this.documents,
      this.userInfo,
      this.ratingsInfo,
      this.feedback,
      this.practiceInfo,
      this.id});


  Physicians.fromJson(Map<String, dynamic> json) {
    specialty = json['specialty'] != null
        ? Specialty.fromJson(json['specialty'])
        : null;
    title = json['title'];
    userId = json['user_id'];
    iV = json['__v'];
    if (json['subspecialty'] != null) {
      subspecialty = List<Subspecialty>();
      json['subspecialty'].forEach((v) {
        subspecialty.add(Subspecialty.fromJson(v));
      });
    }
    titles = '';
    if (json['credentials'] != null) {
      credentials = List<Credentials>();
      json['credentials'].forEach((v) {
        var cred = Credentials.fromJson(v);
        credentials.add(cred);
        titles = titles+'${cred.title}, ';
      });
    }
    startedPractice = json['started_practice'];
    // if (json['documents'] != null) {
    //   documents = List<Null>();
    //   json['documents'].forEach((v) {
    //     documents.add(Null.fromJson(v));
    //   });
    // }
    userInfo = json['user_info'] != null
        ? UserInfo.fromJson(json['user_info'])
        : null;
    // if (json['ratings_info'] != null) {
    //   ratingsInfo = List<Null>();
    //   json['ratings_info'].forEach((v) {
    //     ratingsInfo.add(Null.fromJson(v));
    //   });
    // }
    // if (json['feedback'] != null) {
    //   feedback = List<Null>();
    //   json['feedback'].forEach((v) {
    //     feedback.add(Null.fromJson(v));
    //   });
    // }
    practiceInfo = json['practice_info'];
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    if (this.specialty != null) {
      data['specialty'] = this.specialty.toJson();
    }
    data['title'] = this.title;
    data['user_id'] = this.userId;
    data['__v'] = this.iV;
    if (this.subspecialty != null) {
      data['subspecialty'] = this.subspecialty.map((v) => v.toJson()).toList();
    }
    if (this.credentials != null) {
      data['credentials'] = this.credentials.map((v) => v.toJson()).toList();
    }
    data['started_practice'] = this.startedPractice;
    // if (this.documents != null) {
    //   data['documents'] = this.documents.map((v) => v.toJson()).toList();
    // }
    if (this.userInfo != null) {
      data['user_info'] = this.userInfo.toJson();
    }
    // if (this.ratingsInfo != null) {
    //   data['ratings_info'] = this.ratingsInfo.map((v) => v.toJson()).toList();
    // }
    // if (this.feedback != null) {
    //   data['feedback'] = this.feedback.map((v) => v.toJson()).toList();
    // }
    data['practice_info'] = this.practiceInfo;
    data['id'] = this.id;
    return data;
  }
}

class Specialty {
  String title;
  String field;

  Specialty({this.title, this.field});

  Specialty.fromJson(Map<String, dynamic> json) {
    title = json['title'];
    field = json['field'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['title'] = this.title;
    data['field'] = this.field;
    return data;
  }
}

class Subspecialty {
  String sId;
  String title;
  String field;

  Subspecialty({this.sId, this.title, this.field});

  Subspecialty.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    title = json['title'];
    field = json['field'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['_id'] = this.sId;
    data['title'] = this.title;
    data['field'] = this.field;
    return data;
  }
}

class Credentials {
  String sId;
  String key;
  String type;
  String title;

  Credentials({this.sId, this.key, this.type, this.title});

  Credentials.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    key = json['key'];
    type = json['type'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['_id'] = this.sId;
    data['key'] = this.key;
    data['type'] = this.type;
    data['title'] = this.title;
    return data;
  }
}

class UserInfo {
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
  String createdAt;
  String email;
  String phone;
  String firstName;
  String username;
  String country;
  String gender;
  String dateOfBirth;
  String lastSeen;
  String updatedAt;
  int iV;
  String id;

  UserInfo(
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
      this.createdAt,
      this.email,
      this.phone,
      this.firstName,
      this.username,
      this.country,
      this.gender,
      this.dateOfBirth,
      this.lastSeen,
      this.updatedAt,
      this.iV,
      this.id});

  UserInfo.fromJson(Map<String, dynamic> json) {
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
    createdAt = json['createdAt'];
    email = json['email'];
    phone = json['phone'];
    firstName = json['firstName'];
    username = json['username'];
    country = json['country'];
    gender = json['gender'];
    dateOfBirth = json['dateOfBirth'];
    lastSeen = json['lastSeen'];
    updatedAt = json['updatedAt'];
    iV = json['__v'];
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
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
    data['createdAt'] = this.createdAt;
    data['email'] = this.email;
    data['phone'] = this.phone;
    data['firstName'] = this.firstName;
    data['username'] = this.username;
    data['country'] = this.country;
    data['gender'] = this.gender;
    data['dateOfBirth'] = this.dateOfBirth;
    data['lastSeen'] = this.lastSeen;
    data['updatedAt'] = this.updatedAt;
    data['__v'] = this.iV;
    data['id'] = this.id;
    return data;
  }
}
