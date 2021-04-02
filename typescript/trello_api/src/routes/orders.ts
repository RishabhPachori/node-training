import express from 'express'
const router = express.Router()

import {orders, createOrders} from '../controller/orders-controller'

router.get('/', orders)
router.post('/createOrders', createOrders)

export {
  router
}