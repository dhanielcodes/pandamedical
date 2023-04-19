import express from 'express'
import otpController from 'controllers/otp.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
// import { authenticateTempToken } from 'middleware'

const OTPRoutes = express.Router()

OTPRoutes.get(
    '/test',
    // validate(validationSchema.createUser, { keyByField: true }, {}),
    otpController.index,
)
OTPRoutes.post(
    '/registration',
    validate(validationSchema.registrationOTP, { keyByField: true }, {}),
    otpController.registrationOTP,
)

OTPRoutes.post(
    '/login',
    validate(validationSchema.loginOTPPhone, { keyByField: true }, {}),
    otpController.loginOTPPhone,
)
OTPRoutes.post(
    '/email',
    validate(validationSchema.loginOTPEmail, { keyByField: true }, {}),
    otpController.loginOTPEmail,
)
OTPRoutes.post(
    '/verify',
    validate(validationSchema.verifyOTP, { keyByField: true }, {}),
    otpController.verifyOTP,
)

// OTPRoutes.put(
//     'user/verify/email',
//     validate(validationSchema.OTPForUserEmailVerify, { keyByField: true }, {}),
//     otpController.OTPForUserEmailVerify,
// )

export default OTPRoutes