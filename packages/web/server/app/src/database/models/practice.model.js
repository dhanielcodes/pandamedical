/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    fees: {
        amount: {
            type: Number,
            currency: String,
        },
    },
    working_hours: {
        opening: {
            type: Number,
            min: 0,
            max: 23,
        },
        ending: {
            type: Number,
            min: 0,
            max: 23,
        },
    },
    services: [{
        title: String,
        key: String,
    }, ],
}

const collectionName = 'Practice'
const practiceSchema = new mongoose.Schema(schema, { timestamps: true })

practiceSchema.virtual('additional_info', {
    ref: 'AdditionalInfo', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'user_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})

/**
 *@name findOneByQuery
 *@description find specific practice for a user
 *@param {Object} query
 *@returns {Promise<Object>}
 */

practiceSchema.statics.findOneByQuery = function findOneByQuery(query) {
    notificationSchema.set('toObject', { virtuals: true })
    notificationSchema.set('toJSON', { virtuals: true })
    return (
        this.findOne(query)
        // .populate({
        //     path: 'patients',
        //     select: '',
        //     options: { sort: {} },
        // })
        .select('-createdAt -updatedAt -_id')
    )
}

/**
 *@name findOneByQuery
 *@description find all practice
 *@param {Object} query
 *@returns {Promise<Object>}
 */

practiceSchema.statics.findByQuery = function findByQuery(query) {
    notificationSchema.set('toObject', { virtuals: true })
    notificationSchema.set('toJSON', { virtuals: true })
    return (
        this.find(query)
        // .populate({
        //     path: 'patients',
        //     select: '',
        //     options: { sort: {} },
        // })
        .select('-createdAt -updatedAt -_id')
    )
}

const PracticeSchema = mongoose.model(collectionName, practiceSchema)
export default PracticeSchema