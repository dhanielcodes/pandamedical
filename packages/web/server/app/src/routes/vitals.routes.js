import express from 'express'
import vitalsController from 'controllers/vitals.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const VitalsRoutes = express.Router()

VitalsRoutes.get(
    '/',
    // validate(validationSchema.createUser, { keyByField: true }, {}),
    vitalsController.index,
)
VitalsRoutes.post(
    '/',
    validate(validationSchema.addVitals, { keyByField: true }, {}),
    authenticate,
    vitalsController.create,
)

export default VitalsRoutes