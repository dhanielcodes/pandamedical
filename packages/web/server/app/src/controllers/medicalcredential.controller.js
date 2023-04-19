import _ from 'lodash'
import httpStatus from 'http-status'
import { MedicalCredential } from 'database'
import _response from 'helpers/response'
// import Global from 'helpers/globals'
// import Email from 'services/email'
// import APIError from 'helpers/APIError'
// import RouteHelpers from 'helpers/routes'

/**
 *@name medicalSpecialtyController
 *@returns {Object} Functions
 */

const medicalSpecialtyController = (() => ({
    /**
     *@name index
     *@description gets medical specialty list for a user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async index(request, response, next) {
        try {
            const medicalCredentials = await MedicalCredential.findByQuery({})
            response.status(200).json({
                ..._response,
                data: {
                    medical_credentials: medicalCredentials,
                },
                message: 'Select a specialty',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },
}))()

export default medicalSpecialtyController