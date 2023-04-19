import express from 'express'
import auditCtrl from 'controllers/audit.controller'

const AuditRoute = express.Router() // eslint-disable-line new-cap

AuditRoute.route('/').get(auditCtrl.list)

export default AuditRoute