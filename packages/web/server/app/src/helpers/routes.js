import _ from 'lodash'
import validator from 'validator'
import httpStatus from 'http-status'
import { User, SocialAccount, Vitals, VitalsHistory } from 'database'
import Global from 'helpers/globals'
import APIError from 'helpers/APIError'
import firebase from 'services/firebase'

/**
 *@name RouteHelpers
 *@returns {Object} Functions
 */

const RouteHelpers = (() => {
    /**
     *@name createUser
     *@description creates a new user
     *@param {Object} body
     *@returns {Null} null
     */
    const createUser = async(body) => {
        const userInfo = _.pick(body, [
            'firstName',
            'lastName',
            'email',
            'password',
            'gender',
            'dateOfBirth',
            'phone',
            'role',
            'profilePic',
        ])
        if (userInfo.role && userInfo.role.toUpperCase() !== 'USER') {
            const err = new APIError('Role Does Not Exist!', httpStatus.UNPROCESSABLE_ENTITY)
            throw err
        }
        try {
            const randomString = await Global.randomString(3)
            let userExists = await User.findOne({ email: userInfo.email })
            if (userExists) {
                const err = new APIError('User already exists!', httpStatus.UNPROCESSABLE_ENTITY)
                throw err
            }
            userExists = await User.findOne({ phone: userInfo.phone })
            if (userExists) {
                const err = new APIError('Phone already exists!', httpStatus.UNPROCESSABLE_ENTITY)
                throw err
            }
            const username = `${_.split(userInfo.email, '@')[0]}_${randomString}`
            const newUser = await new User({...userInfo, username }).save()
            const token = await newUser.generateAuthToken()

            return {
                token,
                newUser,
            }
        } catch (error) {
            return Promise.reject(error)
        }
    }

    /**
     *@name findOrCreateSocialLogin
     *@description creates a new social user
     *@param {Object} request
     *@return
     */
    const findOrCreateSocialLogin = async(request) => {
            const userInfo = _.pick(request.body, [
                'firstName',
                'lastName',
                'password',
                'email',
                'gender',
                'dateOfBirth',
                'phone',
                'role',
                'profilePic',
                'accessToken',
                'refreshToken',
            ])

            const bearerToken = request.headers['x-auth'] || request.headers.authorization
            const bearer = 'Bearer'
            let IdToken

            if (validator.contains(bearerToken, bearer)) {
                const [_bearer, _token] = _.split(bearerToken, ' ')
                IdToken = _token
            } else {
                IdToken = bearerToken
            }
            const { platform } = request.params

            if (!IdToken) {
                const err = new APIError('No Access Token!', httpStatus.UNAUTHORIZED)
                throw err
            }
            try {
                const verify = await firebase.admin.auth().verifyIdToken(IdToken)
                if (!verify) {
                    const err = new APIError('Invalid Access Token!', httpStatus.UNAUTHORIZED)
                    throw err
                }
                if (verify.email !== userInfo.email) {
                    const err = new APIError('User Not Authorized!', httpStatus.UNAUTHORIZED)
                    throw err
                }
                const existingSocialUser = await SocialAccount.findBySocialId(verify.user_id)
                if (existingSocialUser) {
                    return {
                        user: existingSocialUser,
                        token: await existingSocialUser.generateAuthToken(),
                    }
                }
                const access =
                    typeof userInfo.accessToken === 'string' ?
                    userInfo.accessToken :
                    userInfo.accessToken.oauthAccessToken
                const existingUserNoSocials = await User.findBySocialEmail(verify.email)
                if (existingUserNoSocials) {
                    await new SocialAccount({
                        userId: existingUserNoSocials._id,
                        socialPlatformId: verify.user_id,
                        platform: verify.firebase.sign_in_provider || platform,
                        access,
                        refresh: userInfo.refreshToken,
                    }).save()
                    existingUserNoSocials.isVerifiedByEmail = true
                    await existingUserNoSocials.save()
                    return {
                        user: existingUserNoSocials,
                        token: await existingUserNoSocials.generateAuthToken(),
                    }
                }
                const { newUser: user, token } = await createUser({
                    ...userInfo,
                    password: verify.user_id,
                    profilePic: userInfo.profilePic || verify.picture,
                    isVerifiedByEmail: true,
                })
                user.isVerifiedByEmail = true
                await user.save()
                await new SocialAccount({
                    userId: user._id,
                    socialPlatformId: verify.user_id,
                    platform: verify.firebase.sign_in_provider || platform,
                    access,
                    refresh: userInfo.refreshToken,
                }).save()
                return { user, token }
            } catch (error) {
                return Promise.reject(error)
            }
        }
        /**
         *@name sortVitals
         *@description this function parses the vitals array into a object of vitals
         *@param {Object} request
         *@return
         */
    const sortVitals = async(request) => {
        const bpNominals = await Vitals.findOne({ key: 'blood_pressure' })
        const heartRateNominals = await Vitals.findOne({ key: 'heart_rate' })
        const computedVitals = {}
        const bpAverage = []
        const heartrateAverage = []
        const average = (array) => Math.floor(array.reduce((a, b) => a + b) / array.length)
        const vitalsArray = request.user.vitals
        for (const vital of vitalsArray) {
            for (const currentVital of vital.vitals) {
                if (!computedVitals[currentVital.vitals_key]) {
                    if (currentVital.vitals_key === 'blood_pressure') {
                        const records = await VitalsHistory.find({
                            user_id: request.user._id,
                            'vitals.vitals_key': currentVital.vitals_key,
                        })
                        const defaultValue = parseInt(currentVital.vitals_default_value, 10)
                        const secondaryValue = parseInt(currentVital.vitals_secondary_value, 10)
                        bpAverage.push(defaultValue)
                        computedVitals['blood_pressure'] = {
                            systolic: defaultValue,
                            diastolic: secondaryValue,
                            unit: currentVital.unit,
                            number_of_records: records.length,
                            latest_record: vital.createdAt,
                            history: {
                                low: defaultValue <= bpNominals.norminal_values.low &&
                                    defaultValue <= bpNominals.norminal_values.low - 1 ?
                                    1 :
                                    0,
                                normal: defaultValue >= bpNominals.norminal_values.normal &&
                                    defaultValue < bpNominals.norminal_values.high - 10 ?
                                    1 :
                                    0,
                                high: defaultValue >= bpNominals.norminal_values.high - 10 ? 1 : 0,
                            },
                        }
                    } else if (currentVital.vitals_key === 'heart_rate') {
                        const records = await VitalsHistory.find({
                            user_id: request.user._id,
                            'vitals.vitals_key': currentVital.vitals_key,
                        })
                        const defaultValue = parseInt(currentVital.vitals_default_value, 10)
                        heartrateAverage.push(defaultValue)
                        computedVitals['heart_rate'] = {
                            value: defaultValue,
                            unit: currentVital.unit,
                            number_of_records: records.length,
                            latest_record: vital.createdAt,
                            history: {
                                low: defaultValue < heartRateNominals.norminal_values.low // &&
                                    ? // defaultValue <= heartRateNominals.norminal_values.low - 5
                                    1 :
                                    0,
                                normal: defaultValue >= heartRateNominals.norminal_values.normal - 20 &&
                                    defaultValue <= heartRateNominals.norminal_values.high ?
                                    1 :
                                    0,
                                high: defaultValue > heartRateNominals.norminal_values.high ? 1 : 0,
                            },
                        }
                    } else {
                        const defaultValue = parseFloat(currentVital.vitals_default_value)
                        const records = await VitalsHistory.find({
                            user_id: request.user._id,
                            'vitals.vitals_key': currentVital.vitals_key,
                        })
                        computedVitals[currentVital.vitals_key] = {
                            value: defaultValue,
                            unit: currentVital.unit,
                            number_of_records: records.length,
                            lastest_record: currentVital.createdAt,
                            latest_record: vital.createdAt,
                        }
                    }
                } else if (
                    computedVitals[currentVital.vitals_key] &&
                    currentVital.vitals_key === 'blood_pressure'
                ) {
                    const defaultValue = parseInt(currentVital.vitals_default_value, 10)
                    bpAverage.push(defaultValue)
                    computedVitals['blood_pressure'].history = {
                        ...computedVitals['blood_pressure'].history,
                        low: defaultValue <= bpNominals.norminal_values.low &&
                            defaultValue <= bpNominals.norminal_values.normal - 1 ?
                            computedVitals['blood_pressure'].history.low + 1 :
                            computedVitals['blood_pressure'].history.low,
                        normal: defaultValue >= bpNominals.norminal_values.normal &&
                            defaultValue < bpNominals.norminal_values.high - 10 ?
                            computedVitals['blood_pressure'].history.normal + 1 :
                            computedVitals['blood_pressure'].history.normal,
                        high: defaultValue >= bpNominals.norminal_values.high - 10 ?
                            computedVitals['blood_pressure'].history.high + 1 :
                            computedVitals['blood_pressure'].history.high,
                    }
                } else if (
                    computedVitals[currentVital.vitals_key] &&
                    currentVital.vitals_key === 'heart_rate'
                ) {
                    const defaultValue = parseInt(currentVital.vitals_default_value, 10)
                    heartrateAverage.push(defaultValue)
                    computedVitals['heart_rate'].history = {
                        ...computedVitals['heart_rate'].history,
                        low: defaultValue < heartRateNominals.norminal_values.low // &&
                            ? // defaultValue <= bpNominals.norminal_values.normal - 1
                            computedVitals['heart_rate'].history.low + 1 :
                            computedVitals['heart_rate'].history.low,
                        normal: defaultValue >= heartRateNominals.norminal_values.normal - 20 &&
                            defaultValue <= heartRateNominals.norminal_values.high ?
                            computedVitals['heart_rate'].history.normal + 1 :
                            computedVitals['heart_rate'].history.normal,
                        high: defaultValue > heartRateNominals.norminal_values.high ?
                            computedVitals['heart_rate'].history.high + 1 :
                            computedVitals['heart_rate'].history.high,
                    }
                }
            }
        }
        if (computedVitals['blood_pressure'] && computedVitals['blood_pressure'].history) {
            computedVitals['blood_pressure'].history.average = average(bpAverage)
        }

        if (computedVitals['heart_rate'] && computedVitals['heart_rate'].history) {
            computedVitals['heart_rate'].history.average = average(heartrateAverage)
        }
        return computedVitals
    }
    return { createUser, findOrCreateSocialLogin, sortVitals }
})()

export default RouteHelpers