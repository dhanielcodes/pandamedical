/**
 * @apiDefine VitalHistoryError
 *
 * @apiError VitalHistory Error an Error has occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       "errMessage": "Something went wrong",
 *       "message": null,
 *       "status": 500,
 *       "data": null,
 *       "response": true
 *     }
 */

/**
 * @apiDescription This endpoint fetches all the vitals entered by a user.
 * @apiVersion 0.1.0
 * @api {get} /vitalshistory fetch all user vitals history
 * @apiName Get Vitals History
 * @apiGroup Vitals History
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": [
        {
            "source": "patient generated",
            "comment": "The BP is high",
            "_id": "5fe0fc5fbff5c1538c91f9cc",
            "date_entered": "2020-11-21T20:00:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "95",
                    "_id": "5fe0fc5fbff5c1538c91f9cd",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "140",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe0fc5fbff5c1538c91f9ce",
                    "vitals_key": "height",
                    "vitals_default_value": "186",
                    "unit": "cm",
                    "description": "this is just test for Height",
                    "title": "Height"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe0fc5fbff5c1538c91f9cf",
                    "vitals_key": "weight",
                    "vitals_default_value": "116",
                    "unit": "kg",
                    "description": "this is just test for Height",
                    "title": "Weight"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe0fc5fbff5c1538c91f9d0",
                    "vitals_key": "bmi",
                    "vitals_default_value": "33",
                    "unit": "kg/m2",
                    "description": "this is just test for BMI",
                    "title": "Body Mass Index (BMI)"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe0fc5fbff5c1538c91f9d1",
                    "vitals_key": "oxygen_saturation",
                    "vitals_default_value": "93",
                    "unit": "%",
                    "description": "this is just test for Oxygen Saturation",
                    "title": "Oxygen Saturation"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe0fc5fbff5c1538c91f9d2",
                    "vitals_key": "temperature",
                    "vitals_default_value": "38",
                    "unit": "Celsius °C",
                    "description": "this is just test for temperature",
                    "title": "Temperature"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe0fc5fbff5c1538c91f9d3",
                    "vitals_key": "respiration_rate",
                    "vitals_default_value": "22",
                    "unit": "breaths/min",
                    "description": "this is just test for Respiration Rate",
                    "title": "Respiration Rate"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe0fc5fbff5c1538c91f9d4",
                    "vitals_key": "heart_rate",
                    "vitals_default_value": "70",
                    "unit": "bpm",
                    "description": "this is just test for Heart Rate",
                    "title": "Heart Rate"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe0fc5fbff5c1538c91f9d5",
                    "vitals_key": "bsa",
                    "vitals_default_value": "1.94",
                    "unit": "m2",
                    "description": "this is just test for Body Surface Area",
                    "title": "Body Surface Area"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "observer_id": "5fd8fa9b5c5e303f91aa2556",
            "created_by": "Ozichukwu Ezike",
            "__v": 0
        },
        {
            "source": "patient generated",
            "comment": "The BP is high",
            "_id": "5fe01d8abe6ff34a38344145",
            "date_entered": "2020-11-20T20:00:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "90",
                    "_id": "5fe01d8abe6ff34a38344146",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "135",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe01d8abe6ff34a38344147",
                    "vitals_key": "height",
                    "vitals_default_value": "185",
                    "unit": "cm",
                    "description": "this is just test for Height",
                    "title": "Height"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe01d8abe6ff34a38344148",
                    "vitals_key": "weight",
                    "vitals_default_value": "115",
                    "unit": "kg",
                    "description": "this is just test for Height",
                    "title": "Weight"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe01d8abe6ff34a38344149",
                    "vitals_key": "bmi",
                    "vitals_default_value": "32",
                    "unit": "kg/m2",
                    "description": "this is just test for BMI",
                    "title": "Body Mass Index (BMI)"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe01d8abe6ff34a3834414a",
                    "vitals_key": "oxygen_saturation",
                    "vitals_default_value": "94",
                    "unit": "%",
                    "description": "this is just test for Oxygen Saturation",
                    "title": "Oxygen Saturation"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe01d8abe6ff34a3834414b",
                    "vitals_key": "temperature",
                    "vitals_default_value": "37.5",
                    "unit": "Celsius °C",
                    "description": "this is just test for temperature",
                    "title": "Temperature"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe01d8abe6ff34a3834414c",
                    "vitals_key": "respiration_rate",
                    "vitals_default_value": "24",
                    "unit": "breaths/min",
                    "description": "this is just test for Respiration Rate",
                    "title": "Respiration Rate"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe01d8abe6ff34a3834414d",
                    "vitals_key": "heart_rate",
                    "vitals_default_value": "80",
                    "unit": "bpm",
                    "description": "this is just test for Heart Rate",
                    "title": "Heart Rate"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fe01d8abe6ff34a3834414e",
                    "vitals_key": "bsa",
                    "vitals_default_value": "1.92",
                    "unit": "m2",
                    "description": "this is just test for Body Surface Area",
                    "title": "Body Surface Area"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "observer_id": "5fd8fa9b5c5e303f91aa2556",
            "created_by": "Ozichukwu Ezike",
            "__v": 0
        },
        {
            "source": "PATIENT",
            "comment": "The BP is high",
            "_id": "5fdc0d9a782b45295c4e74fc",
            "date_entered": "2020-11-19T20:00:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "83",
                    "_id": "5fdc0d9a782b45295c4e74fd",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "125",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fdc0d9a782b45295c4e74fe",
                    "vitals_key": "height",
                    "vitals_default_value": "180",
                    "unit": "cm",
                    "description": "this is just test for Height",
                    "title": "Height"
                },
                {
                    "vitals_secondary_value": null,
                    "_id": "5fdc0d9a782b45295c4e74ff",
                    "vitals_key": "weight",
                    "vitals_default_value": "110",
                    "unit": "kg",
                    "description": "this is just test for Height",
                    "title": "Weight"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "__v": 0
        },
        {
            "source": "PATIENT",
            "comment": "The BP is high",
            "_id": "5fdbed7be6021a678cad7720",
            "date_entered": "2020-11-18T20:50:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "85",
                    "_id": "5fdbed7be6021a678cad7721",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "129",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "__v": 0
        },
        {
            "source": "PATIENT",
            "comment": "The BP is high",
            "_id": "5fdbed54e6021a678cad771e",
            "date_entered": "2020-11-18T20:50:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "90",
                    "_id": "5fdbed54e6021a678cad771f",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "130",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "__v": 0
        },
        {
            "source": "PATIENT",
            "comment": "The BP is high",
            "_id": "5fdbed3ce6021a678cad771c",
            "date_entered": "2020-11-18T19:50:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "110",
                    "_id": "5fdbed3ce6021a678cad771d",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "190",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "__v": 0
        },
        {
            "source": "PATIENT",
            "comment": "The BP is high",
            "_id": "5fdbed02e6021a678cad771a",
            "date_entered": "2020-11-18T19:31:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "70",
                    "_id": "5fdbed02e6021a678cad771b",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "90",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "__v": 0
        },
        {
            "source": "PATIENT",
            "comment": "The BP is high",
            "_id": "5fdbe1a8b9abcb503491ef88",
            "date_entered": "2020-11-18T22:31:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "80",
                    "_id": "5fdbe1a8b9abcb503491ef89",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "140",
                    "unit": "mmHg",
                    "description": "this is just test for fat in the body",
                    "title": "Blood Pressure"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "__v": 0
        },
        {
            "source": "PATIENT",
            "comment": "THe BMI is high",
            "_id": "5fdb723d6ac66f1ca4acfb10",
            "date_entered": "2020-11-18T21:31:14.000Z",
            "timestamp": "12:30 AM",
            "vitals": [
                {
                    "vitals_secondary_value": null,
                    "_id": "5fdb723d6ac66f1ca4acfb11",
                    "vitals_key": "bmi",
                    "vitals_default_value": "30",
                    "unit": "kg/m2",
                    "description": "this is just test for fat in the body",
                    "title": "Body Mass Index (BMI)"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "__v": 0
        },
        {
            "source": "PATIENT",
            "comment": "The BP is normal",
            "_id": "5fd94d8be62b3a3ed02b94bc",
            "date_entered": "2020-11-17T19:31:14.000Z",
            "timestamp": "12:00 AM",
            "vitals": [
                {
                    "vitals_secondary_value": "80",
                    "_id": "5fd94d8be62b3a3ed02b94bd",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "120",
                    "unit": "mmHg",
                    "description": "test",
                    "title": "Blood Pressure"
                }
            ],
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "__v": 0
        }
    ],
    "message": "All User Vitals History",
    "errMessage": null
}
 *
 *
 * @apiUse VitalHistoryError
 */

