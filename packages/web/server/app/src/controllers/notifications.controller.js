import _ from 'lodash'
import httpStatus from 'http-status'
import { Notifications } from 'database'
import _response from 'helpers/response'
// import Global from 'helpers/globals'
// import Email from 'services/email'
// import APIError from 'helpers/APIError'
// import RouteHelpers from 'helpers/routes'

/**
 *@name notificationController
 *@returns {Object} Functions
 */

const notificationsController = (() => ({
    /**
     *@name index
     *@description gets all notifications for a user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async index(request, response, next) {
        const { _id } = request.user
        try {
            const notifications = await Notifications.findByQuery({ user_id: _id, isActive: true })
            response.status(200).json({
                ..._response,
                data: {
                    notifications,
                },
                message: 'Notifications',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },
}))()

export default notificationsController