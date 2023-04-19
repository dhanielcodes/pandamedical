/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const selectOptions = [''].join(' ')
const schema = {
    appointment_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    note: {
        type: String,
        trim: true,
        default: null,
    },
    topic: {
        type: String,
        trim: true,
        default: null,
    },
}

const collectionName = 'AppointmentMessage'
const appointmentMessageSchema = new mongoose.Schema(schema, { timestamps: true })

appointmentMessageSchema.virtual('appointment', {
    ref: 'Appointments', // The model to use
    localField: 'appointment_id', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
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

appointmentMessageSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query)
        // .populate({
        //   path: 'timeslots',
        //   select: '-createdAt -updatedAt',
        //   options: { sort: { slot_date: 1, slot_time: 1 } }
        // })
        // .populate({
        //   path: 'scheduler',
        //   select: selectOptions,
        //   options: { sort: { createdAt: -1 } }
        // })
        // .populate({
        //   path: 'appointee',
        //   select: selectOptions,
        //   options: { sort: { createdAt: -1 } }
        // })
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

appointmentMessageSchema.statics.findByQuery = function findByQuery(query) {
    // console.log('$match end of day: ', endOfDay(new Date()))
    // console.log('$match start of day: ', startOfDay(new Date()))
    // console.log('$match new day: ', new Date('2021-01-17'))
    return this.find(query)
        // .populate({
        //   path: 'scheduler',
        //   select: selectOptions,
        //   options: { sort: {} }
        // })
        // .populate({
        //   path: 'appointee',
        //   select: selectOptions,
        //   options: { sort: {} }
        // })
        // .populate({
        //   path: 'timeslots',
        //   select: '-createdAt -updatedAt',
        //   options: { sort: { slot_date: 1, slot_time: 1 } }
        // })
        // .select('')
        // .sort('timeslots.slot_date timeslots.slot_time')
}
const AppointmentMessageSchema = mongoose.model(collectionName, appointmentMessageSchema)
export default AppointmentMessageSchema