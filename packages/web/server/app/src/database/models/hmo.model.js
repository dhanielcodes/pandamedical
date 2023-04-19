/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const schema = {
    companyName: {
        type: String,
        trim: true,
    },
}

const collectionName = 'Health_Management_Organisation'
const hmoSchema = new mongoose.Schema(schema, { timestamps: true })

/**
 *@name findOneByQuery
 *@description find specific role for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

hmoSchema.statics.findOneByQuery = function findOneByQuery(query) {
    return this.findOne(query).select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all roles for a appointment
 *@param {Object} query
 *@returns {Promise<Object>}
 */

hmoSchema.statics.findByQuery = function findByQuery(query) {
    return this.find(query).select('-createdAt -updatedAt -_id')
}

const HMOSchema = mongoose.model(collectionName, hmoSchema)
export default HMOSchema