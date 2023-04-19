import express from 'express'
import bookingsListController from 'controllers/bookingslist.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const bookingsListRoutes = express.Router()

bookingsListRoutes.get(
    '/',
    validate(validationSchema.fetchBookingsList, { keyByField: true }, {}),
    authenticate,
    bookingsListController.index,
)
export default bookingsListRoutes