/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
// import { endOfDay, startOfDay } from 'date-fns'
const selectOptions = [
    '-qrcode',
    '-ip',
    '-device',
    '-inviteCode',
    '-invitedBy',
    '-isActive',
    '-deviceToken',
    '-unit_system',
    '-createdAt',
    '-updatedAt',
    '-id',
].join(' ')
const schema = {
    appointee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    scheduler: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    timeslots: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Timeslots',
        required: true,
    },
    rescheduled_timeslot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Timeslots',
    },
}

const collectionName = 'Appointments'
const appointmentSchema = new mongoose.Schema(schema, { timestamps: true })

appointmentSchema.virtual('message', {
    ref: 'AppointmentMessage', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'appointment_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})

/**
 *@name findOneByQuery
 *@description find a specific appointment
 *@param {Object} query
 *@returns {Promise<Object>} user
 */

appointmentSchema.statics.findOneByQuery = function findOneByQuery(query) {
    appointmentSchema.set('toObject', { virtuals: true })
    appointmentSchema.set('toJSON', { virtuals: true })
    return this.findOne(query)
        .populate({
            path: 'timeslots',
            select: '-createdAt -updatedAt',
            options: { sort: { slot_date: 1, slot_time: 1 } },
        })
        .populate({
            path: 'scheduler',
            select: selectOptions,
            options: { sort: { createdAt: -1 } },
        })
        .populate({
            path: 'appointee',
            select: selectOptions,
            options: { sort: { createdAt: -1 } },
        })
        .populate({
            path: 'rescheduled_timeslot',
            select: '-createdAt -updatedAt',
            options: { sort: { slot_date: 1, slot_time: 1 } },
        })
        .populate({
            path: 'message',
            select: '-createdAt -updatedAt',
            options: { sort: { slot_date: 1, slot_time: 1 } },
        })

    // .select('')
    // .sort('timeslots.slot_date timeslots.slot_time')
    // .exec()
}

/**
 *@name findByQuery
 *@description find all appointments for a particular user
 *@param {Object} query
 *@returns {Promise<Object>} user
 */

appointmentSchema.statics.findByQuery = function findByQuery(query) {
    appointmentSchema.set('toObject', { virtuals: true })
    appointmentSchema.set('toJSON', { virtuals: true })
    return this.find(query)
        .populate({
            path: 'scheduler',
            select: selectOptions,
            options: { sort: {} },
        })
        .populate({
            path: 'appointee',
            select: selectOptions,
            options: { sort: {} },
        })
        .populate({
            path: 'timeslots',
            select: '-createdAt -updatedAt',
            options: { sort: { slot_date: 1, slot_time: 1 } },
        })
        .populate({
            path: 'rescheduled_timeslot',
            select: '-createdAt -updatedAt',
            options: { sort: { slot_date: 1, slot_time: 1 } },
        })
        .populate({
            path: 'message',
            select: '-createdAt -updatedAt',
            options: { sort: { slot_date: 1, slot_time: 1 } },
        })

    // .select('')
    // .sort('timeslots.slot_date timeslots.slot_time')
}
const AppointmentSchema = mongoose.model(collectionName, appointmentSchema)
export default AppointmentSchema