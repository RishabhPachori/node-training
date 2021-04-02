import { Request, Response } from 'express'
import createMockData from '../converter/createMockData'
import { createReadStream, createWriteStream } from 'fs'
import  { AsyncParser } from 'json2csv' // convert json to csv

/**
 * Controller for convert Json Data to csv and create/write csv file with fileName 
 * @param req req
 * @param res res
 */
const convertJsonDataToCsv = (req: Request,res: Response)=>{
    const { fileName } =  req.body
    if(!fileName){
        res.json("Missing required field")
    }else{
    // write JSON data in fileName.json File
    const writeStreamForJson = createWriteStream(`./${fileName}.json`)
    writeStreamForJson.write(JSON.stringify(createMockData()))

    // Convert Json data to fileName.csv file
    const readStreamForJson = createReadStream(`./${fileName}.json`,{ encoding: "utf-8" })
    const writeStreamForCsv = createWriteStream(`./${fileName}.csv`)
    const fields: string[] = ['id','first_name','last_name','age','job_title','experience']
    const opts = { fields }
    const asyncParser = new AsyncParser(opts)
    const parsingProcessor = asyncParser.fromInput(readStreamForJson).toOutput(writeStreamForCsv)
    if(!parsingProcessor){
        res.json("Something went wrong..!! while converting json data to csv")
    }
    res.json("Successfully converts json data to csv")
    }
}

export default convertJsonDataToCsv 