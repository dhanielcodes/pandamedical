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
    referrer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    healthcare_provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointments',
    },
    status: {
        type: String,
        enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
        default: 'PENDING',
        trim: true,
    },
}

const collectionName = 'PatientReferrals'
const patientReferralSchema = new mongoose.Schema(schema, { timestamps: true })

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
 *@description find specific referral for a physician
 *@param {Object} query
 *@returns {Promise<Object>}
 */

patientReferralSchema.statics.findOneByQuery = function findOneByQuery(query) {
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
        .populate({
            path: 'referrer',
            select: select,
            options: { sort: {} },
        })
        .populate({
            path: 'appointment',
            select: '',
            options: { sort: {} },
        })
        .select('-createdAt -updatedAt')
}

/**
 *@name findOneByQuery
 *@description find all physicians referrals
 *@param {Object} query
 *@returns {Promise<Object>}
 */

patientReferralSchema.statics.findByQuery = function findByQuery(query) {
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
        .populate({
            path: 'referrer',
            select: select,
            options: { sort: {} },
        })
        .populate({
            path: 'appointment',
            select: '',
            options: { sort: {} },
            populate: {
                path: 'timeslots',
                model: 'Timeslots',
                select: '-appointee_id',
            },
        })
        .select('-createdAt -updatedAt')
}

/**
 *@name findOneByQueryAndUpdate
 *@description find patient and/or update
 *@param {Object} query
 *@returns {Promise<Object>}
 */

patientReferralSchema.statics.findOneByQueryAndUpdate = function findOneByQueryAndUpdate(
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
        .populate({
            path: 'referrer',
            select: select,
            options: { sort: {} },
        })
        .populate({
            path: 'appointment',
            select: '',
            options: { sort: {} },
            populate: {
                path: 'timeslots',
                model: 'Timeslots',
                select: '-appointee_id',
            },
        })
        .select('-createdAt -updatedAt')
}

const PatientReferralSchema = mongoose.model(collectionName, patientReferralSchema)
export default PatientReferralSchema