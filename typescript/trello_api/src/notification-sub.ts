import express from 'express'
import dotEnv from 'dotenv'
dotEnv.config()

import { router } from './routes/notification'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/notification', router)

app.listen('8002')