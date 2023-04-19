import _ from 'lodash'
import httpStatus from 'http-status'
import { User } from 'database'
import _response from 'helpers/response'
import Global from 'helpers/globals'
import Email from 'services/email'
import APIError from 'helpers/APIError'
import RouteHelpers from 'helpers/routes'

/**
 *@name authController
 *@returns {Object} Functions
 */

const authController = (() => ({
    /**
     *@name user
     *@description gets a user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async user(request, response, next) {
        try {
            const vitals = await request.user.getSortedVitals()
            response.status(200).json({
                ..._response,
                data: {
                    token: request.token,
                    user: {...request.user.toJSON(), vitals },
                },
                message: 'My Profile',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name login
     *@route GET /api/v1/user/logjn
     *@description login a user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async login(request, response, next) {
        const userInfo = _.pick(request.body, ['email', 'password'])

        try {
            const user = await User.findByCredentials(userInfo)
            if (!user.isActive) {
                const err = new APIError(
                    'User is disabled by Administrator!',
                    httpStatus.UNAUTHORIZED,
                )
                return next(err)
            }
            // if (!user.isVerified) {
            //     var err = new APIError('Please verify OTP to continue', httpStatus.UNAUTHORIZED);
            //     return next(err);
            // }
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
     *@name physicianLogin
     *@route GET /api/v1/auth/physician/logjn
     *@description login a physician
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async physicianLogin(request, response, next) {
        const userInfo = _.pick(request.body, ['email', 'password'])

        try {
            const user = await User.findByCredentials(userInfo, 'PHYSICIAN')
            if (!user.isActive) {
                const err = new APIError(
                    'User is disabled by Administrator!',
                    httpStatus.UNAUTHORIZED,
                )
                return next(err)
            }
            // if (!user.isVerified) {
            //     var err = new APIError('Please verify OTP to continue', httpStatus.UNAUTHORIZED);
            //     return next(err);
            // }
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
                    message: `Found Physician: ${user.email}`,
                    status: httpStatus.OK,
                })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name socialLogin
     *@description logs in a user using social logins
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async socialLogin(request, response, next) {
        try {
            const { user, token } = await RouteHelpers.findOrCreateSocialLogin(request)
            if (!user.isActive) {
                const err = new APIError(
                    'User is disabled by Administrator!',
                    httpStatus.UNAUTHORIZED,
                )
                throw err
            }
            // if (!user.isVerify) {
            //     var err = new APIError('Please verify OTP to continue', httpStatus.UNAUTHORIZED);
            //     return next(err);
            // }
            user.ip = `${Global.getIpAddress(request)}`
            user.device = `${Global.getDeviceInfo(request)}`
            user.isOnline = true
            user.save()
            Email.sendLoginEmail({ user }, request)

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
     *@name logout
     *@description logout a user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    logout(request, response) {
        const { user } = request
        const { token } = request
        user.deleteToken(token).then(
            (user) => {
                user.isOnline = false
                user.save()
                response.status(200).send({
                    ..._response,
                    message: `Logged out User: ${user.email}`,
                    status: httpStatus.OK,
                })
            },
            () => {
                response.send({
                    ..._response,
                    status: 400,
                    errMessage: 'Something went wrong',
                })
            },
        )
        return null
    },
}))()

export default authController