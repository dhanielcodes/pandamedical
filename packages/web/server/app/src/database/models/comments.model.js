/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    comment: {
        type: String,
        trim: true,
        required: true,
    },
    commenter: {
        type: String,
        trim: true,
        required: true,
    },
    comment_for: {
        type: String,
        trim: true,
        required: true,
    },
    type: {
        type: String,
        enum: ['COMMENT', 'FEEDBACK'],
        default: 'FEEDBACK',
    },
}

const collectionName = 'Comments'
const commentSchema = new mongoose.Schema(schema, { timestamps: true })

/**
 *@name findOneByQuery
 *@description find specific comment for a user
 *@param {Object} query
 *@returns {Promise<Object>}
 */

commentSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query).select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all comments
 *@param {Object} query
 *@returns {Promise<Object>}
 */

commentSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query).select('-createdAt -updatedAt -_id')
}

const CommentSchema = mongoose.model(collectionName, commentSchema)
export default CommentSchema