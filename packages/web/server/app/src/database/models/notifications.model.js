/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
const select =
    '-forgotToken -forgotTokenTimestamp -deviceToken -createdAt -updatedAt -ip -inviteCode -invitedBy -unit_system -id -device -isActive'

const schema = {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['SIGNUP', 'REQUEST'],
        default: 'OTHER',
    },
    tblId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    isActionable: {
        type: Boolean,
        default: false,
    },
    accept: {
        title: {
            type: String,
            default: null,
        },
        action: {
            type: String,
            default: null,
        },
    },
    decline: {
        title: {
            type: String,
            default: null,
        },
        action: {
            type: String,
            default: null,
        },
    },
    url: {
        type: String,
        default: null,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    isSent: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    __v: { type: Number, select: false },
}

const collectionName = 'Notifications'
const notificationSchema = new mongoose.Schema(schema, { timestamps: true })

notificationSchema.virtual('sender_info', {
    ref: 'Users', // The model to use
    localField: 'tblId', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})

/**
 *@name findOneByQuery
 *@description find specific practice for a user
 *@param {Object} query
 *@returns {Promise<Object>}
 */

notificationSchema.statics.findOneByQuery = function findOneByQuery(query) {
    notificationSchema.set('toObject', { virtuals: true })
    notificationSchema.set('toJSON', { virtuals: true })
    return this.findOne(query)
        .populate({
            path: 'sender_info',
            select,
            options: { sort: { createdAt: -1 } },
        })
        .select('-createdAt -updatedAt -_id')
}

/**
 *@name findOneByQuery
 *@description find all practice
 *@param {Object} query
 *@returns {Promise<Object>}
 */

notificationSchema.statics.findByQuery = function findByQuery(query) {
    notificationSchema.set('toObject', { virtuals: true })
    notificationSchema.set('toJSON', { virtuals: true })
    return this.find(query)
        .populate({
            path: 'sender_info',
            select,
            options: { sort: { createdAt: -1 } },
        })
        .select('-createdAt -updatedAt -_id')
        .select('-createdAt -updatedAt -_id')
}

/**
 * @name getQueued
 * @description
 * @param {ObjectId} id - The objectId of Schema.
 * @returns {Promise<User, APIError>}
 */
notificationSchema.statics.getQueued = function getQueued() {
    return this.find({ isSent: false })
        .populate({
            path: 'sender_info',
            select,
            options: { sort: { createdAt: -1 } },
        })
        .select('-createdAt -updatedAt -_id')
        .exec()
}

const NotificationSchema = mongoose.model(collectionName, notificationSchema)
export default NotificationSchema