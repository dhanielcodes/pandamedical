import { Joi } from 'express-validation'
import dotenv from 'dotenv'
// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config()

// define validation for all the env vars
const envVarsSchema = Joi.object({
        NODE_ENV: Joi.string()
            .valid('development', 'production', 'test', 'provision')
            .default('development'),
        PORT: Joi.number().default(5050),
        MONGOOSE_DEBUG: Joi.boolean().when('NODE_ENV', {
            is: Joi.string().equal('development'),
            then: Joi.boolean().default(true),
            otherwise: Joi.boolean().default(false),
        }),
        JWT_SECRET: Joi.string().required().description('JWT_SECRET required to run app'),
        JWT_TOKEN_VALIDATON_DURATION: Joi.string()
            .required()
            .description('JWT_TOKEN_VALIDATON_DURATION required to run app'),
        JWT_TOKEN_VALIDATON_SHORT_DURATION: Joi.string()
            .required()
            .description('JWT_TOKEN_VALIDATON_SHORT_DURATION required to run app'),
        JWT_TOKEN_VALIDATON_RESET_DURATION: Joi.string()
            .required()
            .description('JWT_TOKEN_VALIDATON_RESET_DURATION required to run app'),
        JWT_RESET_SECRET: Joi.string().required().description('JWT_RESET_SECRET required to run app'),
        MONGODB_URI: Joi.string().required().description('Production URI for MONGO DB is required'),
        MONGO_PORT: Joi.number().default(27017),
        ADMIN_ID: Joi.string().required(),
        ADMIN_PASSWORD: Joi.string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required(),
        ADMIN_EMAIL: Joi.string().email().required(),
        FIREBASE_PRIVATE_KEY: Joi.string().required(),
        APP_BASE_URL: Joi.string().required(),
    })
    .unknown()
    .required()

const { error, value: envVars } = envVarsSchema.validate(process.env)
if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}
const configObj = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    app: {
        baseURL: envVars.APP_BASE_URL,
    },
    admin: {
        userId: envVars.ADMIN_ID,
        password: envVars.ADMIN_PASSWORD,
        email: envVars.ADMIN_EMAIL,
    },
    mongooseDebug: envVars.MONGOOSE_DEBUG,
    token: {
        jwtSecret: envVars.JWT_SECRET,
        jwtDuration: envVars.JWT_TOKEN_VALIDATON_DURATION,
        jwtShortDuration: envVars.JWT_TOKEN_VALIDATON_SHORT_DURATION,
        jwtResetDuration: envVars.JWT_TOKEN_VALIDATON_RESET_DURATION,
        jwtResetSecret: envVars.JWT_RESET_SECRET,
    },
    inviteAmount: parseFloat(envVars.INVITE_AMOUNT),
    smsCharges: parseFloat(envVars.SMS_CHARGE),
    fcmKey: envVars.FCM_KEY,
    webrtc: 'https://apprtc.co',
    ussd: {
        code: '*347*006',
        otp: '*347*006*5#',
    },
    mongo: {
        port: envVars.MONGO_PORT,
        mongodb_uri: envVars.MONGODB_URI,
    },
    seedDB: envVars.SEED_DB,
    expiry: {
        forgotToken: envVars.EXP_FORGOT_TOKEN,
    },
    mailOptions: {
        from: envVars.MAIL_USER_FROM,
        host: envVars.MAIL_HOST,
        hostPort: envVars.MAIL_PORT,
        user: envVars.MAIL_USER,
        pass: envVars.MAIL_PASS,
    },
    appURL: envVars.APP_URL,
    cron: {
        forgot: envVars.FORGOT_CRON,
        notification: envVars.NOTIFICATION_CRON,
    },
    sms: {
        username: envVars.SMS_USERNAME,
        apiKey: envVars.SMS_API_KEY,
        senderId: envVars.SMS_SENDER_ID,
    },
    interswitch: {
        env: envVars.INTERSWITCH_ENV,
        gateway: envVars.INTERSWITCH_GATEWAY,
        redirectURL: envVars.INTERSWITCH_REDIRECT_URL,
        requestURL: envVars.INTERSWITCH_REQUEST_URL,
        queryURL: envVars.INTERSWITCH_QUERY_URL,
        baseURL: envVars.INTERSWITCH_BASE_URL,
        clientSecret: envVars.INTERSWITCH_clientSecret,
        clientId: envVars.INTERSWITCH_clientId,
        terminalId: envVars.INTERSWITCH_TERMINAL_ID,
        prefix: envVars.INTERSWITCH_PREFIX,
        commission: parseFloat(envVars.COMMISSION),
        withdrawCommission: parseFloat(envVars.WDRAW_COMMISSION),
    },
    rubie: {
        url: envVars.RUBIE_URL,
        key: envVars.RUBIES_LIVE_SKEY,
        commission: parseFloat(envVars.RUBIES_COMMISSION),
    },
    paystack: {
        url: envVars.PAYSTACK_URL,
        skey: envVars.PAYSTACK_LIVE_SKEY,
        skeyDev: envVars.PAYSTACK_TEST_SKEY,
        pkey: envVars.PAYSTACK_TEST_PKEY,
    },
    chat: {
        message: 0,
        audio: 1,
        video: 2,
        payment: 3,
    },
    firebase_admin: {
        type: envVars.FIREBASE_TYPE,
        project_id: envVars.FIREBASE_PROJECT_ID,
        private_key_id: envVars.FIREBASE_PRIVATE_KEY_ID,
        private_key: envVars.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: envVars.FIREBASE_CLIENT_EMAIL,
        client_id: envVars.FIREBASE_CLIENT_ID,
        auth_uri: envVars.FIREBASE_AUTH_URI,
        token_uri: envVars.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: envVars.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: envVars.FIREBASE_CLIENT_X509_CERT_URL,
    },
}

export default configObj