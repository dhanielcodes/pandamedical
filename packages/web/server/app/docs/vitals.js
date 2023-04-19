/**
 * @apiDefine VitalError
 *
 * @apiError Vital Error an Error has occurred
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
 * @apiDescription This endpoint fetches all the vitals fields, their associated units and norminal values.
 * @apiVersion 0.1.0
 * @api {get} /vitals fetch vital fields
 * @apiName GetVitals Fields
 * @apiGroup Vitals
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "status": 200,
        "response": true,
        "data": [
            {
                "norminal_values": {
                    "low": 0,
                    "normal": 0,
                    "high": 0
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "Oxygen saturation is the fraction of oxygen-saturated hemoglobin relative to total hemoglobin (unsaturated + saturated) in the blood.",
                "_id": "5fe1195a0586a25bf010b108",
                "title": "Oxygen Saturation",
                "key": "oxygen_saturation",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b109",
                        "system": "metric",
                        "symbol": "%"
                    }
                ],
                "__v": 0
            },
            {
                "norminal_values": {
                    "low": 0,
                    "normal": 0,
                    "high": 0
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "Normal human body-temperature is the typical temperature range found in humans. The normal human body temperature range is typically stated as 36.5–37.5 °C.",
                "_id": "5fe1195a0586a25bf010b10a",
                "title": "Temperature",
                "key": "temperature",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b10b",
                        "system": "imperial",
                        "symbol": "Fahrenheit °F"
                    },
                    {
                        "_id": "5fe1195a0586a25bf010b10c",
                        "system": "metric",
                        "symbol": "Celsius °C"
                    }
                ],
                "__v": 0
            },
            {
                "norminal_values": {
                    "low": 0,
                    "normal": 0,
                    "high": 0
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "The respiratory rate is the rate at which breathing occurs. This is usually measured in breaths per minute and is set and controlled by the respiratory centre.",
                "_id": "5fe1195a0586a25bf010b10d",
                "title": "Respiration Rate",
                "key": "respiration_rate",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b10e",
                        "system": "metric",
                        "symbol": "breaths/min"
                    }
                ],
                "__v": 0
            },
            {
                "norminal_values": {
                    "low": 0,
                    "normal": 0,
                    "high": 0
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "Human body weight refers to a person's mass or weight. Body weight is measured in kilograms, a measure of mass, throughout the world, although in some countries such as the United States it is measured in pounds, or as in the United Kingdom, stones and pounds.",
                "_id": "5fe1195a0586a25bf010b10f",
                "title": "Weight",
                "key": "weight",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b110",
                        "system": "imperial",
                        "symbol": "lbs"
                    },
                    {
                        "_id": "5fe1195a0586a25bf010b111",
                        "system": "metric",
                        "symbol": "kg"
                    }
                ],
                "__v": 0
            },
            {
                "norminal_values": {
                    "low": 0,
                    "normal": 0,
                    "high": 0
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "Human height or stature is the distance from the bottom of the feet to the top of the head in a human body, standing erect. It is measured using a stadiometer, usually in centimetres when using the metric system, or feet and inches when using the imperial system.",
                "_id": "5fe1195a0586a25bf010b112",
                "title": "Height",
                "key": "height",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b113",
                        "system": "imperial",
                        "symbol": "ft"
                    },
                    {
                        "_id": "5fe1195a0586a25bf010b114",
                        "system": "metric",
                        "symbol": "cm"
                    }
                ],
                "__v": 0
            },
            {
                "norminal_values": {
                    "low": 0,
                    "normal": 0,
                    "high": 0
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "Body mass index is a value derived from the mass and height of a person.",
                "_id": "5fe1195a0586a25bf010b115",
                "title": "Body Mass Index (BMI)",
                "key": "bmi",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b116",
                        "system": "imperial",
                        "symbol": "ib/in2"
                    },
                    {
                        "_id": "5fe1195a0586a25bf010b117",
                        "system": "metric",
                        "symbol": "kg/m2"
                    }
                ],
                "__v": 0
            },
            {
                "norminal_values": {
                    "low": 0,
                    "normal": 0,
                    "high": 0
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "n physiology and medicine, the body surface area is the measured or calculated surface area of a human body.",
                "_id": "5fe1195a0586a25bf010b118",
                "title": "Body Surface Area",
                "key": "bsa",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b119",
                        "system": "imperial",
                        "symbol": "ft2"
                    },
                    {
                        "_id": "5fe1195a0586a25bf010b11a",
                        "system": "metric",
                        "symbol": "m2"
                    }
                ],
                "__v": 0
            },
            {
                "norminal_values": {
                    "low": 110,
                    "normal": 120,
                    "high": 140
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "the pressure of the blood in the circulatory system, often measured for diagnosis since it is closely related to the force and rate of the heartbeat and the diameter and elasticity of the arterial walls",
                "_id": "5fe1195a0586a25bf010b103",
                "title": "Blood Pressure",
                "key": "blood_pressure",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b104",
                        "system": "imperial",
                        "symbol": "mmHg"
                    },
                    {
                        "_id": "5fe1195a0586a25bf010b105",
                        "system": "metric",
                        "symbol": "kPa"
                    }
                ],
                "__v": 0
            },
            {
                "norminal_values": {
                    "low": 40,
                    "normal": 60,
                    "high": 100
                },
                "result_source": {
                    "patient": "patient generated",
                    "physician": "physician generated",
                    "lab": "lab generated",
                    "clinic": "clinic generated"
                },
                "description": "Heart rate is the speed of the heartbeat measured by the number of contractions (beats) of the heart per minute (bpm)",
                "_id": "5fe1195a0586a25bf010b106",
                "title": "Heart Rate",
                "key": "heart_rate",
                "unit": [
                    {
                        "_id": "5fe1195a0586a25bf010b107",
                        "system": "metric",
                        "symbol": "bpm"
                    }
                ],
                "__v": 0
            }
        ],
        "message": "All Vitals Options",
        "errMessage": null
    }
    @apiUse VitalError
 */

