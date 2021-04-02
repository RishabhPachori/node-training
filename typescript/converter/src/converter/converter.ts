// import csv from 'csv-parser' // convert csv to json 
// import  { AsyncParser } from 'json2csv' // convert json to csv
// import { createReadStream, createWriteStream } from 'fs'


// // import {join} from "path"
// //  console.log(join(__dirname,"csvToJson.csv"))

// /**
//  * Method for convert csv to json
//  */

// const csvToJson = ()=>{
//     const jsonArray: Array<object> = []
//     const readStream = createReadStream("./abc.csv",{ encoding: "utf-8" })
//     .pipe(csv())
//     .on('data',(data: object)=>jsonArray.push(data))
//     .on('end',()=>{
//         // //console.log("jsonArray",jsonArray)
//         // const writeStream = createWriteStream("./csvToJson.json")
//         // writeStream.write(JSON.stringify(jsonArray))
//         console.log('jsonArray', jsonArray)
//         return jsonArray
//     })
// }

// csvToJson()

// // /**
// //  * Method for convert json to csv
// //  */

// // const jsonToCsv = ()=>{
// //     const readStream = createReadStream("./csvToJson.json",{ encoding: "utf-8" })
// //     const writeStream = createWriteStream("./jsonToCsv.csv")
// //     const fields: string[] = ['id','name','email','country','age']
// //     const opts = { fields }
// //     const asyncParser = new AsyncParser(opts)
// //     asyncParser.fromInput(readStream).toOutput(writeStream)
// // }

// // jsonToCsv()
import { parse } from 'papaparse'
import fs from 'fs'

interface ConvertCsvToJsonReturnInterface {
	jsonData: Array<{ [key: string]: unknown }>
}

const convertCsvToJson = (csvString: string): ConvertCsvToJsonReturnInterface => {
	if (!csvString) {
		throw new Error('Csv String not received')
	}
	const result = parse(csvString, { header: true })
	return {
		jsonData: (result.data) as Array<{ [key: string]: unknown }>
	}
}
const file = fs.readFileSync('abc.csv', 'utf8')
 const result =convertCsvToJson(file)
 console.log("result", result)