/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5,
        required: true,
    },
    rated_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    rating_for: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}

const collectionName = 'Ratings'
const ratingSchema = new mongoose.Schema(schema, { timestamps: true })

/**
 *@name findOneByQuery
 *@description find specific rating for a user
 *@param {Object} query
 *@returns {Promise<Object>}
 */

ratingSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query).select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all ratings
 *@param {Object} query
 *@returns {Promise<Object>}
 */

ratingSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query).select('-createdAt -updatedAt -_id')
}

const RatingSchema = mongoose.model(collectionName, ratingSchema)
export default RatingSchema