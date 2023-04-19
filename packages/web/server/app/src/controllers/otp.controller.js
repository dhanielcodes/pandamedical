import _ from 'lodash'
import AfricasTalking from 'africastalking'
import httpStatus from 'http-status'
import _response from 'helpers/response'
import APIError from 'helpers/APIError'

import Global from 'helpers/globals'
import Email from 'services/email'
import Audit from 'controllers/audit.controller'

import { config } from 'config'
import { OTP, User } from 'database'

const options = {
    apiKey: config.sms.apiKey, // use your sandbox app API key for development in the test environment
    username: config.sms.username, // use 'sandbox' for development in the test environment
}

// Initialize a service e.g. SMS
const sms = AfricasTalking(options).SMS
    /**
     *@name otpController
     *@returns {Object} Functions
     */

const otpController = (() => ({
    /**
     *@name index
     *@description test the sms config
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async index(request, response, next) {
        const options = {
            to: ['+2347038363702'],
            message: 'Test @valentine',
            from: config.sms.senderId,
        }

        try {
            const result = await sms.send(options)
            Audit.info(config.admin.userId, null, Audit.dbActions.smssent, response)
            response.status(200).send({
                ..._response,
                data: result,
                message: 'OTP Module is working!',
                status: httpStatus.OK,
            })
            return null
        } catch (err) {
            Audit.info(config.admin.userId, null, Audit.dbActions.smssent, err)
            next(err)
        }
    },

    /**
     *@name sendForgotOTP
     *@description send forget OTP to user phone
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async sendForgotOTP(request, response, next) {
        return new Promise(async function(resolve, reject) {
            const generatedOTP = await Global.generateOTP()

            const otp = new OTP({
                otp: generatedOTP,
                phone: request.body.phone,
            })

            const options = {
                to: [request.body.phone],
                message: `${generatedOTP} is the OTP to recover your Panda Health account and it will expire in 30 mins`,
                from: config.sms.senderId,
            }

            otp.save().then((data) => {
                sms.send(options)
                    .then((result) => {
                        Audit.info(data._id, request.body.phone, Audit.dbActions.smssent, result)

                        resolve(generatedOTP)
                        return null
                    })
                    .catch((error) => {
                        Audit.info(data._id, request.body.phone, Audit.dbActions.smssent, error)
                        next(error)
                    })
            })
        })
    },

    /**
     *@name sendSMS
     *@description send sms to user's phone
     *@param {String} description
     *@param {String} phone
     *@param {Object} user
     *@param {Function} next
     *@returns {Null} null
     */
    sendSMS(description, phone, user) {
        const options = {
            to: [phone],
            message: description,
            from: config.sms.senderId,
        }

        sms.send(options)
            .then((response) => {
                Audit.info(user._id, phone, Audit.dbActions.smssent, response)
            })
            .catch((error) => {
                Audit.info(user._id, phone, Audit.dbActions.smssent, error)
                next(e)
            })
    },

    /**
     *@name registrationOTP
     *@description send otp sms sent to user's phone to complete registration
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async registrationOTP(request, response, next) {
        let otp
        try {
            const generatedOTP = await Global.generateOTP()

            otp = await new OTP({
                otp: generatedOTP,
                phone: request.body.phone,
            }).save()

            const options = {
                to: [request.body.phone],
                message: `Welcome to Panda Health APP. Please use ${generatedOTP} to continue registration`,
                from: config.sms.senderId,
            }

            const smsresponse = await sms.send(options)
            await Audit.info(otp._id, request.body.phone, Audit.dbActions.smssent, smsresponse)
            response.status(200).send({
                ..._response,
                data: null,
                message: 'An OTP has been sent to your Phone Number',
                status: httpStatus.OK,
            })
        } catch (error) {
            await Audit.info(otp._id, request.body.phone, Audit.dbActions.smssent, error)
            next(error)
        }
    },

    /**
     *@name loginOTPEmail
     *@description send otp to user's email
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async loginOTPEmail(request, response, next) {
        let otp
        try {
            const generatedOTP = Global.generateOTP()
            otp = new OTP({
                otp: generatedOTP,
                email: request.body.email,
                type: 'EMAIL',
            })
            var message = `Welcome to Panda Health APP. Please use ${generatedOTP} to continue`
            await otp.save()
            await Email.sendEmails(request.body, 'Panda Health OTP', message)
            response.status(200).send({
                ..._response,
                data: null,
                message: 'OTP is sent to your Email',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            // await Audit.info(otp._id, request.body.phone, Audit.dbActions.smssent, error)
            next(error)
        }
    },

    /**
     *@name loginOTPPhone
     *@description send otp to user's phone to complete registration
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async loginOTPPhone(request, response, next) {
        let otp
        try {
            const generatedOTP = Global.generateOTP()
            const user = await User.findOne({ email: request.body.email })
            if (!user) {
                const err = new APIError("User Doesn't Exists", httpStatus.NOT_FOUND)
                return next(err)
            }
            otp = await new OTP({
                otp: generatedOTP,
                phone: user.phone,
            }).save()

            const options = {
                to: [user.phone],
                message: `Welcome to Panda Health APP. Please use ${generatedOTP} to complete registration`,
                from: config.sms.senderId,
            }

            const smsresponse = await sms.send(options)
            await Audit.info(otp._id, request.body.phone, Audit.dbActions.smssent, smsresponse)
            response.status(200).send({
                ..._response,
                data: null,
                message: 'An OTP has been sent to your Phone Number',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            await Audit.info(otp._id, request.body.phone, Audit.dbActions.smssent, error)
            return null
        }
    },

    /**
     *@name verifyOTP
     *@description verifies otp sms sent to user's phone to complete registration
     *@param {String} description
     *@param {String} phone
     *@param {Object} user
     *@param {Function} next
     *@returns {Null} null
     */

    async verifyOTP(request, response, next) {
        try {
            let otp
            const { phone, email } = request.body
            otp = await OTP.findOneByQuery({
                $or: [{ phone }, { email }],
                otp: request.body.otp,
                isActive: true,
            })
            if (!otp) {
                const err = new APIError('Invalid OTP', httpStatus.NOT_FOUND)
                return next(err)
            }
            await OTP.findByIdAndUpdate(otp._id, { isActive: false })
            const user = await User.authenticate({ $or: [{ phone }, { email }] })
            if (phone) {
                user.isVerified = true
            }
            if (email) {
                user.isVerifiedByEmail = true
            }
            await user.save()
            response.status(200).send({
                ..._response,
                data: null,
                message: 'OTP is valid',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },
    /**
     *@name OTPForUserEmail
     *@description send otp to change email
     *@param {Object} user
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async OTPForUserEmail(user, request, response, next) {
        try {
            const generatedOTP = await Global.generateOTP()
            const otp = new OTP({
                otp: generatedOTP,
                email: user.newEmail,
                type: 'EMAIL',
            })
            var message =
                'Welcome to Panda Health APP. ' +
                generatedOTP +
                ' Please use provided otp to continue registration on Panda Health'
            const data = await otp.save()
            await Email.userEmailOTPCheck(data, 'Panda Health OTP', message)
            return null
        } catch (error) {
            next(error)
        }
    },
    /**
     *@name OTPForUserEmailVerify
     *@description verify otp sent to change email
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async OTPForUserEmailVerify(request, response, next) {
        try {
            const otp = await OTP.findOneByQuery({
                email: request.body.newEmail,
                otp: request.body.otp,
                isActive: true,
            })
            if (!otp) {
                const err = new APIError('Invalid OTP', httpStatus.NOT_FOUND)
                return next(err)
            }
            await OTP.findByIdAndUpdate(otp._id, { isActive: false })
            const user = await User.authenticate({ email: request.user.email })
            user.isVerifiedByEmail = true
            user.email = request.body.newEmail
            await user.save()
            response.status(200).send({
                ..._response,
                data: null,
                message: 'OTP is valid, Email Updated!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name OTPForUserPhone
     *@description send otp to change phone
     *@param {Object} user
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async OTPForUserPhone(user, request, response, next) {
        let otp
        try {
            const generatedOTP = await Global.generateOTP()
            otp = await new OTP({
                otp: generatedOTP,
                phone: user.phone,
            }).save()

            const options = {
                to: [user.phone],
                message: `Welcome to Panda Health APP. Please use ${generatedOTP} to complete registration`,
                from: config.sms.senderId,
            }

            const smsresponse = await sms.send(options)
            await Audit.info(otp._id, request.body.phone, Audit.dbActions.smssent, smsresponse)
            return null
        } catch (error) {
            next(error)
            await Audit.info(otp._id, request.body.phone, Audit.dbActions.smssent, error)
            return null
        }
    },

    /**
     *@name OTPForUserPhoneVerify
     *@description verify otp sent to change phone
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async OTPForUserPhoneVerify(request, response, next) {
        try {
            const otp = await OTP.findOneByQuery({
                phone: request.body.phone,
                otp: request.body.otp,
                isActive: true,
            })
            if (!otp) {
                const err = new APIError('Invalid OTP', httpStatus.NOT_FOUND)
                return next(err)
            }
            await OTP.findByIdAndUpdate(otp._id, { isActive: false })
            const user = await User.authenticate({ phone: request.user.phone })
            user.isVerified = true
            user.phone = request.body.phone
            await user.save()
            response.status(200).send({
                ..._response,
                data: null,
                message: 'OTP is valid, Phone Number Updated!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },
}))()

export default otpController