/**
 * @apiDescription This endpoint fetches vital passed as param by a user.
 * @apiVersion 0.1.0
 * @api {get} /vitalshistory/:vital fetch specific vital history
 * @apiName Get Selected Vitals History
 * @apiGroup Vitals History
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParam {String} vital  this is the vital key passed as param to get the vitals history for. [i.e `blood_pressure`]
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": [
        {
            "_id": "5fe0fc5fbff5c1538c91f9cc",
            "source": "patient generated",
            "comment": "The BP is high",
            "date_entered": "2020-11-21T20:00:14.000Z",
            "timestamp": "12:30 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "observer_id": "5fd8fa9b5c5e303f91aa2556",
            "created_by": "Ozichukwu Ezike",
            "createdAt": "2020-12-21T19:49:51.956Z",
            "updatedAt": "2020-12-21T19:49:51.956Z",
            "vitals": [
                {
                    "vitals_secondary_value": "95",
                    "_id": "5fe0fc5fbff5c1538c91f9cd",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "140",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ]
        },
        {
            "_id": "5fe01d8abe6ff34a38344145",
            "source": "patient generated",
            "comment": "The BP is high",
            "date_entered": "2020-11-20T20:00:14.000Z",
            "timestamp": "12:30 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "observer_id": "5fd8fa9b5c5e303f91aa2556",
            "created_by": "Ozichukwu Ezike",
            "createdAt": "2020-12-21T03:59:06.567Z",
            "updatedAt": "2020-12-21T03:59:06.567Z",
            "vitals": [
                {
                    "vitals_secondary_value": "90",
                    "_id": "5fe01d8abe6ff34a38344146",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "135",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ]
        },
        {
            "_id": "5fdc0d9a782b45295c4e74fc",
            "comment": "The BP is high",
            "date_entered": "2020-11-19T20:00:14.000Z",
            "timestamp": "12:30 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "createdAt": "2020-12-18T02:02:02.801Z",
            "updatedAt": "2020-12-18T02:02:02.801Z",
            "vitals": [
                {
                    "vitals_secondary_value": "83",
                    "_id": "5fdc0d9a782b45295c4e74fd",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "125",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ]
        },
        {
            "_id": "5fdbed7be6021a678cad7720",
            "comment": "The BP is high",
            "date_entered": "2020-11-18T20:50:14.000Z",
            "timestamp": "12:30 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "createdAt": "2020-12-17T23:44:59.621Z",
            "updatedAt": "2020-12-17T23:44:59.621Z",
            "vitals": [
                {
                    "vitals_secondary_value": "85",
                    "_id": "5fdbed7be6021a678cad7721",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "129",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ]
        },
        {
            "_id": "5fdbed54e6021a678cad771e",
            "comment": "The BP is high",
            "date_entered": "2020-11-18T20:50:14.000Z",
            "timestamp": "12:30 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "createdAt": "2020-12-17T23:44:20.291Z",
            "updatedAt": "2020-12-17T23:44:20.291Z",
            "vitals": [
                {
                    "vitals_secondary_value": "90",
                    "_id": "5fdbed54e6021a678cad771f",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "130",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ]
        },
        {
            "_id": "5fdbed3ce6021a678cad771c",
            "comment": "The BP is high",
            "date_entered": "2020-11-18T19:50:14.000Z",
            "timestamp": "12:30 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "createdAt": "2020-12-17T23:43:56.073Z",
            "updatedAt": "2020-12-17T23:43:56.073Z",
            "vitals": [
                {
                    "vitals_secondary_value": "110",
                    "_id": "5fdbed3ce6021a678cad771d",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "190",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ]
        },
        {
            "_id": "5fdbed02e6021a678cad771a",
            "comment": "The BP is high",
            "date_entered": "2020-11-18T19:31:14.000Z",
            "timestamp": "12:30 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "createdAt": "2020-12-17T23:42:58.314Z",
            "updatedAt": "2020-12-17T23:42:58.314Z",
            "vitals": [
                {
                    "vitals_secondary_value": "70",
                    "_id": "5fdbed02e6021a678cad771b",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "90",
                    "unit": "mmHg",
                    "description": "this is just test for BP",
                    "title": "Blood Pressure"
                }
            ]
        },
        {
            "_id": "5fdbe1a8b9abcb503491ef88",
            "comment": "The BP is high",
            "date_entered": "2020-11-18T22:31:14.000Z",
            "timestamp": "12:30 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "createdAt": "2020-12-17T22:54:32.280Z",
            "updatedAt": "2020-12-17T22:54:32.280Z",
            "vitals": [
                {
                    "vitals_secondary_value": "80",
                    "_id": "5fdbe1a8b9abcb503491ef89",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "140",
                    "unit": "mmHg",
                    "description": "this is just test for fat in the body",
                    "title": "Blood Pressure"
                }
            ]
        },
        {
            "_id": "5fd94d8be62b3a3ed02b94bc",
            "comment": "The BP is normal",
            "date_entered": "2020-11-17T19:31:14.000Z",
            "timestamp": "12:00 AM",
            "user_id": "5fd8fa9b5c5e303f91aa2556",
            "createdAt": "2020-12-15T23:58:03.151Z",
            "updatedAt": "2020-12-15T23:58:03.151Z",
            "vitals": [
                {
                    "vitals_secondary_value": "80",
                    "_id": "5fd94d8be62b3a3ed02b94bd",
                    "vitals_key": "blood_pressure",
                    "vitals_default_value": "120",
                    "unit": "mmHg",
                    "description": "test",
                    "title": "Blood Pressure"
                }
            ]
        }
    ],
    "message": "All User Vitals History",
    "errMessage": null
  }
  @apiUse VitalHistoryError
*/