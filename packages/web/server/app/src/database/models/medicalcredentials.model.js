/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    description: {
        type: String,
        default: '',
        trim: true,
    },
    title: {
        type: String,
        trim: true,
    },
    subtitle: {
        type: String,
        trim: true,
    },
    key: {
        type: String,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
        trim: true,
    },
}

const collectionName = 'MedicalCredentials'
const medicalCredentialSchema = new mongoose.Schema(schema, { timestamps: true })

/**
 *@name findOneByQuery
 *@description find specific role for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

medicalCredentialSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query).select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all roles for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

medicalCredentialSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query).select('-createdAt -updatedAt -_id')
}

const MedicalCredentialSchema = mongoose.model(collectionName, medicalCredentialSchema)
export default MedicalCredentialSchema