import _ from 'lodash'
import httpStatus from 'http-status'
import { Bookingslist } from 'database'
import _response from 'helpers/response'
// import Global from 'helpers/globals'
// import Email from 'services/email'
// import APIError from 'helpers/APIError'
// import RouteHelpers from 'helpers/routes'

/**
 *@name bookingsListController
 *@returns {Object} Functions
 */

const bookingsListController = (() => ({
    /**
     *@name index
     *@description gets booking list for a user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async index(request, response, next) {
        try {
            const bookingslist = await Bookingslist.findByQuery({})
            response.status(200).json({
                ..._response,
                data: {
                    bookingslist,
                },
                message: 'Select from the listing',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },
}))()

export default bookingsListController