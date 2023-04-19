import express from 'express'
import patientReferralController from 'controllers/patient-referral.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const PatientReferralRoute = express.Router() // eslint-disable-line new-cap

PatientReferralRoute.get(
    '/',
    validate(validationSchema.fetchPatientReferral, { keyByField: true }, {}),
    authenticate,
    patientReferralController.index,
)

PatientReferralRoute.post(
    '/',
    validate(validationSchema.createPatientReferral, { keyByField: true }, {}),
    authenticate,
    patientReferralController.create,
)

PatientReferralRoute.put(
    '/:id/accept',
    validate(validationSchema.acceptPatientReferral, { keyByField: true }, {}),
    authenticate,
    patientReferralController.acceptPatientReferrer,
)

PatientReferralRoute.put(
    '/:id/reject',
    validate(validationSchema.rejectPatientReferral, { keyByField: true }, {}),
    authenticate,
    patientReferralController.rejectPatientReferrer,
)

PatientReferralRoute.put(
    '/:id/reschedule',
    validate(validationSchema.reschedulePatientReferral, { keyByField: true }, {}),
    authenticate,
    patientReferralController.reschedulePatientReferrer,
)

export default PatientReferralRoute