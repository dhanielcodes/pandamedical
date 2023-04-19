import dotenv from 'dotenv'
import mongoose from 'mongoose'
import config from './config'

dotenv.config()

mongoose.Promise = global.Promise

const db_url = config.mongo.mongodb_uri || process.env.MONGODB_URI
const db = mongoose.connection

db.on('error', () => {
    console.log('> error occured from the database')
})
db.once('open', () => {
    console.log('> successfully opened the database')
})
export default () =>
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})