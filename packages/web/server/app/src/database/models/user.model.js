/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
import createError from 'http-errors'
import httpStatus from 'http-status'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcryptjs'
import { config } from 'config'
import RouteHelpers from 'helpers/routes'

const schema = {
    profilePic: {
        type: String,
        default: '',
        trim: true,
    },
    qrcode: {
        type: String,
        default: '',
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        default: null,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        default: null,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    ip: {
        type: String,
        default: '1234567',
        required: true,
        trim: true,
    },
    device: {
        type: String,
        default: 'Chrome',
        required: true,
        trim: true,
    },
    inviteCode: {
        type: String,
        default: null,
        required: false,
        trim: true,
    },
    invitedBy: {
        type: String,
        default: null,
        required: false,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['USER', 'PHYSICIAN', 'ADMIN', 'SUPER_ADMIN', 'HEALTHCARE', 'LABORATORY', 'HMO'],
        default: 'USER',
        trim: true,
    },
    street: {
        type: String,
        default: '',
        trim: true,
    },
    city: {
        type: String,
        default: '',
        trim: true,
    },
    state: {
        type: String,
        default: '',
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    smsAlert: {
        type: Boolean,
        select: false,
        default: false,
    },
    isPrivate: {
        type: Boolean,
        select: false,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isVerified: {
        type: Boolean,
        select: false,
        default: false,
    },
    isVerifiedByEmail: {
        type: Boolean,
        select: false,
        default: false,
    },
    deviceToken: {
        type: String,
        default: null,
    },
    forgotToken: {
        type: String,
        select: false,
        default: null,
    },
    forgotTokenTimestamp: {
        type: Date,
        select: false,
        default: null,
    },
    bvnVerificationCode: {
        type: String,
        select: false,
        default: null,
    },
    bvn: {
        type: String,
        select: false,
        default: null,
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    lastSeen: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        minlength: 1,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: '{VALUE} is not a valid email',
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        // maxlength: 30,
    },
    passcode: {
        type: String,
        select: false,
        default: null,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['MALE', 'FEMALE', 'OTHER'],
        trim: true,
    },
    unit_system: {
        type: String,
        enum: ['IMPERIAL', 'METRIC'],
        default: 'METRIC',
    },
    tokens: [{
        access: {
            type: String,
            require: true,
        },
        token: {
            type: String,
            require: true,
        },
    }, ],
}

const collectionName = 'Users'
const userSchema = new mongoose.Schema(schema, { timestamp: true })

userSchema.virtual('vitals', {
    ref: 'VitalsHistory', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'user_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false,
})
userSchema.virtual('physician', {
    ref: 'Physicians', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'user_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})

userSchema.virtual('additional_info', {
    ref: 'AdditionalInfo', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'user_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})
userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()
        // const authToken = _.findIndex(userObject.tokens, { access: 'auth' })
        // const { token } = userObject.tokens[authToken]
    return _.omit(userObject, ['password', 'tokens'])
}
userSchema.methods.generateAuthToken = function generateAuthToken() {
    const user = this
    const access = 'auth'
    const token = jwt.sign({ _id: user._id.toHexString(), access }, config.token.jwtSecret, {
        expiresIn: config.token.jwtDuration,
    })
    user.tokens = user.tokens.concat([{ access, token }])
    return user.save().then(() => token)
}

userSchema.methods.generateResetToken = function generateResetToken() {
    const user = this
    const access = 'reset'
    const token = jwt.sign({ _id: user._id.toHexString(), access }, config.token.jwtResetSecret, {
        expiresIn: config.token.jwtResetDuration,
    })
    user.tokens = user.tokens.concat([{ access, token }])
    return user.save().then(() => token)
}

userSchema.methods.generateTempToken = function generateTempToken() {
    const user = this
    const access = 'temp.token'
    const token = jwt.sign({ _id: user._id.toHexString(), access }, config.token.jwtSecret, {
        expiresIn: config.token.jwtShortDuration,
    })
    user.tokens = user.tokens.concat([{ access, token }])
    return user.save().then(() => token)
}
userSchema.methods.getSortedVitals = async function getSortedVitals() {
    const user = await this.model(collectionName)
        .findOne({ _id: this._id })
        .populate({
            path: 'vitals',
            select: 'vitals createdAt',
            options: { sort: { createdAt: -1 } },
        })
    const vitals = await RouteHelpers.sortVitals({ user: { _id: user._id, vitals: user.vitals } })
    userSchema.set('toObject', { virtuals: true })
    userSchema.set('toJSON', { virtuals: true })
    return vitals
}
userSchema.methods.deleteToken = function deleteToken(token) {
    const user = this
    const { tokens } = user
    user.tokens = _.filter(tokens, (tokenObj) => tokenObj.token !== token)
    return user.save()
}

userSchema.statics.findByToken = function(token, query = {}, reset = false) {
    const User = this
    let decoded
    try {
        decoded = jwt.verify(token, reset ? config.token.jwtResetSecret : config.token.jwtSecret)
        userSchema.set('toObject', { virtuals: true })
        userSchema.set('toJSON', { virtuals: true })
        return User.findOne({
                _id: decoded._id,
                'tokens.token': token,
                'tokens.access': 'auth',
                ...query,
            })
            .populate({
                path: 'physician',
                select: '-createdAt -updatedAt',
                options: { sort: { createdAt: -1 } },
            })
            .populate({
                path: 'additional_info',
                select: '-createdAt -updatedAt',
                options: { sort: { createdAt: -1 } },
            })
            .select('+isVerified')
            .select('-createdAt -updatedAt')
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}
userSchema.statics.findByCredentials = function findByCredentials({ email, password },
    role = 'USER',
) {
    const User = this
    userSchema.set('toObject', { virtuals: true })
    userSchema.set('toJSON', { virtuals: true })
    return User.findOne({ email, role })
        .select('-createdAt -updatedAt')
        .then((user) => {
            if (!user) {
                return Promise.reject(createError(httpStatus.BAD_REQUEST, "User doesn't not exist"))
            }
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        resolve(user)
                    } else {
                        reject(createError(httpStatus.BAD_REQUEST, 'Incompatible email/password!'))
                    }
                })
            })
        })
}

userSchema.statics.findByPasscode = function findByPasscode({ email, passcode }) {
    const User = this
    userSchema.set('toObject', { virtuals: true })
    userSchema.set('toJSON', { virtuals: true })
    return User.findOne({ email })
        .select('+passcode')
        .select('-createdAt -updatedAt')
        .then((user) => {
            if (!user) {
                return Promise.reject(createError(httpStatus.BAD_REQUEST, "User doesn't not exist"))
            }
            return new Promise((resolve, reject) => {
                bcrypt.compare(passcode, user.passcode, (err, result) => {
                    if (result) {
                        resolve(user)
                    } else {
                        reject(createError(httpStatus.BAD_REQUEST, 'Incompatible passcode!'))
                    }
                })
            })
        })
}

userSchema.statics.findBySocialEmail = function(email) {
    const User = this
    return User.findOne({ email }).select('-createdAt -updatedAt')
}

/**
 *@name authenticate
 *@description find a user
 *@param {Object} identifier
 *@returns {Promise<Object>} user
 */
userSchema.statics.authenticate = function authenticate(identifier) {
    userSchema.set('toObject', { virtuals: true })
    userSchema.set('toJSON', { virtuals: true })

    return this.findOne({ isActive: true, ...identifier })
        .select(
            '+forgotToken +password +smsAlert +isVerify +isPrivate +bvnVerificationCode +bvn +virtualAccount',
        )
        .select('-createdAt -updatedAt')
        .exec()
}

/**
 *@name authenticateViaId
 *@description find a user
 *@param {Object} identifier
 *@param {Func} next
 *@returns {Promise<Object>} user
 */
userSchema.statics.authenticateViaId = function authenticateViaId(
    identifier,
    select = '+password',
    next,
) {
    userSchema.set('toObject', { virtuals: true })
    userSchema.set('toJSON', { virtuals: true })

    return this.findOne({ _id: identifier }).select('-createdAt -updatedAt').select(select)
}

/**
 *@name findOneByQuery
 *@description find a user
 *@param {Object} query
 *@returns {Promise<Object>} user
 */

userSchema.statics.findOneByQuery = function findOneByQuery(query) {
        return this.findOne(query)
            .populate({
                path: 'physician',
                select: '-createdAt -updatedAt',
                options: { sort: { createdAt: -1 } },
            })
            .populate({
                path: 'additional_info',
                select: '-createdAt -updatedAt',
                options: { sort: { createdAt: -1 } },
            })
            .select('+forgotToken +forgotTokenTimestamp')
            .select('-createdAt -updatedAt')
    }
    /**
     *@name findOneByQuery
     *@description find a users
     *@param {Object} query
     *@returns {Promise<Object>} user
     */

userSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query)
        .populate({
            path: 'physician',
            select: '-createdAt -updatedAt',
            options: { sort: { createdAt: -1 } },
        })
        .populate({
            path: 'additional_info',
            select: '-createdAt -updatedAt',
            options: { sort: { createdAt: -1 } },
        })
        .select('+forgotToken +forgotTokenTimestamp')
        .select('-createdAt -updatedAt')
}

