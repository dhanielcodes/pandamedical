/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
const select =
    '-forgotToken -forgotTokenTimestamp -deviceToken -createdAt -updatedAt -ip -inviteCode -invitedBy -unit_system -id -device -isActive'
const schema = {
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    healthcare_provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'ACCEPTED', 'REJECTED', 'NON-ACCESS'],
        default: 'NON-ACCESS',
        trim: true,
    },
    medical_record_access: {
        type: Boolean,
        default: false,
    },
}

const collectionName = 'PatientRecords'
const patientRecordSchema = new mongoose.Schema(schema, { timestamps: true })

// patientRecordSchema.virtual('patients', {
//   ref: 'PatientRecord', // The model to use
//   localField: '_id', // Find people where `localField`
//   foreignField: 'user_id', // is equal to `foreignField`
//   // If `justOne` is true, 'members' will be a single doc as opposed to
//   // an array. `justOne` is false by default.
//   justOne: true,
// })

/**
 *@name findOneByQuery
 *@description find specific practice for a user
 *@param {Object} query
 *@returns {Promise<Object>}
 */

patientRecordSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query)
        .populate({
            path: 'patient',
            select: select,
            options: { sort: {} },
        })
        .populate({
            path: 'healthcare_provider',
            select: select,
            options: { sort: {} },
        })
        .select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all practice
 *@param {Object} query
 *@returns {Promise<Object>}
 */

patientRecordSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query)
        .populate({
            path: 'patient',
            select: select,
            options: { sort: {} },
        })
        .populate({
            path: 'healthcare_provider',
            select: select,
            options: { sort: {} },
        })
        .select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQueryAndUpdate
 *@description find patient and/or update
 *@param {Object} query
 *@returns {Promise<Object>}
 */

patientRecordSchema.statics.findOneByQueryAndUpdate = function findOneByQueryAndUpdate(
    query,
    update = {},
    options = {},
) {
    return this.findOneAndUpdate(query, update, { new: true, upsert: true, ...options })
        .populate({
            path: 'patient',
            select: select,
            options: { sort: {} },
        })
        .populate({
            path: 'healthcare_provider',
            select: select,
            options: { sort: {} },
        })
        .select('-createdAt -updatedAt -_id')
}

const PatientRecordSchema = mongoose.model(collectionName, patientRecordSchema)
export default PatientRecordSchema