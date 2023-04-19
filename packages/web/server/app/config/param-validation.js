import { Joi } from 'express-validation'
import { endOfMonth, startOfDay, startOfMonth } from 'date-fns'
import Globals from 'helpers/globals'

export default {
    createUser: {
        body: Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation')
                .required(),
            password: Joi.string()
                .regex(/[a-zA-Z0-9]{3,30}/)
                .required(),
            dateOfBirth: Joi.date()
                .min('1-1-1900')
                .max(`01-01-${new Date().getFullYear() - 18}`)
                .required(),
            gender: Joi.string().valid('MALE', 'FEMALE', 'OTHER').required(),
            role: Joi.string().valid('USER').optional(),
        }),
    },
    // PUT /api/v1/user/update
    updateUser: {
        body: Joi.object({
            dateOfBirth: Joi.date()
                .min('1-1-1900')
                .max(`01-01-${new Date().getFullYear() - 18}`)
                .optional(),
            gender: Joi.string().valid('MALE', 'FEMALE', 'OTHER').optional(),
            unit_system: Joi.string().valid('IMPERIAL', 'METRIC').optional(),
            firstName: Joi.string().trim().invalid('').optional(),
            lastName: Joi.string().trim().invalid('').optional(),
            country: Joi.string().trim().invalid('').optional(),
            state: Joi.string().trim().invalid('').optional(),
            street: Joi.string().trim().invalid('').optional(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },

    // PUT /api/v1/user/update/additioninfo
    updateUserAdditionalInfo: {
        body: Joi.object({
            blood_type: Joi.string()
                .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
                .optional(),
            primary_specialist: Joi.object({
                firstName: Joi.string().trim().invalid('').required(),
                lastName: Joi.string().trim().invalid('').required(),
                user_id: Joi.string().trim().invalid('').required(),
            }).optional(),
            emergency_contact: Joi.object({
                name: Joi.string().trim().invalid('').required(),
                phone: Joi.string()
                    .trim()
                    .invalid('')
                    .max(25)
                    .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation')
                    .required(),
            }).optional(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/user/requested/medicalrecords
    fetchMedicalRecordRequests: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // PUT /api/v1/user/requested/medicalrecords/:id/accept
    acceptMedicalRecordRequest: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string(),
        }),
    },

    // PUT /api/v1/user/requested/medicalrecords/:id/reject
    rejectMedicalRecordRequest: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string(),
        }),
    },

    // POST /api/v1/user/email/update
    updateEmail: {
        body: Joi.object({
            email: Joi.string().trim().email().required(),
            newEmail: Joi.string().trim().email().required(),
            password: Joi.string()
                .regex(/[a-zA-Z0-9]{3,30}/)
                .required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // PUT /api/v1/user/email/verify
    verifyEmail: {
        body: Joi.object({
            email: Joi.string().trim().email().required(),
            newEmail: Joi.string().trim().email().required(),
            otp: Joi.string().min(6).max(6).required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/user/phone/update
    updatePhoneNumber: {
        body: Joi.object({
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation')
                .required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // PUT /api/v1/user/phone/verify
    verifyPhoneNumber: {
        body: Joi.object({
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation')
                .required(),
            otp: Joi.string().min(6).max(6).required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },

    deleteUser: {
        body: {
            password: Joi.string().min(6).max(15).required(),
        },
        headers: {
            x_auth: Joi.string().min(6).max(15).required(),
        },
    },
    // GET /api/v1/auth/me
    authenticateMe: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/auth/login
    login: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string()
                .regex(/[a-zA-Z0-9]{3,30}/)
                .required(),
        }),
    },
    // POST /api/auth/social/:platform
    sociallogin: {
        body: Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation')
                .required(),
            password: Joi.string().allow(null, ''),
            dateOfBirth: Joi.date()
                .min('1-1-1900')
                .max(`01-01-${new Date().getFullYear() - 18}`)
                .required(),
            gender: Joi.string().valid('MALE', 'FEMALE', 'OTHER').required(),
            accessToken: Joi.string().required(),
            refreshToken: Joi.string().required(),
            profilePic: Joi.string().allow('', null).required(),
            role: Joi.string().valid('USER').optional(),
            profilePic: Joi.string().allow('', null).required(),
        }),
        headers: Joi.object({
            'x-auth': Joi.string().required(),
        }).unknown(),
        params: Joi.object({
            platform: Joi.string().valid('facebook', 'google').required(),
        }),
    },
    // GET /api/v1/vitalshistory
    vitalsHistory: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/vitalshistory/:vital
    selectedVitalsHistory: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            vital: Joi.string().required(),
        }),
    },
    // POST /api/v1/user/password/forgotpassword
    forgotPassword: {
        body: Joi.object({
            email: Joi.string().email(),
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation'),
        }).nand('email', 'phone'),
    },
    // POST /api/v1/user/password/check/otp
    checkOTP: {
        body: Joi.object({
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation')
                .required(),
            otp: Joi.string().min(6).max(6).required(),
        }),
    },
    // POST /api/v1/user/password/verify/:method
    verifyForgotPasswordMethod: {
        params: Joi.object({
            method: Joi.string().valid('email', 'otp').required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/user/password/reset
    resetPassword: {
        body: Joi.object({
            password: Joi.string()
                .regex(/[a-zA-Z0-9]{3,30}/)
                .required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },

    // POST /api/v1/user/password/change
    changePassword: {
        body: Joi.object({
            newPassword: Joi.string()
                .regex(/[a-zA-Z0-9]{3,30}/)
                .invalid(Joi.ref('oldPassword'))
                .required(),
            password: Joi.string()
                .regex(/[a-zA-Z0-9]{3,30}/)
                .required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },

    // POST /api/v1/user/passcode/change
    setPasscode: {
        body: Joi.object({
            passcode: Joi.string().min(4).max(4).required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/user/passcode/verify
    verifyPasscode: {
        body: Joi.object({
            passcode: Joi.string().min(4).max(4).required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // PUT /api/v1/user/passcode/change
    changePasscode: {
        body: Joi.object({
            passcode: Joi.string().min(4).max(4).required(),
            newPasscode: Joi.string().min(4).max(4).required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // PATCH /api/users/forgot/verify
    verifyForgotPassword: {
        body: Joi.object({
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation')
                .required(),
            otp: Joi.string().required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/vitals
    addVitals: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        body: Joi.object({
            vitals: Joi.array().items(
                Joi.object({
                    vitals_key: Joi.string().required(),
                    vitals_default_value: Joi.number().required(),
                    vitals_secondary_value: Joi.number().allow(null, ''),
                    unit: Joi.string().required(),
                    description: Joi.string().allow(null, ''),
                    title: Joi.string().required(),
                }).required(),
            ),
            comment: Joi.string().required(),
            user_id: Joi.string().required(),
            date_entered: Joi.date().required(),
            timestamp: Joi.string().required(),
            source: Joi.string().required(),
            created_by: Joi.string().required(),
            observer_id: Joi.string().required(),
        }),
    },
    // GET /api/v1/labtestresults
    labTestResults: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/labtests
    labTests: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/labtestresults
    createlabTestResults: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        body: Joi.object({
            lab_tests: Joi.array().items(
                Joi.object({
                    lab_key: Joi.string().allow('', null).required(),
                    lab_default_value: Joi.string().required(),
                    lab_secondary_value: Joi.string().allow(null, ''),
                    unit: Joi.string().required(),
                    description: Joi.string().allow(null, ''),
                    lab_name: Joi.string().required(),
                }).required(),
            ),
            comment: Joi.string().required(),
            user_id: Joi.string().required(),
            date_entered: Joi.date().required(),
            timestamp: Joi.string().required(),
            source: Joi.string().required(),
            created_by: Joi.string().required(),
            observer_id: Joi.string().required(),
        }),
    },
    // GET /api/v1/appointments/:role/:id
    fetchAppointment: {
        params: Joi.object({
            id: Joi.string().required(),
            // role: Joi.string().valid('appointee', 'scheduler').required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        query: Joi.object({
            start_date: Joi.date().min(startOfMonth(new Date())).max(endOfMonth(new Date())),
            end_date: Joi.date().min(Joi.ref('start_date')).max(endOfMonth(new Date())),
        }).with('start_date', 'end_date'),
    },
    // GET /api/v1/timeslots
    fetchTimeslots: {
        query: Joi.object({
            slot_date: Joi.date().max(endOfMonth(new Date())).required(),
            appointee_id: Joi.string().required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/appointments
    createAppointment: {
        body: Joi.object({
            appointee: Joi.string().required(),
            scheduler: Joi.string().required(),
            slot_time: Joi.number().min(0).max(23).required(),
            slot_date: Joi.date()
                .min(startOfDay(new Date()))
                .max(endOfMonth(new Date()))
                .required(),
            topic: Joi.string().optional(),
            note: Joi.string().optional(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // PUT /api/v1/appointment/:id/accept
    acceptAppointment: {
        params: Joi.object({
            id: Joi.string().required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // PUT /api/v1/appointment/:id/reject
    rejectAppointment: {
        params: Joi.object({
            id: Joi.string().required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },

    // PUT /api/v1/appointment/:id/reschedule
    rescheduleAppointment: {
        body: Joi.object({
            slot_time: Joi.number().min(0).max(23).required(),
            slot_date: Joi.date()
                .min(startOfDay(new Date()))
                .max(endOfMonth(new Date()))
                .required(),
            topic: Joi.string().optional(),
            note: Joi.string().optional(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },

    // GET /api/v1/bookingslist
    fetchBookingsList: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/medicalspecialty
    fetchMedicalSpecialty: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/physician
    fetchAllPhysicians: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/physician/:id
    fetchPhysician: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string().required(),
        }),
    },
    // POST /api/v1/physician/:id
    updatePhysician: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string().required(),
        }),
        body: Joi.object({
            credentials: Joi.array().items(
                Joi.object({
                    key: Joi.string().required(),
                    type: Joi.string().required(),
                    title: Joi.string().required(),
                }).optional(),
            ),
            documents: Joi.array().items(
                Joi.object({
                    name: Joi.string().required(),
                    type: Joi.string().required(),
                    url: Joi.string().required(),
                }).optional(),
            ),
            title: Joi.string().optional(),
            shorthand: Joi.string().optional(),
            specialty: Joi.object({
                title: Joi.string().required(),
                field: Joi.string().required(),
            }).optional(),
            subspecialty: Joi.array().items(
                Joi.object({
                    title: Joi.string().allow(null, '').required(),
                    field: Joi.string().allow(null, '').required(),
                }).optional(),
            ),
            started_practice: Joi.date().optional(),
        }),
    },
    // GET /api/v1/physician/:specialty
    fetchPhysiciansBySpecialty: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            specialty: Joi.string().required(),
        }),
    },
    // GET /api/v1/physician/patients
    fetchPatients: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },

    // GET /api/v1/physician/fetch/patient/:id
    fetchPatient: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string().required(),
        }),
    },

    // GET /api/v1/physician/search/type/patients?=john
    fetchPatientTypeUsers: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        query: Joi.object({
            patient: Joi.string().optional(),
        }),
    },

    // POST /api/v1/physician/add/patient/:id
    addPatient: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string().required(),
        }),
    },

    // PUT /api/v1/physician/request/patient/:id
    requestPatientRecords: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string().required(),
        }),
    },

    // GET /api/v1/physician/:specialty
    fetchMedicalCredentials: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/otp/registration
    registrationOTP: {
        body: Joi.object({
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation')
                .required(),
        }),
    },
    // POST /api/v1/otp/login
    loginOTPPhone: {
        body: Joi.object({
            email: Joi.string().email().required(),
        }),
    },
    // POST /api/v1/otp/email
    loginOTPEmail: {
        body: Joi.object({
            email: Joi.string().email().required(),
        }),
    },
    // POST /api/v1/otp/verify
    verifyOTP: {
        body: Joi.object({
            phone: Joi.string()
                .max(25)
                .custom(Globals.JoiIsValidPhoneNumber, 'Phone Number Validation'),
            otp: Joi.string().min(6).max(6).required(),
            email: Joi.string().email(),
        }).nand('phone', 'email'),
    },

    // POST /api/v1/user/invite/physician
    invitePhysician: {
        body: Joi.object({
            email: Joi.string().email().required(),
        }).nand('phone', 'email'),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/user/fetch/physician?physician=ezike
    fetchPrimaryPhysician: {
        query: Joi.object({
            physician: Joi.string().required(),
        }),
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/notifications
    notifications: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // GET /api/v1/referrals
    fetchPatientReferral: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
    },
    // POST /api/v1/referrals
    createPatientReferral: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        body: Joi.object({
            appointee: Joi.string().required(),
            scheduler: Joi.string().required(),
            patient: Joi.string().required(),
            slot_time: Joi.number().min(0).max(23).required(),
            slot_date: Joi.date()
                .min(startOfDay(new Date()))
                .max(endOfMonth(new Date()))
                .required(),
            topic: Joi.string().optional(),
            note: Joi.string().optional(),
        }),
    },

    // PUT /api/v1/referrals/:id/accept
    acceptPatientReferral: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string().required(),
        }),
    },
    // PUT /api/v1/referrals/:id/reject
    rejectPatientReferral: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        params: Joi.object({
            id: Joi.string().required(),
        }),
    },

    // POST /api/v1/referrals/:id/reschedule
    reschedulePatientReferral: {
        headers: Joi.object({
                authorization: Joi.string(),
                'x-auth': Joi.string(),
            })
            .or('authorization', 'x-auth')
            .unknown(),
        body: Joi.object({
            slot_time: Joi.number().min(0).max(23).required(),
            slot_date: Joi.date()
                .min(startOfDay(new Date()))
                .max(endOfMonth(new Date()))
                .required(),
            topic: Joi.string().optional(),
            note: Joi.string().optional(),
        }),
    },
    // TS: More to add
    // TODO: add the validation for other masters too
}