/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    title: {
        type: String,
        trim: true,
    },
    key: {
        type: String,
        required: true,
        enum: ['PHYSICIAN', 'HEALTHCARE', 'LABORATORY'],
        trim: true,
    },
    description: {
        type: String,
        default: '',
        trim: true,
    },
}

const collectionName = 'Bookingslist'
const bookingslistSchema = new mongoose.Schema(schema, { timestamps: true })

/**
 *@name findOneByQuery
 *@description find specific role for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

bookingslistSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query).select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all roles for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

bookingslistSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query).select('-createdAt -updatedAt -_id')
}

const BookingsListSchema = mongoose.model(collectionName, bookingslistSchema)
export default BookingsListSchema