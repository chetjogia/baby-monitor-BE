
import {admin} from 'firebase-admin/app'

import serviceAccount from './baby-monitor-private-key.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


export default admin