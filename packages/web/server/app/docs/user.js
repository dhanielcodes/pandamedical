// /**
//  * @apiGroup Url Parameter
//  * @apiGroup Query Parameter
//  * @apiGroup Body Parameter
//  */

/**
 * @apiDefine UserNotFoundError
 *
 * @apiError User Error an Error has occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errMessage": "User not found!",
 *       "message": null,
 *       "status": 500,
 *       "data": null,
 *       "response": true
 *     }
 */

/**
 * @apiDefine UserNotAuthError
 *
 * @apiError User Auth Error an Error has occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errMessage": "User is Not Authorised!",
 *       "message": null,
 *       "status": 500,
 *       "data": null,
 *       "response": true
 *     }
 */

/**
 * @apiDefine TokenHasExpiredError
 *
 * @apiError TokenError an Error has occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errMessage": "Your Session has expired!, Please send a new reset request!",
 *       "message": null,
 *       "status": 500,
 *       "data": null,
 *       "response": true
 *     }
 */

/**
 * @apiDescription This endpoint a user makes a request to the server to reset there password 
 *  using the email option and an email with the reset link is sent to their provided email.
 * @apiVersion 0.1.0
 * @api {post} /user/password/forgotpassword forgotpassword via email
 * @apiName PostForgotPassword Email
 * @apiGroup User
 * @apiParam {String} email  Provide User Registered Email..
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "status": 200,
        "response": true,
        "data": null,
        "message": "Kindly check your email for further instructions",
        "errMessage": null
 *     }
 * @apiUse UserNotFoundError
 */

/**
 * @apiDescription This endpoint a user makes a request to the server to reset there password 
 *  using the phone number option and an otp is sent to their provided phone.
 * @apiVersion 0.1.0
 * @api {post} /user/password/forgotpassword forgotpassword via otp
 * @apiName PostForgotPassword OTP
 * @apiGroup User
 * @apiParam {String} otp Provide User Registered Phone Number.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "status": 200,
        "response": true,
        "data": null,
        "message": "OTP has been sent to registered phone number",
        "errMessage": null
 *     }
 * @apiUse UserNotFoundError
 */

