import nodemailer from 'nodemailer'
import nexphbs from 'nodemailer-express-handlebars'
import { winston as logger, config } from 'config'
import Global from 'helpers/globals'
import path from 'path'
import Audit from 'controllers/audit.controller'

let transport = null
let emailOptions = {}

const AsyncTransportSendMail = async(
        setting,
        payload = '',
        userId = config.admin.userId,
        objectId = null,
        action = Audit.dbActions.emailsent,
    ) =>
    new Promise((resolve, reject) => {
        transport.sendMail(setting, (error, info) => {
            if (error) {
                Audit.info(userId, objectId, action, {
                    html: payload || setting,
                    error,
                })
                logger.log({
                    level: 'error',
                    message: error,
                })
                return reject(error)
            }

            Audit.info(userId, objectId, action, {
                html: payload || setting,
                info,
            })
            logger.log({
                level: 'info',
                message: `Message sent: ${info.messageId}`,
            })
            return resolve(info)
        })
    })

/**
 *  Start-Up Email Service
 */
function startUpEmailService(callback) {
    emailOptions = {
        host: config.mailOptions.host,
        port: config.mailOptions.hostPort,
        auth: {
            user: config.mailOptions.user,
            pass: config.mailOptions.pass,
        },
    }
    transport = nodemailer.createTransport(emailOptions)
    const handlebarsOptions = {
        viewEngine: {
            layoutsDir: 'app/views/',
            defaultLayout: 'layout.hbs',
        },
        viewPath: 'app/views/email',
        extName: '.hbs',
    }

    transport.use('compile', nexphbs(handlebarsOptions))
    callback()
}

async function sendLoginEmail(req, request, next) {
    try {
        const { user } = req
        if (!user.email) {
            return
        }
        const message = {
            from: config.mailOptions.from,
            to: user.email,
            subject: `New Login from Account ${user.email} at ${new Date()} on Pandamedical`,
            template: 'login',
            context: {
                name: `${user.firstName} ${user.lastName}`,
                email: config.admin.email,
                started_up: `New Login from Account at ${new Date()}`,
                device: `${Global.getDeviceInfo(request)}`,
                ip: `${Global.getIpAddress(request)}`,
            },
            //     text: `New Login from Account at ${new Date()}`,
            //     html: `
            //   IP: ${Global.getIpAddress(request)}<br/>
            //   Device: ${Global.getDeviceInfo(request)}<br/>
            //   Account Name : ${user.firstName} ${user.lastName}<br/>
            //   Date: ${new Date()}
            // `,
        }

        await AsyncTransportSendMail(
            message,
            undefined,
            undefined,
            undefined,
            Audit.dbActions.loginemails,
        )
    } catch (error) {
        next(error)
    }

    // transport.sendMail(message, (error, info) => {
    //     if (error) {
    //         Audit.info(config.admin.userId, null, Audit.dbActions.loginemails, {
    //             html: message.html,
    //             error,
    //         })
    //         return logger.log({
    //             level: 'error',
    //             message: error,
    //         })
    //     }

    //     Audit.info(config.admin.userId, null, Audit.dbActions.loginemails, {
    //         html: message.html,
    //         info,
    //     })
    //     logger.log({
    //         level: 'info',
    //         message: `Message sent: ${info.messageId}`,
    //     })
    //     return null
    // })
}

/**
 *
 */
function emailCheck() {
    const message = {
        from: config.mailOptions.from,
        to: config.admin.email,
        subject: `Panda Health API ${config.env}-Server Started at ${new Date()}`,
        template: 'test',
        context: {
            name: 'Super Admin',
            email: config.admin.email,
            started_up: `${new Date()}`,
        },
    }

    transport.sendMail(message, (error, info) => {
        if (error) {
            Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
                html: message.html,
                error,
            })
            return logger.log({
                level: 'error',
                message: error,
            })
        }

        Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
            html: message.html,
            info,
        })
        logger.log({
            level: 'info',
            message: `Message sent: ${info.messageId}`,
        })
        return null
    })
}

function systemError(stacktrace) {
    const message = {
        from: config.mailOptions.from,
        to: config.admin.email,
        subject: `Server Started at ${new Date()}`,
        text: 'System has some exceptions in code please review',
        html: `Server Exception at ${new Date()}<br/> ${stacktrace}`,
    }

    transport.sendMail(message, (error, info) => {
        if (error) {
            Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
                html: message.html,
                error,
            })
            return logger.log({
                level: 'error',
                message: error,
            })
        }

        Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
            html: message.html,
            info,
        })
        logger.log({
            level: 'info',
            message: `Message sent: ${info.messageId}`,
        })
        return null
    })
}

