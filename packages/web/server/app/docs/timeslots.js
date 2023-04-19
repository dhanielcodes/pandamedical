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
 * @apiDescription This endpoint allows users to fetch available time_slot per day
 * @api {get} /timeslots/?appointee_id=455dfdnfdjnfjdsfdfn464&slot_date=2021-01-15  get user's available slots pre day
 * @apiName GetTimeslots
 * @apiGroup Appointments
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam (Query Params) {String='455dfdnfdjnfjdsfdfn464'} appointee_id this is the database id of the user to find available availaable appointment timeslot
 * @apiParam (Query Params) {String='2021-01-15'} slot_date this is the date that the user wants to book appointment for. 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "timeslots": [
            {
                "slot_time": "9",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "10",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "12",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "13",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "14",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "16",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "17",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "18",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "19",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "20",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "21",
                "slot_date": "2021-01-18"
            },
            {
                "slot_time": "22",
                "slot_date": "2021-01-18"
            }
        ],
        "next_available_slot": "2021-01-19"
    },
    "message": "List of Available Appointment slots for bobby ezike on 2021-01-18",
    "errMessage": null
}
 * 
 * 
 * @apiUse TokenHasExpiredError
 */