/**
 * @apiDescription This endpoint create a single vital or multiple vitals entries for a user.
 * @apiVersion 0.1.0
 * @api {post} /vitals add user vitals
 * @apiName Post Vitals
 * @apiGroup Vitals
 * @apiHeader (Headers) {String} Authorization `Bearer token` user should add their user token to the authorization header.
 * @apiHeader (Headers) {String} [x-auth] `token` user should add their user token to the x-auth header.
 * @apiParamExample {json} Add New Vitals:
 *      {
    "comment":"The BP is high",
    "vitals":[
        {
            "vitals_key":"blood_pressure",
            "vitals_default_value": 140,
            "vitals_secondary_value": 95,
            "unit": "mmHg",
            "description": "this is just test for BP",
            "title": "Blood Pressure"
        },
        {
            "vitals_key":"height",
            "vitals_default_value": 186,
            "vitals_secondary_value": null,
            "unit": "cm",
            "description": "this is just test for Height",
            "title": "Height"
        },
        {
            "vitals_key":"weight",
            "vitals_default_value": 116,
            "vitals_secondary_value": null,
            "unit": "kg",
            "description": "this is just test for Height",
            "title": "Weight"
        },
        {
            "vitals_key":"bmi",
            "vitals_default_value": 33,
            "vitals_secondary_value": null,
            "unit": "kg/m2",
            "description": "this is just test for BMI",
            "title": "Body Mass Index (BMI)"
        },
        {
            "vitals_key":"oxygen_saturation",
            "vitals_default_value": 93,
            "vitals_secondary_value": null,
            "unit": "%",
            "description": "this is just test for Oxygen Saturation",
            "title": "Oxygen Saturation"
        },
        {
            "vitals_key":"temperature",
            "vitals_default_value": 38,
            "vitals_secondary_value": null,
            "unit": "Celsius °C",
            "description": "this is just test for temperature",
            "title": "Temperature"
        },
        {
            "vitals_key":"respiration_rate",
            "vitals_default_value": 22,
            "vitals_secondary_value": null,
            "unit": "breaths/min",
            "description": "this is just test for Respiration Rate",
            "title": "Respiration Rate"
        },
        {
            "vitals_key":"heart_rate",
            "vitals_default_value": 70,
            "vitals_secondary_value": null,
            "unit": "bpm",
            "description": "this is just test for Heart Rate",
            "title": "Heart Rate"
        },
        {
            "vitals_key":"bsa",
            "vitals_default_value": 1.94,
            "vitals_secondary_value": null,
            "unit": "m2",
            "description": "this is just test for Body Surface Area",
            "title": "Body Surface Area"
        }
    ],
    "user_id": "5fd8fa9b5c5e303f91aa2556",
    "date_entered": "Sat Nov 21 2020 21:00:14 GMT+0100 (West Africa Standard Time)",
    "timestamp": "12:30 AM",
    "source": "patient generated",
    "observer_id": "5fd8fa9b5c5e303f91aa2556",
    "created_by":"Ozichukwu Ezike"

}

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "status": 200,
    "response": true,
    "data": {
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
        "createdAt": "2020-12-21T19:49:51.956Z",
        "updatedAt": "2020-12-21T19:49:51.956Z",
        "__v": 0
    },
    "message": "New Vital Created",
    "errMessage": null
}
  @apiUse VitalError
 */