// /**
//  *
//  * @param {*} to
//  * @param {*} html
//  */
// function verifyNewUser(to, html) {
//     const message = {
//         from: emailOptions.auth.user,
//         to,
//         subject: 'Verify your email id',
//         text: 'Verify your email id',
//         html,
//     };
//     transport.sendMail(message, (error, info) => {
//         if (error) {
//             Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
//         html: message.html,
//         error,
//       });
//             return logger.log({
//                 level: 'error',
//                 message: error,
//             });
//         }

//         Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
//       html: message.html,
//       info,
//     });
//         logger.log({
//             level: 'info',
//             message: `Message sent: ${info.messageId}`,
//         });
//         return null;
//     });
// }

/**
 *
 * @param {*} to
 * @param {*} html
 */
function sendForgotPasswordEmailLink(user, token, callback = null) {
    if (!emailOptions.auth.user) {
        startUpEmailService()
    }
    const message = {
        from: config.mailOptions.from,
        to: user.email,
        subject: 'Forgot Password',
        template: 'forgotpassword/emaillink',
        context: {
            name: user.firstName,
            url: `${config.app.baseURL}/forgot-password/reset-password?method=email&token=${token}`,
        },
    }
    transport.sendMail(message, (error, info) => {
        if (error) {
            Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
                html: message.html,
                error,
            })
            return logger.log({
                level: 'error',
                message: error,
            })
        }

        Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
            html: message.html,
            info,
        })
        if (callback) {
            callback()
        }
        logger.log({
            level: 'info',
            message: `Message sent: ${info.messageId}`,
        })
        return null
    })
}

async function sendEmails(user, subject, html) {
    if (!emailOptions.auth.user) {
        startUpEmailService()
    }
    if (!user.email) {
        return logger.log({
            level: 'error',
            message: 'Email Not found',
        })
    }
    const message = {
        from: config.mailOptions.from,
        to: user.email,
        subject,
        text: subject,
        html: `<h2> Panda Health Limited</h2> 
        <br>
        <div>${html}</div>
        `,
    }

    await AsyncTransportSendMail(message)

    // transport.sendMail(message, (error, info) => {
    //     if (error) {
    //         Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
    //             html: message.html,
    //             error,
    //         })
    //         return logger.log({
    //             level: 'error',
    //             message: error,
    //         })
    //     }

    //     Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
    //         html: message.html,
    //         info,
    //     })
    //     logger.log({
    //         level: 'info',
    //         message: `Message sent: ${info.messageId}`,
    //     })
    //     return null
    // })
}

async function sendInviteEmail(user, email, next) {
    try {
        if (!user.email) {
            return logger.log({
                level: 'error',
                message: 'Email Not found',
            })
        }

        if (!emailOptions.auth.user) {
            startUpEmailService()
        }

        const message = {
            from: config.mailOptions.from,
            to: email,
            subject: 'Invitation to Panda Health',
            template: 'invites/physician',
            context: {
                sender_name: `${user.firstName} ${user.lastName}`,
                recipient_name: `Doctor`,
                url: `${config.app.baseURL}/faq`,
            },
        }
        await AsyncTransportSendMail(message)
    } catch (error) {
        next(error)
    }
}

function sendAppointmentEmails(user, subject, messages) {
    if (!emailOptions.auth.user) {
        startUpEmailService()
    }
    if (!user.email) {
        return logger.log({
            level: 'error',
            message: 'Email Not found',
        })
    }
    const message = {
        from: config.mailOptions.from,
        to: user.email,
        subject,
        template: 'appointment',
        context: {
            message: messages.message,
            url: messages.url,
        },
    }

    transport.sendMail(message, (error, info) => {
        if (error) {
            Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
                html: message.html,
                error,
            })
            return logger.log({
                level: 'error',
                message: error,
            })
        }

        Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
            html: message.html,
            info,
        })
        logger.log({
            level: 'info',
            message: `Message sent: ${info.messageId}`,
        })
        return null
    })
}
// /**
//  *
//  */
function userEmailOTPCheck(user, subject, html) {
    const message = {
        from: config.mailOptions.from,
        to: user.email,
        subject,
        text: subject,
        html,
    }

    transport.sendMail(message, (error, info) => {
        if (error) {
            Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
                html: message.html,
                error,
            })
            return logger.log({
                level: 'error',
                message: error,
            })
        }

        Audit.info(config.admin.userId, null, Audit.dbActions.emailsent, {
            html: message.html,
            info,
        })
        logger.log({
            level: 'info',
            message: `Message sent: ${info.messageId}`,
        })
        return null
    })
}

// init email service

startUpEmailService(emailCheck)

export default {
    startUpEmailService,
    sendLoginEmail,
    sendForgotPasswordEmailLink,
    systemError,
    sendEmails,
    sendAppointmentEmails,
    userEmailOTPCheck,
    sendInviteEmail,
}