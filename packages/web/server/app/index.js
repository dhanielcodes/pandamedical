/* eslint-disable prettier/prettier */
// import env config
import '@pandamedical/common/settings/config.js'
// module imports
import 'idempotent-babel-polyfill'
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'
import createError from 'http-errors'
import httpStatus from 'http-status'
import { ValidationError } from 'express-validation'
import cookieParser from 'cookie-parser'
import sassMiddleware from 'node-sass-middleware'
import listAllRoutes from 'express-list-endpoints'
import Table from 'cli-table'
import mongoose from 'mongoose'
import _ from 'lodash'

import APIError from 'helpers/APIError'
const Globals = require('./src/helpers/globals')

// local imports
import { connectToDB, winston, config } from 'config'
import BaseRoute from 'routes'

// this seeds the Database
// config.seedDB ? require('./config/seed') : false
// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config()

const app = express()
    // view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// use cors
const whitelist = [process.env.APP_BASE_URL]
const corsOptions = {
    // origin(origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //         callback(null, true)
    //     } else {
    //         callback(new Error('Not allowed by CORS'))
    //     }
    // },
    exposedHeaders: ['x-auth'],
}
app.use(cors(corsOptions))

// use body-parser
// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: false,
        parameterLimit: 50000,
    }),
)

// parse application/json
app.use(bodyParser.json({ limit: '50mb', extended: true }))
    // use winston to log morgan to log file
app.use(morgan('combined', { stream: winston.stream }))
app.use(helmet())
app.use(cookieParser())
app.use(
    sassMiddleware({
        src: path.join(__dirname, 'public'),
        dest: path.join(__dirname, 'public'),
        indentedSyntax: true, // true = .sass and false = .scss
        sourceMap: true,
    }),
)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/v1', BaseRoute)
app.use('/api/v1/docs', express.static(path.join(__dirname, '../docs')))
if (process.env.NODE_ENV === 'production') {
    //   Set static folder.
    app.use(express.static(path.join(__dirname, '../../client/build')))
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client', 'build', 'index.html'))
    })
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    let apiError = new APIError(err.message, httpStatus.FORBIDDEN, err.isPublic)
    if (err.name === 'TokenExpiredError') {
        apiError = new APIError(
            err.message || 'Your session has been timed out. Please login again to continue',
            httpStatus.UNAUTHORIZED,
            err.isPublic,
        )
        console.log('Token error:', err.message)
        return next(apiError)
    }
    if (err.name === 'JsonWebTokenError') {
        apiError = new APIError(
            'Your Token is malformed',
            httpStatus.UNPROCESSABLE_ENTITY,
            err.isPublic,
        )
        console.log('Token error:', err.message)
        return next(apiError)
    }
    if (err instanceof ValidationError) {
        console.log(' ValidationError error')
        const apiError = new APIError(err.details, httpStatus.BAD_REQUEST, err.isPublic)
        return next(apiError)
    }
    if (err instanceof mongoose.Error) {
        console.log('mongoose error')
        const apiError = new APIError(err.message, httpStatus.UNPROCESSABLE_ENTITY, err.isPublic)
        return next(apiError)
    }
    if (!(err instanceof APIError)) {
        console.log('APIError')
        const apiError = new APIError(err.message, err.status, err.isPublic)
        return next(apiError)
    }
    return next(err)

    // ValidationError

    // set locals, only providing error in development
    // res.locals.message = err.message
    // res.locals.error = req.app.get('env') === 'development' ? err : {}

    // // render the error page
    // res.status(err.status || 500)
    // res.render('error')
    // return null
})

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {
    // add this line to include winston logging
    winston.error(
            `${err.status || 500} - ${JSON.stringify(
            Globals.declutterString(err.message),
            null,
            2,
        )} - ${req.originalUrl} - ${req.method} - ${req.ip}`,
        )
        // eslint-disable-line no-unused-vars

    // Email.systemError(err.stack)
    res.status(err.status || 500).json({
        status: err.status,
        response: false,
        data: null,
        message: null,
        errMessage: err.isPublic ? Globals.declutterString(err.message) : httpStatus[err.status],
    })
})

if (process.env.NODE_ENV !== 'production') {
    // Temporal, to aid development: Lists all API endpoints and methods
    let routes = listAllRoutes(app)
    routes = routes.map((route) => {
        const obj = {}
        obj[route.path] = route.methods.join(' | ')
        return obj
    })
    const table = new Table()
    table.push({ Endpoints: 'Methods' }, ...routes)

    console.log(table.toString())
}

connectToDB()
module.exports = { app }