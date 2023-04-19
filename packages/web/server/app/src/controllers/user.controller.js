import httpStatus from 'http-status'
import _ from 'lodash'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import { User, OTP, AdditionalInfo, PatientRecord } from 'database'
import APIError from 'helpers/APIError'
import Global from 'helpers/globals'
import Email from 'services/email'
import _response from 'helpers/response'
import RouterHelper from 'helpers/routes'
import otpController from 'controllers/otp.controller'
import { config } from 'config'

const capitalize = (wordsArray) => {
        return wordsArray.map((word) => _.capitalize(word)).join(' ')
    }
    /**
     *@name userController
     *@returns {Object} Functions
     */

const usersController = (() => ({
    /**
     *@name create
     *@description creates a new user
     *@route GET /api/v1/user/register
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */

    async create(request, response, next) {
        try {
            const { token, newUser } = await RouterHelper.createUser(request.body)
            response
                .header('x-auth', token)
                .status(200)
                .send({
                    ..._response,
                    data: {
                        token,
                        _id: newUser._id,
                    },
                    message: `Created User: ${newUser.email}`,
                    status: httpStatus.OK,
                })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name forgotPasswordEmail
     *@description  allow user to request for a password reset using email or otp
     *@route POST /api/v1/user/forgetpassword
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */

    async forgotPassword(request, response, next) {
        let message
        let user
        let token
        try {
            const { email, phone } = _.pick(request.body, ['email', 'phone'])
            if (email && validator.isEmail(email)) {
                user = await User.findOneByQuery({ email })
                if (!user) {
                    const err = new APIError('User Not Found!', httpStatus.UNPROCESSABLE_ENTITY)
                    return next(err)
                }
                if (!user.isActive) {
                    const err = new APIError(
                        'User is disabled by Administrator!',
                        httpStatus.UNAUTHORIZED,
                    )
                    return next(err)
                }
                token = await user.generateTempToken()
                message = 'Kindly check your email for further instructions'
                await Email.sendForgotPasswordEmailLink(user, token)
                response.status(200).send({
                    ..._response,
                    data: null,
                    message,
                    status: httpStatus.OK,
                })
                return null
            }

            if (phone && Global.JoiIsValidPhoneNumber(phone)) {
                user = await User.findOneByQuery({ phone })
                if (!user) {
                    const err = new APIError('User Not Found!', httpStatus.BAD_REQUEST)
                    return next(err)
                }
                if (!user.isActive) {
                    const err = new APIError(
                        'User is disabled by Administrator!',
                        httpStatus.UNAUTHORIZED,
                    )
                    return next(err)
                }
                otpController.sendForgotOTP(request, response, next).then((otpsent) => {
                    User.findOneAndUpdate({ _id: user._id }, { forgotToken: otpsent, forgotTokenTimestamp: Date.now() + 1800000 }, { new: true }, ).then(() => {
                        message = 'OTP has been sent to registered phone number'
                        response.status(200).send({
                            ..._response,
                            data: null,
                            message,
                            status: httpStatus.OK,
                        })
                    })
                })
                return null
            }

            throw new APIError('User Not Found!', httpStatus.UNPROCESSABLE_ENTITY)
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name verifyForgotPasswordMethod
     *@description verifies users token to reset password
     *@route POST /api/v1/user/password/verify/:method
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */

    async verifyForgotPasswordMethod(request, response, next) {
        const { method } = request.params
        try {
            if (method === 'otp') {
                request.user.isVerified = true
                request.user.forgotToken = null
                request.user.forgotTokenTimestamp = null
            }
            if (method === 'email') {
                request.user.isVerifiedByEmail = true
            }
            const token = await request.user.generateResetToken()
            const message = 'You can reset your password'
            await request.user.deleteToken(request.token)
            await request.user.save()
            response
                .header('x-auth', token)
                .status(200)
                .send({
                    ..._response,
                    data: { token },
                    message,
                    status: httpStatus.OK,
                })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name verifyForgotPasswordOTP
     *@description verifies users otp to reset password
     *@route POST /api/v1/user/password/verify/otp
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */
    async verifyForgotPasswordOTP(request, response, next) {
        try {
            const user = await User.findOneByQuery({
                phone: request.body.phone,
                forgotToken: request.body.otp,
                forgotTokenTimestamp: {
                    $gt: Date.now(),
                },
            })
            if (!user) {
                const err = new APIError('Invalid OTP!', httpStatus.NOT_FOUND)
                return next(err)
            }

            const otp = await OTP.findOneByQuery({
                phone: request.body.phone,
                otp: request.body.otp,
                isActive: true,
            })
            if (!otp) {
                const err = new APIError('Invalid OTP!', httpStatus.NOT_FOUND)
                return next(err)
            }

            await OTP.findByIdAndUpdate(otp._id, { isActive: false })
            const token = await user.generateTempToken()
            user.isVerified = true
            await user.save()
            response
                .header('x-auth', token)
                .status(200)
                .send({
                    ..._response,
                    data: { token },
                    message: 'OTP is valid',
                    status: httpStatus.OK,
                })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name resetPassword
     *@description resets user's password
     *@route POST /api/v1/user/password/reset
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */

    async resetPassword(request, response, next) {
        try {
            const user = await User.authenticateViaId(request.user._id)
            if (!user) {
                const err = new APIError("User Doesn't Exists", httpStatus.NOT_FOUND)
                return next(err)
            }

            user.password = request.body.password
            await user.deleteToken(request.token)
            await user.save()
            response.status(200).send({
                ..._response,
                data: null,
                message: 'Password Updated',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name changePassword
     *@description allows a user to change his password
     *@route POST /api/v1/user/password/change
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */

    async changePassword(request, response, next) {
        try {
            const user = await User.authenticateViaId(request.user._id)
            if (!user) {
                var err = new APIError("User Doesn't Exists", httpStatus.BAD_REQUEST)
                return next(err)
            }
            const match = await bcrypt.compare(request.body.password, user.password)
            if (!match) {
                const err = new APIError('Incorrect current password!', httpStatus.BAD_REQUEST)
                return next(err)
            }
            user.password = request.body.newPassword
            await user.save()
            response.status(200).send({
                ..._response,
                data: null,
                message: 'Password Updated',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name setPasscode
     *@description added user passcode
     *@route POST /api/v1/user/passcode
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */

    async setPasscode(request, response, next) {
        try {
            const user = await User.authenticateViaId(request.user._id, '+passcode')
            if (!user) {
                const err = new APIError("User Doesn't Exists", httpStatus.NOT_FOUND)
                return next(err)
            }
            if (user.passcode) {
                const err = new APIError('Action not allowed!', httpStatus.NOT_ACCEPTABLE)
                return next(err)
            }
            user.passcode = request.body.passcode
            await user.save()
            response.status(200).send({
                ..._response,
                data: null,
                message: 'Passcode Added!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name verifyPasscode
     *@description this verify the users passcode
     *@route POST /api/v1/user/passcode
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */

    async verifyPasscode(request, response, next) {
        try {
            const user = await User.findByPasscode({
                email: request.user.email,
                passcode: request.body.passcode,
            })
            if (!user.isActive) {
                const err = new APIError(
                    'User is disabled by Administrator!',
                    httpStatus.UNAUTHORIZED,
                )
                return next(err)
            }
            const token = await user.generateAuthToken()
            user.ip = `${Global.getIpAddress(request)}`
            user.device = `${Global.getDeviceInfo(request)}`
            user.isOnline = true
            user.save()
            await Email.sendLoginEmail({ user }, request, next)
            response
                .header('x-auth', token)
                .status(200)
                .send({
                    ..._response,
                    data: {
                        token,
                        _id: user._id,
                    },
                    message: `Found User: ${user.email}`,
                    status: httpStatus.OK,
                })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name changePasscode
     *@description this changes the users passcode
     *@route POST /api/v1/user/passcode/change
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */

    async changePasscode(request, response, next) {
        try {
            const user = await User.authenticateViaId(request.user._id, '+passcode')
            if (!user) {
                const err = new APIError("User Doesn't Exists", httpStatus.NOT_FOUND)
                return next(err)
            }
            const match = await bcrypt.compare(request.body.passcode, user.passcode)
            if (!match) {
                const err = new APIError("Passcode Don't match", httpStatus.BAD_REQUEST)
                return next(err)
            }
            user.passcode = request.body.newPasscode
            await user.save()
            response.status(200).send({
                ..._response,
                data: null,
                message: 'Passcode Updated!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name updateEmail
     *@description this endpoint updates a users email
     *@route POST /api/v1/user/email/change
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */
    async updateEmail(request, response, next) {
        try {
            const user = await User.findOne({ _id: request.user._id })
            const existingUser = await User.findOne({ email: request.body.newEmail })

            if (!user) {
                const err = new APIError("User doesn't exists!", httpStatus.BAD_REQUEST)
                return next(err)
            }
            if (existingUser) {
                const err = new APIError(
                    'User with new email already exists!',
                    httpStatus.BAD_REQUEST,
                )
                return next(err)
            }
            if (user.email !== request.body.email) {
                const err = new APIError(
                    "Email doesn't match your stored email",
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const match = await bcrypt.compare(request.body.password, user.password)
            if (!match) {
                const err = new APIError('Invalid Credentials!', httpStatus.BAD_REQUEST)
                return next(err)
            }
            await otpController.OTPForUserEmail(request.body, request, response, next)
            response.status(200).send({
                ..._response,
                data: null,
                message: 'OTP is sent to your new Email!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name updatePhoneNumber
     *@description this endpoint updates a users phone number
     *@route POST /api/v1/user/email/change
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */
    async updatePhoneNumber(request, response, next) {
        try {
            const existingUser = await User.findOne({ phone: request.body.phone })
            if (existingUser) {
                const err = new APIError(
                    'User with new Phone Number already exists!',
                    httpStatus.BAD_REQUEST,
                )
                return next(err)
            }

            await otpController.OTPForUserPhone(request.body, request, response, next)
            response.status(200).send({
                ..._response,
                data: null,
                message: 'OTP is sent to your new Phone!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name update
     *@description this endpoint updates a users information
     *@route POST /api/v1/user/update
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */
    async update(request, response, next) {
        const body = _.pick(request.body, [
            'firstName',
            'lastName',
            'country',
            'state',
            'street',
            'unit_system',
            'gender',
            'dateOfBirth',
        ])
        try {
            if (request.user.role !== 'USER') {
                const err = new APIError(
                    'Action not Allowed for this User',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const user = await User.findByIdAndUpdate(request.user.id, body, { new: true }).select(
                '-tokens -passcode -password -createdAt -updatedAt',
            )
            response.status(200).send({
                ..._response,
                data: { user },
                message: 'User Info Updated!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },
    /**
     *@name updateUserAdditionalInfo
     *@description this endpoint updates a users additional information
     *@route POST /api/v1/user/update/additionInfo
     *@param {Object} request
     *@param {Object} response
     *@param {Object} next
     *@returns {Null} null
     */
    async updateUserAdditionalInfo(request, response, next) {
        const body = _.pick(request.body, ['blood_type', 'primary_specialist', 'emergency_contact'])
        try {
            if (request.user.role !== 'USER') {
                const err = new APIError(
                    'Action not Allowed for this User',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const user = await AdditionalInfo.findOneAndUpdate({ user_id: request.user.id }, body, {
                new: true,
                upsert: true,
            })
            response.status(200).send({
                ..._response,
                data: { user },
                message: 'User Info Updated!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name sendInviteToPhysician
     *@description this send an invute to a potential physician
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async sendInviteToPhysician(request, response, next) {
        try {
            const { email } = request.body
                // const { inviteCode } = request.user
            const existingUser = await User.findOne({
                email,
                isActive: true,
                $or: [{ role: 'PHYSICIAN' }, { role: 'USER' }],
            })
            if (existingUser) {
                const err = new APIError(
                    'Physician is already on Panda Health',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            await Email.sendInviteEmail(request.user, email, next)
            response.status(200).send({
                ..._response,
                data: null,
                message: `Invite sent to ${email}`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name fetchPrimaryPhysician
     *@description this endpoint helps a user to fetch a primary physician
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async fetchPrimaryPhysician(request, response, next) {
        try {
            const { role } = request.user
            const { physician } = request.query
            if (role.toLowerCase() !== 'user') {
                const err = new APIError(
                    'Action not Allowed for this User',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const regex = new RegExp(physician, 'i')
            const user = await User.find({
                isActive: true,
                role: 'PHYSICIAN',
                $or: [
                    { firstName: regex },
                    { lastName: regex },
                    { email: regex },
                    { phone: regex },
                ],
            })
            response.status(200).send({
                ..._response,
                data: { physicians: user },
                message: `Available Physicians`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name fetchMedicalRecordRequests
     *@description this endpoint allows a user to fetch all requests for their medical records/history
     *@route GET /api/v1/user/requested/medicalrecords
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async fetchMedicalRecordRequests(request, response, next) {
        try {
            const { _id, role } = request.user
            if (role.toLowerCase() !== 'user') {
                const err = new APIError(
                    'Action not Allowed for this User',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const RecordRequests = await PatientRecord.findByQuery({ patient: _id })
            response.status(200).send({
                ..._response,
                data: { requests: RecordRequests },
                message: `All Requests for Medical Records/History`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name acceptMedicalRecordRequest
     *@description this endpoint allows a user to accept a request for their medical records/history
     *@route PUT /api/v1/user/requested/medicalrecords/:id/accept
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async acceptMedicalRecordRequest(request, response, next) {
        try {
            const { _id, role } = request.user
            const { id } = request.params
            if (role.toLowerCase() !== 'user') {
                const err = new APIError(
                    'Action not Allowed for this User',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const patientRecord = await PatientRecord.findOneByQueryAndUpdate({
                healthcare_provider: id,
                patient: _id,
                $or: [{ status: 'PENDING' }, { status: 'NON-ACCESS' }, { status: 'REJECTED' }],
            }, {
                medical_record_access: true,
                status: 'ACCEPTED',
            }, { upsert: false }, )

            if (!patientRecord) {
                const err = new APIError(`Patient Record Does not Exist`, httpStatus.NOT_ACCEPTABLE)
                return next(err)
            }

            const physician = capitalize([
                patientRecord.healthcare_provider.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                patientRecord.healthcare_provider.firstName,
                patientRecord.healthcare_provider.lastName,
            ])
            const patient = capitalize([
                patientRecord.patient.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                patientRecord.patient.firstName,
                patientRecord.patient.lastName,
            ])
            const emailPhysician = `Dear ${physician}, 
            <br>
                ${patient} has granted your request to access their Medical Record/History on Panda Health, 
            <br>
            Please login to view this <a href='${config.app.baseURL}/auth/login'>Click here</a>
            <br>
            `
            const emailPatient = `Dear ${patient},
            <br>
            you have granted ${physician} full access to your Medicial records/history on Panda Health
            <br>
            `
            await Email.sendEmails(
                patientRecord.healthcare_provider,
                'Access to Patient Medical Record/History Approved',
                emailPhysician,
            )
            await Email.sendEmails(
                request.user,
                'Access to Patient Medical Record/History Approved',
                emailPatient,
            )
            response.status(200).send({
                ..._response,
                data: null,
                message: `Access granted to Medical Records/History`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name rejectMedicalRecordRequest
     *@description this endpoint allows a user to reject a request for their medical records/history
     *@route PUT /api/v1/user/requested/medicalrecords/:id/reject
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async rejectMedicalRecordRequest(request, response, next) {
        try {
            const { _id, role, firstName, lastName } = request.user
            const { id } = request.params
            if (role.toLowerCase() !== 'user') {
                const err = new APIError(
                    'Action not Allowed for this User',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const patientRecord = await PatientRecord.findOneByQueryAndUpdate({
                healthcare_provider: id,
                patient: _id,
                $or: [{ status: 'PENDING' }, { status: 'NON-ACCESS' }, { status: 'ACCEPTED' }],
            }, {
                medical_record_access: false,
                status: 'REJECTED',
            }, { upsert: false }, )

            if (!patientRecord) {
                const err = new APIError(`Patient Record Does not Exist`, httpStatus.NOT_ACCEPTABLE)
                return next(err)
            }

            const physician = capitalize([
                patientRecord.healthcare_provider.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                patientRecord.healthcare_provider.firstName,
                patientRecord.healthcare_provider.lastName,
            ])
            const patient = capitalize([
                patientRecord.patient.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                patientRecord.patient.firstName,
                patientRecord.patient.lastName,
            ])
            const emailPhysician = `Dear ${physician}, 
            <br>
                ${patient} has rejected your access their Medical Record/History on Panda Health, 
            <br>
            Please login to view this <a href='${config.app.baseURL}/auth/login'>Click here</a>
            <br>
            `
            const emailPatient = `Dear ${patient},
            <br>
             you have rejected ${physician} full access to your Medicial records/history on Panda Health
            <br>
            `
            await Email.sendEmails(
                patientRecord.healthcare_provider,
                'Access to Patient Medical Record/History Rejected',
                emailPhysician,
            )
            await Email.sendEmails(
                request.user,
                'Access to Patient Medical Record/History Rejected',
                emailPatient,
            )
            response.status(200).send({
                ..._response,
                data: null,
                message: `Access Rejected for Medical Records/History`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },
}))()

export default usersController