import express from 'express'
import labResultsController from 'controllers/labTestResults.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const LabTestResultRoutes = express.Router()

LabTestResultRoutes.get(
    '/',
    validate(validationSchema.labTestResults, { keyByField: true }, {}),
    authenticate,
    labResultsController.index,
)
LabTestResultRoutes.post(
    '/',
    validate(validationSchema.createlabTestResults, { keyByField: true }, {}),
    authenticate,
    labResultsController.create,
)

export default LabTestResultRoutes
