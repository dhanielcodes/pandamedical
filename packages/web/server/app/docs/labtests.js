/**
 * @apiDefine LabTestsError
 *
 * @apiError Lab Test  an Error has occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errMessage": "Something went wrong",
 *       "message": null,
 *       "status": 500,
 *       "data": null,
 *       "response": true
 *     }
 */

/**
 * @apiDescription This endpoint fetches all available types of lab tests, their associated units and norminal values for a user
 * @apiVersion 0.1.0
 * @api {get} /labtests fetch all types lab tests 
 * @apiName GetLabTests
 * @apiGroup LabTests
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": [
        {
            "result_source": {
                "patient": "patient generated",
                "physician": "physician generated",
                "lab": "lab generated",
                "clinic": "clinic generated"
            },
            "description": "",
            "unit": null,
            "_id": "5fe1195a0586a25bf010b0fc",
            "title": "Vitamin B12",
            "key": "B12",
            "__v": 0
        },
        {
            "result_source": {
                "patient": "patient generated",
                "physician": "physician generated",
                "lab": "lab generated",
                "clinic": "clinic generated"
            },
            "description": "",
            "unit": null,
            "_id": "5fe1195a0586a25bf010afb2",
            "title": "Activated Partial thromboplastin time",
            "key": "APTT",
            "__v": 0
        }
    ],
    "message": "All User Lab Tests",
    "errMessage": null
}
@apiUse LabTestsError
 * 
 */