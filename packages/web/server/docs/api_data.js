define({ "api": [
  {
    "description": "<p>This endpoint allows users to fetch all their appointments</p>",
    "type": "get",
    "url": "/appointments/:id",
    "title": "get users appointments",
    "name": "GetAppointments",
    "group": "Appointments",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>this is the database id for the user to fetch their appointment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"appointments\": [\n            {\n                \"_id\": \"602c9e1dd1229a6b24a0b4da\",\n                \"appointee\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 18,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"scheduler\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 136,\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"timeslots\": {\n                    \"isActive\": true,\n                    \"isOverdue\": false,\n                    \"isClosed\": false,\n                    \"status\": \"PENDING\",\n                    \"_id\": \"602c9e1dd1229a6b24a0b4d9\",\n                    \"slot_time\": \"10\",\n                    \"slot_date\": \"2021-02-18T00:00:00.000Z\",\n                    \"appointee_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"__v\": 0\n                },\n                \"createdAt\": \"2021-02-17T04:39:57.191Z\",\n                \"updatedAt\": \"2021-02-17T04:39:57.191Z\",\n                \"__v\": 0,\n                \"message\": {\n                    \"note\": \"I am having headache, please help\",\n                    \"topic\": \"medical issue\",\n                    \"_id\": \"602c9e1dd1229a6b24a0b4db\",\n                    \"appointment_id\": \"602c9e1dd1229a6b24a0b4da\",\n                    \"__v\": 0\n                },\n                \"id\": \"602c9e1dd1229a6b24a0b4da\"\n            },\n            {\n                \"_id\": \"602c9ea29a351257c49766c8\",\n                \"appointee\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 18,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"scheduler\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 136,\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"timeslots\": {\n                    \"isActive\": true,\n                    \"isOverdue\": false,\n                    \"isClosed\": false,\n                    \"status\": \"PENDING\",\n                    \"_id\": \"602c9ea29a351257c49766c7\",\n                    \"slot_time\": \"11\",\n                    \"slot_date\": \"2021-02-18T00:00:00.000Z\",\n                    \"appointee_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"__v\": 0\n                },\n                \"createdAt\": \"2021-02-17T04:42:10.413Z\",\n                \"updatedAt\": \"2021-02-17T04:42:10.413Z\",\n                \"__v\": 0,\n                \"message\": {\n                    \"note\": \"I am having headache, please help!\",\n                    \"topic\": \"medical issue 2\",\n                    \"_id\": \"602c9ea29a351257c49766c9\",\n                    \"appointment_id\": \"602c9ea29a351257c49766c8\",\n                    \"__v\": 0\n                },\n                \"id\": \"602c9ea29a351257c49766c8\"\n            },\n            {\n                \"_id\": \"602c9f58b907c06b9c1c28b7\",\n                \"appointee\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 18,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"scheduler\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 136,\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"timeslots\": {\n                    \"isActive\": true,\n                    \"isOverdue\": false,\n                    \"isClosed\": false,\n                    \"status\": \"PENDING\",\n                    \"_id\": \"602c9f58b907c06b9c1c28b6\",\n                    \"slot_time\": \"12\",\n                    \"slot_date\": \"2021-02-18T00:00:00.000Z\",\n                    \"appointee_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"__v\": 0\n                },\n                \"createdAt\": \"2021-02-17T04:45:12.836Z\",\n                \"updatedAt\": \"2021-02-17T04:45:12.836Z\",\n                \"__v\": 0,\n                \"message\": {\n                    \"note\": null,\n                    \"topic\": null,\n                    \"_id\": \"602c9f58b907c06b9c1c28b8\",\n                    \"appointment_id\": \"602c9f58b907c06b9c1c28b7\",\n                    \"__v\": 0\n                },\n                \"id\": \"602c9f58b907c06b9c1c28b7\"\n            }\n        ]\n    },\n    \"message\": \"Found your appointments\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/appointments.js",
    "groupTitle": "Appointments",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows users to fetch range of appointments</p>",
    "type": "get",
    "url": "/appointments/:id?start_date=&end_date=",
    "title": "get users appointments",
    "name": "GetAppointments_by_Date_Range",
    "group": "Appointments",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>this is the database id for the user to fetch their appointment</p>"
          }
        ],
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "'2021-01-15'"
            ],
            "optional": true,
            "field": "start_date",
            "description": "<p>this is the earliest date for the user to fetch their appointment. <code>if a start_date query is provided and end_date query is required</code></p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "'2021-01-15'",
              "'2021-01-16'"
            ],
            "optional": true,
            "field": "end_date",
            "description": "<p>this is the end date for the user to fetch their appointment. <code>end_date query cannot less then the start_date</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"appointments\": [\n            {\n                \"_id\": \"602c9e1dd1229a6b24a0b4da\",\n                \"appointee\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 18,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"scheduler\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 136,\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"timeslots\": {\n                    \"isActive\": true,\n                    \"isOverdue\": false,\n                    \"isClosed\": false,\n                    \"status\": \"PENDING\",\n                    \"_id\": \"602c9e1dd1229a6b24a0b4d9\",\n                    \"slot_time\": \"10\",\n                    \"slot_date\": \"2021-02-18T00:00:00.000Z\",\n                    \"appointee_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"__v\": 0\n                },\n                \"createdAt\": \"2021-02-17T04:39:57.191Z\",\n                \"updatedAt\": \"2021-02-17T04:39:57.191Z\",\n                \"__v\": 0,\n                \"message\": {\n                    \"note\": \"I am having headache, please help\",\n                    \"topic\": \"medical issue\",\n                    \"_id\": \"602c9e1dd1229a6b24a0b4db\",\n                    \"appointment_id\": \"602c9e1dd1229a6b24a0b4da\",\n                    \"__v\": 0\n                },\n                \"id\": \"602c9e1dd1229a6b24a0b4da\"\n            },\n            {\n                \"_id\": \"602c9ea29a351257c49766c8\",\n                \"appointee\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 18,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"scheduler\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 136,\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"timeslots\": {\n                    \"isActive\": true,\n                    \"isOverdue\": false,\n                    \"isClosed\": false,\n                    \"status\": \"PENDING\",\n                    \"_id\": \"602c9ea29a351257c49766c7\",\n                    \"slot_time\": \"11\",\n                    \"slot_date\": \"2021-02-18T00:00:00.000Z\",\n                    \"appointee_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"__v\": 0\n                },\n                \"createdAt\": \"2021-02-17T04:42:10.413Z\",\n                \"updatedAt\": \"2021-02-17T04:42:10.413Z\",\n                \"__v\": 0,\n                \"message\": {\n                    \"note\": \"I am having headache, please help!\",\n                    \"topic\": \"medical issue 2\",\n                    \"_id\": \"602c9ea29a351257c49766c9\",\n                    \"appointment_id\": \"602c9ea29a351257c49766c8\",\n                    \"__v\": 0\n                },\n                \"id\": \"602c9ea29a351257c49766c8\"\n            },\n            {\n                \"_id\": \"602c9f58b907c06b9c1c28b7\",\n                \"appointee\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 18,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"scheduler\": {\n                    \"profilePic\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 136,\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"timeslots\": {\n                    \"isActive\": true,\n                    \"isOverdue\": false,\n                    \"isClosed\": false,\n                    \"status\": \"PENDING\",\n                    \"_id\": \"602c9f58b907c06b9c1c28b6\",\n                    \"slot_time\": \"12\",\n                    \"slot_date\": \"2021-02-18T00:00:00.000Z\",\n                    \"appointee_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"__v\": 0\n                },\n                \"createdAt\": \"2021-02-17T04:45:12.836Z\",\n                \"updatedAt\": \"2021-02-17T04:45:12.836Z\",\n                \"__v\": 0,\n                \"message\": {\n                    \"note\": null,\n                    \"topic\": null,\n                    \"_id\": \"602c9f58b907c06b9c1c28b8\",\n                    \"appointment_id\": \"602c9f58b907c06b9c1c28b7\",\n                    \"__v\": 0\n                },\n                \"id\": \"602c9f58b907c06b9c1c28b7\"\n            }\n        ]\n    },\n    \"message\": \"Found your appointments\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/appointments.js",
    "groupTitle": "Appointments",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows users to fetch available time_slot per day</p>",
    "type": "get",
    "url": "/timeslots/?appointee_id=455dfdnfdjnfjdsfdfn464&slot_date=2021-01-15",
    "title": "get user's available slots pre day",
    "name": "GetTimeslots",
    "group": "Appointments",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "'455dfdnfdjnfjdsfdfn464'"
            ],
            "optional": false,
            "field": "appointee_id",
            "description": "<p>this is the database id of the user to find available availaable appointment timeslot</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "'2021-01-15'"
            ],
            "optional": false,
            "field": "slot_date",
            "description": "<p>this is the date that the user wants to book appointment for.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"timeslots\": [\n            {\n                \"slot_time\": \"9\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"10\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"12\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"13\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"14\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"16\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"17\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"18\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"19\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"20\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"21\",\n                \"slot_date\": \"2021-01-18\"\n            },\n            {\n                \"slot_time\": \"22\",\n                \"slot_date\": \"2021-01-18\"\n            }\n        ],\n        \"next_available_slot\": \"2021-01-19\"\n    },\n    \"message\": \"List of Available Appointment slots for bobby ezike on 2021-01-18\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/timeslots.js",
    "groupTitle": "Appointments",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows users to create appointments</p>",
    "type": "post",
    "url": "/appointments",
    "title": "create appointments",
    "name": "PostAppointments",
    "group": "Appointments",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "appointee",
            "description": "<p>this is the database id for the user who will receive the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "scheduler",
            "description": "<p>this is the database id for the user who is scheduling the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'0, 1, 3, n=23'"
            ],
            "optional": false,
            "field": "slot_time",
            "description": "<p>this is the selected time during the day for the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'2021-01-15'"
            ],
            "optional": false,
            "field": "slot_date",
            "description": "<p>this is the selected date for the appointment. <code>slot_date cannot be a time in the past</code></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'i am sick'"
            ],
            "optional": true,
            "field": "topic",
            "description": "<p>this is the title for the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'it started a week age'"
            ],
            "optional": true,
            "field": "note",
            "description": "<p>this is the description for the appointment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"appointment\": {\n            \"_id\": \"600509f0256cdb0f847a7cff\",\n            \"appointee\": \"5ffdb2ef344694663015ec4e\",\n            \"scheduler\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"timeslots\": \"600509f0256cdb0f847a7cfe\",\n            \"createdAt\": \"2021-01-18T04:09:20.687Z\",\n            \"updatedAt\": \"2021-01-18T04:09:20.687Z\",\n            \"__v\": 0\n        }\n    },\n    \"message\": \"Created New Appointment!\",\n    \"errMessage\": null\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 Not Found\n {\n  \"status\": 400,\n  \"response\": false,\n  \"data\": null,\n  \"message\": null,\n  \"errMessage\": \"slot_date must be greater than or equal to 2021 01 17T23 00 00 000Z\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/appointments.js",
    "groupTitle": "Appointments"
  },
  {
    "description": "<p>This endpoint allows users(appointee) to accept an appointment</p>",
    "type": "put",
    "url": "/appointments/:id/accept",
    "title": "accept appointment",
    "name": "PutAppointments_Accept",
    "group": "Appointments",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Appointment Accepted!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/appointments.js",
    "groupTitle": "Appointments",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows users(appointee) to reject an appointment</p>",
    "type": "put",
    "url": "/appointments/:id/reject",
    "title": "reject appointment",
    "name": "PutAppointments_Reject",
    "group": "Appointments",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Appointment Rejected!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/appointments.js",
    "groupTitle": "Appointments",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows users to reschedule an appointment</p>",
    "type": "put",
    "url": "/appointments/:id/reschedule",
    "title": "reschedule appointment",
    "name": "PutAppointments_Reschedule",
    "group": "Appointments",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'0, 1, 3, n=23'"
            ],
            "optional": false,
            "field": "slot_time",
            "description": "<p>this is the selected time during the day for the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'2021-01-15'"
            ],
            "optional": false,
            "field": "slot_date",
            "description": "<p>this is the selected date for the appointment. <code>slot_date cannot be a time in the past</code></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'i am sick'"
            ],
            "optional": true,
            "field": "topic",
            "description": "<p>this is the title for the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'it started a week age'"
            ],
            "optional": true,
            "field": "note",
            "description": "<p>this is the description for the appointment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"rescheduled_appointment\": {\n            \"_id\": \"603946cc390a687664d3b7ad\",\n            \"appointee\": \"5ffdb2ef344694663015ec4e\",\n            \"scheduler\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"timeslots\": \"603946cc390a687664d3b7ac\",\n            \"createdAt\": \"2021-02-26T19:06:52.946Z\",\n            \"updatedAt\": \"2021-02-26T19:06:52.946Z\",\n            \"__v\": 0,\n            \"id\": \"603946cc390a687664d3b7ad\"\n        }\n    },\n    \"message\": \"Appointment Rescheduled!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 Not Found\n {\n  \"status\": 400,\n  \"response\": false,\n  \"data\": null,\n  \"message\": null,\n  \"errMessage\": \"slot_date must be greater than or equal to 2021 01 17T23 00 00 000Z\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/appointments.js",
    "groupTitle": "Appointments"
  },
  {
    "description": "<p>This endpoint authenticates a user to fetch their basic data</p>",
    "type": "get",
    "url": "/auth/me",
    "title": "get user data",
    "name": "GetUser_Data",
    "group": "Auth",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ4ZmE5YjVjNWUzMDNmOTFhYTI1NTYiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjEwOTM3ODg4LCJleHAiOjE2MTA5NDE0ODh9.JWCilDzIjpTXD5ETQzlPXOv42jXwAJATpiXczWaIOAk\",\n        \"user\": {\n            \"profilePic\": \"\",\n            \"qrcode\": \"\",\n            \"lastName\": \"tester\",\n            \"ip\": \"0.0.0.0\",\n            \"device\": \"null\",\n            \"inviteCode\": null,\n            \"invitedBy\": null,\n            \"role\": \"USER\",\n            \"street\": \"\",\n            \"city\": \"\",\n            \"state\": \"\",\n            \"isActive\": true,\n            \"deviceToken\": null,\n            \"isOnline\": true,\n            \"unit_system\": \"METRIC\",\n            \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"firstName\": \"valentine\",\n            \"email\": \"ozichukwuezike@gmail.com\",\n            \"gender\": \"MALE\",\n            \"createdAt\": \"2020-12-15T03:22:00.083Z\",\n            \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n            \"phone\": \"+2348109950207\",\n            \"username\": \"ozichukwuezike_314bdf\",\n            \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n            \"updatedAt\": \"2020-12-15T18:04:11.987Z\",\n            \"__v\": 102,\n            \"vitals\": {\n                \"temperature\": {\n                    \"value\": 37,\n                    \"unit\": \"Celsius °C\",\n                    \"number_of_records\": 3,\n                    \"latest_record\": \"2021-01-02T14:29:15.182Z\"\n                },\n                \"blood_pressure\": {\n                    \"systolic\": 151,\n                    \"diastolic\": 110,\n                    \"unit\": \"mmHg\",\n                    \"number_of_records\": 10,\n                    \"latest_record\": \"2021-01-02T14:06:00.750Z\",\n                    \"history\": {\n                        \"low\": 1,\n                        \"normal\": 3,\n                        \"high\": 6,\n                        \"average\": 135\n                    }\n                },\n                \"height\": {\n                    \"value\": 186,\n                    \"unit\": \"cm\",\n                    \"number_of_records\": 3,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"weight\": {\n                    \"value\": 116,\n                    \"unit\": \"kg\",\n                    \"number_of_records\": 3,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"bmi\": {\n                    \"value\": 33,\n                    \"unit\": \"kg/m2\",\n                    \"number_of_records\": 3,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"oxygen_saturation\": {\n                    \"value\": 93,\n                    \"unit\": \"%\",\n                    \"number_of_records\": 2,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"respiration_rate\": {\n                    \"value\": 22,\n                    \"unit\": \"breaths/min\",\n                    \"number_of_records\": 2,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"heart_rate\": {\n                    \"value\": 70,\n                    \"unit\": \"bpm\",\n                    \"number_of_records\": 2,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\",\n                    \"history\": {\n                        \"low\": 0,\n                        \"normal\": 2,\n                        \"high\": 0,\n                        \"average\": 75\n                    }\n                },\n                \"bsa\": {\n                    \"value\": 1.94,\n                    \"unit\": \"m2\",\n                    \"number_of_records\": 2,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                }\n            },\n            \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n        }\n    },\n    \"message\": \"My Profile\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/auth.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint authenticates a user to fetch their basic data</p>",
    "type": "post",
    "url": "/auth/physician/login",
    "title": "login a physician",
    "name": "PostLoginPhysician",
    "group": "Auth",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n     email: 'ozichukwubobbyezike@gmail.com',\n     password: 'anything will do'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZkYjJlZjM0NDY5NDY2MzAxNWVjNGUiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjEyNzY1NTU5LCJleHAiOjE2MTI3NjkxNTl9.645VclyNEeo-lQhzSd4YXWbtCJUqi_9w39xoRmioE68\",\n        \"_id\": \"5ffdb2ef344694663015ec4e\"\n    },\n    \"message\": \"Found Physician: ozichukwubobbyezike@gmail.com\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/auth.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint fetches the available options for a booking an appointment</p>",
    "type": "get",
    "url": "/bookingslist",
    "title": "get a bookings lists",
    "name": "GetBookings_Lists",
    "group": "Bookings",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"bookingslist\": [\n            {\n                \"description\": \"Physicians and Surgeons, Pediatricians,General e.t.c\",\n                \"title\": \"Doctors\",\n                \"key\": \"PHYSICIAN\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"Hospital, Hospice e.t.c\",\n                \"title\": \"Healthcare Facilities\",\n                \"key\": \"HEALTHCARE\",\n                \"__v\": 0\n            }\n        ]\n    },\n    \"message\": \"Select from the listing\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/bookingslist.js",
    "groupTitle": "Bookings",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint authenticates a user to the Bloverse platform via social media platforms (see the parameter section for supported platforms). //  * The url handles the authtication process completely and should be loaded in a browser, if user does not exist on platform a new user is created during the process. //  * There is a redirect to the refferer with a set cookie header after successful process //  * @api {get} /auth/:platform?redirectUrl={url} Login //  * @apiName Authenticates user via specified social platform //  * @apiGroup Auth //  * @apiParam (Url Parameter) {String=&quot;facebook&quot;,&quot;google&quot;} platform The platform user will wants to authenticate with //  * @apiParam (Body Parameter) {String} [redirectUrl=&quot;url where user is reffered from or base url&quot;] Url to redirect user to after successful login //</p>",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/docs/auth.js",
    "group": "F:\\Documents\\Repository\\my_projects\\pandamedical\\packages\\web\\server\\app\\docs\\auth.js",
    "groupTitle": "F:\\Documents\\Repository\\my_projects\\pandamedical\\packages\\web\\server\\app\\docs\\auth.js",
    "name": ""
  },
  {
    "description": "<p>This endpoint fetches all the lab tests results, their associated units and norminal values for a user</p>",
    "version": "0.1.0",
    "type": "get",
    "url": "/labtestresults",
    "title": "fetch user lab test results",
    "name": "GetLabTestResults",
    "group": "LabTestResults",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"status\": 200,\n    \"response\": true,\n    \"data\": [\n        {\n            \"source\": \"patient generated\",\n            \"comment\": \"No Antibodies present\",\n            \"_id\": \"5fe10726008f7c1c442ef80a\",\n            \"date_entered\": \"2020-11-21T20:00:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"lab_tests\": [\n                {\n                    \"lab_secondary_value\": null,\n                    \"_id\": \"5fe10726008f7c1c442ef80b\",\n                    \"lab_key\": \"Antibody/antigen_combination_tests\",\n                    \"lab_default_value\": \"0\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"lab_name\": \"antibody/antigen combination tests\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"created_by\": \"Ozichukwu Ezike\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"All User Lab Result History\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/labresults.js",
    "groupTitle": "LabTestResults",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Lab",
            "description": "<p>Test Results an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"Something went wrong\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint add new lab tests for a user</p>",
    "version": "0.1.0",
    "type": "post",
    "url": "/labtestresults",
    "title": "add new user lab test",
    "name": "PostLabTestResults",
    "group": "LabTestResults",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"comment\":\"No Antibodies present\",\n    \"lab_tests\":[\n        {\n            \"lab_key\":\"Antibody/antigen_combination_tests\",\n            \"lab_default_value\": 0,\n            \"lab_secondary_value\": null,\n            \"unit\": \"mmHg\",\n            \"description\": \"this is just test for BP\",\n            \"lab_name\": \"antibody/antigen combination tests\"\n        }\n    ],\n    \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n    \"date_entered\": \"Sat Nov 21 2020 21:00:14 GMT+0100 (West Africa Standard Time)\",\n    \"timestamp\": \"12:30 AM\",\n    \"source\": \"patient generated\",\n    \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n    \"created_by\":\"Ozichukwu Ezike\"\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"source\": \"patient generated\",\n        \"comment\": \"No Antibodies present\",\n        \"_id\": \"5fe10726008f7c1c442ef80a\",\n        \"date_entered\": \"2020-11-21T20:00:14.000Z\",\n        \"timestamp\": \"12:30 AM\",\n        \"lab_tests\": [\n            {\n                \"lab_secondary_value\": null,\n                \"_id\": \"5fe10726008f7c1c442ef80b\",\n                \"lab_key\": \"Antibody/antigen_combination_tests\",\n                \"lab_default_value\": \"0\",\n                \"unit\": \"mmHg\",\n                \"description\": \"this is just test for BP\",\n                \"lab_name\": \"antibody/antigen combination tests\"\n            }\n        ],\n        \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n        \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n        \"created_by\": \"Ozichukwu Ezike\",\n        \"createdAt\": \"2020-12-21T20:35:50.771Z\",\n        \"updatedAt\": \"2020-12-21T20:35:50.771Z\",\n        \"__v\": 0\n    },\n    \"message\": \"New Labs Created\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/labresults.js",
    "groupTitle": "LabTestResults",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Lab",
            "description": "<p>Test Results an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"Something went wrong\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint fetches all available types of lab tests, their associated units and norminal values for a user</p>",
    "version": "0.1.0",
    "type": "get",
    "url": "/labtests",
    "title": "fetch all types lab tests",
    "name": "GetLabTests",
    "group": "LabTests",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": [\n        {\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"\",\n            \"unit\": null,\n            \"_id\": \"5fe1195a0586a25bf010b0fc\",\n            \"title\": \"Vitamin B12\",\n            \"key\": \"B12\",\n            \"__v\": 0\n        },\n        {\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"\",\n            \"unit\": null,\n            \"_id\": \"5fe1195a0586a25bf010afb2\",\n            \"title\": \"Activated Partial thromboplastin time\",\n            \"key\": \"APTT\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"All User Lab Tests\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/labtests.js",
    "groupTitle": "LabTests",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Lab",
            "description": "<p>Test  an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"Something went wrong\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint fetches and all available medical credentials on the platform</p>",
    "type": "get",
    "url": "/medicalcredentials",
    "title": "get medical credentials lists",
    "name": "GetMedicalCredentials",
    "group": "Medical_API",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"medical_credentials\": [\n            {\n                \"description\": \"An MD is commonly referred to as a physician or doctor. A MD has a doctoral degree for physicians awarded by accredited medical schools. A MD works to maintain or restore human health through the study, diagnosis and treatment of disease or injury.\",\n                \"status\": \"ACTIVE\",\n                \"title\": \"Doctor of Medicine\",\n                \"subtitle\": \"MD\",\n                \"key\": \"MD\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"It is awarded by medical schools and universities in medical and surgery. As the name suggest they are two separate degree however, in practice they are treated as one and awarded together. The time duration of MBBS course is five or six years.\",\n                \"status\": \"ACTIVE\",\n                \"title\": \"Bachelor of Medicine and Bachelor of Science\",\n                \"subtitle\": \"MBBS\",\n                \"key\": \"MBBS\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"A DO belongs to a separate, but equal, branch of medicine as a MD. A DO takes in account the musculoskeletal system, physical, mental, emotional and spiritual health of a patient, and how each aspect could contribute to illness.\",\n                \"status\": \"ACTIVE\",\n                \"title\": \"Doctor of Osteopathic Medicine\",\n                \"subtitle\": \"DO\",\n                \"key\": \"DO\",\n                \"__v\": 0\n            }\n        ]\n    },\n    \"message\": \"Select a specialty\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/medical-api.js",
    "groupTitle": "Medical_API",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint fetches all the medical Specialty for a physician</p>",
    "type": "get",
    "url": "/medicalspecialty",
    "title": "fetch all medicl specialty",
    "name": "GetMedicalSpecialty_Lists",
    "group": "Medical_API",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"description\": \"An allergist-immunologist diagnoses and manages disorders involving immune system conditions such as asthma, anaphylaxis, rhinitis, and eczema as well as adverse reactions to drugs, foods, and insect stings; also immune deficiency diseases and problems related to autoimmune disease, organ transplantation, or malignancies of the immune system.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Allergy and Immunology\",\n                \"title\": \"allergist / immunologist\",\n                \"key\": \"allery_and_immunology\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"Family physicians provide front-line health care that is accessible, high quality, comprehensive and continuous over time for people of all ages, life stages, backgrounds and conditions. They care for individuals and for entire families, from birth through the end of life, including a broad range of preventive care; healthy lifestyle counseling; mental health care; care of acute illnesses; management of chronic diseases, including patients with multi-morbidity. When needed, they also provide referral and coordination of care with other specialists.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Family Medicine\",\n                \"title\": \"general practice doctor\",\n                \"key\": \"family_medicine\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"An otolaryngologist–head and neck surgeon provides medical and/or surgical therapy for the prevention of diseases, allergies, neoplasms, deformities, disorders, and/or injuries of the ears, nose, sinuses, throat, respiratory, and upper alimentary systems, face, jaws, and the other head and neck systems. Head and neck oncology, facial, plastic, and reconstructive surgery and the treatment of disorders of hearing and voice are fundamental areas of expertise.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Otolaryngology–Head and Neck Surgery\",\n                \"title\": \"otolaryngologist-head and neck surgeon (ENT specialist)\",\n                \"key\": \"otolaryngology\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"A dermatologist is a physician with training and expertise in the diagnosis and medical/surgical management of diseases of the skin, hair and nails, and mucous membranes.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Dermatology\",\n                \"title\": \"Dermatologist\",\n                \"key\": \"dermatology\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"An obstetrician/gynecologist focuses on the health of women before, during, and after childbearing years, diagnosing and treating conditions of the reproductive system and associated disorders.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Obstetrics and Gynecology\",\n                \"title\": \"obstetrician-gynecologist\",\n                \"key\": \"obstetrics_and_gynecology\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"Ophthalmology is a specialty focused on the medical and surgical care of the eyes. Ophthalmologists are the only physicians medically trained to manage the complete range of eye and vision care. They can prescribe glasses and contact lenses, dispense medications, diagnose and treat eye conditions and diseases, and perform surgeries.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Ophthalmology\",\n                \"title\": \"ophthalmologist\",\n                \"key\": \"ophthalmology\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"An internist is a personal physician who provides long-term, comprehensive care in the office and in the hospital, managing both common and complex illnesses of adolescents, adults, and the elderly. Internists are trained in the diagnosis and treatment of cancer, infections, and diseases affecting the heart, blood, kidneys, joints, and the digestive, respiratory, and vascular systems. They are also trained in the essentials of primary care internal medicine, which incorporates an understanding of disease prevention, wellness, substance abuse, mental health, and effective treatment of common problems of the eyes, ears, skin, nervous system, and reproductive organs.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Internal Medicine\",\n                \"title\": \"internist\",\n                \"key\": \"internal_medicine\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"A pathologist deals with the causes and nature of disease and contributes to diagnosis, prognosis, and treatment through knowledge gained by the laboratory application of the biologic, chemical, and physical sciences. This specialist uses information gathered from the microscopic examination of tissue specimens, cells and body fluids, and from clinical laboratory tests on body fluids and secretions for the diagnosis, exclusion, and monitoring of disease.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Pathology\",\n                \"title\": \"pathologist\",\n                \"key\": \"pathology\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"Pediatricians practice the specialty of medical science concerned with the physical, emotional, and social health of children from birth to young adulthood. Pediatric care encompasses a broad spectrum of health services ranging from preventive health care to the diagnosis and treatment of acute and chronic diseases. Pediatricians understand the many factors that affect the growth and development of children. They understand that children are not simply small adults. Children change rapidly, and they must be approached with an appreciation for their stage of physical and mental development.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Pediatrics\",\n                \"title\": \"pediatrician\",\n                \"key\": \"pediatrics\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"A psychiatrist specializes in the evaluation and treatment of mental, addictive, and emotional disorders such as schizophrenia and other psychotic disorders, mood disorders, anxiety disorders, substancerelated disorders, sexual and gender-identity disorders, and adjustment disorders.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Psychiatry\",\n                \"title\": \"psychiatrist\",\n                \"key\": \"psychiatry\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"A radiologist is a physician who uses imaging methodologies to diagnose and manage patients and provide therapeutic options. Physicians practicing in the field of Radiology specialize in Diagnostic Radiology, Interventional Radiology, or Radiation Oncology. They may certify in a number of subspecialties. The board also certifies in Medical Physics and issues specific certificates within each discipline\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Radiology\",\n                \"title\": \"Radiologist\",\n                \"key\": \"radiology\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"A Surgeon uses operative measures to treat disease, injuries, and disorders or repair tissues or organs. Surgeons are responsible for the diagnosis and preoperative, operative, and postoperative management\\n                of patient care. During the course of the operation, the surgeon makes important decisions about the patient’s health, safety, and welfare, working in cooperation with other members of the surgical team. To acknowledge the specialized activities and interests of individuals wanting to become surgeons, the American Board of Surgery offers\\n                primary certification in Surgery and Vascular Surgery. A variety of subspecialty certificates are offered.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Surgery\",\n                \"title\": \"Surgeon\",\n                \"key\": \"surgery\",\n                \"__v\": 0\n            },\n            {\n                \"description\": \"A urologist, also known as a genitourinary surgeon, focuses on diagnosing and treating disorders of the urinary tracts of males and females, and on the reproductive system of males. This specialist manages non-surgical problems such as urinary tract infections and benign prostatic hyperplasia, as well as surgical problems such as the surgical management of cancers, the correction of congenital abnormalities, and correcting stress incontinence.\",\n                \"children\": [],\n                \"status\": \"ACTIVE\",\n                \"name\": \"Urology\",\n                \"title\": \"Urologist\",\n                \"key\": \"Urology\",\n                \"__v\": 0\n            }\n        ]\n    },\n    \"message\": \"Select a specialty\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/medical-api.js",
    "groupTitle": "Medical_API",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint fetches the notifications for a user</p>",
    "type": "get",
    "url": "/notification",
    "title": "get notifications",
    "name": "GetNotification",
    "group": "Notifications",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"notifications\": []\n    },\n    \"message\": \"Notifications\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/notifications.js",
    "groupTitle": "Notifications",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint sends otp to an email for verification</p>",
    "type": "post",
    "url": "/otp/email",
    "title": "send otp to email",
    "name": "PostOTP_Email",
    "group": "OTP",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user's email to verify</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    message: 'OTP is sent to your Email',\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/otp.js",
    "groupTitle": "OTP",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint request for an otp to verify a user during login</p>",
    "type": "post",
    "url": "/otp/login",
    "title": "request login otp",
    "name": "PostOTP_Login",
    "group": "OTP",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user's phone number to verify</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"An OTP has been sent to your Phone Number\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/otp.js",
    "groupTitle": "OTP",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint request for an otp to verify a user during registration</p>",
    "type": "post",
    "url": "/otp/registration",
    "title": "request login otp",
    "name": "PostOTP_Registration",
    "group": "OTP",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user's phone number to verify</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"An OTP has been sent to your Phone Number\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/otp.js",
    "groupTitle": "OTP",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint  for an otp to verify a user during login</p>",
    "type": "post",
    "url": "/otp/verify",
    "title": "verify otp",
    "name": "PostOTP_Verify",
    "group": "OTP",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [],
            "optional": true,
            "field": "phone",
            "description": "<p>user's phone number to verify</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'example@email.com'"
            ],
            "optional": true,
            "field": "email",
            "description": "<p>user's email to verify</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'123456'"
            ],
            "optional": false,
            "field": "otp",
            "description": "<p>otp to verify</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"OTP is valid\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/otp.js",
    "groupTitle": "OTP",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint fetches all a healhcare provider's referrals</p>",
    "type": "get",
    "url": "/referrals",
    "title": "get Referrals",
    "name": "GetReferrals",
    "group": "Patient-Referrals",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"referrals\": [\n            {\n                \"status\": \"ACCEPTED\",\n                \"_id\": \"604591cf991d2f7480cf0ac4\",\n                \"patient\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"street\": \"Plot 533 Zone A Ext. Apo Resettlement.\",\n                    \"city\": \"\",\n                    \"state\": \"Abuja Federal Capital Territory\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 148,\n                    \"country\": \"Nigeria\",\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"healthcare_provider\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"firstName\": \"rafael\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                    \"city\": \"Abuja\",\n                    \"state\": \"FCT\",\n                    \"isOnline\": true,\n                    \"_id\": \"507f191e810c19729de860ea\",\n                    \"email\": \"ozichukwuezike@rocketmail.com\",\n                    \"phone\": \"+2348109950208\",\n                    \"username\": \"hyper_doctor\",\n                    \"country\": \"NGN\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1991-12-19T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-10T03:22:00.439Z\",\n                    \"__v\": 3,\n                    \"id\": \"507f191e810c19729de860ea\"\n                },\n                \"referrer\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                    \"city\": \"Abuja\",\n                    \"state\": \"FCT\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"country\": \"NGN\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 41,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"appointment\": {\n                    \"_id\": \"604591cf991d2f7480cf0ac2\",\n                    \"appointee\": \"507f191e810c19729de860ea\",\n                    \"scheduler\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"timeslots\": {\n                        \"isActive\": true,\n                        \"isOverdue\": false,\n                        \"isClosed\": false,\n                        \"status\": \"ACCEPTED\",\n                        \"_id\": \"604591cf991d2f7480cf0ac1\",\n                        \"slot_time\": \"13\",\n                        \"slot_date\": \"2021-03-08T00:00:00.000Z\",\n                        \"createdAt\": \"2021-03-08T02:54:07.778Z\",\n                        \"updatedAt\": \"2021-03-08T02:59:36.584Z\",\n                        \"__v\": 0\n                    },\n                    \"createdAt\": \"2021-03-08T02:54:07.783Z\",\n                    \"updatedAt\": \"2021-03-08T02:54:07.783Z\",\n                    \"__v\": 0\n                },\n                \"__v\": 0\n            },\n            {\n                \"status\": \"ACCEPTED\",\n                \"_id\": \"604594591c95fe8050fce6e0\",\n                \"patient\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"street\": \"Plot 533 Zone A Ext. Apo Resettlement.\",\n                    \"city\": \"\",\n                    \"state\": \"Abuja Federal Capital Territory\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 148,\n                    \"country\": \"Nigeria\",\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"healthcare_provider\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"firstName\": \"rafael\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                    \"city\": \"Abuja\",\n                    \"state\": \"FCT\",\n                    \"isOnline\": true,\n                    \"_id\": \"507f191e810c19729de860ea\",\n                    \"email\": \"ozichukwuezike@rocketmail.com\",\n                    \"phone\": \"+2348109950208\",\n                    \"username\": \"hyper_doctor\",\n                    \"country\": \"NGN\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1991-12-19T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-10T03:22:00.439Z\",\n                    \"__v\": 3,\n                    \"id\": \"507f191e810c19729de860ea\"\n                },\n                \"referrer\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                    \"city\": \"Abuja\",\n                    \"state\": \"FCT\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"country\": \"NGN\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 41,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"appointment\": {\n                    \"_id\": \"604594591c95fe8050fce6de\",\n                    \"appointee\": \"507f191e810c19729de860ea\",\n                    \"scheduler\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"timeslots\": {\n                        \"isActive\": true,\n                        \"isOverdue\": false,\n                        \"isClosed\": false,\n                        \"status\": \"ACCEPTED\",\n                        \"_id\": \"604594591c95fe8050fce6dd\",\n                        \"slot_time\": \"14\",\n                        \"slot_date\": \"2021-03-08T00:00:00.000Z\",\n                        \"createdAt\": \"2021-03-08T03:04:57.940Z\",\n                        \"updatedAt\": \"2021-03-08T03:06:57.143Z\",\n                        \"__v\": 0\n                    },\n                    \"createdAt\": \"2021-03-08T03:04:57.945Z\",\n                    \"updatedAt\": \"2021-03-08T03:04:57.945Z\",\n                    \"__v\": 0\n                },\n                \"__v\": 0\n            }\n        ]\n    },\n    \"message\": \"All Referrals\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/patient-records.js",
    "groupTitle": "Patient-Referrals",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint enables healtcare_provider to referre Paotient to another healthcare_provider</p>",
    "type": "post",
    "url": "/referrals",
    "title": "create patient referral",
    "name": "PostReferrals",
    "group": "Patient-Referrals",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "appointee",
            "description": "<p>this is the database id for the user who will receive the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>this is the database id for the user who  is been referred.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "scheduler",
            "description": "<p>this is the database id for the user who is scheduling the appointment/referral.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'0, 1, 3, n=23'"
            ],
            "optional": false,
            "field": "slot_time",
            "description": "<p>this is the selected time during the day for the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'2021-01-15'"
            ],
            "optional": false,
            "field": "slot_date",
            "description": "<p>this is the selected date for the appointment. <code>slot_date cannot be a time in the past</code></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'i am sick'"
            ],
            "optional": true,
            "field": "topic",
            "description": "<p>this is the title for the appointment.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'it started a week age'"
            ],
            "optional": true,
            "field": "note",
            "description": "<p>this is the description for the appointment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"referral\": {\n            \"status\": \"PENDING\",\n            \"_id\": \"6045a8ae32624b7f4c822d8b\",\n            \"patient\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"healthcare_provider\": \"507f191e810c19729de860ea\",\n            \"referrer\": \"5ffdb2ef344694663015ec4e\",\n            \"appointment\": \"6045a8ae32624b7f4c822d89\",\n            \"createdAt\": \"2021-03-08T04:31:42.740Z\",\n            \"updatedAt\": \"2021-03-08T04:31:42.740Z\",\n            \"__v\": 0\n        }\n    },\n    \"message\": \"Created New Referral!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/patient-records.js",
    "groupTitle": "Patient-Referrals",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows healthcare_provider to reschedule a patient referral</p>",
    "type": "put",
    "url": "/referrals/:id/reschedule",
    "title": "reschedule a patient referral",
    "name": "PutReferrals-Referral",
    "group": "Patient-Referrals",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "allowedValues": [
              "'dkjahhdbaskdbsak123255anc'"
            ],
            "optional": false,
            "field": "id",
            "description": "<p>this is the referral to be re</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'0, 1, 3, n=23'"
            ],
            "optional": false,
            "field": "slot_time",
            "description": "<p>this is the selected time during the day for the reschuled appointment/referral.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'2021-01-15'"
            ],
            "optional": false,
            "field": "slot_date",
            "description": "<p>this is the selected date for the appointment/referral. <code>slot_date cannot be a time in the past</code></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'i am sick'"
            ],
            "optional": true,
            "field": "topic",
            "description": "<p>this is the title for the appointment./referral</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'it started a week age'"
            ],
            "optional": true,
            "field": "note",
            "description": "<p>this is the description for the appointment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Rescheduled Patient Referral!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/patient-records.js",
    "groupTitle": "Patient-Referrals",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows healthcare_provider accept Patient Referral</p>",
    "type": "put",
    "url": "/referrals/:id/accept",
    "title": "accept patient referral",
    "name": "PutReferrals_Accept",
    "group": "Patient-Referrals",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "allowedValues": [
              "'dkjahhdbaskdbsak123255anc'"
            ],
            "optional": false,
            "field": "id",
            "description": "<p>this is the referral to be accepted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 422,\n    \"response\": false,\n    \"data\": null,\n    \"message\": Accepted Patient Referral!,\n    \"errMessage\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/patient-records.js",
    "groupTitle": "Patient-Referrals",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows healthcare_provider reject Patient Referral</p>",
    "type": "put",
    "url": "/referrals/:id/reject",
    "title": "accept patient referral",
    "name": "PutReferrals_Reject",
    "group": "Patient-Referrals",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "allowedValues": [
              "'dkjahhdbaskdbsak123255anc'"
            ],
            "optional": false,
            "field": "id",
            "description": "<p>this is the referral to be accepted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 422,\n    \"response\": false,\n    \"data\": null,\n    \"message\": Rejected Patient Referral!,\n    \"errMessage\": \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/patient-records.js",
    "groupTitle": "Patient-Referrals",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoints fetches all the physicians</p>",
    "type": "get",
    "url": "/physician",
    "title": "fetch all physician",
    "name": "GetAllPhysician_Lists",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"physicians\": [\n            {\n                \"specialty\": {\n                    \"title\": \"Surgeon\",\n                    \"field\": \"surgery\"\n                },\n                \"title\": \"Surgeon\",\n                \"user_id\": \"5ffdb2ef344694663015ec4e\",\n                \"__v\": 0,\n                \"subspecialty\": [\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac4f\",\n                        \"title\": \"Complex General Surgical Oncology\",\n                        \"field\": \"surgery\"\n                    },\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac50\",\n                        \"title\": \"Pediatric Surgery\",\n                        \"field\": \"surgery\"\n                    }\n                ],\n                \"credentials\": [\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac4e\",\n                        \"key\": \"MD\",\n                        \"type\": \"Doctor of Medicine\",\n                        \"title\": \"Doctor of Medicine\"\n                    }\n                ],\n                \"started_practice\": \"2020-05-29T00:00:00.000Z\",\n                \"documents\": [],\n                \"user_info\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"lastName\": \"ezike\",\n                    \"ip\": \"0.0.0.0\",\n                    \"device\": \"null\",\n                    \"inviteCode\": \"bobby_5fd579\",\n                    \"invitedBy\": null,\n                    \"role\": \"PHYSICIAN\",\n                    \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                    \"city\": \"Abuja\",\n                    \"state\": \"FCT\",\n                    \"isActive\": true,\n                    \"deviceToken\": null,\n                    \"isOnline\": true,\n                    \"unit_system\": \"METRIC\",\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"createdAt\": \"2020-12-15T03:22:00.083Z\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2347059648295\",\n                    \"firstName\": \"bobby\",\n                    \"username\": \"super_doctor\",\n                    \"country\": \"NGN\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"updatedAt\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 8,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"ratings_info\": [],\n                \"feedback\": [],\n                \"practice_info\": null,\n                \"id\": null\n            }\n        ]\n    },\n    \"message\": \"Available Physicians\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint fetches potential Patients for a Physician</p>",
    "type": "get",
    "url": "/physician/search/type/patients",
    "title": "fetch non-patient users",
    "name": "GetNonPatient",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "'John'"
            ],
            "optional": true,
            "field": "patient",
            "description": "<p>search for patient using keywords <code>email, firstName, LastName, phone</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"users\": [\n            {\n                \"profilePic\": \"\",\n                \"qrcode\": \"\",\n                \"firstName\": \"valentine\",\n                \"lastName\": \"tester\",\n                \"role\": \"USER\",\n                \"street\": \"Plot 533 Zone A Ext. Apo Resettlement.\",\n                \"city\": \"\",\n                \"state\": \"Abuja Federal Capital Territory\",\n                \"isActive\": true,\n                \"isOnline\": true,\n                \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                \"email\": \"ozichukwuezike@gmail.com\",\n                \"gender\": \"MALE\",\n                \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                \"phone\": \"+2347059648295\",\n                \"username\": \"ozichukwuezike_314bdf\",\n                \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                \"__v\": 144,\n                \"country\": \"Nigeria\",\n                \"physician\": null,\n                \"additional_info\": {\n                    \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"blood_type\": \"B+\",\n                    \"__v\": 0\n                },\n                \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n            }\n        ]\n    },\n    \"message\": \"Active \",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint fetches a Physician Added Patients</p>",
    "type": "get",
    "url": "/physician/patients",
    "title": "fetch physician's patient",
    "name": "GetPatient",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "'John'"
            ],
            "optional": true,
            "field": "search",
            "description": "<p>search for patient using keywords <code>email, firstName, LastName, phone</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"users\": [\n            {\n                \"profilePic\": \"\",\n                \"qrcode\": \"\",\n                \"firstName\": \"valentine\",\n                \"lastName\": \"tester\",\n                \"role\": \"USER\",\n                \"street\": \"Plot 533 Zone A Ext. Apo Resettlement.\",\n                \"city\": \"\",\n                \"state\": \"Abuja Federal Capital Territory\",\n                \"isActive\": true,\n                \"isOnline\": true,\n                \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                \"email\": \"ozichukwuezike@gmail.com\",\n                \"gender\": \"MALE\",\n                \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                \"phone\": \"+2347059648295\",\n                \"username\": \"ozichukwuezike_314bdf\",\n                \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                \"__v\": 144,\n                \"country\": \"Nigeria\",\n                \"physician\": null,\n                \"additional_info\": {\n                    \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"blood_type\": \"B+\",\n                    \"__v\": 0\n                },\n                \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n            }\n        ]\n    },\n    \"message\": \"Active \",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint allows a Physician to fetch Patient Medical Records</p>",
    "type": "GET",
    "url": "/physician/fetch/patient/:id",
    "title": "fetch patient medical history",
    "name": "GetPatient_Records",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "allowedValues": [
              "'24224425455gdfgdafa2355536'"
            ],
            "optional": false,
            "field": "id",
            "description": "<p>User Id to fetch Patient Medical Records</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"patientRecord\": {\n            \"profilePic\": \"\",\n            \"qrcode\": \"\",\n            \"firstName\": \"valentine\",\n            \"lastName\": \"tester\",\n            \"role\": \"USER\",\n            \"street\": \"Plot 533 Zone A Ext. Apo Resettlement.\",\n            \"city\": \"\",\n            \"state\": \"Abuja Federal Capital Territory\",\n            \"isActive\": true,\n            \"isOnline\": true,\n            \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"email\": \"ozichukwuezike@gmail.com\",\n            \"gender\": \"MALE\",\n            \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n            \"phone\": \"+2347059648295\",\n            \"username\": \"ozichukwuezike_314bdf\",\n            \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n            \"__v\": 149,\n            \"country\": \"Nigeria\",\n            \"physician\": null,\n            \"additional_info\": {\n                \"primary_specialist\": {\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"user_id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"emergency_contact\": {\n                    \"name\": \"Ezike, Ozichukwu Valentine\",\n                    \"phone\": \"+2347038363702\"\n                },\n                \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                \"blood_type\": \"B+\",\n                \"_id\": \"601232b76461cf730470869b\",\n                \"__v\": 0\n            },\n            \"id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"vitals\": {\n                \"temperature\": {\n                    \"value\": 37,\n                    \"unit\": \"Celsius °C\",\n                    \"number_of_records\": 3,\n                    \"latest_record\": \"2021-01-02T14:29:15.182Z\"\n                },\n                \"blood_pressure\": {\n                    \"systolic\": 151,\n                    \"diastolic\": 110,\n                    \"unit\": \"mmHg\",\n                    \"number_of_records\": 10,\n                    \"latest_record\": \"2021-01-02T14:06:00.750Z\",\n                    \"history\": {\n                        \"low\": 1,\n                        \"normal\": 3,\n                        \"high\": 6,\n                        \"average\": 135\n                    }\n                },\n                \"height\": {\n                    \"value\": 186,\n                    \"unit\": \"cm\",\n                    \"number_of_records\": 3,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"weight\": {\n                    \"value\": 116,\n                    \"unit\": \"kg\",\n                    \"number_of_records\": 3,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"bmi\": {\n                    \"value\": 33,\n                    \"unit\": \"kg/m2\",\n                    \"number_of_records\": 3,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"oxygen_saturation\": {\n                    \"value\": 93,\n                    \"unit\": \"%\",\n                    \"number_of_records\": 2,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"respiration_rate\": {\n                    \"value\": 22,\n                    \"unit\": \"breaths/min\",\n                    \"number_of_records\": 2,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                },\n                \"heart_rate\": {\n                    \"value\": 70,\n                    \"unit\": \"bpm\",\n                    \"number_of_records\": 2,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\",\n                    \"history\": {\n                        \"low\": 0,\n                        \"normal\": 2,\n                        \"high\": 0,\n                        \"average\": 75\n                    }\n                },\n                \"bsa\": {\n                    \"value\": 1.94,\n                    \"unit\": \"m2\",\n                    \"number_of_records\": 2,\n                    \"latest_record\": \"2020-12-21T19:49:51.956Z\"\n                }\n            }\n        }\n    },\n    \"message\": \"Found your Patient!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint fetches a user's (i.e physician) physicians fields</p>",
    "type": "get",
    "url": "physician/:id",
    "title": "fetch specific physician",
    "name": "GetPhyisican",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>specify physician to fetch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"physician\": {\n                \"specialty\": {\n                    \"title\": \"Surgeon\",\n                    \"field\": \"surgery\"\n                },\n                \"title\": \"Surgeon\",\n                \"user_id\": \"5ffdb2ef344694663015ec4e\",\n                \"__v\": 0,\n                \"subspecialty\": [\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac4f\",\n                        \"title\": \"Complex General Surgical Oncology\",\n                        \"field\": \"surgery\"\n                    },\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac50\",\n                        \"title\": \"Pediatric Surgery\",\n                        \"field\": \"surgery\"\n                    }\n                ],\n                \"credentials\": [\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac4e\",\n                        \"key\": \"MD\",\n                        \"type\": \"Doctor of Medicine\",\n                        \"title\": \"Doctor of Medicine\"\n                    }\n                ],\n                \"started_practice\": \"2020-05-29T00:00:00.000Z\",\n                \"documents\": [],\n                \"user_info\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"lastName\": \"ezike\",\n                    \"ip\": \"0.0.0.0\",\n                    \"device\": \"null\",\n                    \"inviteCode\": \"bobby_5fd579\",\n                    \"invitedBy\": null,\n                    \"role\": \"PHYSICIAN\",\n                    \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                    \"city\": \"Abuja\",\n                    \"state\": \"FCT\",\n                    \"isActive\": true,\n                    \"deviceToken\": null,\n                    \"isOnline\": true,\n                    \"unit_system\": \"METRIC\",\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"createdAt\": \"2020-12-15T03:22:00.083Z\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2347059648295\",\n                    \"firstName\": \"bobby\",\n                    \"username\": \"super_doctor\",\n                    \"country\": \"NGN\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"updatedAt\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 8,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"ratings_info\": [],\n                \"feedback\": [],\n                \"practice_info\": null,\n                \"id\": null\n            }\n    },\n    \"message\": \"Found Physician!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint fetches all physicians based on their given specialty</p>",
    "type": "get",
    "url": "/physician/specialty/:specialty",
    "title": "fetch physicians by specialty",
    "name": "GetPhysiciansBySpecialty",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "specialty",
            "description": "<p>medical specialty to fetch physicians by</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"physicians\": [\n            {\n                \"specialty\": {\n                    \"title\": \"Surgeon\",\n                    \"field\": \"surgery\"\n                },\n                \"title\": \"Surgeon\",\n                \"user_id\": \"5ffdb2ef344694663015ec4e\",\n                \"__v\": 0,\n                \"subspecialty\": [\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac4f\",\n                        \"title\": \"Complex General Surgical Oncology\",\n                        \"field\": \"surgery\"\n                    },\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac50\",\n                        \"title\": \"Pediatric Surgery\",\n                        \"field\": \"surgery\"\n                    }\n                ],\n                \"credentials\": [\n                    {\n                        \"_id\": \"6009dd341304a028ec7cac4e\",\n                        \"key\": \"MD\",\n                        \"type\": \"Doctor of Medicine\",\n                        \"title\": \"Doctor of Medicine\"\n                    }\n                ],\n                \"started_practice\": \"2020-05-29T00:00:00.000Z\",\n                \"documents\": [],\n                \"user_info\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"lastName\": \"ezike\",\n                    \"ip\": \"0.0.0.0\",\n                    \"device\": \"null\",\n                    \"inviteCode\": \"bobby_5fd579\",\n                    \"invitedBy\": null,\n                    \"role\": \"PHYSICIAN\",\n                    \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                    \"city\": \"Abuja\",\n                    \"state\": \"FCT\",\n                    \"isActive\": true,\n                    \"deviceToken\": null,\n                    \"isOnline\": true,\n                    \"unit_system\": \"METRIC\",\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"createdAt\": \"2020-12-15T03:22:00.083Z\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2347059648295\",\n                    \"firstName\": \"bobby\",\n                    \"username\": \"super_doctor\",\n                    \"country\": \"NGN\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"updatedAt\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 8,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"ratings_info\": [],\n                \"feedback\": [],\n                \"practice_info\": null,\n                \"id\": null\n            }\n        ]\n    },\n    \"message\": \"Available Physicians\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint allows a Physician to Add User as a Patient</p>",
    "type": "Post",
    "url": "/physician/add/patient/:id",
    "title": "create patient record",
    "name": "PostPatient",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "allowedValues": [
              "'24224425455gdfgdafa2355536'"
            ],
            "optional": false,
            "field": "id",
            "description": "<p>User Id to create Patient Record</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"patientRecord\": {\n            \"status\": \"NON-ACCESS\",\n            \"medical_record_access\": false,\n            \"healthcare_provider\": {\n                \"profilePic\": \"\",\n                \"qrcode\": \"\",\n                \"firstName\": \"bobby\",\n                \"lastName\": \"ezike\",\n                \"role\": \"PHYSICIAN\",\n                \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                \"city\": \"Abuja\",\n                \"state\": \"FCT\",\n                \"isOnline\": true,\n                \"_id\": \"5ffdb2ef344694663015ec4e\",\n                \"email\": \"ozichukwubobbyezike@gmail.com\",\n                \"phone\": \"+2348109950207\",\n                \"username\": \"super_doctor\",\n                \"country\": \"NGN\",\n                \"gender\": \"MALE\",\n                \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                \"__v\": 29,\n                \"id\": \"5ffdb2ef344694663015ec4e\"\n            },\n            \"__v\": 0,\n            \"patient\": {\n                \"profilePic\": \"\",\n                \"qrcode\": \"\",\n                \"firstName\": \"valentine\",\n                \"lastName\": \"tester\",\n                \"role\": \"USER\",\n                \"street\": \"Plot 533 Zone A Ext. Apo Resettlement.\",\n                \"city\": \"\",\n                \"state\": \"Abuja Federal Capital Territory\",\n                \"isOnline\": true,\n                \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                \"email\": \"ozichukwuezike@gmail.com\",\n                \"gender\": \"MALE\",\n                \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                \"phone\": \"+2347059648295\",\n                \"username\": \"ozichukwuezike_314bdf\",\n                \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                \"__v\": 144,\n                \"country\": \"Nigeria\",\n                \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n            }\n        }\n    },\n    \"message\": \"User Added as a patient\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint creates or updates a user's (i.e physician) physicians fields</p>",
    "type": "post",
    "url": "physician/:id",
    "title": "create or update physician fields",
    "name": "PostUpdatePhyisican_field",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>specify physician to update</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"physician\": {\n            \"specialty\": {\n                \"title\": \"Surgeon\",\n                \"field\": \"surgery\"\n            },\n            \"title\": \"Surgeon\",\n            \"_id\": \"6009c2f89565b1ebaf4365fc\",\n            \"user_id\": \"5ffdb2ef344694663015ec4e\",\n            \"__v\": 0,\n            \"createdAt\": \"2021-01-21T18:07:52.215Z\",\n            \"updatedAt\": \"2021-01-21T22:58:40.658Z\",\n            \"subspecialty\": [\n                {\n                    \"_id\": \"600a072011fa3867904a0ff2\",\n                    \"title\": \"Complex General Surgical Oncology\",\n                    \"field\": \"surgery\"\n                },\n                {\n                    \"_id\": \"600a072011fa3867904a0ff3\",\n                    \"title\": \"Pediatric Surgery\",\n                    \"field\": \"surgery\"\n                }\n            ],\n            \"credentials\": [\n                {\n                    \"_id\": \"600a072011fa3867904a0ff1\",\n                    \"key\": \"MD\",\n                    \"type\": \"Doctor of Medicine\",\n                    \"title\": \"Doctor of Medicine\"\n                }\n            ],\n            \"started_practice\": \"2020-05-29T00:00:00.000Z\",\n            \"documents\": [],\n            \"id\": \"6009c2f89565b1ebaf4365fc\"\n        }\n    },\n    \"message\": \"Physician Updated!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>this endpoint allows a Physician to request access to a Patient's Medical Records</p>",
    "type": "PUT",
    "url": "/physician/request/patient/:id",
    "title": "request access to patient medical history",
    "name": "PutRequstPatient_Records",
    "group": "Physician",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "allowedValues": [
              "'24224425455gdfgdafa2355536'"
            ],
            "optional": false,
            "field": "id",
            "description": "<p>User Id to fetch Patient Medical Records</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Request for Access to Medical Record/History Sent\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/physicians.js",
    "groupTitle": "Physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Url_Parameter_//_*_@apiGroup_Query_Parameter_//_*_@apiGroup_Body_Parameter_//",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/docs/auth.js",
    "groupTitle": "Url_Parameter_//_*_@apiGroup_Query_Parameter_//_*_@apiGroup_Body_Parameter_//",
    "name": ""
  },
  {
    "group": "Url_Parameter_//_*_@apiGroup_Query_Parameter_//_*_@apiGroup_Body_Parameter_//",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "Url_Parameter_//_*_@apiGroup_Query_Parameter_//_*_@apiGroup_Body_Parameter_//",
    "name": ""
  },
  {
    "description": "<p>This endpoint allows a user the ability to fetch physicians</p>",
    "type": "get",
    "url": "/user/fetch/physician",
    "title": "fetch physician",
    "name": "GetInvitePhysician",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "physician",
            "description": "<p>this query param takes either the firstName , lastName, email or the phone number of the physician</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"physicians\": [\n            {\n                \"profilePic\": \"\",\n                \"qrcode\": \"\",\n                \"firstName\": \"valentine\",\n                \"lastName\": \"tester\",\n                \"ip\": \"0.0.0.0\",\n                \"device\": \"null\",\n                \"inviteCode\": null,\n                \"invitedBy\": null,\n                \"role\": \"USER\",\n                \"street\": \"Plot 533 Zone A Ext. Apo Resettlement.\",\n                \"city\": \"\",\n                \"state\": \"FCT.\",\n                \"isActive\": true,\n                \"deviceToken\": null,\n                \"isOnline\": true,\n                \"unit_system\": \"METRIC\",\n                \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                \"email\": \"ozichukwuezike@gmail.com\",\n                \"gender\": \"MALE\",\n                \"createdAt\": \"2020-12-15T03:22:00.083Z\",\n                \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                \"phone\": \"+2347059648295\",\n                \"username\": \"ozichukwuezike_314bdf\",\n                \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                \"updatedAt\": \"2020-12-15T18:04:11.987Z\",\n                \"__v\": 133,\n                \"country\": \"Nigeria.\",\n                \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n            }\n        ]\n    },\n    \"message\": \"Available Physicians\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows a user(Patient)  to view all requested access for their Medical Hsitory</p>",
    "type": "get",
    "url": "/user/requested/medicalrecords",
    "title": "fetch User's Patient Records",
    "name": "GetUserPatientRecords",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"requests\": [\n            {\n                \"status\": \"ACCEPTED\",\n                \"medical_record_access\": true,\n                \"healthcare_provider\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"firstName\": \"bobby\",\n                    \"lastName\": \"ezike\",\n                    \"role\": \"PHYSICIAN\",\n                    \"street\": \"Plot 553 zone A Ext. Apo Reseetlement Garki\",\n                    \"city\": \"Abuja\",\n                    \"state\": \"FCT\",\n                    \"isOnline\": true,\n                    \"_id\": \"5ffdb2ef344694663015ec4e\",\n                    \"email\": \"ozichukwubobbyezike@gmail.com\",\n                    \"phone\": \"+2348109950207\",\n                    \"username\": \"super_doctor\",\n                    \"country\": \"NGN\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1980-11-17T19:31:14.000Z\",\n                    \"lastSeen\": \"2021-01-11T03:22:00.439Z\",\n                    \"__v\": 47,\n                    \"id\": \"5ffdb2ef344694663015ec4e\"\n                },\n                \"patient\": {\n                    \"profilePic\": \"\",\n                    \"qrcode\": \"\",\n                    \"firstName\": \"valentine\",\n                    \"lastName\": \"tester\",\n                    \"role\": \"USER\",\n                    \"street\": \"Plot 533 Zone A Ext. Apo Resettlement.\",\n                    \"city\": \"\",\n                    \"state\": \"Abuja Federal Capital Territory\",\n                    \"isOnline\": true,\n                    \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n                    \"email\": \"ozichukwuezike@gmail.com\",\n                    \"gender\": \"MALE\",\n                    \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n                    \"phone\": \"+2347059648295\",\n                    \"username\": \"ozichukwuezike_314bdf\",\n                    \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n                    \"__v\": 149,\n                    \"country\": \"Nigeria\",\n                    \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n                },\n                \"__v\": 0\n            }\n        ]\n    },\n    \"message\": \"All Requests for Medical Records/History\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint is for a user to change their email <code>an OTP will be sent to your new email</code></p>",
    "type": "post",
    "url": "/user/email/update",
    "title": "change user email",
    "name": "PostEmail_Update",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'example@email.com'"
            ],
            "optional": false,
            "field": "email",
            "description": "<p>user's current email</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'example@email.com'"
            ],
            "optional": false,
            "field": "newEmail",
            "description": "<p>user's new  email</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"my password\""
            ],
            "optional": false,
            "field": "password",
            "description": "<p>user's current password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"OTP is sent to your new Email!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"status\": 400,\n    \"response\": false,\n    \"data\": null,\n    \"message\": null,\n    \"errMessage\": \"Email Don't match\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>This endpoint is for a user to verify the change to their email <code>an OTP will be sent to your new email</code></p>",
    "type": "post",
    "url": "/user/email/verify",
    "title": "verify user email",
    "name": "PostEmail_Verify",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'example@email.com'"
            ],
            "optional": false,
            "field": "email",
            "description": "<p>user's current email</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'example@email.com'"
            ],
            "optional": false,
            "field": "newEmail",
            "description": "<p>user's new  email</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'123456'"
            ],
            "optional": false,
            "field": "otp",
            "description": "<p>user otp from email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"OTP is valid, Email Updated!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"status\": 400,\n    \"response\": false,\n    \"data\": null,\n    \"message\": null,\n    \"errMessage\": \"Email Don't match\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>This endpoint a user makes a request to the server to reset there password using the email option and an email with the reset link is sent to their provided email.</p>",
    "version": "0.1.0",
    "type": "post",
    "url": "/user/password/forgotpassword",
    "title": "forgotpassword via email",
    "name": "PostForgotPassword_Email",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Provide User Registered Email..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Kindly check your email for further instructions\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint a user makes a request to the server to reset there password using the phone number option and an otp is sent to their provided phone.</p>",
    "version": "0.1.0",
    "type": "post",
    "url": "/user/password/forgotpassword",
    "title": "forgotpassword via otp",
    "name": "PostForgotPassword_OTP",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Provide User Registered Phone Number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"OTP has been sent to registered phone number\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint resets a users password</p>",
    "version": "0.1.0",
    "type": "post",
    "url": "/user/password/reset",
    "title": "reset password",
    "name": "PostForgotPassword_Reset_Password",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their reset token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their reset token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Password Updated\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Auth Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint handles the the temp token from the email and generates a reset token for the user to reset their password.</p>",
    "version": "0.1.0",
    "type": "get",
    "url": "/user/password/verify/email",
    "title": "forgotpassword verify email token",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token from the url query params to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token from the  url query params to the x-auth header.</p>"
          }
        ]
      }
    },
    "name": "PostForgotPassword_Verify_Email_Token",
    "success": {
      "fields": {
        "Response Header": [
          {
            "group": "Response Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>returns a reset token to the user in the <code>x-auth</code> response header token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 200,\n    \"response\": true,\n    \"data\": {token: 'some nice token'},\n    \"message\": \"You can reset your password\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint handles verifying the temp token  gotten for verifying the user otp to allow the user to reset their password.</p>",
    "version": "0.1.0",
    "type": "get",
    "url": "/user/password/verify/otp",
    "title": "forgotpassword verify otp token",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "name": "PostForgotPassword_Verify_OTP_Token",
    "success": {
      "fields": {
        "Response Header": [
          {
            "group": "Response Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>returns a reset token to the user in the <code>x-auth</code> response header token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 200,\n    \"response\": true,\n    \"data\": {token: 'some nice token'},\n    \"message\": \"You can reset your password\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint handles verifying the otp that the user received.</p>",
    "version": "0.1.0",
    "type": "post",
    "url": "/user/password/check/otp",
    "title": "forgotpassword verify otp",
    "name": "PostForgotPassword_Verify_Phone_OTP",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>this is the otp the user received via sms/text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>this the users register phone number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header": [
          {
            "group": "Response Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>returns a temp token to the user in the <code>x-auth</code> response header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 200,\n    \"response\": true,\n    \"data\": {token: 'some nice token'},\n    \"message\": \"OTP is valid\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint sends an innvite to a physician not on the platform</p>",
    "type": "post",
    "url": "/user/invite/physician",
    "title": "invite physician",
    "name": "PostInvutePhysician",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n     email: 'ozichukwubobbyezike@gmail.com'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Invite sent to marydalphnendidu@gmail.com\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows a user to set up a passcode</p>",
    "type": "post",
    "url": "/user/passcode",
    "title": "set up user passcode",
    "name": "PostPasscode",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "passcode",
            "description": "<p>user's new 4 digit passcode</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 406,\n    \"response\": false,\n    \"data\": null,\n    \"message\": null,\n    \"errMessage\": \"Passcode Added!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 406 Not Acceptable\n    {\n    \"status\": 406,\n    \"response\": false,\n    \"data\": null,\n    \"message\": null,\n    \"errMessage\": \"Action not allowed!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>This endpoint is for a user to change their passcode</p>",
    "type": "put",
    "url": "/user/passcode/change",
    "title": "change user passcode",
    "name": "PostPasscode_Change",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "passcode",
            "description": "<p>user's current 4 digit passcode</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "newPasscode",
            "description": "<p>user's new  4 digit passcode</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Passcode Updated!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"status\": 400,\n    \"response\": false,\n    \"data\": null,\n    \"message\": null,\n    \"errMessage\": \"Passcode Don't match\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>This endpoint verifies user's passcode</p>",
    "type": "post",
    "url": "/user/passcode/verify",
    "title": "verify user's passcode",
    "name": "PostPasscode_Verify",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "passcode",
            "description": "<p>user's current 4 digit passcode</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ4ZmE5YjVjNWUzMDNmOTFhYTI1NTYiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjExNTUyMjk2LCJleHAiOjE2MTE1NTU4OTZ9.3YeEOQru_pjP1uPUdkgd4s4E36cYM83JNOgnQ_uEUMw\",\n        \"_id\": \"5fd8fa9b5c5e303f91aa2556\"\n    },\n    \"message\": \"Found User: ozichukwuezike@gmail.com\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 406 Not Acceptable\n{\n    \"status\": 406,\n    \"response\": false,\n    \"data\": null,\n    \"message\": null,\n    \"errMessage\": \"Action not allowed!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>This endpoint is for a user to change their password</p>",
    "type": "put",
    "url": "/user/password/change",
    "title": "change user password",
    "name": "PostPassword_Change",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's current password</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>user's new  password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Password Updated!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"status\": 400,\n    \"response\": false,\n    \"data\": null,\n    \"message\": null,\n    \"errMessage\": \"Passcode Don't match\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>This endpoint is for a user to change their Phone number <code>an OTP will be sent to your new Phone Number</code></p>",
    "type": "post",
    "url": "/user/phone/update",
    "title": "change user phone",
    "name": "PostPhone_Update",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'+2347097451947'"
            ],
            "optional": false,
            "field": "phone",
            "description": "<p>user's new Phone Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"An OTP has been sent to your Phone Number\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"status\": 400,\n    \"response\": false,\n    \"data\": null,\n    \"message\": null,\n    \"errMessage\": \"User with new Phone Number already exists!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>This endpoint allows a user(Patient) to accept requested access to their Medical Hsitory</p>",
    "type": "put",
    "url": "/user/requested/medicalrecords/:id/accept",
    "title": "accept Physician Access Patient Records",
    "name": "PutAcceptRequest-UserPatientRecords",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ],
        "Param": [
          {
            "group": "Param",
            "type": "String",
            "allowedValues": [
              "'221343142453534gegd'"
            ],
            "optional": false,
            "field": "id",
            "description": "<p>Patient Record Id to grant Access</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Access granted to Medical Records/History\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint is for a user to verfy and change their Phone number <code>pass OTP sent to New Phone</code></p>",
    "type": "put",
    "url": "/user/phone/verify",
    "title": "verify user phone",
    "name": "PutPhone_verify",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'+2347097451947'"
            ],
            "optional": false,
            "field": "phone",
            "description": "<p>user's new Phone Number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "'123456'"
            ],
            "optional": false,
            "field": "otp",
            "description": "<p>user's otp from new Phone Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"OTP is valid, Phone Number Updated!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint allows a user(Patient) to reject requested access to their Medical Hsitory</p>",
    "type": "put",
    "url": "/user/requested/medicalrecords/:id/reject",
    "title": "reject Physician Access Patient Records",
    "name": "PutRejectRequest-UserPatientRecords",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ],
        "Param": [
          {
            "group": "Param",
            "type": "String",
            "allowedValues": [
              "'221343142453534gegd'"
            ],
            "optional": false,
            "field": "id",
            "description": "<p>Patient Record Id to deny Access</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": null,\n    \"message\": \"Access Rejected for Medical Records/History\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint is allows a user to update his personal addition info</p>",
    "type": "put",
    "url": "/user/update/additionalinfo",
    "title": "update user addtionalinfo",
    "name": "PutUserAdditionalInfo",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "   {\n\"blood_type\": \"B+\",  //OPTIONAL\n       \"primary_specialist\": {\n              \"firstName\": \"bobby\", //OPTIONAL\n              \"lastName\":\"ezike\",  //OPTIONAL\n              \"user_id\":\"5ffdb2ef344694663015ec4e\" //OPTIONAL\n       },\n       \"emergency_contact\":{\n              \"name\": \"Ezike, Ozichukwu Valentine\", //OPTIONAL\n              \"phone\": \"+2347038363702\" //OPTIONAL\n       }\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"user\": {\n            \"primary_specialist\": {\n                \"firstName\": \"bobby\",\n                \"lastName\": \"ezike\",\n                \"user_id\": \"5ffdb2ef344694663015ec4e\"\n            },\n            \"emergency_contact\": {\n                \"name\": \"Ezike, Ozichukwu Valentine\",\n                \"phone\": \"+2347038363702\"\n            },\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"blood_type\": \"B+\",\n            \"_id\": \"601232b76461cf730470869b\",\n            \"__v\": 0,\n            \"createdAt\": \"2021-01-28T03:42:45.196Z\",\n            \"updatedAt\": \"2021-01-28T04:10:52.051Z\"\n        }\n    },\n    \"message\": \"User Info Updated!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint is allows a user to update his personal info</p>",
    "type": "put",
    "url": "/user/update",
    "title": "update user info",
    "name": "PutUserInfo",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  firstName: 'user', //OPTIONAL\n  lastName: 'tester', //OPTIONAL\n  gender:'MALE', //OPTIONAL\n  street: 'somewhere nice, //OPTIONAL\n  state: 'Horizon', //OPTIONAL \n  country: 'Nigeria', //OPTIONAL\n  dateOfBirth: '2021-09-10', //OPTIONAL\n  unit_sysytem: 'METRIC' //OPTIONAL\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"user\": {\n            \"profilePic\": \"\",\n            \"qrcode\": \"\",\n            \"lastName\": \"tester\",\n            \"ip\": \"0.0.0.0\",\n            \"device\": \"null\",\n            \"inviteCode\": null,\n            \"invitedBy\": null,\n            \"role\": \"USER\",\n            \"street\": \"Plot 533 Zone A Ext. Apo Resettlement\",\n            \"city\": \"\",\n            \"state\": \"FCT\",\n            \"isActive\": true,\n            \"deviceToken\": null,\n            \"isOnline\": true,\n            \"unit_system\": \"METRIC\",\n            \"_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"firstName\": \"valentine\",\n            \"email\": \"ozichukwuezike@gmail.com\",\n            \"gender\": \"MALE\",\n            \"dateOfBirth\": \"1992-11-17T19:31:14.000Z\",\n            \"phone\": \"+2347059648295\",\n            \"username\": \"ozichukwuezike_314bdf\",\n            \"lastSeen\": \"2020-12-15T18:04:11.987Z\",\n            \"__v\": 124,\n            \"country\": \"Nigeria\",\n            \"id\": \"5fd8fa9b5c5e303f91aa2556\"\n        }\n    },\n    \"message\": \"User Info Updated!\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenError",
            "description": "<p>an Error has occurred</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errMessage\": \"Your Session has expired!, Please send a new reset request!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User not found!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"User is Not Authorised!\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint fetches all the vitals fields, their associated units and norminal values.</p>",
    "version": "0.1.0",
    "type": "get",
    "url": "/vitals",
    "title": "fetch vital fields",
    "name": "GetVitals_Fields",
    "group": "Vitals",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": [\n        {\n            \"norminal_values\": {\n                \"low\": 0,\n                \"normal\": 0,\n                \"high\": 0\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"Oxygen saturation is the fraction of oxygen-saturated hemoglobin relative to total hemoglobin (unsaturated + saturated) in the blood.\",\n            \"_id\": \"5fe1195a0586a25bf010b108\",\n            \"title\": \"Oxygen Saturation\",\n            \"key\": \"oxygen_saturation\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b109\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"%\"\n                }\n            ],\n            \"__v\": 0\n        },\n        {\n            \"norminal_values\": {\n                \"low\": 0,\n                \"normal\": 0,\n                \"high\": 0\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"Normal human body-temperature is the typical temperature range found in humans. The normal human body temperature range is typically stated as 36.5–37.5 °C.\",\n            \"_id\": \"5fe1195a0586a25bf010b10a\",\n            \"title\": \"Temperature\",\n            \"key\": \"temperature\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b10b\",\n                    \"system\": \"imperial\",\n                    \"symbol\": \"Fahrenheit °F\"\n                },\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b10c\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"Celsius °C\"\n                }\n            ],\n            \"__v\": 0\n        },\n        {\n            \"norminal_values\": {\n                \"low\": 0,\n                \"normal\": 0,\n                \"high\": 0\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"The respiratory rate is the rate at which breathing occurs. This is usually measured in breaths per minute and is set and controlled by the respiratory centre.\",\n            \"_id\": \"5fe1195a0586a25bf010b10d\",\n            \"title\": \"Respiration Rate\",\n            \"key\": \"respiration_rate\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b10e\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"breaths/min\"\n                }\n            ],\n            \"__v\": 0\n        },\n        {\n            \"norminal_values\": {\n                \"low\": 0,\n                \"normal\": 0,\n                \"high\": 0\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"Human body weight refers to a person's mass or weight. Body weight is measured in kilograms, a measure of mass, throughout the world, although in some countries such as the United States it is measured in pounds, or as in the United Kingdom, stones and pounds.\",\n            \"_id\": \"5fe1195a0586a25bf010b10f\",\n            \"title\": \"Weight\",\n            \"key\": \"weight\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b110\",\n                    \"system\": \"imperial\",\n                    \"symbol\": \"lbs\"\n                },\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b111\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"kg\"\n                }\n            ],\n            \"__v\": 0\n        },\n        {\n            \"norminal_values\": {\n                \"low\": 0,\n                \"normal\": 0,\n                \"high\": 0\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"Human height or stature is the distance from the bottom of the feet to the top of the head in a human body, standing erect. It is measured using a stadiometer, usually in centimetres when using the metric system, or feet and inches when using the imperial system.\",\n            \"_id\": \"5fe1195a0586a25bf010b112\",\n            \"title\": \"Height\",\n            \"key\": \"height\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b113\",\n                    \"system\": \"imperial\",\n                    \"symbol\": \"ft\"\n                },\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b114\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"cm\"\n                }\n            ],\n            \"__v\": 0\n        },\n        {\n            \"norminal_values\": {\n                \"low\": 0,\n                \"normal\": 0,\n                \"high\": 0\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"Body mass index is a value derived from the mass and height of a person.\",\n            \"_id\": \"5fe1195a0586a25bf010b115\",\n            \"title\": \"Body Mass Index (BMI)\",\n            \"key\": \"bmi\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b116\",\n                    \"system\": \"imperial\",\n                    \"symbol\": \"ib/in2\"\n                },\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b117\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"kg/m2\"\n                }\n            ],\n            \"__v\": 0\n        },\n        {\n            \"norminal_values\": {\n                \"low\": 0,\n                \"normal\": 0,\n                \"high\": 0\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"n physiology and medicine, the body surface area is the measured or calculated surface area of a human body.\",\n            \"_id\": \"5fe1195a0586a25bf010b118\",\n            \"title\": \"Body Surface Area\",\n            \"key\": \"bsa\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b119\",\n                    \"system\": \"imperial\",\n                    \"symbol\": \"ft2\"\n                },\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b11a\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"m2\"\n                }\n            ],\n            \"__v\": 0\n        },\n        {\n            \"norminal_values\": {\n                \"low\": 110,\n                \"normal\": 120,\n                \"high\": 140\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"the pressure of the blood in the circulatory system, often measured for diagnosis since it is closely related to the force and rate of the heartbeat and the diameter and elasticity of the arterial walls\",\n            \"_id\": \"5fe1195a0586a25bf010b103\",\n            \"title\": \"Blood Pressure\",\n            \"key\": \"blood_pressure\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b104\",\n                    \"system\": \"imperial\",\n                    \"symbol\": \"mmHg\"\n                },\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b105\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"kPa\"\n                }\n            ],\n            \"__v\": 0\n        },\n        {\n            \"norminal_values\": {\n                \"low\": 40,\n                \"normal\": 60,\n                \"high\": 100\n            },\n            \"result_source\": {\n                \"patient\": \"patient generated\",\n                \"physician\": \"physician generated\",\n                \"lab\": \"lab generated\",\n                \"clinic\": \"clinic generated\"\n            },\n            \"description\": \"Heart rate is the speed of the heartbeat measured by the number of contractions (beats) of the heart per minute (bpm)\",\n            \"_id\": \"5fe1195a0586a25bf010b106\",\n            \"title\": \"Heart Rate\",\n            \"key\": \"heart_rate\",\n            \"unit\": [\n                {\n                    \"_id\": \"5fe1195a0586a25bf010b107\",\n                    \"system\": \"metric\",\n                    \"symbol\": \"bpm\"\n                }\n            ],\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"All Vitals Options\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/vitals.js",
    "groupTitle": "Vitals",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Vital",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"Something went wrong\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint create a single vital or multiple vitals entries for a user.</p>",
    "version": "0.1.0",
    "type": "post",
    "url": "/vitals",
    "title": "add user vitals",
    "name": "Post_Vitals",
    "group": "Vitals",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Add New Vitals:",
          "content": "     {\n    \"comment\":\"The BP is high\",\n    \"vitals\":[\n        {\n            \"vitals_key\":\"blood_pressure\",\n            \"vitals_default_value\": 140,\n            \"vitals_secondary_value\": 95,\n            \"unit\": \"mmHg\",\n            \"description\": \"this is just test for BP\",\n            \"title\": \"Blood Pressure\"\n        },\n        {\n            \"vitals_key\":\"height\",\n            \"vitals_default_value\": 186,\n            \"vitals_secondary_value\": null,\n            \"unit\": \"cm\",\n            \"description\": \"this is just test for Height\",\n            \"title\": \"Height\"\n        },\n        {\n            \"vitals_key\":\"weight\",\n            \"vitals_default_value\": 116,\n            \"vitals_secondary_value\": null,\n            \"unit\": \"kg\",\n            \"description\": \"this is just test for Height\",\n            \"title\": \"Weight\"\n        },\n        {\n            \"vitals_key\":\"bmi\",\n            \"vitals_default_value\": 33,\n            \"vitals_secondary_value\": null,\n            \"unit\": \"kg/m2\",\n            \"description\": \"this is just test for BMI\",\n            \"title\": \"Body Mass Index (BMI)\"\n        },\n        {\n            \"vitals_key\":\"oxygen_saturation\",\n            \"vitals_default_value\": 93,\n            \"vitals_secondary_value\": null,\n            \"unit\": \"%\",\n            \"description\": \"this is just test for Oxygen Saturation\",\n            \"title\": \"Oxygen Saturation\"\n        },\n        {\n            \"vitals_key\":\"temperature\",\n            \"vitals_default_value\": 38,\n            \"vitals_secondary_value\": null,\n            \"unit\": \"Celsius °C\",\n            \"description\": \"this is just test for temperature\",\n            \"title\": \"Temperature\"\n        },\n        {\n            \"vitals_key\":\"respiration_rate\",\n            \"vitals_default_value\": 22,\n            \"vitals_secondary_value\": null,\n            \"unit\": \"breaths/min\",\n            \"description\": \"this is just test for Respiration Rate\",\n            \"title\": \"Respiration Rate\"\n        },\n        {\n            \"vitals_key\":\"heart_rate\",\n            \"vitals_default_value\": 70,\n            \"vitals_secondary_value\": null,\n            \"unit\": \"bpm\",\n            \"description\": \"this is just test for Heart Rate\",\n            \"title\": \"Heart Rate\"\n        },\n        {\n            \"vitals_key\":\"bsa\",\n            \"vitals_default_value\": 1.94,\n            \"vitals_secondary_value\": null,\n            \"unit\": \"m2\",\n            \"description\": \"this is just test for Body Surface Area\",\n            \"title\": \"Body Surface Area\"\n        }\n    ],\n    \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n    \"date_entered\": \"Sat Nov 21 2020 21:00:14 GMT+0100 (West Africa Standard Time)\",\n    \"timestamp\": \"12:30 AM\",\n    \"source\": \"patient generated\",\n    \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n    \"created_by\":\"Ozichukwu Ezike\"\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": {\n        \"source\": \"patient generated\",\n        \"comment\": \"The BP is high\",\n        \"_id\": \"5fe0fc5fbff5c1538c91f9cc\",\n        \"date_entered\": \"2020-11-21T20:00:14.000Z\",\n        \"timestamp\": \"12:30 AM\",\n        \"vitals\": [\n            {\n                \"vitals_secondary_value\": \"95\",\n                \"_id\": \"5fe0fc5fbff5c1538c91f9cd\",\n                \"vitals_key\": \"blood_pressure\",\n                \"vitals_default_value\": \"140\",\n                \"unit\": \"mmHg\",\n                \"description\": \"this is just test for BP\",\n                \"title\": \"Blood Pressure\"\n            },\n            {\n                \"vitals_secondary_value\": null,\n                \"_id\": \"5fe0fc5fbff5c1538c91f9ce\",\n                \"vitals_key\": \"height\",\n                \"vitals_default_value\": \"186\",\n                \"unit\": \"cm\",\n                \"description\": \"this is just test for Height\",\n                \"title\": \"Height\"\n            },\n            {\n                \"vitals_secondary_value\": null,\n                \"_id\": \"5fe0fc5fbff5c1538c91f9cf\",\n                \"vitals_key\": \"weight\",\n                \"vitals_default_value\": \"116\",\n                \"unit\": \"kg\",\n                \"description\": \"this is just test for Height\",\n                \"title\": \"Weight\"\n            },\n            {\n                \"vitals_secondary_value\": null,\n                \"_id\": \"5fe0fc5fbff5c1538c91f9d0\",\n                \"vitals_key\": \"bmi\",\n                \"vitals_default_value\": \"33\",\n                \"unit\": \"kg/m2\",\n                \"description\": \"this is just test for BMI\",\n                \"title\": \"Body Mass Index (BMI)\"\n            },\n            {\n                \"vitals_secondary_value\": null,\n                \"_id\": \"5fe0fc5fbff5c1538c91f9d1\",\n                \"vitals_key\": \"oxygen_saturation\",\n                \"vitals_default_value\": \"93\",\n                \"unit\": \"%\",\n                \"description\": \"this is just test for Oxygen Saturation\",\n                \"title\": \"Oxygen Saturation\"\n            },\n            {\n                \"vitals_secondary_value\": null,\n                \"_id\": \"5fe0fc5fbff5c1538c91f9d2\",\n                \"vitals_key\": \"temperature\",\n                \"vitals_default_value\": \"38\",\n                \"unit\": \"Celsius °C\",\n                \"description\": \"this is just test for temperature\",\n                \"title\": \"Temperature\"\n            },\n            {\n                \"vitals_secondary_value\": null,\n                \"_id\": \"5fe0fc5fbff5c1538c91f9d3\",\n                \"vitals_key\": \"respiration_rate\",\n                \"vitals_default_value\": \"22\",\n                \"unit\": \"breaths/min\",\n                \"description\": \"this is just test for Respiration Rate\",\n                \"title\": \"Respiration Rate\"\n            },\n            {\n                \"vitals_secondary_value\": null,\n                \"_id\": \"5fe0fc5fbff5c1538c91f9d4\",\n                \"vitals_key\": \"heart_rate\",\n                \"vitals_default_value\": \"70\",\n                \"unit\": \"bpm\",\n                \"description\": \"this is just test for Heart Rate\",\n                \"title\": \"Heart Rate\"\n            },\n            {\n                \"vitals_secondary_value\": null,\n                \"_id\": \"5fe0fc5fbff5c1538c91f9d5\",\n                \"vitals_key\": \"bsa\",\n                \"vitals_default_value\": \"1.94\",\n                \"unit\": \"m2\",\n                \"description\": \"this is just test for Body Surface Area\",\n                \"title\": \"Body Surface Area\"\n            }\n        ],\n        \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n        \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n        \"created_by\": \"Ozichukwu Ezike\",\n        \"createdAt\": \"2020-12-21T19:49:51.956Z\",\n        \"updatedAt\": \"2020-12-21T19:49:51.956Z\",\n        \"__v\": 0\n    },\n    \"message\": \"New Vital Created\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/vitals.js",
    "groupTitle": "Vitals",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Vital",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errMessage\": \"Something went wrong\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint fetches vital passed as param by a user.</p>",
    "version": "0.1.0",
    "type": "get",
    "url": "/vitalshistory/:vital",
    "title": "fetch specific vital history",
    "name": "Get_Selected_Vitals_History",
    "group": "Vitals_History",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vital",
            "description": "<p>this is the vital key passed as param to get the vitals history for. [i.e <code>blood_pressure</code>]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": [\n        {\n            \"_id\": \"5fe0fc5fbff5c1538c91f9cc\",\n            \"source\": \"patient generated\",\n            \"comment\": \"The BP is high\",\n            \"date_entered\": \"2020-11-21T20:00:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"created_by\": \"Ozichukwu Ezike\",\n            \"createdAt\": \"2020-12-21T19:49:51.956Z\",\n            \"updatedAt\": \"2020-12-21T19:49:51.956Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"95\",\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9cd\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"140\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        },\n        {\n            \"_id\": \"5fe01d8abe6ff34a38344145\",\n            \"source\": \"patient generated\",\n            \"comment\": \"The BP is high\",\n            \"date_entered\": \"2020-11-20T20:00:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"created_by\": \"Ozichukwu Ezike\",\n            \"createdAt\": \"2020-12-21T03:59:06.567Z\",\n            \"updatedAt\": \"2020-12-21T03:59:06.567Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"90\",\n                    \"_id\": \"5fe01d8abe6ff34a38344146\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"135\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        },\n        {\n            \"_id\": \"5fdc0d9a782b45295c4e74fc\",\n            \"comment\": \"The BP is high\",\n            \"date_entered\": \"2020-11-19T20:00:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"createdAt\": \"2020-12-18T02:02:02.801Z\",\n            \"updatedAt\": \"2020-12-18T02:02:02.801Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"83\",\n                    \"_id\": \"5fdc0d9a782b45295c4e74fd\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"125\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        },\n        {\n            \"_id\": \"5fdbed7be6021a678cad7720\",\n            \"comment\": \"The BP is high\",\n            \"date_entered\": \"2020-11-18T20:50:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"createdAt\": \"2020-12-17T23:44:59.621Z\",\n            \"updatedAt\": \"2020-12-17T23:44:59.621Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"85\",\n                    \"_id\": \"5fdbed7be6021a678cad7721\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"129\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        },\n        {\n            \"_id\": \"5fdbed54e6021a678cad771e\",\n            \"comment\": \"The BP is high\",\n            \"date_entered\": \"2020-11-18T20:50:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"createdAt\": \"2020-12-17T23:44:20.291Z\",\n            \"updatedAt\": \"2020-12-17T23:44:20.291Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"90\",\n                    \"_id\": \"5fdbed54e6021a678cad771f\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"130\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        },\n        {\n            \"_id\": \"5fdbed3ce6021a678cad771c\",\n            \"comment\": \"The BP is high\",\n            \"date_entered\": \"2020-11-18T19:50:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"createdAt\": \"2020-12-17T23:43:56.073Z\",\n            \"updatedAt\": \"2020-12-17T23:43:56.073Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"110\",\n                    \"_id\": \"5fdbed3ce6021a678cad771d\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"190\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        },\n        {\n            \"_id\": \"5fdbed02e6021a678cad771a\",\n            \"comment\": \"The BP is high\",\n            \"date_entered\": \"2020-11-18T19:31:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"createdAt\": \"2020-12-17T23:42:58.314Z\",\n            \"updatedAt\": \"2020-12-17T23:42:58.314Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"70\",\n                    \"_id\": \"5fdbed02e6021a678cad771b\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"90\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        },\n        {\n            \"_id\": \"5fdbe1a8b9abcb503491ef88\",\n            \"comment\": \"The BP is high\",\n            \"date_entered\": \"2020-11-18T22:31:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"createdAt\": \"2020-12-17T22:54:32.280Z\",\n            \"updatedAt\": \"2020-12-17T22:54:32.280Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"80\",\n                    \"_id\": \"5fdbe1a8b9abcb503491ef89\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"140\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for fat in the body\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        },\n        {\n            \"_id\": \"5fd94d8be62b3a3ed02b94bc\",\n            \"comment\": \"The BP is normal\",\n            \"date_entered\": \"2020-11-17T19:31:14.000Z\",\n            \"timestamp\": \"12:00 AM\",\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"createdAt\": \"2020-12-15T23:58:03.151Z\",\n            \"updatedAt\": \"2020-12-15T23:58:03.151Z\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"80\",\n                    \"_id\": \"5fd94d8be62b3a3ed02b94bd\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"120\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"test\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ]\n        }\n    ],\n    \"message\": \"All User Vitals History\",\n    \"errMessage\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/vitalshistory.js",
    "groupTitle": "Vitals_History",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VitalHistory",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n{\n  \"errMessage\": \"Something went wrong\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>This endpoint fetches all the vitals entered by a user.</p>",
    "version": "0.1.0",
    "type": "get",
    "url": "/vitalshistory",
    "title": "fetch all user vitals history",
    "name": "Get_Vitals_History",
    "group": "Vitals_History",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer token</code> user should add their user token to the authorization header.</p>"
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": true,
            "field": "x-auth",
            "description": "<p><code>token</code> user should add their user token to the x-auth header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": true,\n    \"data\": [\n        {\n            \"source\": \"patient generated\",\n            \"comment\": \"The BP is high\",\n            \"_id\": \"5fe0fc5fbff5c1538c91f9cc\",\n            \"date_entered\": \"2020-11-21T20:00:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"95\",\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9cd\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"140\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9ce\",\n                    \"vitals_key\": \"height\",\n                    \"vitals_default_value\": \"186\",\n                    \"unit\": \"cm\",\n                    \"description\": \"this is just test for Height\",\n                    \"title\": \"Height\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9cf\",\n                    \"vitals_key\": \"weight\",\n                    \"vitals_default_value\": \"116\",\n                    \"unit\": \"kg\",\n                    \"description\": \"this is just test for Height\",\n                    \"title\": \"Weight\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9d0\",\n                    \"vitals_key\": \"bmi\",\n                    \"vitals_default_value\": \"33\",\n                    \"unit\": \"kg/m2\",\n                    \"description\": \"this is just test for BMI\",\n                    \"title\": \"Body Mass Index (BMI)\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9d1\",\n                    \"vitals_key\": \"oxygen_saturation\",\n                    \"vitals_default_value\": \"93\",\n                    \"unit\": \"%\",\n                    \"description\": \"this is just test for Oxygen Saturation\",\n                    \"title\": \"Oxygen Saturation\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9d2\",\n                    \"vitals_key\": \"temperature\",\n                    \"vitals_default_value\": \"38\",\n                    \"unit\": \"Celsius °C\",\n                    \"description\": \"this is just test for temperature\",\n                    \"title\": \"Temperature\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9d3\",\n                    \"vitals_key\": \"respiration_rate\",\n                    \"vitals_default_value\": \"22\",\n                    \"unit\": \"breaths/min\",\n                    \"description\": \"this is just test for Respiration Rate\",\n                    \"title\": \"Respiration Rate\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9d4\",\n                    \"vitals_key\": \"heart_rate\",\n                    \"vitals_default_value\": \"70\",\n                    \"unit\": \"bpm\",\n                    \"description\": \"this is just test for Heart Rate\",\n                    \"title\": \"Heart Rate\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe0fc5fbff5c1538c91f9d5\",\n                    \"vitals_key\": \"bsa\",\n                    \"vitals_default_value\": \"1.94\",\n                    \"unit\": \"m2\",\n                    \"description\": \"this is just test for Body Surface Area\",\n                    \"title\": \"Body Surface Area\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"created_by\": \"Ozichukwu Ezike\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"patient generated\",\n            \"comment\": \"The BP is high\",\n            \"_id\": \"5fe01d8abe6ff34a38344145\",\n            \"date_entered\": \"2020-11-20T20:00:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"90\",\n                    \"_id\": \"5fe01d8abe6ff34a38344146\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"135\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe01d8abe6ff34a38344147\",\n                    \"vitals_key\": \"height\",\n                    \"vitals_default_value\": \"185\",\n                    \"unit\": \"cm\",\n                    \"description\": \"this is just test for Height\",\n                    \"title\": \"Height\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe01d8abe6ff34a38344148\",\n                    \"vitals_key\": \"weight\",\n                    \"vitals_default_value\": \"115\",\n                    \"unit\": \"kg\",\n                    \"description\": \"this is just test for Height\",\n                    \"title\": \"Weight\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe01d8abe6ff34a38344149\",\n                    \"vitals_key\": \"bmi\",\n                    \"vitals_default_value\": \"32\",\n                    \"unit\": \"kg/m2\",\n                    \"description\": \"this is just test for BMI\",\n                    \"title\": \"Body Mass Index (BMI)\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe01d8abe6ff34a3834414a\",\n                    \"vitals_key\": \"oxygen_saturation\",\n                    \"vitals_default_value\": \"94\",\n                    \"unit\": \"%\",\n                    \"description\": \"this is just test for Oxygen Saturation\",\n                    \"title\": \"Oxygen Saturation\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe01d8abe6ff34a3834414b\",\n                    \"vitals_key\": \"temperature\",\n                    \"vitals_default_value\": \"37.5\",\n                    \"unit\": \"Celsius °C\",\n                    \"description\": \"this is just test for temperature\",\n                    \"title\": \"Temperature\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe01d8abe6ff34a3834414c\",\n                    \"vitals_key\": \"respiration_rate\",\n                    \"vitals_default_value\": \"24\",\n                    \"unit\": \"breaths/min\",\n                    \"description\": \"this is just test for Respiration Rate\",\n                    \"title\": \"Respiration Rate\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe01d8abe6ff34a3834414d\",\n                    \"vitals_key\": \"heart_rate\",\n                    \"vitals_default_value\": \"80\",\n                    \"unit\": \"bpm\",\n                    \"description\": \"this is just test for Heart Rate\",\n                    \"title\": \"Heart Rate\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fe01d8abe6ff34a3834414e\",\n                    \"vitals_key\": \"bsa\",\n                    \"vitals_default_value\": \"1.92\",\n                    \"unit\": \"m2\",\n                    \"description\": \"this is just test for Body Surface Area\",\n                    \"title\": \"Body Surface Area\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"observer_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"created_by\": \"Ozichukwu Ezike\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"PATIENT\",\n            \"comment\": \"The BP is high\",\n            \"_id\": \"5fdc0d9a782b45295c4e74fc\",\n            \"date_entered\": \"2020-11-19T20:00:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"83\",\n                    \"_id\": \"5fdc0d9a782b45295c4e74fd\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"125\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fdc0d9a782b45295c4e74fe\",\n                    \"vitals_key\": \"height\",\n                    \"vitals_default_value\": \"180\",\n                    \"unit\": \"cm\",\n                    \"description\": \"this is just test for Height\",\n                    \"title\": \"Height\"\n                },\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fdc0d9a782b45295c4e74ff\",\n                    \"vitals_key\": \"weight\",\n                    \"vitals_default_value\": \"110\",\n                    \"unit\": \"kg\",\n                    \"description\": \"this is just test for Height\",\n                    \"title\": \"Weight\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"PATIENT\",\n            \"comment\": \"The BP is high\",\n            \"_id\": \"5fdbed7be6021a678cad7720\",\n            \"date_entered\": \"2020-11-18T20:50:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"85\",\n                    \"_id\": \"5fdbed7be6021a678cad7721\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"129\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"PATIENT\",\n            \"comment\": \"The BP is high\",\n            \"_id\": \"5fdbed54e6021a678cad771e\",\n            \"date_entered\": \"2020-11-18T20:50:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"90\",\n                    \"_id\": \"5fdbed54e6021a678cad771f\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"130\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"PATIENT\",\n            \"comment\": \"The BP is high\",\n            \"_id\": \"5fdbed3ce6021a678cad771c\",\n            \"date_entered\": \"2020-11-18T19:50:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"110\",\n                    \"_id\": \"5fdbed3ce6021a678cad771d\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"190\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"PATIENT\",\n            \"comment\": \"The BP is high\",\n            \"_id\": \"5fdbed02e6021a678cad771a\",\n            \"date_entered\": \"2020-11-18T19:31:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"70\",\n                    \"_id\": \"5fdbed02e6021a678cad771b\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"90\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for BP\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"PATIENT\",\n            \"comment\": \"The BP is high\",\n            \"_id\": \"5fdbe1a8b9abcb503491ef88\",\n            \"date_entered\": \"2020-11-18T22:31:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"80\",\n                    \"_id\": \"5fdbe1a8b9abcb503491ef89\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"140\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"this is just test for fat in the body\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"PATIENT\",\n            \"comment\": \"THe BMI is high\",\n            \"_id\": \"5fdb723d6ac66f1ca4acfb10\",\n            \"date_entered\": \"2020-11-18T21:31:14.000Z\",\n            \"timestamp\": \"12:30 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": null,\n                    \"_id\": \"5fdb723d6ac66f1ca4acfb11\",\n                    \"vitals_key\": \"bmi\",\n                    \"vitals_default_value\": \"30\",\n                    \"unit\": \"kg/m2\",\n                    \"description\": \"this is just test for fat in the body\",\n                    \"title\": \"Body Mass Index (BMI)\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"__v\": 0\n        },\n        {\n            \"source\": \"PATIENT\",\n            \"comment\": \"The BP is normal\",\n            \"_id\": \"5fd94d8be62b3a3ed02b94bc\",\n            \"date_entered\": \"2020-11-17T19:31:14.000Z\",\n            \"timestamp\": \"12:00 AM\",\n            \"vitals\": [\n                {\n                    \"vitals_secondary_value\": \"80\",\n                    \"_id\": \"5fd94d8be62b3a3ed02b94bd\",\n                    \"vitals_key\": \"blood_pressure\",\n                    \"vitals_default_value\": \"120\",\n                    \"unit\": \"mmHg\",\n                    \"description\": \"test\",\n                    \"title\": \"Blood Pressure\"\n                }\n            ],\n            \"user_id\": \"5fd8fa9b5c5e303f91aa2556\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"All User Vitals History\",\n    \"errMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/docs/vitalshistory.js",
    "groupTitle": "Vitals_History",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VitalHistory",
            "description": "<p>Error an Error has occurred</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n{\n  \"errMessage\": \"Something went wrong\",\n  \"message\": null,\n  \"status\": 500,\n  \"data\": null,\n  \"response\": true\n}",
          "type": "json"
        }
      ]
    }
  }
] });
