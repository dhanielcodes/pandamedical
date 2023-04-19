import express from 'express'
import physicianController from 'controllers/physician.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const physicianRoutes = express.Router()

physicianRoutes.get(
    '/',
    validate(validationSchema.fetchAllPhysicians, { keyByField: true }, {}),
    authenticate,
    physicianController.index,
)
physicianRoutes.get(
    '/patients',
    validate(validationSchema.fetchPatients, { keyByField: true }, {}),
    authenticate,
    physicianController.fetchPatients,
)

physicianRoutes.get(
    '/search/type/patients',
    validate(validationSchema.fetchPatientTypeUsers, { keyByField: true }, {}),
    authenticate,
    physicianController.fetchPatientTypeUsers,
)

physicianRoutes.post(
    '/add/patient/:id',
    validate(validationSchema.addPatient, { keyByField: true }, {}),
    authenticate,
    physicianController.addPatient,
)

physicianRoutes.get(
    '/fetch/patient/:id',
    validate(validationSchema.fetchPatient, { keyByField: true }, {}),
    authenticate,
    physicianController.fetchPatient,
)

physicianRoutes.put(
    '/request/patient/:id',
    validate(validationSchema.requestPatientRecords, { keyByField: true }, {}),
    authenticate,
    physicianController.requestAccessToMedicalRecord,
)

physicianRoutes.get(
    '/specialty/:specialty',
    validate(validationSchema.fetchPhysiciansBySpecialty, { keyByField: true }, {}),
    authenticate,
    physicianController.fetchBySpecialty,
)

physicianRoutes.get(
    '/:id',
    validate(validationSchema.fetchPhysician, { keyByField: true }, {}),
    authenticate,
    physicianController.fetch,
)

physicianRoutes.post(
    '/:id',
    validate(validationSchema.updatePhysician, { keyByField: true }, {}),
    authenticate,
    physicianController.update,
)

export default physicianRoutes