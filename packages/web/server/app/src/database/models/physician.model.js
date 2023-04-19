/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    credentials: [{
        key: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        title: {
            type: String,
            trim: true,
        },
    }, ],
    documents: [{
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        url: {
            type: String,
            trim: true,
        },
    }, ],
    title: {
        type: String,
        default: 'Physician',
    },
    shorthand: {
        type: String,
        default: 'Dr.',
        maxlength: 4,
    },
    specialty: {
        title: {
            type: String,
            trim: true,
        },
        field: {
            type: String,
            trim: true,
        },
    },
    subspecialty: [{
        title: {
            type: String,
            trim: true,
        },
        field: {
            type: String,
            trim: true,
        },
    }, ],
    started_practice: {
        type: Date,
        trim: true,
    },
}

const collectionName = 'Physicians'
const physicianSchema = new mongoose.Schema(schema, { timestamps: true })

physicianSchema.virtual('user_info', {
    ref: 'Users', // The model to use
    localField: 'user_id', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})

physicianSchema.virtual('ratings_info', {
    ref: 'Ratings', // The model to use
    localField: 'user_id', // Find people where `localField`
    foreignField: 'rating_for', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false,
})

physicianSchema.virtual('feedback', {
    ref: 'Comments', // The model to use
    localField: 'user_id', // Find people where `localField`
    foreignField: 'comment_for', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false,
})

physicianSchema.virtual('practice_info', {
        ref: 'Practice', // The model to use
        localField: 'user_id', // Find people where `localField`
        foreignField: ' user_id', // is equal to `foreignField`
        // If `justOne` is true, 'members' will be a single doc as opposed to
        // an array. `justOne` is false by default.
        justOne: true,
    })
    /**
     *@name findOneByQuery
     *@description find specific physician
     *@param {Object} query
     *@returns {Promise<Object>}
     */

physicianSchema.statics.findOneByQuery = function findOneByQuery(query) {
    physicianSchema.set('toObject', { virtuals: true })
    physicianSchema.set('toJSON', { virtuals: true })
    return this.findOne(query)
        .populate({
            path: 'feedback',
            select: '',
            options: { sort: {} },
        })
        .populate({
            path: 'ratings_info',
            select: '',
            options: { sort: {} },
        })
        .populate({
            path: 'user_info',
            select: '',
            options: { sort: {} },
        })
        .populate({
            path: 'practice_info',
            select: '',
            options: { sort: {} },
        })
        .select('-createdAt -updatedAt -_id')
}

/**
 *@name findByQuery
 *@description find all physicians
 *@param {Object} query
 *@returns {Promise<Object>}
 */

physicianSchema.statics.findByQuery = function findByQuery(query) {
    physicianSchema.set('toObject', { virtuals: true })
    physicianSchema.set('toJSON', { virtuals: true })
    return this.find(query)
        .populate({
            path: 'feedback',
            select: '',
            options: { sort: {} },
        })
        .populate({
            path: 'ratings_info',
            select: '',

            options: { sort: {} },
        })
        .populate({
            path: 'user_info',
            select: '',
            options: { sort: {} },
        })
        .populate({
            path: 'practice_info',
            select: '',
            options: { sort: {} },
        })
        .select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQueryIdAndUpdate
 *@description find physician and/or update
 *@param {Object} query
 *@returns {Promise<Object>}
 */

physicianSchema.statics.findOneByQueryIdAndUpdate = function findOneByQueryIdAndUpdate(
    query,
    update = {},
    options = {},
) {
    return this.findOneAndUpdate(query, update, { new: true, upsert: true, ...options })
}

const PhysicianSchema = mongoose.model(collectionName, physicianSchema)
export default PhysicianSchema