/**
 * @apiDescription This endpoint handles verifying the otp that the user received.
 * @apiVersion 0.1.0
 * @api {post} /user/password/check/otp forgotpassword verify otp
 * @apiName PostForgotPassword Verify Phone OTP
 * @apiGroup User
 * @apiParam {String} otp this is the otp the user received via sms/text
 * @apiParam {String} phone this the users register phone number
 * @apiSuccess (Response Header) {String} x-auth returns a temp token to the user in the `x-auth` response header
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "status": 200,
        "response": true,
        "data": {token: 'some nice token'},
        "message": "OTP is valid",
        "errMessage": null
 *     }
 * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint handles the the temp token from the email and generates a reset token 
 * for the user to reset their password.
 * @apiVersion 0.1.0
 * @api {get} /user/password/verify/email forgotpassword verify email token
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token from the url query params to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token from the  url query params to the x-auth header.
 * @apiName PostForgotPassword Verify Email Token
 * @apiSuccess (Response Header) {String} x-auth returns a reset token to the user in the `x-auth` response header token
 * @apiGroup User
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "status": 200,
        "response": true,
        "data": {token: 'some nice token'},
        "message": "You can reset your password",
        "errMessage": null
 *     }
 * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint handles verifying the temp token  gotten for verifying the user otp to allow
 * the user to reset their password.
 * @apiVersion 0.1.0
 * @api {get} /user/password/verify/otp forgotpassword verify otp token
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiName PostForgotPassword Verify OTP Token
 * @apiSuccess (Response Header) {String} x-auth returns a reset token to the user in the `x-auth` response header token
 * @apiGroup User
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "status": 200,
        "response": true,
        "data": {token: 'some nice token'},
        "message": "You can reset your password",
        "errMessage": null
 *     }
 * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint resets a users password
 * @apiVersion 0.1.0
 * @api {post} /user/password/reset reset password
 * @apiName PostForgotPassword Reset Password
 * @apiGroup User
 * @apiParam {String} password User's new password.
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their reset token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their reset token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "status": 200,
        "response": true,
        "data": null,
        "message": "Password Updated",
        "errMessage": null
 *     }
 * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint allows a user to set up a passcode
 * @api {post} /user/passcode set up user passcode
 * @apiName PostPasscode
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String} passcode user's new 4 digit passcode 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
    "status": 406,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "Passcode Added!"
}
@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 406 Not Acceptable
 *     {
    "status": 406,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "Action not allowed!"
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint verifies user's passcode 
 * @api {post} /user/passcode/verify verify user's passcode
 * @apiName PostPasscode Verify 
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String} passcode user's current 4 digit passcode 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
    "status": 200,
    "response": true,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ4ZmE5YjVjNWUzMDNmOTFhYTI1NTYiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjExNTUyMjk2LCJleHAiOjE2MTE1NTU4OTZ9.3YeEOQru_pjP1uPUdkgd4s4E36cYM83JNOgnQ_uEUMw",
        "_id": "5fd8fa9b5c5e303f91aa2556"
    },
    "message": "Found User: ozichukwuezike@gmail.com",
    "errMessage": null
}
@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 406 Not Acceptable
 * {
    "status": 406,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "Action not allowed!"
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint is for a user to change their passcode 
 * @api {put} /user/passcode/change change user passcode
 * @apiName PostPasscode Change
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String} passcode user's current 4 digit passcode 
 * @apiParam  (Body) {String} newPasscode user's new  4 digit passcode 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
    "status": 200,
    "response": true,
    "data": null,
    "message": "Passcode Updated!",
    "errMessage": null
}

@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 * {
    "status": 400,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "Passcode Don't match"
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint is for a user to change their password
 * @api {put} /user/password/change change user password
 * @apiName PostPassword Change
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String} password user's current password
 * @apiParam  (Body) {String} newPassword user's new  password 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
    "status": 200,
    "response": true,
    "data": null,
    "message": "Password Updated!",
    "errMessage": null
}

@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 * {
    "status": 400,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "Passcode Don't match"
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint is for a user to change their email `an OTP will be sent to your new email`
 * @api {post} /user/email/update change user email
 * @apiName PostEmail Update
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String='example@email.com'} email user's current email
 * @apiParam  (Body) {String='example@email.com'} newEmail user's new  email
 * @apiParam  (Body) {String="my password"} password user's current password
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
    "status": 200,
    "response": true,
    "data": null,
    "message": "OTP is sent to your new Email!",
    "errMessage": null
}

@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 * {
    "status": 400,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "Email Don't match"
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint is for a user to verify the change to their email `an OTP will be sent to your new email`
 * @api {post} /user/email/verify verify user email
 * @apiName PostEmail Verify
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String='example@email.com'} email user's current email
 * @apiParam  (Body) {String='example@email.com'} newEmail user's new  email
 * @apiParam  (Body) {String='123456'} otp user otp from email
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
    "status": 200,
    "response": true,
    "data": null,
    "message": "OTP is valid, Email Updated!",
    "errMessage": null
}

@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 * {
    "status": 400,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "Email Don't match"
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint is for a user to change their Phone number `an OTP will be sent to your new Phone Number`
 * @api {post} /user/phone/update change user phone
 * @apiName PostPhone Update
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String='+2347097451947'} phone user's new Phone Number
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
    "status": 200,
    "response": true,
    "data": null,
    "message": "An OTP has been sent to your Phone Number",
    "errMessage": null
}

@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 * {
    "status": 400,
    "response": false,
    "data": null,
    "message": null,
    "errMessage": "User with new Phone Number already exists!"
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint is for a user to verfy and change their Phone number `pass OTP sent to New Phone`
 * @api {put} /user/phone/verify verify user phone
 * @apiName PutPhone verify
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String='+2347097451947'} phone user's new Phone Number
 * @apiParam  (Body) {String='123456'} otp user's otp from new Phone Number
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
    "status": 200,
    "response": true,
    "data": null,
    "message": "OTP is valid, Phone Number Updated!",
    "errMessage": null
}

  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint is allows a user to update his personal info
 * @api {put} /user/update  update user info
 * @apiName PutUserInfo
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParamExample {json} Request-Example:
 *     {
 *       firstName: 'user', //OPTIONAL
 *       lastName: 'tester', //OPTIONAL
 *       gender:'MALE', //OPTIONAL
 *       street: 'somewhere nice, //OPTIONAL
 *       state: 'Horizon', //OPTIONAL 
 *       country: 'Nigeria', //OPTIONAL
 *       dateOfBirth: '2021-09-10', //OPTIONAL
 *       unit_sysytem: 'METRIC' //OPTIONAL
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": 200,
    "response": true,
    "data": {
        "user": {
            "profilePic": "",
            "qrcode": "",
            "lastName": "tester",
            "ip": "0.0.0.0",
            "device": "null",
            "inviteCode": null,
            "invitedBy": null,
            "role": "USER",
            "street": "Plot 533 Zone A Ext. Apo Resettlement",
            "city": "",
            "state": "FCT",
            "isActive": true,
            "deviceToken": null,
            "isOnline": true,
            "unit_system": "METRIC",
            "_id": "5fd8fa9b5c5e303f91aa2556",
            "firstName": "valentine",
            "email": "ozichukwuezike@gmail.com",
            "gender": "MALE",
            "dateOfBirth": "1992-11-17T19:31:14.000Z",
            "phone": "+2347059648295",
            "username": "ozichukwuezike_314bdf",
            "lastSeen": "2020-12-15T18:04:11.987Z",
            "__v": 124,
            "country": "Nigeria",
            "id": "5fd8fa9b5c5e303f91aa2556"
        }
    },
    "message": "User Info Updated!",
    "errMessage": null
}

  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint is allows a user to update his personal addition info
 * @api {put} /user/update/additionalinfo  update user addtionalinfo
 * @apiName PutUserAdditionalInfo
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParamExample {json} Request-Example:
 *    {
       * "blood_type": "B+",  //OPTIONAL
       "primary_specialist": {
              "firstName": "bobby", //OPTIONAL
              "lastName":"ezike",  //OPTIONAL
              "user_id":"5ffdb2ef344694663015ec4e" //OPTIONAL
       },
       "emergency_contact":{
              "name": "Ezike, Ozichukwu Valentine", //OPTIONAL
              "phone": "+2347038363702" //OPTIONAL
       }
 *   }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": 200,
    "response": true,
    "data": {
        "user": {
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
            "__v": 0,
            "createdAt": "2021-01-28T03:42:45.196Z",
            "updatedAt": "2021-01-28T04:10:52.051Z"
        }
    },
    "message": "User Info Updated!",
    "errMessage": null
}

  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint sends an innvite to a physician not on the platform
 * @api {post} /user/invite/physician invite physician
 * @apiName PostInvutePhysician
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParamExample {json} Request-Example:
 *    {
       email: 'ozichukwubobbyezike@gmail.com'
 *   }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": 200,
    "response": true,
    "data": null,
    "message": "Invite sent to marydalphnendidu@gmail.com",
    "errMessage": null
}

  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint allows a user the ability to fetch physicians 
 * @api {get} /user/fetch/physician fetch physician
 * @apiName GetInvitePhysician
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
*  @apiParam (Query) {String} physician this query param takes either the firstName , lastName, email or the phone number of the physician
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": 200,
    "response": true,
    "data": {
        "physicians": [
            {
                "profilePic": "",
                "qrcode": "",
                "firstName": "valentine",
                "lastName": "tester",
                "ip": "0.0.0.0",
                "device": "null",
                "inviteCode": null,
                "invitedBy": null,
                "role": "USER",
                "street": "Plot 533 Zone A Ext. Apo Resettlement.",
                "city": "",
                "state": "FCT.",
                "isActive": true,
                "deviceToken": null,
                "isOnline": true,
                "unit_system": "METRIC",
                "_id": "5fd8fa9b5c5e303f91aa2556",
                "email": "ozichukwuezike@gmail.com",
                "gender": "MALE",
                "createdAt": "2020-12-15T03:22:00.083Z",
                "dateOfBirth": "1992-11-17T19:31:14.000Z",
                "phone": "+2347059648295",
                "username": "ozichukwuezike_314bdf",
                "lastSeen": "2020-12-15T18:04:11.987Z",
                "updatedAt": "2020-12-15T18:04:11.987Z",
                "__v": 133,
                "country": "Nigeria.",
                "id": "5fd8fa9b5c5e303f91aa2556"
            }
        ]
    },
    "message": "Available Physicians",
    "errMessage": null
}

  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint allows a user(Patient)  to view all requested access for their Medical Hsitory
 * @api {get} /user/requested/medicalrecords fetch User's Patient Records
 * @apiName GetUserPatientRecords
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": 200,
    "response": true,
    "data": {
        "requests": [
            {
                "status": "ACCEPTED",
                "medical_record_access": true,
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
                    "__v": 47,
                    "id": "5ffdb2ef344694663015ec4e"
                },
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
                    "__v": 149,
                    "country": "Nigeria",
                    "id": "5fd8fa9b5c5e303f91aa2556"
                },
                "__v": 0
            }
        ]
    },
    "message": "All Requests for Medical Records/History",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint allows a user(Patient) to accept requested access to their Medical Hsitory
 * @api {put} /user/requested/medicalrecords/:id/accept accept Physician Access Patient Records
 * @apiName PutAcceptRequest-UserPatientRecords
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiHeader (Param) {String='221343142453534gegd'} id Patient Record Id to grant Access
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": 200,
    "response": true,
    "data": null,
    "message": "Access granted to Medical Records/History",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */

/**
 * @apiDescription This endpoint allows a user(Patient) to reject requested access to their Medical Hsitory
 * @api {put} /user/requested/medicalrecords/:id/reject reject Physician Access Patient Records
 * @apiName PutRejectRequest-UserPatientRecords
 * @apiGroup User
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiHeader (Param) {String='221343142453534gegd'} id Patient Record Id to deny Access
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": 200,
    "response": true,
    "data": null,
    "message": "Access Rejected for Medical Records/History",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
  * @apiUse UserNotFoundError
  * @apiUse UserNotAuthError
 */