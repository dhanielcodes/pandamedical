/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    slot_time: {
        type: String,
        required: true,
    },
    slot_date: {
        type: Date,
        required: true,
    },
    appointee_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isOverdue: {
        type: Boolean,
        default: false,
    },
    isClosed: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ['ACCEPTED', 'REJECTED', 'PENDING', 'RESCHEDULED'],
        default: 'PENDING',
    },
}

const collectionName = 'Timeslots'
const timeSlotSchema = new mongoose.Schema(schema, { timestamps: true })

/**
 *@name findOneByQuery
 *@description find a specific timeslot
 *@param {Object} query
 *@returns {Promise<Object>} user
 */

timeSlotSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query).select('').exec()
}

/**
 *@name findOneByQuery
 *@description find all timeslots for a particular user
 *@param {Object} query
 *@returns {Promise<Object>} user
 */

timeSlotSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query).select('').exec()
}

const TimeSlotSchema = mongoose.model(collectionName, timeSlotSchema)
export default TimeSlotSchema