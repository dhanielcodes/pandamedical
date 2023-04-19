import _ from 'lodash'
import httpStatus from 'http-status'
import _response from 'helpers/response'

// import { ObjectID } from 'mongodb'

import { LabTestResults } from 'database'

/**
 *@name labResultsController
 *@returns {Object} Functions
 */

const labResultsController = (() => ({
    /**
     *@name index
     *@description fetches all Lab Test Results for a user
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */

    async index(request, response, next) {
        const { _id } = request.user
        try {
            const labResultsHistory = await LabTestResults.find({ user_id: _id })
                .select('-createdAt -updatedAt')
                .sort('-createdAt')

            response.status(200).send({
                ..._response,
                data: labResultsHistory,
                message: `All User Lab Result History`,
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
     *@description creates new Lab Test for a user
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */

    async create(request, response, next) {
        const { _id } = request.user
        const labs = _.pick(request.body, [
            'comment',
            'date_entered',
            'timestamp',
            'lab_tests',
            'user_id',
            'observer_id',
            'source',
            'created_by',
        ])
        try {
            const userid = request.user._id
            if (userid.toHexString() !== labs.user_id) {
                const err = new APIError('User is not Authorized!', httpStatus.UNAUTHORIZED)
                return next(err)
            }
            const newLabs = await new LabTestResults({
                ...labs,
                user_id: userid,
            }).save()
            response.status(200).send({
                ..._response,
                data: newLabs,
                message: `New Labs Created`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },
}))()

export default labResultsController
