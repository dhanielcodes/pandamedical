/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    name: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        default: '',
        trim: true,
    },
    title: {
        type: String,
        trim: true,
    },
    key: {
        type: String,
    },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'medical_sub_specialty' }],
    taxonomy: { type: mongoose.Schema.Types.ObjectId, ref: 'medical_taxonomy' },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
        trim: true,
    },
}

const collectionName = 'MedicalSpecialty'
const medicalSpecialtySchema = new mongoose.Schema(schema, { timestamps: true })

/**
 *@name findOneByQuery
 *@description find specific role for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

medicalSpecialtySchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query).select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all roles for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

medicalSpecialtySchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query).select('-createdAt -updatedAt -_id')
}

const MedicalSpecialtySchema = mongoose.model(collectionName, medicalSpecialtySchema)
export default MedicalSpecialtySchema