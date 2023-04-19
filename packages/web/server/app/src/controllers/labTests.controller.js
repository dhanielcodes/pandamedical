import _ from 'lodash'
import httpStatus from 'http-status'
import _response from 'helpers/response'

// import { ObjectID } from 'mongodb'

import { LabTests } from 'database'

/**
 *@name labTestsController
 *@returns {Object} Functions
 */

const labTestsController = (() => ({
    /**
     *@name index
     *@description fetches all Lab Test Results for a user
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */

    async index(request, response, next) {
        try {
            const labTests = await LabTests.find({}).select('-createdAt -updatedAt').sort('+title')

            response.status(200).send({
                ..._response,
                data: labTests,
                message: `All User Lab Tests`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return null
        }
    },
}))()

export default labTestsController
