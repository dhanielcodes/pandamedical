import express from 'express'
import labTestsController from 'controllers/labTests.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const LabTestsRoutes = express.Router()

LabTestsRoutes.get(
    '/',
    validate(validationSchema.labTests, { keyByField: true }, {}),
    authenticate,
    labTestsController.index,
)

export default LabTestsRoutes
