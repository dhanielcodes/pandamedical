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
 * @apiDescription This endpoint request for an otp to verify a user during registration
 * @api {post} /otp/registration request login otp
 * @apiName PostOTP Registration
 * @apiGroup OTP
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String} phone user's phone number to verify
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": null,
    "message": "An OTP has been sent to your Phone Number",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */
/**
 * @apiDescription This endpoint request for an otp to verify a user during login
 * @api {post} /otp/login request login otp
 * @apiName PostOTP Login
 * @apiGroup OTP
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String} phone user's phone number to verify
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": null,
    "message": "An OTP has been sent to your Phone Number",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */

/**
 * @apiDescription This endpoint sends otp to an email for verification
 * @api {post} /otp/email  send otp to email
 * @apiName PostOTP Email
 * @apiGroup OTP
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String} email user's email to verify
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": null,
    message: 'OTP is sent to your Email',
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */
/**
 * @apiDescription This endpoint  for an otp to verify a user during login
 * @api {post} /otp/verify verify otp
 * @apiName PostOTP Verify
 * @apiGroup OTP
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam  (Body) {String='+2347036792694} [phone] user's phone number to verify
 * @apiParam  (Body) {String='example@email.com'} [email] user's email to verify
 * @apiParam  (Body) {String='123456'} otp otp to verify
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": null,
    "message": "OTP is valid",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */