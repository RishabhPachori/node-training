import express from 'express'
const router = express.Router()

import {deliveryHome, pullDelivery} from '../controller/delivery-controller'

router.get('/', deliveryHome)
router.get('/pull', pullDelivery)

export {
  router
}