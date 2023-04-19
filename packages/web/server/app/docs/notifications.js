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
 * @apiDescription This endpoint fetches the notifications for a user
 * @api {get} /notification get notifications
 * @apiName GetNotification
 * @apiGroup Notifications
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "notifications": []
    },
    "message": "Notifications",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */