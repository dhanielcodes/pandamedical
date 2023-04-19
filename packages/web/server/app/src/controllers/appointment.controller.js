import _ from 'lodash'
import { format, set, startOfDay, endOfDay } from 'date-fns'
import httpStatus from 'http-status'
import APIError from 'helpers/APIError'
import { Appointment, Timeslot, User, AppointmentMessage } from 'database'
import _response from 'helpers/response'
import Email from 'services/email'
import { config } from 'config'
import OTP from './otp.controller'
// import Global from 'helpers/globals'

// import RouteHelpers from 'helpers/routes'

const capitalize = (wordsArray) => {
        return wordsArray.map((word) => _.capitalize(word)).join(' ')
    }
    /**
     *@name appointmentController
     *@returns {Object} Functions
     */

const appointmentController = (() => ({
    /**
     *@name index
     *@description get all appointment for user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async index(request, response, next) {
        const { id } = request.params
        const { start_date, end_date } = request.query
        try {
            let appointments = await Appointment.findByQuery({
                $or: [{ appointee: id }, { scheduler: id }],
            })
            if (start_date && end_date) {
                appointments = await Appointment.findByQuery({
                    $or: [{ appointee: id }, { scheduler: id }],
                }).populate({
                    path: 'timeslots',
                    select: '-createdAt -updatedAt',
                    match: {
                        slot_date: { $gte: new Date(start_date), $lte: new Date(end_date) },
                    },
                    options: { sort: { slot_date: 1, slot_time: 1 } },
                })
            }
            const filteredAppointments = _.filter(
                appointments,
                (appointment) => appointment.timeslots !== null,
            )

            response.status(200).json({
                ..._response,
                data: {
                    appointments: _.orderBy(
                        filteredAppointments,
                        (appointment) => [
                            appointment.timeslots.slot_time,
                            appointment.timeslots.slot_date,
                        ], ['asc', 'asc'],
                    ),
                },
                message: 'Found your appointments',
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
     *@description get create an appointment for user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async create(request, response, next) {
        const { firstName, lastName, phone } = request.user
        const body = _.pick(request.body, [
            'slot_time',
            'slot_date',
            'appointee',
            'scheduler',
            'topic',
            'note',
        ])
        try {
            const appointeeUser = await User.findOne({
                _id: body.appointee,
            })

            if (!appointeeUser) {
                var err = new APIError(
                    `Selected User doesn't exist`,
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
                    'Action not allowed timeslot is not available!',
                    httpStatus.NOT_ACCEPTABLE,
                )
                return next(err)
            }
            const newTimeslot = await new Timeslot({
                    slot_time: body.slot_time,
                    slot_date: body.slot_date,
                    appointee_id: body.appointee,
                }).save()
                // Creates a new record from a submitted form
            const newAppointment = await new Appointment({
                appointee: body.appointee,
                scheduler: body.scheduler,
                timeslots: newTimeslot._id,
            }).save()

            await new AppointmentMessage({
                appointment_id: newAppointment._id,
                topic: body.topic,
                note: body.note,
            }).save()
            const formattedTime = format(
                set(startOfDay(new Date(newTimeslot.slot_date)), {
                    hours: newTimeslot.slot_time,
                }),
                'h:mm aaa dd/MM/yyyy',
            )
            const url = `${config.app.baseURL}/doctor/auth/login`
            const messageAppointee = `Hello ${capitalize([
                appointeeUser.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                appointeeUser.firstName,
                appointeeUser.lastName,
            ])}, this message is to inform you of consultation with ${capitalize([
                firstName,
                lastName,
            ])} on ${formattedTime}. Please log in to panda health to continue`

            const messageScheduler = `Hello ${capitalize([
                firstName,
                lastName,
            ])}, this message is to confirm your medical appointment on ${formattedTime}
                with ${capitalize([
                    appointeeUser.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                    appointeeUser.firstName,
                    appointeeUser.lastName,
                ])} 
                `
                // await OTP.sendSMS(`${messageAppointee} ${url}`, appointeeUser.phone, appointeeUser)
                // await OTP.sendSMS(messageScheduler, phone, request.user)
            await Email.sendAppointmentEmails(request.user, 'Appointment from Panda Health', {
                message: messageScheduler,
            })
            await Email.sendAppointmentEmails(appointeeUser, 'Appointment from Panda Health', {
                message: messageAppointee,
                url,
            })
            response.status(200).json({
                ..._response,
                data: {
                    appointment: newAppointment,
                },
                message: 'Created New Appointment!',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },
    /**
     *@name acceptAppointment
     *@description accept appointment for user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async acceptAppointment(request, response, next) {
        const { _id, firstName, lastName, role } = request.user
        const { id } = request.params
            // const body = _.pick(request.body, ['slot_time', 'slot_date'])
        try {
            const appointment = await Appointment.findOneByQuery({
                _id: id,
                appointee: _id,
            })

            if (!appointment) {
                var err = new APIError(
                    `Action is not allowed for this User!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            const timeslot = await Timeslot.findOneAndUpdate({ _id: appointment.timeslots, status: 'PENDING' }, { status: 'ACCEPTED' }, { new: true }, )

            if (!timeslot) {
                var err = new APIError(
                    `Action is not allowed for this User!`,
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
            if (
                format(
                    set(startOfDay(new Date(timeslot.slot_date)), {
                        hours: timeslot.slot_time,
                    }),
                    'dd/MM/yyyy',
                ) === format(new Date(), 'dd/MM/yyyy')
            ) {
                const url = `${config.app.baseURL}/auth/login`
                const messageScheduler = `Hello ${capitalize([
                    appointment.scheduler.firstName,
                    appointment.scheduler.lastName,
                ])}, your appointment with ${capitalize([
                    role.toLowerCase() === 'physician' ? 'Dr.' : '',
                    firstName,
                    lastName,
                ])} on ${formattedTime} was just accepted. Please log in to panda health to continue`

                const messageAppointee = `Hello ${capitalize([
                    role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                    firstName,
                    lastName,
                ])}, this message is to confirm you just accepted your appointment on ${formattedTime}
                    with ${capitalize([
                        appointment.scheduler.firstName,
                        appointment.scheduler.lastName,
                    ])}
                    `
                    // await OTP.sendSMS(`${messageAppointee} ${url}`, appointeeUser.phone, appointeeUser)
                    // await OTP.sendSMS(messageScheduler, phone, request.user)
                await Email.sendAppointmentEmails(
                    appointment.scheduler,
                    'Appointment Accepted from Panda Health', { message: messageScheduler, url },
                )
                await Email.sendAppointmentEmails(
                    request.user,
                    'Appointment Accepted from Panda Health', {
                        message: messageAppointee,
                    },
                )
            }
            response.status(200).json({
                ..._response,
                data: null,
                message: 'Appointment Accepted!',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },
    /**
     *@name rejectAppointment
     *@description reject appointment for user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async rejectAppointment(request, response, next) {
        const { _id, firstName, lastName, role } = request.user
        const { id } = request.params
        try {
            const appointment = await Appointment.findOneByQuery({
                _id: id,
                appointee: _id,
            })

            if (!appointment) {
                var err = new APIError(
                    `Action is not allowed for this User!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            const timeslot = await Timeslot.findOneAndUpdate({ _id: appointment.timeslots, status: 'PENDING' }, { status: 'REJECTED' }, { new: true }, )
            if (!timeslot) {
                var err = new APIError(
                    `Action is not allowed for this User!`,
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
            if (
                format(
                    set(startOfDay(new Date(timeslot.slot_date)), {
                        hours: timeslot.slot_time,
                    }),
                    'dd/MM/yyyy',
                ) === format(new Date(), 'dd/MM/yyyy')
            ) {
                const url = `${config.app.baseURL}/auth/login`
                const messageScheduler = `Hello ${capitalize([
                    appointment.scheduler.firstName,
                    appointment.scheduler.lastName,
                ])}, your appointment with ${capitalize([
                    role.toLowerCase() === 'physician' ? 'Dr.' : '',
                    firstName,
                    lastName,
                ])} on ${formattedTime} was just rejected. Please log in to panda health to continue`

                const messageAppointee = `Hello ${capitalize([
                    role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                    firstName,
                    lastName,
                ])}, this message is to confirm you just rejected your appointment on ${formattedTime}
                    with ${capitalize([
                        appointment.scheduler.firstName,
                        appointment.scheduler.lastName,
                    ])}
                    `
                    // await OTP.sendSMS(`${messageAppointee} ${url}`, appointeeUser.phone, appointeeUser)
                    // await OTP.sendSMS(messageScheduler, phone, request.user)
                await Email.sendAppointmentEmails(
                    appointment.scheduler,
                    'Appointment Rejected from Panda Health', { message: messageScheduler, url },
                )
                await Email.sendAppointmentEmails(
                    request.user,
                    'Appointment Rejected from Panda Health', {
                        message: messageAppointee,
                    },
                )
            }
            response.status(200).json({
                ..._response,
                data: null,
                message: 'Appointment Rejected!',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },

    /**
     *@name rescheduleAppointment
     *@description reschedule appointment for user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async rescheduleAppointment(request, response, next) {
        const { _id, firstName, lastName, role } = request.user
        const { id } = request.params
        const body = _.pick(request.body, ['slot_time', 'slot_date', 'topic', 'note'])
        try {
            const appointment = await Appointment.findOne({
                _id: id,
                $or: [{ appointee: _id }, { scheduler: _id }],
            })

            if (!appointment) {
                var err = new APIError(
                    `Action is not allowed for this User!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }
            const timeslot = await Timeslot.findOneAndUpdate({
                _id: appointment.timeslots,
                $or: [{ status: 'PENDING' }, { status: 'ACCEPTED' }],
            }, { status: 'RESCHEDULED' }, { new: true }, )
            if (!timeslot) {
                var err = new APIError(
                    `Action is not allowed for this User!`,
                    httpStatus.UNPROCESSABLE_ENTITY,
                )
                return next(err)
            }

            if (appointment.scheduler === appointment.appointee) {
                var err = new APIError('Action not allowed!', httpStatus.UNAUTHORIZED)
                return next(err)
            }

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
                    appointee_id: appointment.appointee,
                }).save()
                // Creates a new record from a submitted form
            const newAppointment = await new Appointment({
                appointee: appointment.appointee,
                scheduler: appointment.scheduler,
                timeslots: newTimeslot._id,
            }).save()

            await new AppointmentMessage({
                appointment_id: newAppointment._id,
                topic: body.topic,
                note: body.note,
            }).save()

            await Appointment.findByIdAndUpdate(id, { rescheduled_timeslot: newTimeslot._id })
                // await appointment.save()

            // if (
            //     format(
            //         set(startOfDay(new Date(timeslot.slot_date)), {
            //             hours: timeslot.slot_time,
            //         }),
            //         'dd/MM/yyyy',
            //     ) === format(new Date(), 'dd/MM/yyyy')
            // ) {

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

            // if appointment was rescheduled by scheduler
            let messageScheduler
            let messageAppointee
            let user

            if (_id === appointment.scheduler) {
                user = await User.findOne({
                    _id: appointment.appointee,
                })
                messageAppointee = `Hello ${capitalize([
                    user.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                    user.firstName,
                    user.lastName,
                ])}, this message is to inform you of consultation with ${capitalize([
                    firstName,
                    lastName,
                ])} on ${oldFormattedTime} has been reschuled to ${formattedTime} by  ${capitalize([
                    firstName,
                    lastName,
                ])}. Please log in to panda health to continue`

                messageScheduler = `Hello ${capitalize([
                    firstName,
                    lastName,
                ])}, this message is to confirm your reschulded medical appointment from ${oldFormattedTime} to ${formattedTime}
                        with ${capitalize([
                            user.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                            user.firstName,
                            user.lastName,
                        ])} 
                        `
                await Email.sendAppointmentEmails(
                    request.user,
                    'Rescheduled Appointment from Panda Health', {
                        message: messageScheduler,
                        url: _id !== appointment.scheduler ? url : null,
                    },
                )

                await Email.sendAppointmentEmails(
                    user,
                    'Rescheduled Appointment from Panda Health', {
                        message: messageAppointee,
                        url: _id !== appointment.appointee ? url : null,
                    },
                )
            } else {
                // if appointment was reschuled by appointee
                user = await User.findOne({
                    _id: appointment.scheduler,
                })
                messageAppointee = `Hello ${capitalize([
                    user.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                    user.firstName,
                    user.lastName,
                ])}, this message is to confirm your consultation with ${capitalize([
                    firstName,
                    lastName,
                ])} on ${oldFormattedTime} has been reschuled to ${formattedTime}.`

                messageScheduler = `Hello ${capitalize([
                    firstName,
                    lastName,
                ])}, this message is to inform you that medical appointment
                        with ${capitalize([
                            user.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                            user.firstName,
                            user.lastName,
                        ])} has be reschuled from ${oldFormattedTime} to ${formattedTime} by ${capitalize(
                    [
                        user.role.toLowerCase() === 'physician' ? 'Dr. ' : '',
                        user.firstName,
                        user.lastName,
                    ],
                )}. Please login to continue. 
                        `
                await Email.sendAppointmentEmails(
                    user,
                    'Rescheduled Appointment from Panda Health', {
                        message: messageScheduler,
                        url: _id !== appointment.scheduler ? url : null,
                    },
                )

                await Email.sendAppointmentEmails(
                    request.user,
                    'Rescheduled Appointment from Panda Health', {
                        message: messageAppointee,
                        url: _id !== appointment.appointee ? url : null,
                    },
                )
            }

            // await OTP.sendSMS(`${messageAppointee} ${url}`, appointeeUser.phone, appointeeUser)
            // await OTP.sendSMS(messageScheduler, phone, request.user)

            response.status(200).json({
                ..._response,
                data: {
                    rescheduled_appointment: newAppointment,
                },
                message: 'Appointment Rescheduled!',
                status: httpStatus.OK,
            })
        } catch (error) {
            next(error)
        }
    },
}))()

export default appointmentController