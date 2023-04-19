/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
// import createError from 'http-errors'
// import httpStatus from 'http-status'
// import User from './user'

const schema = {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    key: {
        type: String,
    },
    unit: {
        type: String,
        default: null,
    },
    result_source: {
        patient: {
            type: String,
            default: 'patient generated',
        },
        physician: {
            type: String,
            default: 'physician generated',
        },
        lab: {
            type: String,
            default: 'lab generated',
        },
        clinic: {
            type: String,
            default: 'clinic generated',
        },
    },
}

const collectionName = 'LabTests'
const labTestsSchema = new mongoose.Schema(schema, { timestamps: true })

const LabTestsSchema = mongoose.model(collectionName, labTestsSchema)
export default LabTestsSchema
