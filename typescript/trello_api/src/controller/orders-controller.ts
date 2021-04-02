import { PubSub } from '@google-cloud/pubsub'

import { publishMessage } from '../service/pubSub'
import { Request, Response } from 'express'

const pubSubClient = new PubSub()
const topicName = 'testTopic'

const orders = (res: Response)=> {
  return res.status(200).json({
    success: true,
    message: 'Orders route confirmed :)'
  })
}

const createOrders = async (req: Request, res: Response)=> {
  let ordersObj = req.body
  let messageId = await publishMessage(pubSubClient, topicName, ordersObj)
  return res.status(200).json({
    success: true,
    message: `Message ${messageId} published :)`
  })
}

export {
  orders,
  createOrders
}