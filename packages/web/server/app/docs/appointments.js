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
 * @apiDescription This endpoint allows users to fetch all their appointments
 * @api {get} /appointments/:id   get users appointments
 * @apiName GetAppointments
 * @apiGroup Appointments
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String} id this is the database id for the user to fetch their appointment
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "status": 200,
    "response": true,
    "data": {
        "appointments": [
            {
                "_id": "602c9e1dd1229a6b24a0b4da",
                "appointee": {
                    "profilePic": "",
                    "firstName": "bobby",
                    "lastName": "ezike",
                    "role": "PHYSICIAN",
                    "isOnline": true,
                    "_id": "5ffdb2ef344694663015ec4e",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2348109950207",
                    "username": "super_doctor",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "__v": 18,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "scheduler": {
                    "profilePic": "",
                    "firstName": "valentine",
                    "lastName": "tester",
                    "role": "USER",
                    "isOnline": true,
                    "_id": "5fd8fa9b5c5e303f91aa2556",
                    "email": "ozichukwuezike@gmail.com",
                    "gender": "MALE",
                    "dateOfBirth": "1992-11-17T19:31:14.000Z",
                    "phone": "+2347059648295",
                    "username": "ozichukwuezike_314bdf",
                    "lastSeen": "2020-12-15T18:04:11.987Z",
                    "__v": 136,
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "timeslots": {
                    "isActive": true,
                    "isOverdue": false,
                    "isClosed": false,
                    "status": "PENDING",
                    "_id": "602c9e1dd1229a6b24a0b4d9",
                    "slot_time": "10",
                    "slot_date": "2021-02-18T00:00:00.000Z",
                    "appointee_id": "5ffdb2ef344694663015ec4e",
                    "__v": 0
                },
                "createdAt": "2021-02-17T04:39:57.191Z",
                "updatedAt": "2021-02-17T04:39:57.191Z",
                "__v": 0,
                "message": {
                    "note": "I am having headache, please help",
                    "topic": "medical issue",
                    "_id": "602c9e1dd1229a6b24a0b4db",
                    "appointment_id": "602c9e1dd1229a6b24a0b4da",
                    "__v": 0
                },
                "id": "602c9e1dd1229a6b24a0b4da"
            },
            {
                "_id": "602c9ea29a351257c49766c8",
                "appointee": {
                    "profilePic": "",
                    "firstName": "bobby",
                    "lastName": "ezike",
                    "role": "PHYSICIAN",
                    "isOnline": true,
                    "_id": "5ffdb2ef344694663015ec4e",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2348109950207",
                    "username": "super_doctor",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "__v": 18,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "scheduler": {
                    "profilePic": "",
                    "firstName": "valentine",
                    "lastName": "tester",
                    "role": "USER",
                    "isOnline": true,
                    "_id": "5fd8fa9b5c5e303f91aa2556",
                    "email": "ozichukwuezike@gmail.com",
                    "gender": "MALE",
                    "dateOfBirth": "1992-11-17T19:31:14.000Z",
                    "phone": "+2347059648295",
                    "username": "ozichukwuezike_314bdf",
                    "lastSeen": "2020-12-15T18:04:11.987Z",
                    "__v": 136,
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "timeslots": {
                    "isActive": true,
                    "isOverdue": false,
                    "isClosed": false,
                    "status": "PENDING",
                    "_id": "602c9ea29a351257c49766c7",
                    "slot_time": "11",
                    "slot_date": "2021-02-18T00:00:00.000Z",
                    "appointee_id": "5ffdb2ef344694663015ec4e",
                    "__v": 0
                },
                "createdAt": "2021-02-17T04:42:10.413Z",
                "updatedAt": "2021-02-17T04:42:10.413Z",
                "__v": 0,
                "message": {
                    "note": "I am having headache, please help!",
                    "topic": "medical issue 2",
                    "_id": "602c9ea29a351257c49766c9",
                    "appointment_id": "602c9ea29a351257c49766c8",
                    "__v": 0
                },
                "id": "602c9ea29a351257c49766c8"
            },
            {
                "_id": "602c9f58b907c06b9c1c28b7",
                "appointee": {
                    "profilePic": "",
                    "firstName": "bobby",
                    "lastName": "ezike",
                    "role": "PHYSICIAN",
                    "isOnline": true,
                    "_id": "5ffdb2ef344694663015ec4e",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2348109950207",
                    "username": "super_doctor",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "__v": 18,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "scheduler": {
                    "profilePic": "",
                    "firstName": "valentine",
                    "lastName": "tester",
                    "role": "USER",
                    "isOnline": true,
                    "_id": "5fd8fa9b5c5e303f91aa2556",
                    "email": "ozichukwuezike@gmail.com",
                    "gender": "MALE",
                    "dateOfBirth": "1992-11-17T19:31:14.000Z",
                    "phone": "+2347059648295",
                    "username": "ozichukwuezike_314bdf",
                    "lastSeen": "2020-12-15T18:04:11.987Z",
                    "__v": 136,
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "timeslots": {
                    "isActive": true,
                    "isOverdue": false,
                    "isClosed": false,
                    "status": "PENDING",
                    "_id": "602c9f58b907c06b9c1c28b6",
                    "slot_time": "12",
                    "slot_date": "2021-02-18T00:00:00.000Z",
                    "appointee_id": "5ffdb2ef344694663015ec4e",
                    "__v": 0
                },
                "createdAt": "2021-02-17T04:45:12.836Z",
                "updatedAt": "2021-02-17T04:45:12.836Z",
                "__v": 0,
                "message": {
                    "note": null,
                    "topic": null,
                    "_id": "602c9f58b907c06b9c1c28b8",
                    "appointment_id": "602c9f58b907c06b9c1c28b7",
                    "__v": 0
                },
                "id": "602c9f58b907c06b9c1c28b7"
            }
        ]
    },
    "message": "Found your appointments",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint allows users to fetch range of appointments
 * @api {get} /appointments/:id?start_date=&end_date=   get users appointments
 * @apiName GetAppointments by Date Range
 * @apiGroup Appointments
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String} id this is the database id for the user to fetch their appointment
 * @apiParam (Query Params) {String='2021-01-15'} [start_date] this is the earliest date for the user to fetch their appointment. `if a start_date query is provided and end_date query is required`
 * @apiParam (Query Params) {String='2021-01-15','2021-01-16'} [end_date] this is the end date for the user to fetch their appointment. `end_date query cannot less then the start_date`
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "status": 200,
    "response": true,
    "data": {
        "appointments": [
            {
                "_id": "602c9e1dd1229a6b24a0b4da",
                "appointee": {
                    "profilePic": "",
                    "firstName": "bobby",
                    "lastName": "ezike",
                    "role": "PHYSICIAN",
                    "isOnline": true,
                    "_id": "5ffdb2ef344694663015ec4e",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2348109950207",
                    "username": "super_doctor",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "__v": 18,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "scheduler": {
                    "profilePic": "",
                    "firstName": "valentine",
                    "lastName": "tester",
                    "role": "USER",
                    "isOnline": true,
                    "_id": "5fd8fa9b5c5e303f91aa2556",
                    "email": "ozichukwuezike@gmail.com",
                    "gender": "MALE",
                    "dateOfBirth": "1992-11-17T19:31:14.000Z",
                    "phone": "+2347059648295",
                    "username": "ozichukwuezike_314bdf",
                    "lastSeen": "2020-12-15T18:04:11.987Z",
                    "__v": 136,
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "timeslots": {
                    "isActive": true,
                    "isOverdue": false,
                    "isClosed": false,
                    "status": "PENDING",
                    "_id": "602c9e1dd1229a6b24a0b4d9",
                    "slot_time": "10",
                    "slot_date": "2021-02-18T00:00:00.000Z",
                    "appointee_id": "5ffdb2ef344694663015ec4e",
                    "__v": 0
                },
                "createdAt": "2021-02-17T04:39:57.191Z",
                "updatedAt": "2021-02-17T04:39:57.191Z",
                "__v": 0,
                "message": {
                    "note": "I am having headache, please help",
                    "topic": "medical issue",
                    "_id": "602c9e1dd1229a6b24a0b4db",
                    "appointment_id": "602c9e1dd1229a6b24a0b4da",
                    "__v": 0
                },
                "id": "602c9e1dd1229a6b24a0b4da"
            },
            {
                "_id": "602c9ea29a351257c49766c8",
                "appointee": {
                    "profilePic": "",
                    "firstName": "bobby",
                    "lastName": "ezike",
                    "role": "PHYSICIAN",
                    "isOnline": true,
                    "_id": "5ffdb2ef344694663015ec4e",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2348109950207",
                    "username": "super_doctor",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "__v": 18,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "scheduler": {
                    "profilePic": "",
                    "firstName": "valentine",
                    "lastName": "tester",
                    "role": "USER",
                    "isOnline": true,
                    "_id": "5fd8fa9b5c5e303f91aa2556",
                    "email": "ozichukwuezike@gmail.com",
                    "gender": "MALE",
                    "dateOfBirth": "1992-11-17T19:31:14.000Z",
                    "phone": "+2347059648295",
                    "username": "ozichukwuezike_314bdf",
                    "lastSeen": "2020-12-15T18:04:11.987Z",
                    "__v": 136,
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "timeslots": {
                    "isActive": true,
                    "isOverdue": false,
                    "isClosed": false,
                    "status": "PENDING",
                    "_id": "602c9ea29a351257c49766c7",
                    "slot_time": "11",
                    "slot_date": "2021-02-18T00:00:00.000Z",
                    "appointee_id": "5ffdb2ef344694663015ec4e",
                    "__v": 0
                },
                "createdAt": "2021-02-17T04:42:10.413Z",
                "updatedAt": "2021-02-17T04:42:10.413Z",
                "__v": 0,
                "message": {
                    "note": "I am having headache, please help!",
                    "topic": "medical issue 2",
                    "_id": "602c9ea29a351257c49766c9",
                    "appointment_id": "602c9ea29a351257c49766c8",
                    "__v": 0
                },
                "id": "602c9ea29a351257c49766c8"
            },
            {
                "_id": "602c9f58b907c06b9c1c28b7",
                "appointee": {
                    "profilePic": "",
                    "firstName": "bobby",
                    "lastName": "ezike",
                    "role": "PHYSICIAN",
                    "isOnline": true,
                    "_id": "5ffdb2ef344694663015ec4e",
                    "email": "ozichukwubobbyezike@gmail.com",
                    "phone": "+2348109950207",
                    "username": "super_doctor",
                    "gender": "MALE",
                    "dateOfBirth": "1980-11-17T19:31:14.000Z",
                    "lastSeen": "2021-01-11T03:22:00.439Z",
                    "__v": 18,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "scheduler": {
                    "profilePic": "",
                    "firstName": "valentine",
                    "lastName": "tester",
                    "role": "USER",
                    "isOnline": true,
                    "_id": "5fd8fa9b5c5e303f91aa2556",
                    "email": "ozichukwuezike@gmail.com",
                    "gender": "MALE",
                    "dateOfBirth": "1992-11-17T19:31:14.000Z",
                    "phone": "+2347059648295",
                    "username": "ozichukwuezike_314bdf",
                    "lastSeen": "2020-12-15T18:04:11.987Z",
                    "__v": 136,
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "timeslots": {
                    "isActive": true,
                    "isOverdue": false,
                    "isClosed": false,
                    "status": "PENDING",
                    "_id": "602c9f58b907c06b9c1c28b6",
                    "slot_time": "12",
                    "slot_date": "2021-02-18T00:00:00.000Z",
                    "appointee_id": "5ffdb2ef344694663015ec4e",
                    "__v": 0
                },
                "createdAt": "2021-02-17T04:45:12.836Z",
                "updatedAt": "2021-02-17T04:45:12.836Z",
                "__v": 0,
                "message": {
                    "note": null,
                    "topic": null,
                    "_id": "602c9f58b907c06b9c1c28b8",
                    "appointment_id": "602c9f58b907c06b9c1c28b7",
                    "__v": 0
                },
                "id": "602c9f58b907c06b9c1c28b7"
            }
        ]
    },
    "message": "Found your appointments",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint allows users to create appointments
 * @api {post} /appointments  create appointments
 * @apiName PostAppointments
 * @apiGroup Appointments
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Body) {String} appointee this is the database id for the user who will receive the appointment.
 * @apiParam (Body) {String} scheduler this is the database id for the user who is scheduling the appointment.
 * @apiParam (Body) {String='0, 1, 3, n=23'} slot_time this is the selected time during the day for the appointment. 
 * @apiParam (Body) {String='2021-01-15'} slot_date this is the selected date for the appointment. `slot_date cannot be a time in the past`
 * @apiParam (Body) {String='i am sick'} [topic] this is the title for the appointment.
 * @apiParam (Body) {String='it started a week age'} [note] this is the description for the appointment.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "appointment": {
            "_id": "600509f0256cdb0f847a7cff",
            "appointee": "5ffdb2ef344694663015ec4e",
            "scheduler": "5fd8fa9b5c5e303f91aa2556",
            "timeslots": "600509f0256cdb0f847a7cfe",
            "createdAt": "2021-01-18T04:09:20.687Z",
            "updatedAt": "2021-01-18T04:09:20.687Z",
            "__v": 0
        }
    },
    "message": "Created New Appointment!",
    "errMessage": null
  }
 * @apiUse TokenHasExpiredError
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
    "status": 400,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "slot_date must be greater than or equal to 2021 01 17T23 00 00 000Z"
  }
*
 */

/**
 * @apiDescription This endpoint allows users to reschedule an appointment
 * @api {put} /appointments/:id/reschedule reschedule appointment
 * @apiName PutAppointments_Reschedule
 * @apiGroup Appointments
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Body) {String='0, 1, 3, n=23'} slot_time this is the selected time during the day for the appointment. 
 * @apiParam (Body) {String='2021-01-15'} slot_date this is the selected date for the appointment. `slot_date cannot be a time in the past`
 * @apiParam (Body) {String='i am sick'} [topic] this is the title for the appointment.
 * @apiParam (Body) {String='it started a week age'} [note] this is the description for the appointment.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "rescheduled_appointment": {
            "_id": "603946cc390a687664d3b7ad",
            "appointee": "5ffdb2ef344694663015ec4e",
            "scheduler": "5fd8fa9b5c5e303f91aa2556",
            "timeslots": "603946cc390a687664d3b7ac",
            "createdAt": "2021-02-26T19:06:52.946Z",
            "updatedAt": "2021-02-26T19:06:52.946Z",
            "__v": 0,
            "id": "603946cc390a687664d3b7ad"
        }
    },
    "message": "Appointment Rescheduled!",
    "errMessage": null
}
 * @apiUse TokenHasExpiredError
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
    "status": 400,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "slot_date must be greater than or equal to 2021 01 17T23 00 00 000Z"
  }
*
 */

/**
 * @apiDescription This endpoint allows users(appointee) to accept an appointment
 * @api {put} /appointments/:id/accept accept appointment
 * @apiName PutAppointments_Accept
 * @apiGroup Appointments
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": null,
    "message": "Appointment Accepted!",
    "errMessage": null
}
 * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint allows users(appointee) to reject an appointment
 * @api {put} /appointments/:id/reject reject appointment
 * @apiName PutAppointments_Reject
 * @apiGroup Appointments
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": null,
    "message": "Appointment Rejected!",
    "errMessage": null
}
 * @apiUse TokenHasExpiredError
 */