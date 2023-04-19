/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
// import createError from 'http-errors'
// import httpStatus from 'http-status'
import User from './user.model'

const schema = {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    socialPlatformId: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    rawUserDetails: {
        type: String,
    },
    access: {
        type: String,
    },
    refresh: {
        type: String,
    },
    rawTokenObject: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date().toISOString(),
    },
}

const collectionName = 'SocialAccount'
const socialSchema = new mongoose.Schema(schema)

socialSchema.statics.findBySocialId = async function(socialPlatformId) {
    const Social = this

    socialSchema.set('toObject', { virtuals: true })
    socialSchema.set('toJSON', { virtuals: true })
    try {
        const existingSocialUser = await Social.findOne({
            socialPlatformId,
        })
        if (!existingSocialUser) {
            return null
        }
        return User.findOne({ _id: existingSocialUser.userId })
    } catch (error) {
        return Promise.reject(error)
    }
    // return
    // // .populate({ path: 'userWallet' })
    // // .exec()
}
socialSchema.statics.FindBySocialEmail = function(email) {
    return User.findOne({ email })
}

const SocialSchema = mongoose.model(collectionName, socialSchema)
export default SocialSchema