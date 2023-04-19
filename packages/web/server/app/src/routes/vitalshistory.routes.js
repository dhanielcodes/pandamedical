import express from 'express'
import vitalsHistoryController from 'controllers/vitalshistory.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const VitalsHistoryRoutes = express.Router()

VitalsHistoryRoutes.get(
    '/',
    validate(validationSchema.vitalsHistory, { keyByField: true }, {}),
    authenticate,
    vitalsHistoryController.index,
)
VitalsHistoryRoutes.get(
    '/:vital',
    validate(validationSchema.selectedVitalsHistory, { keyByField: true }, {}),
    authenticate,
    vitalsHistoryController.fetch,
)

export default VitalsHistoryRoutes
