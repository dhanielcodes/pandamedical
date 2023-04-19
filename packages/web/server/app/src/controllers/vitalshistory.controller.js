import _ from 'lodash'
import httpStatus from 'http-status'
import _response from 'helpers/response'

// import { ObjectID } from 'mongodb'

import { VitalsHistory } from 'database'

/**
 *@name vitalsHistoryController
 *@returns {Object} Functions
 */

const vitalsHistoryController = (() => ({
    /**
     *@name index
     *@description fetches all Vitals History for a user
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */

    async index(request, response, next) {
        const { _id } = request.user
        try {
            const vitalsHistory = await VitalsHistory.find({ user_id: _id })
                .select('-createdAt -updatedAt')
                .sort('-createdAt')

            response.status(200).send({
                ..._response,
                data: vitalsHistory,
                message: `All User Vitals History`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },

    /**
     *@name fetch
     *@description fetches particular Vital History for a user
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */

    async fetch(request, response, next) {
        const { _id } = request.user
        const { vital } = request.params
        try {
            const vitalsHistory = await VitalsHistory.findByIdAndVitalKey(_id, vital)
                // VitalsHistory.aggregate([
                //     {
                //         $match: {
                //             user_id: _id,
                //             vitals: {
                //                 $elemMatch: {
                //                     $and: [{ vitals_key: vital }],
                //                 },
                //             },
                //         },
                //     },
                //     {
                //         $project: {
                //             source: 1,
                //             comment: 1,
                //             date_entered: 1,
                //             timestamp: 1,
                //             user_id: 1,
                //             observer_id: 1,
                //             created_by: 1,
                //             createdAt: 1,
                //             updatedAt: 1,
                //             vitals: {
                //                 $filter: {
                //                     input: '$vitals',
                //                     as: 'vitals',
                //                     cond: {
                //                         $and: [{ $eq: ['$$vitals.vitals_key', vital] }],
                //                     },
                //                 },
                //             },
                //         },
                //     },
                // ]).sort('-createdAt')

            response.status(200).send({
                ..._response,
                data: vitalsHistory,
                message: `All User Vitals History`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },
}))()

export default vitalsHistoryController