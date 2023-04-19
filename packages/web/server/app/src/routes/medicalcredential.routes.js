import express from 'express'
import medicalCredentialController from 'controllers/medicalcredential.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const medicalCredentialRoutes = express.Router()

medicalCredentialRoutes.get(
    '/',
    validate(validationSchema.fetchMedicalCredentials, { keyByField: true }, {}),
    authenticate,
    medicalCredentialController.index,
)
export default medicalCredentialRoutes