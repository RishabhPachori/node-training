import express from 'express'
const router = express.Router()

import {notificationHome, pullDelivery} from '../controller/notification-controller'

router.get('/', notificationHome)
router.get('/pull', pullDelivery)

export {
  router
}