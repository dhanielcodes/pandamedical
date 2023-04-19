// /**
//  * @apiGroup Url Parameter
//  * @apiGroup Query Parameter
//  * @apiGroup Body Parameter
//  */

// /**
//  * @apiDescription This endpoint authenticates a user to the Bloverse platform via social media platforms (see the parameter section for supported platforms).
//  * The url handles the authtication process completely and should be loaded in a browser, if user does not exist on platform a new user is created during the process.
//  * There is a redirect to the refferer with a set cookie header after successful process
//  * @api {get} /auth/:platform?redirectUrl={url} Login
//  * @apiName Authenticates user via specified social platform
//  * @apiGroup Auth
//  * @apiParam (Url Parameter) {String="facebook","google"} platform The platform user will wants to authenticate with
//  * @apiParam (Body Parameter) {String} [redirectUrl="url where user is reffered from or base url"] Url to redirect user to after successful login
//  */

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
 * @apiDescription This endpoint authenticates a user to fetch their basic data
 * @api {post} /auth/physician/login login a physician
 * @apiName  PostLoginPhysician
 * @apiGroup Auth
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParamExample {json} Request-Example:
 *    {
       email: 'ozichukwubobbyezike@gmail.com',
       password: 'anything will do'
 *   }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *  {
    "status": 200,
    "response": true,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZkYjJlZjM0NDY5NDY2MzAxNWVjNGUiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjEyNzY1NTU5LCJleHAiOjE2MTI3NjkxNTl9.645VclyNEeo-lQhzSd4YXWbtCJUqi_9w39xoRmioE68",
        "_id": "5ffdb2ef344694663015ec4e"
    },
    "message": "Found Physician: ozichukwubobbyezike@gmail.com",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint authenticates a user to fetch their basic data
 * @api {get} /auth/me get user data
 * @apiName GetUser Data
 * @apiGroup Auth
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "status": 200,
    "response": true,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ4ZmE5YjVjNWUzMDNmOTFhYTI1NTYiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjEwOTM3ODg4LCJleHAiOjE2MTA5NDE0ODh9.JWCilDzIjpTXD5ETQzlPXOv42jXwAJATpiXczWaIOAk",
        "user": {
            "profilePic": "",
            "qrcode": "",
            "lastName": "tester",
            "ip": "0.0.0.0",
            "device": "null",
            "inviteCode": null,
            "invitedBy": null,
            "role": "USER",
            "street": "",
            "city": "",
            "state": "",
            "isActive": true,
            "deviceToken": null,
            "isOnline": true,
            "unit_system": "METRIC",
            "_id": "5fd8fa9b5c5e303f91aa2556",
            "firstName": "valentine",
            "email": "ozichukwuezike@gmail.com",
            "gender": "MALE",
            "createdAt": "2020-12-15T03:22:00.083Z",
            "dateOfBirth": "1992-11-17T19:31:14.000Z",
            "phone": "+2348109950207",
            "username": "ozichukwuezike_314bdf",
            "lastSeen": "2020-12-15T18:04:11.987Z",
            "updatedAt": "2020-12-15T18:04:11.987Z",
            "__v": 102,
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
            },
            "id": "5fd8fa9b5c5e303f91aa2556"
        }
    },
    "message": "My Profile",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */