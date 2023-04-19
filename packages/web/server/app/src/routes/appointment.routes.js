import express from 'express'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'
import appointmentController from 'controllers/appointment.controller'

const AppointmentRoute = express.Router()

AppointmentRoute.get(
    '/:id',
    validate(validationSchema.fetchAppointment, { keyByField: true }, {}),
    authenticate,
    appointmentController.index,
)

AppointmentRoute.post(
    '/',
    validate(validationSchema.createAppointment, { keyByField: true }, {}),
    authenticate,
    appointmentController.create,
)

AppointmentRoute.put(
    '/:id/accept',
    validate(validationSchema.acceptAppointment, { keyByField: true }, {}),
    authenticate,
    appointmentController.acceptAppointment,
)

AppointmentRoute.put(
    '/:id/reject',
    validate(validationSchema.rejectAppointment, { keyByField: true }, {}),
    authenticate,
    appointmentController.rejectAppointment,
)

AppointmentRoute.put(
    '/:id/reschedule',
    validate(validationSchema.rescheduleAppointment, { keyByField: true }, {}),
    authenticate,
    appointmentController.rescheduleAppointment,
)

export default AppointmentRoute