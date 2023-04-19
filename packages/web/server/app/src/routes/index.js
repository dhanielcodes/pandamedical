import express from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import vitalsRoutes from './vitals.routes'
import vitalsHistoryRoutes from './vitalshistory.routes'
import labTestResultsRoutes from './labTestResults.routes'
import labTestsRoutes from './labTests.routes'
import otpRoutes from './otp.routes'
import appointmentRoutes from './appointment.routes'
import timeslotsRoutes from './timeslot.routes'
import auditRoutes from './audit.routes'
import bookingsListRoutes from './bookingslisting.routes'
import medicalSpecialtyRoutes from './medicalspecialty.routes'
import physicianRoutes from './physician.routes'
import medicalCredentialsRoutes from './medicalcredential.routes'
import notificationsRoutes from './notifications.routes'
import patientReferralRoutes from './patient-referral.routes'

const router = express.Router()

router.get('/is-alive', function(req, res, next) {
        res.render('index', { title: 'Panda Health API' })
    })
    // mount auth routes at /auth
router.use('/auth', authRoutes)

// mount todos routes at /todos
router.use('/user', userRoutes)

// mount vitals routes at /vitals
router.use('/vitals', vitalsRoutes)

// mount vitals routes at /vitalshistory
router.use('/vitalshistory', vitalsHistoryRoutes)

// mount vitals routes at /labtestresults
router.use('/labtestresults', labTestResultsRoutes)

// mount vitals routes at /labtests
router.use('/labtests', labTestsRoutes)

// mount otp routes at /otp
router.use('/otp', otpRoutes)

// mount appointment routes at /appointments
router.use('/appointments', appointmentRoutes)

// mount timeslots routes at /timeslot
router.use('/timeslots', timeslotsRoutes)

// mount audit routes at /audit
router.use('/audit', auditRoutes)

// mount bookingslist  routes at /bookingslist
router.use('/bookingslist', bookingsListRoutes)

// mount medical specialty  routes at /medicalspecialty
router.use('/medicalspecialty', medicalSpecialtyRoutes)

// mount physician routes at /physician
router.use('/physician', physicianRoutes)

// mount medical credentials routes at /medicalcredentials
router.use('/medicalcredentials', medicalCredentialsRoutes)

// mount notifications routes at /notifications
router.use('/notifications', notificationsRoutes)

// mount patient referrals routes at /referrals
router.use('/referrals', patientReferralRoutes)

export default router