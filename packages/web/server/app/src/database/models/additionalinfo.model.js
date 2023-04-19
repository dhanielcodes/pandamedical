/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        required: true,
    },
    blood_type: {
        type: String,
        trim: true,
        default: null,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    primary_specialist: {
        firstName: {
            type: String,
            default: null,
        },
        lastName: {
            type: String,
            default: null,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            default: null,
        },
    },
    emergency_contact: {
        name: {
            type: String,
            trim: true,
            default: null,
        },
        phone: {
            type: String,
            trim: true,
            default: null,
        },
    },
}

const collectionName = 'AdditionalInfo'
const additionalInfoSchema = new mongoose.Schema(schema, { timestamps: true })

// additionalInfoSchema.virtual('primary_specialist_info', {
//         ref: 'Users', // The model to use
//         localField: 'user_id', // Find people where `localField`
//         foreignField: '_id', // is equal to `foreignField`
//         // If `justOne` is true, 'members' will be a single doc as opposed to
//         // an array. `justOne` is false by default.
//         justOne: true,
//     })
/**
 *@name findOneByQuery
 *@description find specific role for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

additionalInfoSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query).select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all roles for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

additionalInfoSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query).select('-createdAt -updatedAt -_id')
}

const AdditionalInfoSchema = mongoose.model(collectionName, additionalInfoSchema)
export default AdditionalInfoSchema