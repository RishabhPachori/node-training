import express from 'express'
import dotEnv from 'dotenv'
dotEnv.config()

import { router } from './routes/orders'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/orders', router)

app.listen('8000')


// export { app }