/**
 * Get user
 * @param {ObjectId} id - The objectId of user.
 * @returns {Promise<User, APIError>}
 */
/**
 *@name findOneByQuery
 *@description find a user and exclude password
 * @param {ObjectId} id -
 *@returns {Promise<Object>} user
 */

userSchema.statics.get = function get(id) {
    return this.findById(id)
        .select('-password -passcode')
        .select('-createdAt -updatedAt')
        .exec()
        .then((user) => {
            if (user) {
                return user
            }
            const err = new APIError('No such user exists!', httpStatus.NOT_FOUND)
            return Promise.reject(err)
        })
}

userSchema.pre('save', function(next) {
    const user = this
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                console.log(err)
                next(createError(httpStatus.UNPROCESSABLE_ENTITY, err))
                return
            }
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) {
                    console.log(err)
                    next(createError(httpStatus.UNPROCESSABLE_ENTITY, err))
                    return
                }
                user.password = hash
                next()
            })
        })
    } else if (user.isModified('passcode')) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                console.log(err)
                next(createError(httpStatus.UNPROCESSABLE_ENTITY, err))
                return
            }
            bcrypt.hash(user.passcode, salt, (err, hash) => {
                if (err) {
                    console.log(err)
                    next(createError(httpStatus.UNPROCESSABLE_ENTITY, err))
                    return
                }
                user.passcode = hash
                next()
            })
        })
    } else {
        next()
    }
})

const User = mongoose.model(collectionName, userSchema)

export default User