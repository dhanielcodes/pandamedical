import APIError from 'helpers/APIError'
import httpStatus from 'http-status'

const validator = require('validator')
const _ = require('lodash')
const _response = require('../helpers/response')

const { User } = require('../database')

const authenticate = (request, response, next) => {
    const bearerToken = request.headers.authorization || request.header('x-auth') || ''
    const bearer = 'Bearer'
    let token
    if (validator.contains(bearerToken, bearer)) {
        const [_bearer, _token] = _.split(bearerToken, ' ')
        token = _token
    } else {
        token = bearerToken
    }

    User.findByToken(token)
        .then((user) => {
            if (!user) {
                const err = new APIError('User is Not Authorised', httpStatus.UNAUTHORIZED)
                return next(err)
            }
            if (!user.isActive) {
                const err = new APIError(
                    'User is disabled by Administrator!',
                    httpStatus.UNAUTHORIZED,
                )
                return next(err)
            }
            // if (!user.isVerified) {
            //     const err = new APIError('Please verify Phone to continue', httpStatus.UNAUTHORIZED)
            //     return next(err)
            // }
            request.user = user
            request.token = token
            next()
        })
        .catch((err) => {
            err.type = 'token'
            err.message = null
            next(err)
        })
}

export const authenticateTempToken = (request, response, next) => {
    const bearerToken = request.headers.authorization || request.header('x-auth') || ''
    const bearer = 'Bearer'
    let token

    if (validator.contains(bearerToken, bearer)) {
        const [_bearer, _token] = _.split(bearerToken, ' ')
        token = _token
    } else {
        token = bearerToken
    }
    User.findByToken(token, { 'tokens.access': 'temp.token' })
        .then((user) => {
            if (!user) {
                const err = new APIError('User is Not Authorised', httpStatus.UNAUTHORIZED)
                return next(err)
            }
            if (!user.isActive) {
                const err = new APIError(
                    'User is disabled by Administrator!',
                    httpStatus.UNAUTHORIZED,
                )
                return next(err)
            }
            if (!user.isVerified) {
                const err = new APIError('Please verify Phone to continue', httpStatus.UNAUTHORIZED)
                return next(err)
            }
            request.user = user
            request.token = token
            next()
        })
        .catch((err) => {
            if (err.name === 'TokenExpiredError') {
                err.message = 'Your Session has expired!, Please send a new reset request!'
            }
            next(err)
        })
}

export const authenticateResetToken = (request, response, next) => {
    const bearerToken = request.headers.authorization || request.header('x-auth') || ''
    const bearer = 'Bearer'
    let token

    if (validator.contains(bearerToken, bearer)) {
        const [_bearer, _token] = _.split(bearerToken, ' ')
        token = _token
    } else {
        token = bearerToken
    }
    const reset = true
    User.findByToken(token, { 'tokens.access': 'reset' }, reset)
        .then((user) => {
            if (!user) {
                const err = new APIError("User doesn't exist!", httpStatus.UNAUTHORIZED)
                return next(err)
            }
            if (!user.isActive) {
                const err = new APIError(
                    'User is disabled by Administrator!',
                    httpStatus.UNAUTHORIZED,
                )
                return next(err)
            }
            if (!user.isVerified) {
                const err = new APIError('Please verify Phone to continue', httpStatus.UNAUTHORIZED)
                return next(err)
            }
            request.user = user
            request.token = token
            next()
        })
        .catch((err) => {
            if (err.name === 'TokenExpiredError') {
                err.message = 'Your Session has expired!, Please send a new reset request!'
            }
            next(err)
        })
}
export default authenticate