/**
 * @apiDefine LabTestResultError
 *
 * @apiError Lab Test Results an Error has occurred
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
 * @apiDescription This endpoint fetches all the lab tests results, their associated units and norminal values for a user
 * @apiVersion 0.1.0
 * @api {get} /labtestresults fetch user lab test results
 * @apiName GetLabTestResults
 * @apiGroup LabTestResults
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * 
 *  * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": 200,
    "response": true,
    "data": [
        {
            "source": "patient generated",
            "comment": "No Antibodies present",
            "_id": "5fe10726008f7c1c442ef80a",
            "date_entered": "2020-11-21T20:00:14.000Z",
            "timestamp": "12:30 AM",
            "lab_tests": [
                {
                    "lab_secondary_value": null,
                    "_id": "5fe10726008f7c1c442ef80b",
                    "lab_key": "Antibody/antigen_combination_tests",
                    "lab_default_value": "0",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "lab_name": "antibody/antigen combination tests"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "observer_id": "5fd8fa9b5c5e303f91aa2556",
            "created_by": "Ozichukwu Ezike",
            "__v": 0
        }
    ],
    "message": "All User Lab Result History",
    "errMessage": null
}
 * @apiUse LabTestResultError
 */

/**
 * @apiDescription This endpoint add new lab tests for a user
 * @apiVersion 0.1.0
 * @api {post} /labtestresults add new user lab test
 * @apiName PostLabTestResults
 * @apiGroup LabTestResults
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiParamExample {json} Request-Example:
 * {
    "comment":"No Antibodies present",
    "lab_tests":[
        {
            "lab_key":"Antibody/antigen_combination_tests",
            "lab_default_value": 0,
            "lab_secondary_value": null,
            "unit": "mmHg",
            "description": "this is just test for BP",
            "lab_name": "antibody/antigen combination tests"
        }
    ],
    "user_id": "5fd8fa9b5c5e303f91aa2556",
    "date_entered": "Sat Nov 21 2020 21:00:14 GMT+0100 (West Africa Standard Time)",
    "timestamp": "12:30 AM",
    "source": "patient generated",
    "observer_id": "5fd8fa9b5c5e303f91aa2556",
    "created_by":"Ozichukwu Ezike"

}
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
        "source": "patient generated",
        "comment": "No Antibodies present",
        "_id": "5fe10726008f7c1c442ef80a",
        "date_entered": "2020-11-21T20:00:14.000Z",
        "timestamp": "12:30 AM",
        "lab_tests": [
            {
                "lab_secondary_value": null,
                "_id": "5fe10726008f7c1c442ef80b",
                "lab_key": "Antibody/antigen_combination_tests",
                "lab_default_value": "0",
                "unit": "mmHg",
                "description": "this is just test for BP",
                "lab_name": "antibody/antigen combination tests"
            }
        ],
        "user_id": "5fd8fa9b5c5e303f91aa2556",
        "observer_id": "5fd8fa9b5c5e303f91aa2556",
        "created_by": "Ozichukwu Ezike",
        "createdAt": "2020-12-21T20:35:50.771Z",
        "updatedAt": "2020-12-21T20:35:50.771Z",
        "__v": 0
    },
    "message": "New Labs Created",
    "errMessage": null
}
 * 
 *  @apiUse LabTestResultError
 */