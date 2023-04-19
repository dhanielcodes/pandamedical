import express from 'express'
import notificationsController from 'controllers/notifications.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'

const notificationRoutes = express.Router()

notificationRoutes.get(
    '/',
    validate(validationSchema.notifications, { keyByField: true }, {}),
    authenticate,
    notificationsController.index,
)

export default notificationRoutes