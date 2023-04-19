/**
 * @apiDefine TokenHasExpiredError
 *
 * @apiError TokenError an Error has occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errMessage": "Your session has been timed out. Please login again to continue!",
 *       "message": null,
 *       "status": 500,
 *       "data": null,
 *       "response": true
 *     }
 */

/**
 * @apiDescription this endpoints fetches all the physicians 
 * @api {get} /physician fetch all physician
 * @apiName GetAllPhysician Lists
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "physicians": [
            {
                "specialty": {
                    "title": "Surgeon",
                    "field": "surgery"
                },
                "title": "Surgeon",
                "user_id": "5ffdb2ef344694663015ec4e",
                "__v": 0,
                "subspecialty": [
                    {
                        "_id": "6009dd341304a028ec7cac4f",
                        "title": "Complex General Surgical Oncology",
                        "field": "surgery"
                    },
                    {
                        "_id": "6009dd341304a028ec7cac50",
                        "title": "Pediatric Surgery",
                        "field": "surgery"
                    }
                ],
                "credentials": [
                    {
                        "_id": "6009dd341304a028ec7cac4e",
                        "key": "MD",
                        "type": "Doctor of Medicine",
                        "title": "Doctor of Medicine"
                    }
                ],
                "started_practice": "2020-05-29T00:00:00.000Z",
                "documents": [],
                "user_info": {
                    "profilePic": "",
                    "qrcode": "",
                    "lastName": "ezike",
                    "ip": "0.0.0.0",
                    "device": "null",
                    "inviteCode": "bobby_5fd579",
                    "invitedBy": null,
                    "role": "PHYSICIAN",
                    "street": "Plot 553 zone A Ext. Apo Reseetlement Garki",
                    "city": "Abuja",
                    "state": "FCT",
                    "isActive": true,
                    "deviceToken": null,
                    "isOnline": true,
                    "unit_system": "METRIC",
                    "_id": "5ffdb2ef344694663015ec4e",
                    "createdAt": "2020-12-15T03:22:00.083Z",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2347059648295",
                    "firstName": "bobby",
                    "username": "super_doctor",
                    "country": "NGN",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "updatedAt": "2021-01-11T03:22:00.439Z",
                    "__v": 8,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "ratings_info": [],
                "feedback": [],
                "practice_info": null,
                "id": null
            }
        ]
    },
    "message": "Available Physicians",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint fetches all physicians based on their given specialty
 * @api {get} /physician/specialty/:specialty fetch physicians by specialty
 * @apiName GetPhysiciansBySpecialty 
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String} specialty medical specialty to fetch physicians by
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "physicians": [
            {
                "specialty": {
                    "title": "Surgeon",
                    "field": "surgery"
                },
                "title": "Surgeon",
                "user_id": "5ffdb2ef344694663015ec4e",
                "__v": 0,
                "subspecialty": [
                    {
                        "_id": "6009dd341304a028ec7cac4f",
                        "title": "Complex General Surgical Oncology",
                        "field": "surgery"
                    },
                    {
                        "_id": "6009dd341304a028ec7cac50",
                        "title": "Pediatric Surgery",
                        "field": "surgery"
                    }
                ],
                "credentials": [
                    {
                        "_id": "6009dd341304a028ec7cac4e",
                        "key": "MD",
                        "type": "Doctor of Medicine",
                        "title": "Doctor of Medicine"
                    }
                ],
                "started_practice": "2020-05-29T00:00:00.000Z",
                "documents": [],
                "user_info": {
                    "profilePic": "",
                    "qrcode": "",
                    "lastName": "ezike",
                    "ip": "0.0.0.0",
                    "device": "null",
                    "inviteCode": "bobby_5fd579",
                    "invitedBy": null,
                    "role": "PHYSICIAN",
                    "street": "Plot 553 zone A Ext. Apo Reseetlement Garki",
                    "city": "Abuja",
                    "state": "FCT",
                    "isActive": true,
                    "deviceToken": null,
                    "isOnline": true,
                    "unit_system": "METRIC",
                    "_id": "5ffdb2ef344694663015ec4e",
                    "createdAt": "2020-12-15T03:22:00.083Z",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2347059648295",
                    "firstName": "bobby",
                    "username": "super_doctor",
                    "country": "NGN",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "updatedAt": "2021-01-11T03:22:00.439Z",
                    "__v": 8,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "ratings_info": [],
                "feedback": [],
                "practice_info": null,
                "id": null
            }
        ]
    },
    "message": "Available Physicians",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint fetches a user's (i.e physician) physicians fields
 * @api {get} physician/:id fetch specific physician
 * @apiName GetPhyisican
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String} id specify physician to fetch
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "physician": {
                "specialty": {
                    "title": "Surgeon",
                    "field": "surgery"
                },
                "title": "Surgeon",
                "user_id": "5ffdb2ef344694663015ec4e",
                "__v": 0,
                "subspecialty": [
                    {
                        "_id": "6009dd341304a028ec7cac4f",
                        "title": "Complex General Surgical Oncology",
                        "field": "surgery"
                    },
                    {
                        "_id": "6009dd341304a028ec7cac50",
                        "title": "Pediatric Surgery",
                        "field": "surgery"
                    }
                ],
                "credentials": [
                    {
                        "_id": "6009dd341304a028ec7cac4e",
                        "key": "MD",
                        "type": "Doctor of Medicine",
                        "title": "Doctor of Medicine"
                    }
                ],
                "started_practice": "2020-05-29T00:00:00.000Z",
                "documents": [],
                "user_info": {
                    "profilePic": "",
                    "qrcode": "",
                    "lastName": "ezike",
                    "ip": "0.0.0.0",
                    "device": "null",
                    "inviteCode": "bobby_5fd579",
                    "invitedBy": null,
                    "role": "PHYSICIAN",
                    "street": "Plot 553 zone A Ext. Apo Reseetlement Garki",
                    "city": "Abuja",
                    "state": "FCT",
                    "isActive": true,
                    "deviceToken": null,
                    "isOnline": true,
                    "unit_system": "METRIC",
                    "_id": "5ffdb2ef344694663015ec4e",
                    "createdAt": "2020-12-15T03:22:00.083Z",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2347059648295",
                    "firstName": "bobby",
                    "username": "super_doctor",
                    "country": "NGN",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "updatedAt": "2021-01-11T03:22:00.439Z",
                    "__v": 8,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "ratings_info": [],
                "feedback": [],
                "practice_info": null,
                "id": null
            }
    },
    "message": "Found Physician!",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint creates or updates a user's (i.e physician) physicians fields
 * @api {post} physician/:id create or update physician fields
 * @apiName PostUpdatePhyisican field
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String} id specify physician to update
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "physician": {
            "specialty": {
                "title": "Surgeon",
                "field": "surgery"
            },
            "title": "Surgeon",
            "_id": "6009c2f89565b1ebaf4365fc",
            "user_id": "5ffdb2ef344694663015ec4e",
            "__v": 0,
            "createdAt": "2021-01-21T18:07:52.215Z",
            "updatedAt": "2021-01-21T22:58:40.658Z",
            "subspecialty": [
                {
                    "_id": "600a072011fa3867904a0ff2",
                    "title": "Complex General Surgical Oncology",
                    "field": "surgery"
                },
                {
                    "_id": "600a072011fa3867904a0ff3",
                    "title": "Pediatric Surgery",
                    "field": "surgery"
                }
            ],
            "credentials": [
                {
                    "_id": "600a072011fa3867904a0ff1",
                    "key": "MD",
                    "type": "Doctor of Medicine",
                    "title": "Doctor of Medicine"
                }
            ],
            "started_practice": "2020-05-29T00:00:00.000Z",
            "documents": [],
            "id": "6009c2f89565b1ebaf4365fc"
        }
    },
    "message": "Physician Updated!",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint fetches potential Patients for a Physician
 * @api {get} /physician/search/type/patients fetch non-patient users
 * @apiName GetNonPatient
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Query) {String='John'} [patient] search for patient using keywords `email, firstName, LastName, phone`
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "users": [
            {
                "profilePic": "",
                "qrcode": "",
                "firstName": "valentine",
                "lastName": "tester",
                "role": "USER",
                "street": "Plot 533 Zone A Ext. Apo Resettlement.",
                "city": "",
                "state": "Abuja Federal Capital Territory",
                "isActive": true,
                "isOnline": true,
                "_id": "5fd8fa9b5c5e303f91aa2556",
                "email": "ozichukwuezike@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "1992-11-17T19:31:14.000Z",
                "phone": "+2347059648295",
                "username": "ozichukwuezike_314bdf",
                "lastSeen": "2020-12-15T18:04:11.987Z",
                "__v": 144,
                "country": "Nigeria",
                "physician": null,
                "additional_info": {
                    "user_id": "5fd8fa9b5c5e303f91aa2556",
                    "blood_type": "B+",
                    "__v": 0
                },
                "id": "5fd8fa9b5c5e303f91aa2556"
            }
        ]
    },
    "message": "Active ",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint fetches a Physician Added Patients
 * @api {get} /physician/patients fetch physician's patient
 * @apiName GetPatient
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Query) {String='John'} [search] search for patient using keywords `email, firstName, LastName, phone`
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "users": [
            {
                "profilePic": "",
                "qrcode": "",
                "firstName": "valentine",
                "lastName": "tester",
                "role": "USER",
                "street": "Plot 533 Zone A Ext. Apo Resettlement.",
                "city": "",
                "state": "Abuja Federal Capital Territory",
                "isActive": true,
                "isOnline": true,
                "_id": "5fd8fa9b5c5e303f91aa2556",
                "email": "ozichukwuezike@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "1992-11-17T19:31:14.000Z",
                "phone": "+2347059648295",
                "username": "ozichukwuezike_314bdf",
                "lastSeen": "2020-12-15T18:04:11.987Z",
                "__v": 144,
                "country": "Nigeria",
                "physician": null,
                "additional_info": {
                    "user_id": "5fd8fa9b5c5e303f91aa2556",
                    "blood_type": "B+",
                    "__v": 0
                },
                "id": "5fd8fa9b5c5e303f91aa2556"
            }
        ]
    },
    "message": "Active ",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint allows a Physician to Add User as a Patient
 * @api {Post} /physician/add/patient/:id create patient record
 * @apiName PostPatient
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String='24224425455gdfgdafa2355536'} id User Id to create Patient Record
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "patientRecord": {
            "status": "NON-ACCESS",
            "medical_record_access": false,
            "healthcare_provider": {
                "profilePic": "",
                "qrcode": "",
                "firstName": "bobby",
                "lastName": "ezike",
                "role": "PHYSICIAN",
                "street": "Plot 553 zone A Ext. Apo Reseetlement Garki",
                "city": "Abuja",
                "state": "FCT",
                "isOnline": true,
                "_id": "5ffdb2ef344694663015ec4e",
                "email": "ozichukwubobbyezike@gmail.com",
                "phone": "+2348109950207",
                "username": "super_doctor",
                "country": "NGN",
                "gender": "MALE",
                "dateOfBirth": "1980-11-17T19:31:14.000Z",
                "lastSeen": "2021-01-11T03:22:00.439Z",
                "__v": 29,
                "id": "5ffdb2ef344694663015ec4e"
            },
            "__v": 0,
            "patient": {
                "profilePic": "",
                "qrcode": "",
                "firstName": "valentine",
                "lastName": "tester",
                "role": "USER",
                "street": "Plot 533 Zone A Ext. Apo Resettlement.",
                "city": "",
                "state": "Abuja Federal Capital Territory",
                "isOnline": true,
                "_id": "5fd8fa9b5c5e303f91aa2556",
                "email": "ozichukwuezike@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "1992-11-17T19:31:14.000Z",
                "phone": "+2347059648295",
                "username": "ozichukwuezike_314bdf",
                "lastSeen": "2020-12-15T18:04:11.987Z",
                "__v": 144,
                "country": "Nigeria",
                "id": "5fd8fa9b5c5e303f91aa2556"
            }
        }
    },
    "message": "User Added as a patient",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint allows a Physician to request access to a Patient's Medical Records
 * @api {PUT} /physician/request/patient/:id request access to patient medical history
 * @apiName PutRequstPatient_Records
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String='24224425455gdfgdafa2355536'} id User Id to fetch Patient Medical Records
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": null,
    "message": "Request for Access to Medical Record/History Sent",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription this endpoint allows a Physician to fetch Patient Medical Records
 * @api {GET} /physician/fetch/patient/:id fetch patient medical history
 * @apiName GetPatient_Records
 * @apiGroup Physician
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String='24224425455gdfgdafa2355536'} id User Id to fetch Patient Medical Records
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "patientRecord": {
            "profilePic": "",
            "qrcode": "",
            "firstName": "valentine",
            "lastName": "tester",
            "role": "USER",
            "street": "Plot 533 Zone A Ext. Apo Resettlement.",
            "city": "",
            "state": "Abuja Federal Capital Territory",
            "isActive": true,
            "isOnline": true,
            "_id": "5fd8fa9b5c5e303f91aa2556",
            "email": "ozichukwuezike@gmail.com",
            "gender": "MALE",
            "dateOfBirth": "1992-11-17T19:31:14.000Z",
            "phone": "+2347059648295",
            "username": "ozichukwuezike_314bdf",
            "lastSeen": "2020-12-15T18:04:11.987Z",
            "__v": 149,
            "country": "Nigeria",
            "physician": null,
            "additional_info": {
                "primary_specialist": {
                    "firstName": "bobby",
                    "lastName": "ezike",
                    "user_id": "5ffdb2ef344694663015ec4e"
                },
                "emergency_contact": {
                    "name": "Ezike, Ozichukwu Valentine",
                    "phone": "+2347038363702"
                },
                "user_id": "5fd8fa9b5c5e303f91aa2556",
                "blood_type": "B+",
                "_id": "601232b76461cf730470869b",
                "__v": 0
            },
            "id": "5fd8fa9b5c5e303f91aa2556",
            "vitals": {
                "temperature": {
                    "value": 37,
                    "unit": "Celsius °C",
                    "number_of_records": 3,
                    "latest_record": "2021-01-02T14:29:15.182Z"
                },
                "blood_pressure": {
                    "systolic": 151,
                    "diastolic": 110,
                    "unit": "mmHg",
                    "number_of_records": 10,
                    "latest_record": "2021-01-02T14:06:00.750Z",
                    "history": {
                        "low": 1,
                        "normal": 3,
                        "high": 6,
                        "average": 135
                    }
                },
                "height": {
                    "value": 186,
                    "unit": "cm",
                    "number_of_records": 3,
                    "latest_record": "2020-12-21T19:49:51.956Z"
                },
                "weight": {
                    "value": 116,
                    "unit": "kg",
                    "number_of_records": 3,
                    "latest_record": "2020-12-21T19:49:51.956Z"
                },
                "bmi": {
                    "value": 33,
                    "unit": "kg/m2",
                    "number_of_records": 3,
                    "latest_record": "2020-12-21T19:49:51.956Z"
                },
                "oxygen_saturation": {
                    "value": 93,
                    "unit": "%",
                    "number_of_records": 2,
                    "latest_record": "2020-12-21T19:49:51.956Z"
                },
                "respiration_rate": {
                    "value": 22,
                    "unit": "breaths/min",
                    "number_of_records": 2,
                    "latest_record": "2020-12-21T19:49:51.956Z"
                },
                "heart_rate": {
                    "value": 70,
                    "unit": "bpm",
                    "number_of_records": 2,
                    "latest_record": "2020-12-21T19:49:51.956Z",
                    "history": {
                        "low": 0,
                        "normal": 2,
                        "high": 0,
                        "average": 75
                    }
                },
                "bsa": {
                    "value": 1.94,
                    "unit": "m2",
                    "number_of_records": 2,
                    "latest_record": "2020-12-21T19:49:51.956Z"
                }
            }
        }
    },
    "message": "Found your Patient!",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */