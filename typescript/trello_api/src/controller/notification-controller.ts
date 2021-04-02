import { PubSub } from '@google-cloud/pubsub'
import { listenForPullMessages } from '../service/pubSub'
import { Request, Response } from 'express'

const pubSubClient = new PubSub()
const subscriptionName = 'notification-sub'
const timeout = 60


const notificationHome = (res: Response)=> {
  return res.status(200).json({
    success: true,
    message: 'Notification route confirmed :)',
  })
}

const pullDelivery = (req: Request, res: Response)=> {
  try {
    const result = listenForPullMessages(pubSubClient, subscriptionName, timeout)
    return res.status(200).json({
      messageResponse: result.messageResponse,
      messageCount: result.messageCount,
      success: true
    })          
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Could not receive orders object :(',
        data: error
    })                        
  }
}

export {
  notificationHome,
  pullDelivery
}