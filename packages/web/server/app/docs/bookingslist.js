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
 * @apiDescription This endpoint fetches the available options for a booking an appointment
 * @api {get} /bookingslist get a bookings lists
 * @apiName GetBookings Lists
 * @apiGroup Bookings
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "bookingslist": [
            {
                "description": "Physicians and Surgeons, Pediatricians,General e.t.c",
                "title": "Doctors",
                "key": "PHYSICIAN",
                "__v": 0
            },
            {
                "description": "Hospital, Hospice e.t.c",
                "title": "Healthcare Facilities",
                "key": "HEALTHCARE",
                "__v": 0
            }
        ]
    },
    "message": "Select from the listing",
    "errMessage": null
}
  * @apiUse TokenHasExpiredError
 */