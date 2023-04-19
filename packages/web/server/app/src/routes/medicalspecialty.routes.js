import express from 'express'
import medicalSpecialtyController from 'controllers/medicalspecialty.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const medicalSpecialtyRoutes = express.Router()

medicalSpecialtyRoutes.get(
    '/',
    validate(validationSchema.fetchMedicalSpecialty, { keyByField: true }, {}),
    authenticate,
    medicalSpecialtyController.index,
)
export default medicalSpecialtyRoutes