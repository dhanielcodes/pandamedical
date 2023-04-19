import admin from 'firebase-admin'
import { config } from 'config'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase_admin),
    databaseURL: 'https://my-starter-project-bc4e2.firebaseio.com',
})

export default { admin }