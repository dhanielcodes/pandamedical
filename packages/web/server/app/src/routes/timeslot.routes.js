import express from 'express'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'
import timeslotController from 'controllers/timeslot.controller'

const TimeslotRoute = express.Router()

TimeslotRoute.get(
    '/',
    validate(validationSchema.fetchTimeslots, { keyByField: true }, {}),
    authenticate,
    timeslotController.index,
)

export default TimeslotRoute