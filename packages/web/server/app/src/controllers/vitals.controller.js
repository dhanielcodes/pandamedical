import _ from 'lodash'
import _response from 'helpers/response'
import httpStatus from 'http-status'
import APIError from 'helpers/APIError'

import { Vitals, VitalsHistory } from 'database'
import { ObjectId } from 'mongodb'
/**
 *@name vitalsController
 *@returns {Object} Functions
 */

const vitalsController = (() => ({
    /**
     *@name index
     *@description fetches all vital options
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */

    async index(request, response, next) {
        try {
            const vitals = await Vitals.find({}).select('-createdAt -updatedAt')
            response.status(200).send({
                ..._response,
                data: vitals,
                message: `All Vitals Options`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name create
     *@description Allow a user to create a new vital
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */

    async create(request, response, next) {
        const vitals = _.pick(request.body, [
            'comment',
            'date_entered',
            'timestamp',
            'vitals',
            'user_id',
            'observer_id',
            'source',
            'created_by',
        ])
        try {
            const userid = request.user._id
            if (userid.toHexString() !== vitals.user_id) {
                const err = new APIError('User is not Authorized!', httpStatus.UNAUTHORIZED)
                return next(err)
            }
            const newVital = await new VitalsHistory({
                ...vitals,
                user_id: userid,
            }).save()
            response.status(200).send({
                ..._response,
                data: newVital,
                message: `New Vital Created`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },
}))()

export default vitalsController
