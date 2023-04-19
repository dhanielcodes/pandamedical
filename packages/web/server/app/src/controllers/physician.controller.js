import _ from 'lodash'
import httpStatus from 'http-status'
import { Physician, PatientRecord, User } from 'database'
import _response from 'helpers/response'
import { config } from 'config'
// import Global from 'helpers/globals'
import Email from 'services/email'
import APIError from 'helpers/APIError'
// import RouteHelpers from 'helpers/routes'

const capitalize = (wordsArray) => {
    return wordsArray.map((word) => _.capitalize(word)).join(' ')
}

/**
 *@name physicianController
 *@returns {Object} Functions
 */

const physicianController = (() => ({
    /**
     *@name index
     *@description gets all physicians user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async index(request, response, next) {
        try {
            const physicians = await Physician.findByQuery({})
            response.status(200).json({
                ..._response,
                data: {
                    physicians,
                },
                message: 'Available Physicians',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name fetchBySpecialty
     *@description fetch all physician user by their specialty
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async fetchBySpecialty(request, response, next) {
        const { specialty } = request.params
        try {
            const physicians = await Physician.findByQuery({ 'specialty.field': specialty })
            response.status(200).json({
                ..._response,
                data: {
                    physicians,
                },
                message: 'Available Physicians',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name fetch
     *@description gets specific physician user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async fetch(request, response, next) {
        const { id } = request.params
        try {
            const physician = await Physician.findOneByQuery({ user_id: id })
            response.status(200).json({
                ..._response,
                data: {
                    physician,
                },
                message: 'Found Physician!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name fetchPatients
     *@description fetch physician's patients
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async fetchPatients(request, response, next) {
        const { role, _id } = request.user
        const { search } = request.query
        const select =
            '-forgotToken -forgotTokenTimestamp -deviceToken -createdAt -updatedAt -ip -inviteCode -invitedBy -unit_system -id -device'
        try {
            if (role.toLowerCase() !== 'physician') {
                const err = new APIError(
                    `Action is not allowed for this User!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            const regex = new RegExp(search, 'i')
            let patients = await PatientRecord.findByQuery({ healthcare_provider: _id })

            if (search) {
                patients = await PatientRecord.findByQuery({
                    healthcare_provider: _id,
                }).populate({
                    path: 'patient',
                    select: select,
                    match: {},
                    options: { sort: {} },
                })
            }
            response.status(200).json({
                ..._response,
                data: {
                    patients,
                },
                message: 'Found your Patients!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name fetchPatient
     *@description fetch sprcific patient
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async fetchPatient(request, response, next) {
        const { role, _id } = request.user
        const { id } = request.params
        const select =
            '-forgotToken -forgotTokenTimestamp -deviceToken -createdAt -updatedAt -ip -inviteCode -invitedBy -unit_system -id -device'
        try {
            if (role.toLowerCase() !== 'physician') {
                const err = new APIError(
                    `Action is not allowed for this User!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const recordsAccess = await PatientRecord.findOneByQuery({
                healthcare_provider: _id,
                patient: id,
                status: 'ACCEPTED',
                medical_record_access: true,
            })
            if (!recordsAccess) {
                const err = new APIError(
                    `Physician doesn't have required privileges to view Patients Medical Records!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const patientRecord = await User.findOneByQuery({
                _id: recordsAccess.patient._id,
            }).select(select)
            const vitals = await patientRecord.getSortedVitals()

            response.status(200).json({
                ..._response,
                data: {
                    patientRecord: {
                        ...patientRecord.toJSON(),
                        vitals,
                    },
                },
                message: 'Found your Patient!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name update
     *@description update specific physician user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async update(request, response, next) {
        const body = _.pick(request.body, [
            'credentials',
            'title',
            'shorthand',
            'specialty',
            'subspecialty',
            'started_practice',
        ])
        const { user } = request
        const { id } = request.params
        if (user.role !== 'PHYSICIAN') {
            const err = new APIError(
                'User has to be a Physician to be authorized for this action!',
                httpStatus.UNAUTHORIZED,
            )
            return next(err)
        }
        if (user._id.toHexString() !== id) {
            const err = new APIError(
                'User is not authorized for this action!',
                httpStatus.UNAUTHORIZED,
            )
            return next(err)
        }
        try {
            const physician = await Physician.findOneByQueryIdAndUpdate({ user_id: user._id }, body)
            response.status(200).json({
                ..._response,
                data: {
                    physician,
                },
                message: 'Physician Updated!',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },

    /**
     *@name fetchPatientTypeUsers
     *@description this endpoint helps a Physican to fetch a active patients on the platform
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async fetchPatientTypeUsers(request, response, next) {
        const select =
            '-forgotToken -forgotTokenTimestamp -deviceToken -createdAt -updatedAt -ip -inviteCode -invitedBy -unit_system -id -device'
        try {
            const { role } = request.user
            const { patient } = request.query
            const regex = new RegExp(patient, 'i')

            if (role.toLowerCase() !== 'physician') {
                const err = new APIError(
                    `Action is not allowed for this User!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            let users = await User.findByQuery({
                    isActive: true,
                    role: 'USER',
                })
                .populate({
                    path: 'additional_info',
                    select: '-createdAt -updatedAt -primary_specialist -emergency_contact -_id',
                    options: { sort: { createdAt: -1 } },
                })
                .select(select)
            if (patient) {
                users = await User.findByQuery({
                        isActive: true,
                        role: 'USER',
                        $or: [
                            { firstName: regex },
                            { lastName: regex },
                            { email: regex },
                            { phone: regex },
                            { username: regex },
                        ],
                    })
                    .populate({
                        path: 'additional_info',
                        select: '-createdAt -updatedAt -primary_specialist -emergency_contact -_id',
                        options: { sort: { createdAt: -1 } },
                    })
                    .select(select)
            }

            response.status(200).send({
                ..._response,
                data: { users },
                message: `Active `,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name addPatient
     *@description this endpoint allows a Physican to add patient
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async addPatient(request, response, next) {
        try {
            const { _id, role, firstName, lastName } = request.user
            const { id } = request.params
            if (role.toLowerCase() !== 'physician') {
                const err = new APIError(
                    `Action is not allowed User of this type`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const nonPatientType = await User.findOneByQuery({ _id: id })
            if (!nonPatientType) {
                const err = new APIError(`User does Not exist!`, httpStatus.UNPROCESSABLE_ENTITY)
                return next(err)
            }
            if (nonPatientType.role.toLowerCase() !== 'user') {
                const err = new APIError(
                    `Action is not allowed for this type User!`,
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const existingRecord = await PatientRecord.findOneByQuery({
                healthcare_provider: _id,
                patient: id,
            })
            if (existingRecord) {
                const err = new APIError(
                    `Record Already exist for this Patient!`,
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const newRecord = await PatientRecord({ healthcare_provider: _id, patient: id }).save()
            const patientRecord = await PatientRecord.findOneByQuery({
                healthcare_provider: newRecord.healthcare_provider,
                patient: newRecord.patient,
            })

            const physician = capitalize([
                role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                firstName,
                lastName,
            ])
            const patient = capitalize([
                patientRecord.patient.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                patientRecord.patient.firstName,
                patientRecord.patient.lastName,
            ])
            const emailPhysician = `Dear ${physician}, 
            <br>
                you just created a patient's record for User, 
            <br>
                ${patient}
            <br>
            `
            const emailPatient = `Dear ${patient},
            <br>
                a patient's record was create by ${physician} for you.
            <br>
            Please login to view this <a href='${config.app.baseURL}/auth/login'>Click here</a>
            `
            await Email.sendEmails(request.user, 'Patient Record Added', emailPhysician)
            await Email.sendEmails(patientRecord.patient, 'Patient Record Added', emailPatient)
            response.status(200).send({
                ..._response,
                data: {
                    patientRecord,
                },
                message: `User Added as a patient`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name requestAccessToMedicalRecord
     *@description this endpoint helps a Physican to request patient access to medical records
     *@param {Object} request
     *@param {Object} response
     *@param {Function} next
     *@returns {Null} null
     */
    async requestAccessToMedicalRecord(request, response, next) {
        try {
            const { _id, firstName, lastName, role } = request.user
            const { id } = request.params
            if (role.toLowerCase() !== 'physician') {
                const err = new APIError(
                    `Action is not allowed User of this type`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            const existingRecord = await PatientRecord.findOneByQuery({
                healthcare_provider: _id,
                patient: id,
            })
            if (existingRecord.status === 'ACCEPTED') {
                const err = new APIError(
                    `Access to Medical Record/History for this Patient aleady Granted!`,
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }

            if (existingRecord.status === 'PENDING') {
                const err = new APIError(
                    `Request for Medical Record/History for this Patient aleady sent!`,
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const patientRecord = await PatientRecord.findOneByQueryAndUpdate({
                healthcare_provider: _id,
                patient: id,
                $or: [{ status: 'NON-ACCESS' }, { status: 'REJECTED' }],
            }, {
                healthcare_provider: _id,
                patient: id,
                status: 'PENDING',
                medical_record_access: false,
            }, )

            const physician = capitalize([
                role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                firstName,
                lastName,
            ])
            const patient = capitalize([
                patientRecord.patient.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                patientRecord.patient.firstName,
                patientRecord.patient.lastName,
            ])
            const emailPhysician = `Dear ${physician}, 
            <br>
                you just requested access to the Medical Record/History for, 
            <br>
                ${patient}
            <br>
            `
            const emailPatient = `Dear ${patient},
            <br>
            ${physician} is requesting access to your medical 
                Records/History from panda health.
                <br> 
                Granting access would give the ability to go through your records 
                and aid during consultation
            <br>
            Please login to view this <a href='${config.app.baseURL}/auth/login'>Click here</a>
            `
            await Email.sendEmails(
                request.user,
                'Access to Patient Medical Record/History Request',
                emailPhysician,
            )
            await Email.sendEmails(
                patientRecord.patient,
                'Access to Patient Medical Record/History Request',
                emailPatient,
            )
            response.status(200).send({
                ..._response,
                data: null,
                message: `Request for Access to Medical Record/History Sent`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
        }
    },
}))()

export default physicianController