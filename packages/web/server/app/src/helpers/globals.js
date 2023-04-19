import crypto from 'crypto'
import ipRegex from 'ip-regex'
import geoip from 'geoip-lite'
import DeviceDetector from 'device-detector-js'
import parsePhoneNumber from 'libphonenumber-js'
import { User } from 'database'
/**
 * @name randomString
 * @param {Number} length
 * @return {Promise}
 */
async function randomString(length = 128) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(length, (err, result) => {
            if (err) reject(err)
            resolve(result.toString('hex'))
        })
    })
}

/**
 * @name generateOTP
 * @param {Number} maxOtp
 * @return {String}
 */
function generateOTP(maxOtp = 6) {
    // Declare a digits variable
    // which stores all digits
    const digits = '0123456789'
    let OTP = ''
    for (let i = 0; i < maxOtp; i++) {
        OTP += digits[Math.floor(Math.random() * 10)]
    }
    return OTP
}

/**
 *
 * @name inviteCode
 * @param {number} [length=3]
 * @returns
 */
function inviteCode(length = 3) {
    const code = crypto.randomBytes(length).toString('hex').toUpperCase()
    if (isCodeExist(code)) {
        inviteCode()
    } else {
        return code
    }
}

/**
 *
 * @name isCodeExist
 * @param {String} code
 * @returns {Promise} User
 */
async function isCodeExist(code) {
    return User.findOne({ inviteCode: code })
}

// /**
//  *
//  * @name getIpAddress
//  * @param {Object} req
//  * @returns {String}
//  */
// function getIpAddress(req) {
//     return (
//         req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         (req.connection.socket ? req.connection.socket.remoteAddress : null)
//     )
// }

/**
 * @name getIpAddress
 * @description generate a custom object with the users ip address
 * @param {Object} request
 * @returns {String} custom generated ip string
 */

export const getIpAddress = (request) => {
        // get login ip from request object
        const requestIp = request.ip
        const requestHeadersIp =
            (request.headers['x-forwarded-for'] || '').split(',').pop() ||
            request.connection.remoteAddress ||
            request.socket.remoteAddress ||
            request.connection.socket.remoteAddress
        const currentIp = requestHeadersIp || requestIp
        const splitIp = currentIp.toString().split(':').join(',').match(ipRegex())
        if (splitIp !== null && splitIp !== undefined && splitIp.length > 0) {
            return splitIp[0]
        }
        return '0.0.0.0'
    }
    /**
     *
     * @name getDeviceInfo
     * @param {Object} req
     * @returns
     */
function getDeviceInfo(req) {
    const userAgent =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36'
    const ua = req.headers['user-agent']
    const detector = new DeviceDetector()

    const result = detector.parse(ua)
    if (!result.client) {
        return null
    }
    return result.client.name
}
/**
 * @name getLoginIpLocation
 * @description generate a custom object with the users ip address
 * @param {String} ip
 * @returns {String} custom generated ip string
 */

export const getLoginIpLocation = (ip) => {
        // get login location from ip String
        const geo = geoip.lookup(ip)
        const fallbackIp = geoip.lookup('197.210.65.124')
        if (geo) {
            return geo
        }
        return fallbackIp
    }
    /**
     *
     * @name getBrowser
     * @param {Object} req
     * @returns
     */
function getBrowser(req) {
    let browser
    const ua = req.headers['user-agent']
    if (/firefox/i.test(ua)) {
        browser = 'firefox'
    } else if (/chrome/i.test(ua)) {
        browser = 'chrome'
    } else if (/safari/i.test(ua)) {
        browser = 'safari'
    } else if (/msie/i.test(ua)) {
        browser = 'msie'
    } else if (/windows phone/i.test(ua)) {
        browser = 'Windows Phone'
    } else if (/android/i.test(ua)) {
        browser = 'Android'
    } else if (/iPad|iPhone|iPod/i.test(ua)) {
        browser = 'iOS'
    } else {
        browser = 'unknown'
    }
    return browser
}

/**
 * Convert a File in to base64 string
 * @param file {File} File to convert to Base64 String
 * @return String
 */
const encodeToBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })

/**
 * Convert a base64 string in a Blob according to the data and contentType.
 * @param b64Data {String} Pure base64 string without contentType
 * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
 * @param sliceSize {Int} SliceSize to process the byteCharacters
 * @param fileName{string} File Name required for creating a new file
 * @return Blob
 */
const decodeBase64toBlob = (b64Data, contentType, sliceSize, fileName) => {
    contentType = contentType || ''
    sliceSize = sliceSize || 512

    const byteCharacters = atob(b64Data)
    const byteArrays = []

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize)

        const byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i)
        }

        const byteArray = new Uint8Array(byteNumbers)

        byteArrays.push(byteArray)
    }

    const blob = new Blob(byteArrays, { type: contentType })
    return new File([blob], fileName, {
        type: contentType,
    })
}

/**
 * Convert a base64 string in a Blob according to the data and contentType.
 * @param value {String} Phone Number to Validate
 * @param helpers {Object} passes default object for internal helpers methods
 * @return value
 */

const JoiIsValidPhoneNumber = (value, helpers = {}) => {
    const PhoneNumber = parsePhoneNumber(value)
    if (!PhoneNumber) {
        throw new Error(`${value} is an invalid Mobile/Phone Number`)
    }
    if (PhoneNumber.isValid()) {
        return value
    }
    return undefined
}

/**
 * @name declutterString
 * @description deletes all non-alphanumeric char from string.
 * @param {String} string
 * @param {Regex} regex
 * @param {Stirng} substitute
 * @returns {String} custom generated ip string
 */

export const declutterString = (
    value = '',
    regex = new RegExp(/[^/\,a-zA-Z0-9'!_[\]-]/, 'g'),
    substitute = ' ',
) => {
    // return value
    let string = value
    try {
        if (Array.isArray(value)) {
            string = value.map((partial) => Object.values(partial)).join(' ')
        }
        const stringified = JSON.stringify(string)
        const word = stringified.replace(regex, substitute).replace(/\s+/g, ' ')
        return word.trim()
    } catch (error) {
        console.log(error)
        return string
    }
}

/**
 * @name convertTime12hto24h
 * @description thios function converts time strings in from 12H to 24H
 * @param {String} time12h
 * @returns {Object} custom generated ip string
 */
export const convertTime12hto24h = (time12h) => {
    const [time, modifier] = time12h.split(' ')

    let [hours, minutes] = time.split(':')

    if (hours === '12' && modifier.toLowerCase() === 'am') {
        hours = '00'
    }

    if (modifier.toLowerCase() === 'pm' && hours !== '12') {
        hours = parseInt(hours, 10) + 12
    }

    return {
        formattedTime: `${hours}:${minutes}`,
        hours,
        minutes,
    }
}

export default {
    randomString,
    generateOTP,
    inviteCode,
    getIpAddress,
    getDeviceInfo,
    getBrowser,
    encodeToBase64,
    decodeBase64toBlob,
    JoiIsValidPhoneNumber,
    getLoginIpLocation,
    declutterString,
    convertTime12hto24h,
}