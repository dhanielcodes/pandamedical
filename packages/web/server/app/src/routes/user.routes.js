import express from 'express'
import usersController from 'controllers/user.controller'
import otpController from 'controllers/otp.controller'
import { validate } from 'express-validation'
import { validationSchema } from 'config'
import { authenticate, authenticateTempToken, authenticateResetToken } from 'middleware'

const UserRoutes = express.Router()

UserRoutes.post(
    '/register',
    validate(validationSchema.createUser, { keyByField: true }, {}),
    usersController.create,
)
UserRoutes.post(
    '/password/forgotpassword',
    validate(validationSchema.forgotPassword, { keyByField: true }, {}),
    usersController.forgotPassword,
)
UserRoutes.post(
    '/password/check/otp',
    validate(validationSchema.checkOTP, { keyByField: true }, {}),
    usersController.verifyForgotPasswordOTP,
)

UserRoutes.get(
    '/password/verify/:method',
    validate(validationSchema.verifyForgotPasswordMethod, { keyByField: true }, {}),
    authenticateTempToken,
    usersController.verifyForgotPasswordMethod,
)
UserRoutes.post(
    '/password/reset',
    validate(validationSchema.resetPassword, { keyByField: true }, {}),
    authenticateResetToken,
    usersController.resetPassword,
)

UserRoutes.put(
    '/password/change',
    validate(validationSchema.changePassword, { keyByField: true }, {}),
    authenticate,
    usersController.changePassword,
)

UserRoutes.post(
    '/passcode',
    validate(validationSchema.setPasscode, { keyByField: true }, {}),
    authenticate,
    usersController.setPasscode,
)

UserRoutes.post(
    '/passcode/verify',
    validate(validationSchema.verifyPasscode, { keyByField: true }, {}),
    authenticate,
    usersController.verifyPasscode,
)

UserRoutes.put(
    '/passcode/change',
    validate(validationSchema.changePasscode, { keyByField: true }, {}),
    authenticate,
    usersController.changePasscode,
)

UserRoutes.post(
    '/email/update',
    validate(validationSchema.updateEmail, { keyByField: true }, {}),
    authenticate,
    usersController.updateEmail,
)

UserRoutes.put(
    '/email/verify',
    validate(validationSchema.verifyEmail, { keyByField: true }, {}),
    authenticate,
    otpController.OTPForUserEmailVerify,
)

UserRoutes.post(
    '/phone/update',
    validate(validationSchema.updatePhoneNumber, { keyByField: true }, {}),
    authenticate,
    usersController.updatePhoneNumber,
)

UserRoutes.put(
    '/phone/verify',
    validate(validationSchema.verifyPhoneNumber, { keyByField: true }, {}),
    authenticate,
    otpController.OTPForUserPhoneVerify,
)

UserRoutes.put(
    '/update',
    validate(validationSchema.updateUser, { keyByField: true }, {}),
    authenticate,
    usersController.update,
)
UserRoutes.put(
    '/update/additionalinfo',
    validate(validationSchema.updateUserAdditionalInfo, { keyByField: true }, {}),
    authenticate,
    usersController.updateUserAdditionalInfo,
)

UserRoutes.post(
    '/invite/physician',
    validate(validationSchema.invitePhysician, { keyByField: true }, {}),
    authenticate,
    usersController.sendInviteToPhysician,
)
UserRoutes.get(
    '/primary/physician',
    validate(validationSchema.fetchPrimaryPhysician, { keyByField: true }, {}),
    authenticate,
    usersController.fetchPrimaryPhysician,
)

UserRoutes.get(
    '/requested/medicalrecords',
    validate(validationSchema.fetchMedicalRecordRequests, { keyByField: true }, {}),
    authenticate,
    usersController.fetchMedicalRecordRequests,
)

UserRoutes.put(
    '/requested/medicalrecords/:id/accept',
    validate(validationSchema.acceptMedicalRecordRequest, { keyByField: true }, {}),
    authenticate,
    usersController.acceptMedicalRecordRequest,
)

UserRoutes.put(
    '/requested/medicalrecords/:id/reject',
    validate(validationSchema.rejectMedicalRecordRequest, { keyByField: true }, {}),
    authenticate,
    usersController.rejectMedicalRecordRequest,
)
export default UserRoutes