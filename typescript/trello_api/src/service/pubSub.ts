/** publish message for given payload */
const publishMessage = async (pubSubClient, topicName, payload)=> {
  const dataBuffer = Buffer.from(JSON.stringify(payload))
  const messageId = await pubSubClient.topic(topicName).publish(dataBuffer)
  console.log(`Message ${messageId} published.`)
  return messageId 
}

/** listen pull messages */
const listenForPullMessages = (pubSubClient, subscriptionName,  timeout)=> {
  const subscription = pubSubClient.subscription(subscriptionName)
    // Create an event handler to handle messages
    let messageResponse: any = []
    let messageCount = 0
    const messageHandler = message => {
      const response = {
        messageId: message.id,
        data: message.data,
        Attributes: message.attributes
      }
      console.log(`Received message messageId: ${message.id}:`)
      console.log(`\tData: ${message.data}`)
      console.log(`\tAttributes: ${message.attributes}`)
      messageCount += 1

      // "Ack" (acknowledge receipt of) the message
      message.ack()
      return messageResponse.push(response)
    }
    // Listen for new messages until timeout is hit
    subscription.on('message', messageHandler)
    setTimeout(() => {
      subscription.removeListener('message', messageHandler)
      console.log(`${messageCount} message(s) received.`)
    }, timeout * 1000)
    const result = {
      messageResponse: messageResponse,
      messageCount: messageCount
    }
    console.log('******result****', result)
    return result
}

export {
  publishMessage,
  listenForPullMessages
} 