const mongoose = require('mongoose')

const UserWalletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
    },
    clearedBalance: {
        type: Number,
        default: 0.0,
        required: true,
        trim: true,
    },
    availableBalance: {
        type: Number,
        default: 0.0,
        required: true,
        trim: true,
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
})

UserWalletSchema.virtual('user', {
    ref: 'User', // The model to use
    localField: 'userId', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
})

UserWalletSchema.statics = {
    findId(id) {
        return this.findById(id).exec();
    },
    findByQuery(query) {
        return this.find(query).exec();
    },
    walletInfo(query) {
        UserWalletSchema.set('toObject', { virtuals: true })
        UserWalletSchema.set('toJSON', { virtuals: true })
        return this.find(query)
            .sort({ updatedAt: -1 })
            .populate({
        path: 'user',
        select: { _id: 1, userId: 1, firstName: 1, lastName: 1, profilePic: 1, phone: 1 },
      })
      .exec();
    },
    findAndUpdate(_id, update) {
        return this.findOneAndUpdate({ _id, isActive: true }, update).exec();
    },
}

// mongoose.model('UserWallet', UserWalletSchema)
// const userSchema = new mongoose.Schema(schema)
const collectionName = 'UserWallet'
const UserWallet = mongoose.model(collectionName, UserWalletSchema)
module.exports = UserWallet;
