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
        required: true,
    },
    unit: [
        {
            system: {
                type: String,
                required: true,
            },
            symbol: {
                type: String,
                required: true,
            },
        },
    ],
    norminal_values: {
        low: {
            type: Number,
            default: 0,
        },
        normal: {
            type: Number,
            default: 0,
        },
        high: {
            type: Number,
            default: null,
        },
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

const collectionName = 'Vitals'
const vitalSchema = new mongoose.Schema(schema, { timestamps: true })

const VitalSchema = mongoose.model(collectionName, vitalSchema)
export default VitalSchema
