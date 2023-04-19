/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
// import createError from 'http-errors'
// import httpStatus from 'http-status'
// import User from './user';

const schema = {
    vitals: [{
        title: {
            type: String,
            required: true,
        },
        vitals_key: {
            type: String,
            required: true,
        },
        vitals_default_value: {
            type: String,
            required: true,
        },
        vitals_secondary_value: {
            type: String,
            default: null,
        },
        unit: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
    }, ],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    created_by: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        enum: ['patient generated', 'lab generated', 'physician generated', 'clinic generated'],
        default: 'PATIENT',
    },
    observer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date_entered: {
        type: Date,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        default: null,
    },
}

const collectionName = 'VitalsHistory'
const vitalsHistorySchema = new mongoose.Schema(schema, { timestamps: true })

vitalsHistorySchema.virtual('user', {
    ref: 'User', // The model to use
    localField: 'user_id', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})

vitalsHistorySchema.statics.findByIdAndVitalKey = function(_id, vital) {
    const VitalsHistory = this
    return VitalsHistory.aggregate([{
            $match: {
                user_id: _id,
                vitals: {
                    $elemMatch: {
                        $and: [{ vitals_key: vital }],
                    },
                },
            },
        },
        {
            $project: {
                source: 1,
                comment: 1,
                date_entered: 1,
                timestamp: 1,
                user_id: 1,
                observer_id: 1,
                created_by: 1,
                createdAt: 1,
                updatedAt: 1,
                vitals: {
                    $filter: {
                        input: '$vitals',
                        as: 'vitals',
                        cond: {
                            $and: [{ $eq: ['$$vitals.vitals_key', vital] }],
                        },
                    },
                },
            },
        },
    ]).sort('-createdAt')
}
const VitalsHistorySchema = mongoose.model(collectionName, vitalsHistorySchema)
export default VitalsHistorySchema