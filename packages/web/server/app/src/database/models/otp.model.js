import mongoose from 'mongoose'

const OTPSchema = new mongoose.Schema({
    otp: {
        type: String,
        default: '123456',
        trim: true,
    },
    phone: {
        type: String,
        default: null,
        trim: true,
    },
    email: {
        type: String,
        default: null,
        trim: true,
    },
    type: {
        type: String,
        default: 'SMS',
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
}, {
    timestamps: true,
}, )

OTPSchema.statics = {
    findId(id) {
        return this.findById(id).exec()
    },
    findByQuery(query) {
        return this.find(query).exec()
    },
    findOneByQuery(query) {
        return this.findOne(query).exec()
    },
    findAndUpdate(_id, update) {
        return this.findOneAndUpdate({ _id, isActive: true }, update).exec()
    },
}
const OTP = mongoose.model('OTP', OTPSchema)
export default OTP