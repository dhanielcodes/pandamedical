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
 * @apiDescription This endpoint fetches all a healhcare provider's referrals
 * @api {get} /referrals get Referrals
 * @apiName GetReferrals
 * @apiGroup Patient-Referrals
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "referrals": [
            {
                "status": "ACCEPTED",
                "_id": "604591cf991d2f7480cf0ac4",
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
                    "__v": 148,
                    "country": "Nigeria",
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "healthcare_provider": {
                    "profilePic": "",
                    "qrcode": "",
                    "firstName": "rafael",
                    "lastName": "ezike",
                    "role": "PHYSICIAN",
                    "street": "Plot 553 zone A Ext. Apo Reseetlement Garki",
                    "city": "Abuja",
                    "state": "FCT",
                    "isOnline": true,
                    "_id": "507f191e810c19729de860ea",
                    "email": "ozichukwuezike@rocketmail.com",
                    "phone": "+2348109950208",
                    "username": "hyper_doctor",
                    "country": "NGN",
                    "gender": "MALE",
                    "dateOfBirth": "1991-12-19T19:31:14.000Z",
                    "lastSeen": "2021-01-10T03:22:00.439Z",
                    "__v": 3,
                    "id": "507f191e810c19729de860ea"
                },
                "referrer": {
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
                    "__v": 41,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "appointment": {
                    "_id": "604591cf991d2f7480cf0ac2",
                    "appointee": "507f191e810c19729de860ea",
                    "scheduler": "5fd8fa9b5c5e303f91aa2556",
                    "timeslots": {
                        "isActive": true,
                        "isOverdue": false,
                        "isClosed": false,
                        "status": "ACCEPTED",
                        "_id": "604591cf991d2f7480cf0ac1",
                        "slot_time": "13",
                        "slot_date": "2021-03-08T00:00:00.000Z",
                        "createdAt": "2021-03-08T02:54:07.778Z",
                        "updatedAt": "2021-03-08T02:59:36.584Z",
                        "__v": 0
                    },
                    "createdAt": "2021-03-08T02:54:07.783Z",
                    "updatedAt": "2021-03-08T02:54:07.783Z",
                    "__v": 0
                },
                "__v": 0
            },
            {
                "status": "ACCEPTED",
                "_id": "604594591c95fe8050fce6e0",
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
                    "__v": 148,
                    "country": "Nigeria",
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "healthcare_provider": {
                    "profilePic": "",
                    "qrcode": "",
                    "firstName": "rafael",
                    "lastName": "ezike",
                    "role": "PHYSICIAN",
                    "street": "Plot 553 zone A Ext. Apo Reseetlement Garki",
                    "city": "Abuja",
                    "state": "FCT",
                    "isOnline": true,
                    "_id": "507f191e810c19729de860ea",
                    "email": "ozichukwuezike@rocketmail.com",
                    "phone": "+2348109950208",
                    "username": "hyper_doctor",
                    "country": "NGN",
                    "gender": "MALE",
                    "dateOfBirth": "1991-12-19T19:31:14.000Z",
                    "lastSeen": "2021-01-10T03:22:00.439Z",
                    "__v": 3,
                    "id": "507f191e810c19729de860ea"
                },
                "referrer": {
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
                    "__v": 41,
                    "id": "5ffdb2ef344694663015ec4e"
                },
                "appointment": {
                    "_id": "604594591c95fe8050fce6de",
                    "appointee": "507f191e810c19729de860ea",
                    "scheduler": "5fd8fa9b5c5e303f91aa2556",
                    "timeslots": {
                        "isActive": true,
                        "isOverdue": false,
                        "isClosed": false,
                        "status": "ACCEPTED",
                        "_id": "604594591c95fe8050fce6dd",
                        "slot_time": "14",
                        "slot_date": "2021-03-08T00:00:00.000Z",
                        "createdAt": "2021-03-08T03:04:57.940Z",
                        "updatedAt": "2021-03-08T03:06:57.143Z",
                        "__v": 0
                    },
                    "createdAt": "2021-03-08T03:04:57.945Z",
                    "updatedAt": "2021-03-08T03:04:57.945Z",
                    "__v": 0
                },
                "__v": 0
            }
        ]
    },
    "message": "All Referrals",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint enables healtcare_provider to referre Paotient to another healthcare_provider
 * @api {post} /referrals create patient referral
 * @apiName PostReferrals
 * @apiGroup Patient-Referrals
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Body) {String} appointee this is the database id for the user who will receive the appointment.
 * @apiParam (Body) {String} patient this is the database id for the user who  is been referred.
 * @apiParam (Body) {String} scheduler this is the database id for the user who is scheduling the appointment/referral.
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
        "referral": {
            "status": "PENDING",
            "_id": "6045a8ae32624b7f4c822d8b",
            "patient": "5fd8fa9b5c5e303f91aa2556",
            "healthcare_provider": "507f191e810c19729de860ea",
            "referrer": "5ffdb2ef344694663015ec4e",
            "appointment": "6045a8ae32624b7f4c822d89",
            "createdAt": "2021-03-08T04:31:42.740Z",
            "updatedAt": "2021-03-08T04:31:42.740Z",
            "__v": 0
        }
    },
    "message": "Created New Referral!",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint allows healthcare_provider accept Patient Referral
 * @api {put} /referrals/:id/accept accept patient referral
 * @apiName PutReferrals_Accept
 * @apiGroup Patient-Referrals
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String='dkjahhdbaskdbsak123255anc'} id this is the referral to be accepted
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 422,
    "response": false,
    "data": null,
    "message": Accepted Patient Referral!,
    "errMessage": "null"
}


  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint allows healthcare_provider reject Patient Referral
 * @api {put} /referrals/:id/reject accept patient referral
 * @apiName PutReferrals_Reject
 * @apiGroup Patient-Referrals
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String='dkjahhdbaskdbsak123255anc'} id this is the referral to be accepted
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 422,
    "response": false,
    "data": null,
    "message": Rejected Patient Referral!,
    "errMessage": "null"
}


  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint allows healthcare_provider to reschedule a patient referral
 * @api {put} /referrals/:id/reschedule reschedule a patient referral
 * @apiName PutReferrals-Referral
 * @apiGroup Patient-Referrals
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Params) {String='dkjahhdbaskdbsak123255anc'} id this is the referral to be re
 * @apiParam (Body) {String='0, 1, 3, n=23'} slot_time this is the selected time during the day for the reschuled appointment/referral. 
 * @apiParam (Body) {String='2021-01-15'} slot_date this is the selected date for the appointment/referral. `slot_date cannot be a time in the past`
 * @apiParam (Body) {String='i am sick'} [topic] this is the title for the appointment./referral
 * @apiParam (Body) {String='it started a week age'} [note] this is the description for the appointment.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": null,
    "message": "Rescheduled Patient Referral!",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */