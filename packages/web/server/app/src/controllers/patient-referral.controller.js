import _ from 'lodash'
import httpStatus from 'http-status'
import {
    Appointment,
    AppointmentMessage,
    PatientRecord,
    PatientReferral,
    Timeslot,
    User,
} from 'database'
import { format, set, startOfDay, endOfDay } from 'date-fns'
import _response from 'helpers/response'
// import Global from 'helpers/globals'
import { config } from 'config'
import Email from 'services/email'
import APIError from 'helpers/APIError'
// import RouteHelpers from 'helpers/routes'

// const { Email } = Global

const capitalize = (wordsArray) => {
    return wordsArray.map((word) => _.capitalize(word)).join(' ')
}

/**
 *@name patientReferralController
 *@returns {Object} Functions
 */

const patientReferralController = (() => ({
    /**
     *@name index
     *@description gets all referrals for physician
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async index(request, response, next) {
        try {
            const { _id } = request.user
            const referrals = await PatientReferral.findByQuery({
                $or: [{ healthcare_provider: _id }, { referrer: _id }, { patient: _id }],
            })
            response.status(200).json({
                ..._response,
                data: {
                    referrals,
                },
                message: 'All Referrals',
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },
    /**
     *@name create
     *@description create an appointment for patient referral
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async create(request, response, next) {
        const { firstName, lastName, phone, role } = request.user
        const body = _.pick(request.body, [
            'slot_time',
            'slot_date',
            'appointee',
            'scheduler',
            'patient',
            'topic',
            'note',
        ])
        try {
            const appointeeUser = await User.findOne({
                _id: body.appointee,
                isActive: true,
            })

            if (!appointeeUser) {
                var err = new APIError(
                    `Selected Healthcare Provider doesn't exist`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const patientUser = await User.findOne({
                _id: body.patient,
                isActive: true,
            })

            if (!patientUser) {
                var err = new APIError(
                    `Selected Patient doesn't exist`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            if (body.scheduler === body.appointee) {
                var err = new APIError('Action not allowed!', httpStatus.UNAUTHORIZED)
                return next(err)
            }

            const findUsedTimeslot = await Timeslot.findOne({
                slot_time: body.slot_time,
                slot_date: body.slot_date,
            })

            if (findUsedTimeslot) {
                var err = new APIError(
                    'Action not allowed, timeslot is not available!',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const newTimeslot = await new Timeslot({
                slot_time: body.slot_time,
                slot_date: body.slot_date,
                appointee_id: body.appointee,
            }).save()

            const newAppointment = await new Appointment({
                appointee: body.appointee,
                scheduler: body.patient,
                timeslots: newTimeslot._id,
            }).save()

            await new AppointmentMessage({
                appointment_id: newAppointment._id,
                topic: body.topic,
                note: body.note,
            }).save()

            const newReferral = await new PatientReferral({
                patient: body.patient,
                healthcare_provider: body.appointee,
                referrer: body.scheduler,
                appointment: newAppointment._id,
            }).save()

            const formattedTime = format(
                set(startOfDay(new Date(newTimeslot.slot_date)), {
                    hours: newTimeslot.slot_time,
                }),
                'h:mm aaa dd/MM/yyyy',
            )
            const url = `${config.app.baseURL}/doctor/auth/login`

            const physician = capitalize([
                appointeeUser.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                appointeeUser.firstName,
                appointeeUser.lastName,
            ])
            const patient = capitalize([
                patientUser.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                patientUser.firstName,
                patientUser.lastName,
            ])
            const referrer = capitalize([
                role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                firstName,
                lastName,
            ])
            const messageAppointee = `Hello ${physician},
              this message is to inform you that ${referrer} has created a referral consultation with ${patient} on ${formattedTime}. Please log in to panda health to continue`
            const messagePatient = `Hello ${patient}, this message is to inform you that ${referrer} created a referral consultation with ${physician} on ${formattedTime}. Please log in to panda health to continue`
            const messageScheduler = `Hello ${referrer}, this message is to confirm your referred medical appointment with ${physician} for ${patient} on ${formattedTime}
              
              `
                // await OTP.sendSMS(`${messageAppointee} ${url}`, appointeeUser.phone, appointeeUser)
                // await OTP.sendSMS(messageScheduler, phone, request.user)
            await Email.sendAppointmentEmails(request.user, 'Patient Referreal from Panda Health', {
                message: messageScheduler,
            })
            await Email.sendAppointmentEmails(
                appointeeUser,
                'Patient Referreal from Panda Health', {
                    message: messageAppointee,
                    url,
                },
            )
            await Email.sendAppointmentEmails(patientUser, 'Patient Referreal from Panda Health', {
                message: messagePatient,
                url,
            })
            response.status(200).json({
                ..._response,
                data: {
                    referral: newReferral,
                },
                message: 'Created New Referral!',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name acceptPatientReferrer
     *@description accept Patient Referral
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async acceptPatientReferrer(request, response, next) {
        const { role, _id } = request.user
        const { id } = request.params

        try {
            if (role.toLowerCase() === 'user') {
                const err = new APIError(
                    `Action is not allowed for User of this type`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const referral = await PatientReferral.findOneByQuery({
                _id: id,
                healthcare_provider: _id,
                status: 'PENDING',
            })

            if (!referral) {
                var err = new APIError(
                    `Selected Referral doesn't exist/Physician is not Allowed to perform action!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            if (referral.referrer._id === _id) {
                var err = new APIError(
                    'Action not allowed of this User!',
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            if (referral.patient._id === _id) {
                var err = new APIError(
                    'Action not allowed of this User of Patient!',
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const updatedPatientReferral = await PatientReferral.findOneByQueryAndUpdate({ _id: id }, { status: 'ACCEPTED' }, { upsert: false }, )
            const timeslot = await Timeslot.findOneAndUpdate({ _id: updatedPatientReferral.appointment.timeslots._id, status: 'PENDING' }, { status: 'ACCEPTED' }, { new: true, upsert: false }, )

            if (!timeslot) {
                var err = new APIError(
                    `Action is not allowed, Timeslot is not available!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            const formattedTime = format(
                set(startOfDay(new Date(timeslot.slot_date)), {
                    hours: timeslot.slot_time,
                }),
                'h:mm aaa dd/MM/yyyy',
            )
            const url = `${config.app.baseURL}/doctor/auth/login`

            const physician = capitalize([
                referral.healthcare_provider.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.healthcare_provider.firstName,
                referral.healthcare_provider.lastName,
            ])
            const patient = capitalize([
                referral.patient.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.patient.firstName,
                referral.patient.lastName,
            ])
            const referrer = capitalize([
                referral.referrer.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.referrer.firstName,
                referral.referrer.lastName,
            ])
            const messageAppointee = `Hello ${physician},
            this message is to inform you that you just accepted the patient transfer/referral of ${patient} from ${referrer}. ${formattedTime}.`
            const messagePatient = `Hello ${patient}, this message is to inform you that your Medical transfer/referral to ${physician} by ${referrer} has been accepted by ${physician} on ${formattedTime}. Please log in to panda health to continue`
            const messageScheduler = `Hello ${referrer}, this message is to inform you that your Patient transfer/referral medical appointment with ${physician} for ${patient} on ${formattedTime} has been aceepted! Please log in to panda health to continue   
            `
                // await OTP.sendSMS(`${messageAppointee} ${url}`, appointeeUser.phone, appointeeUser)
                // await OTP.sendSMS(messageScheduler, phone, request.user)
            await Email.sendAppointmentEmails(
                referral.referrer,
                'Patient Referral from Panda Health Accepted', {
                    message: messageScheduler,
                    url,
                },
            )
            await Email.sendAppointmentEmails(
                request.user,
                'Patient Referral from Panda Health Accepted', {
                    message: messageAppointee,
                },
            )
            await Email.sendAppointmentEmails(
                referral.patient,
                'Patient Referral from Panda Health  Accepted', {
                    message: messagePatient,
                    url,
                },
            )

            const existingRecord = await PatientRecord.findOneByQueryAndUpdate({
                healthcare_provider: _id,
                patient: id,
            })
            if (!existingRecord) {
                await PatientRecord({ healthcare_provider: _id, patient: id }).save()
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
                await Email.sendEmails(referral.patient, 'Patient Record Added', emailPatient)
            }
            response.status(200).json({
                ..._response,
                data: null,
                message: 'Accepted Patient Referral!',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name rejectPatientReferrer
     *@description reject Patient Referral
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async rejectPatientReferrer(request, response, next) {
        const { role, _id } = request.user
        const { id } = request.params

        try {
            if (role.toLowerCase() === 'user') {
                const err = new APIError(
                    `Action is not allowed for User of this type`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const referral = await PatientReferral.findOneByQuery({
                _id: id,
                healthcare_provider: _id,
                status: 'PENDING',
            })

            if (!referral) {
                var err = new APIError(
                    `Selected Referral doesn't exist/Physician is not Allowed to perform action!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            if (referral.referrer._id === _id) {
                var err = new APIError(
                    'Action not allowed of this User!',
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            if (referral.patient._id === _id) {
                var err = new APIError(
                    'Action not allowed of this User of Patient!',
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const updatedPatientReferral = await PatientReferral.findOneByQueryAndUpdate({ _id: id }, { status: 'REJECTED' }, { upsert: false }, )
            const timeslot = await Timeslot.findOneAndUpdate({ _id: updatedPatientReferral.appointment.timeslots._id, status: 'PENDING' }, { status: 'REJECTED' }, { new: true, upsert: false }, )

            if (!timeslot) {
                var err = new APIError(
                    `Action is not allowed, Timeslot is not available!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            const formattedTime = format(
                set(startOfDay(new Date(timeslot.slot_date)), {
                    hours: timeslot.slot_time,
                }),
                'h:mm aaa dd/MM/yyyy',
            )
            const url = `${config.app.baseURL}/doctor/auth/login`

            const physician = capitalize([
                referral.healthcare_provider.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.healthcare_provider.firstName,
                referral.healthcare_provider.lastName,
            ])
            const patient = capitalize([
                referral.patient.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.patient.firstName,
                referral.patient.lastName,
            ])
            const referrer = capitalize([
                referral.referrer.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.referrer.firstName,
                referral.referrer.lastName,
            ])
            const messageAppointee = `Hello ${physician},
          this message is to inform you that you just rejected the patient transfer/referral of ${patient} from ${referrer}. ${formattedTime}.`
            const messagePatient = `Hello ${patient}, this message is to inform you that your Medical transfer/referral to ${physician} by ${referrer} has been rejected by ${physician} on ${formattedTime}. Please log in to panda health to continue`
            const messageScheduler = `Hello ${referrer}, this message is to inform you that your Patient transfer/referral medical appointment with ${physician} for ${patient} on ${formattedTime} has been rejected! Please log in to panda health to continue   
          `
                // await OTP.sendSMS(`${messageAppointee} ${url}`, appointeeUser.phone, appointeeUser)
                // await OTP.sendSMS(messageScheduler, phone, request.user)
            await Email.sendAppointmentEmails(
                referral.referrer,
                'Patient Referral from Panda Health Rejected', {
                    message: messageScheduler,
                    url,
                },
            )
            await Email.sendAppointmentEmails(
                request.user,
                'Patient Referral from Panda Health Rejected', {
                    message: messageAppointee,
                },
            )
            await Email.sendAppointmentEmails(
                referral.patient,
                'Patient Referral from Panda Health  Rejected', {
                    message: messagePatient,
                    url,
                },
            )

            response.status(200).json({
                ..._response,
                data: null,
                message: 'Rejected Patient Referral!',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },
    /**
     *@name reschedulePatientReferrer
     *@description acept and reschedule Patient Referral
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async reschedulePatientReferrer(request, response, next) {
        try {
            const { role, _id } = request.user
            const { id } = request.params
            const body = _.pick(request.body, ['slot_time', 'slot_date', 'topic', 'note'])
            if (role.toLowerCase() === 'user') {
                const err = new APIError(
                    `Action is not allowed for User of this type`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const referral = await PatientReferral.findOneByQuery({
                _id: id,
                healthcare_provider: _id,
                status: 'PENDING',
            })

            if (!referral) {
                var err = new APIError(
                    `Selected Referral doesn't exist/Physician is not Allowed to perform action!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            if (referral.referrer._id === _id) {
                var err = new APIError(
                    'Action not allowed of this User!',
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            if (referral.patient._id === _id) {
                var err = new APIError(
                    'Action not allowed of this User of Patient!',
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const updatedPatientReferral = await PatientReferral.findOneByQueryAndUpdate({ _id: id }, { status: 'ACCEPTED' }, { upsert: false }, )

            const findUsedTimeslot = await Timeslot.findOne({
                slot_time: body.slot_time,
                slot_date: body.slot_date,
            })

            if (findUsedTimeslot) {
                var err = new APIError(
                    'Action not allowed timeslot is not available!',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const newTimeslot = await new Timeslot({
                    slot_time: body.slot_time,
                    slot_date: body.slot_date,
                    appointee_id: updatedPatientReferral.healthcare_provider._id,
                }).save()
                // Creates a new record from a submitted form
            const newAppointment = await new Appointment({
                appointee: updatedPatientReferral.healthcare_provider._id,
                scheduler: updatedPatientReferral.patient._id,
                timeslots: newTimeslot._id,
            }).save()

            await new AppointmentMessage({
                appointment_id: newAppointment._id,
                topic: body.topic,
                note: body.note,
            }).save()

            await Appointment.findByIdAndUpdate(updatedPatientReferral.appointment._id, {
                rescheduled_timeslot: newTimeslot._id,
            })

            const timeslot = await Timeslot.findOneAndUpdate({ _id: updatedPatientReferral.appointment.timeslots._id, status: 'PENDING' }, { status: 'RESCHEDULED' }, { new: true, upsert: false }, )

            if (!timeslot) {
                var err = new APIError(
                    `Action is not allowed, Timeslot is not available!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const formattedTime = format(
                set(startOfDay(new Date(newTimeslot.slot_date)), {
                    hours: newTimeslot.slot_time,
                }),
                'h:mm aaa dd/MM/yyyy',
            )

            const oldFormattedTime = format(
                set(startOfDay(new Date(timeslot.slot_date)), {
                    hours: timeslot.slot_time,
                }),
                'h:mm aaa dd/MM/yyyy',
            )

            const url = `${config.app.baseURL}/doctor/auth/login`

            const physician = capitalize([
                referral.healthcare_provider.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.healthcare_provider.firstName,
                referral.healthcare_provider.lastName,
            ])
            const patient = capitalize([
                referral.patient.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.patient.firstName,
                referral.patient.lastName,
            ])
            const referrer = capitalize([
                referral.referrer.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                referral.referrer.firstName,
                referral.referrer.lastName,
            ])
            const messageAppointee = `Hello ${physician},
        this message is to inform you that you just rescheduled the patient transfer/referral of ${patient} from ${referrer}.from ${oldFormattedTime} to  ${formattedTime}.`
            const messagePatient = `Hello ${patient}, this message is to inform you that your Medical transfer/referral to ${physician} by ${referrer} has been reschuled by ${physician}, from ${oldFormattedTime} to ${formattedTime}. Please log in to panda health to continue`
            const messageScheduler = `Hello ${referrer}, this message is to inform you that your Patient transfer/referral medical appointment with ${physician} for ${patient} on has been rescheduled from ${oldFormattedTime} to ${formattedTime}, by ${physician}!. Please log in to panda health to continue   
        `
                // await OTP.sendSMS(`${messageAppointee} ${url}`, appointeeUser.phone, appointeeUser)
                // await OTP.sendSMS(messageScheduler, phone, request.user)
            await Email.sendAppointmentEmails(
                referral.referrer,
                'Patient Referral from Panda Health Rescheduled', {
                    message: messageScheduler,
                    url,
                },
            )
            await Email.sendAppointmentEmails(
                request.user,
                'Patient Referral from Panda Health Rescheduled', {
                    message: messageAppointee,
                },
            )
            await Email.sendAppointmentEmails(
                referral.patient,
                'Patient Referral from Panda Health  Rescheduled', {
                    message: messagePatient,
                    url,
                },
            )

            const existingRecord = await PatientRecord.findOneByQueryAndUpdate({
                healthcare_provider: _id,
                patient: id,
            })
            if (!existingRecord) {
                await PatientRecord({ healthcare_provider: _id, patient: id }).save()
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
                await Email.sendEmails(referral.patient, 'Patient Record Added', emailPatient)
            }

            response.status(200).json({
                ..._response,
                data: null,
                message: 'Rescheduled Patient Referral!',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },
}))()

export default patientReferralController