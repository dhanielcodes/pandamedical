import _ from 'lodash'
import httpStatus from 'http-status'
import { Timeslot, User } from 'database'
import {
    differenceInDays,
    differenceInHours,
    endOfMonth,
    format,
    set,
    setDate,
    setMonth,
    startOfDay,
    startOfMonth,
} from 'date-fns'
import _response from 'helpers/response'
import Globals from 'helpers/globals'
import APIError from 'helpers/APIError'

/**
 *@name timeslotController
 *@returns {Object} Functions
 */

const timeslotController = (() => ({
    /**
     *@name index
     *@description get all appointment for user
     *@param {Object} request
     *@param {Object} response
     *@returns {Null} null
     */

    async index(request, response, next) {
        const { appointee_id, slot_date } = request.query
        const user = await User.findOne({ _id: appointee_id })
        if (user.role === 'USER') {
            var err = new APIError('Action is not allowed for this User', httpStatus.UNAUTHORIZED)
            return next(err)
        }
        const plusOneDay = 86400000
        const start = Globals.convertTime12hto24h(null || '09:00 AM')
        const end = Globals.convertTime12hto24h(null || '10:00 PM')
        try {
            const openingHours = set(startOfDay(new Date(slot_date)), {
                hours: start.hours,
                minutes: start.minutes,
            })
            let closingHours = set(startOfDay(new Date(slot_date)), {
                hours: end.hours,
                minutes: end.minutes,
            })

            if (parseInt(end.hours, 10) <= parseInt(start.hours, 10)) {
                closingHours = set(startOfDay(new Date(slot_date).getTime() + plusOneDay), {
                    hours: end.hours,
                    minutes: end.minutes,
                })
            }
            const hours = differenceInHours(closingHours, openingHours)
            const days = differenceInDays(endOfMonth(new Date()), new Date())
            let next_available_slot = format(startOfMonth(setMonth(new Date(), 1)), 'yyyy-MM-dd')
                // console.log('next_available_slot', next_available_slot)
            const dbTimeslots = await Timeslot.findByQuery({
                appointee_id,
                slot_date: new Date(slot_date),
            })

            const slotArray = []
            for (let i = 0; i <= hours; i++) {
                let slot_time = `${parseInt(format(openingHours, 'h'), 10) + i}`
                if (slot_time >= 24) {
                    slot_time = `${slot_time - 24}`
                }
                slotArray.push({
                    slot_time,
                    slot_date,
                })
            }

            for (let i = 0; i <= days; i++) {
                const date = new Date(slot_date).getTime() + plusOneDay * (i + 1)
                const availableTimeslots = await Timeslot.findByQuery({
                    appointee_id,
                    slot_date: date,
                })
                if (availableTimeslots.length < hours) {
                    next_available_slot = format(date, 'yyyy-MM-dd')
                    break
                }
            }
            const uniqArray = _.uniqBy(slotArray, 'slot_time')
            const timeslots = _.differenceBy(uniqArray, dbTimeslots, 'slot_time').sort(
                (a, b) => parseInt(a.slot_time, 10) - parseInt(b.slot_time, 10),
            )
            response.status(200).json({
                ..._response,
                data: {
                    timeslots,
                    next_available_slot,
                },
                message: `List of Available Appointment slots for ${user.firstName} ${user.lastName} on ${slot_date}`,
                status: httpStatus.OK,
            })
            return null
        } catch (error) {
            next(error)
            return error
        }
    },
}))()

export default timeslotController