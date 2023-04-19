/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
// import createError from 'http-errors'
// import httpStatus from 'http-status'
// import User from './user';

const schema = {
    lab_tests: [
        {
            lab_name: {
                type: String,
                required: true,
            },
            lab_key: {
                type: String,
            },
            lab_default_value: {
                type: String,
                required: true,
            },
            lab_secondary_value: {
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
        },
    ],
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

const collectionName = 'LabTestResults'
const labTestResultsSchema = new mongoose.Schema(schema, { timestamps: true })

labTestResultsSchema.virtual('user', {
    ref: 'User', // The model to use
    localField: 'user_id', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})

const LabTestResultsSchema = mongoose.model(collectionName, labTestResultsSchema)
export default LabTestResultsSchema
