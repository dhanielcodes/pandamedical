import express from 'express'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate } from 'middleware'
import authController from 'controllers/auth.controller'

const AuthRoute = express.Router()

AuthRoute.get(
        '/me',
        validate(validationSchema.authenticateMe, { keyByField: true }, {}),
        authenticate,
        authController.user,
    )
    .post(
        '/login',
        validate(validationSchema.login, { keyByField: true }, {}),
        authController.login,
    )
    .post(
        '/physician/login',
        validate(validationSchema.login, { keyByField: true }, {}),
        authController.physicianLogin,
    )
    .post(
        '/social/:platform',
        validate(validationSchema.sociallogin, { keyByField: true }, {}),
        authController.socialLogin,
    )
    .delete('/logout', authenticate, authController.logout)

export default AuthRoute