import express from 'express'
import bodyParser from 'body-parser'
import convertJsonDataToCsv from './controller/convertJsonDataToCsv'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// // route for convert json data to csv and create/write a csv file with given file name
app.post('/convert-json-to-csv',convertJsonDataToCsv)


export { app }