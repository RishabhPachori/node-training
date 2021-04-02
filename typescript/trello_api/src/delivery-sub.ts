import express from 'express'
import dotEnv from 'dotenv'
dotEnv.config()

import { router } from './routes/delivery'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/delivery', router)

app.listen('8001')