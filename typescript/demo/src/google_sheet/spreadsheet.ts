import {google} from 'googleapis'



import credentials from './credentials.json'

const client = new google.auth.JWT(
    credentials.client_email,
    undefined, 
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
)

const googleApiAuth = new Promise((resolve,reject)=>{
    return client.authorize((err,tokens)=>{
        if(err){
            console.log("error in authorization",err)
            reject(err)
        }else{
            console.log("connected")
            getSpreadSheetData(client)
            // updateDataInSpreadSheet(client)
            // getSpreadSheetMetaData(client)
        }
    })
})

   
// getSpreadSheetData 
const getSpreadSheetData = async(cl)=>{
    try{
        const googleSheetApi = google.sheets({version: 'v4', auth: cl})
        const options = {
            spreadsheetId : '1765TqrANpnW3QaNqzxdBZlFspNqMbb5086SsPxszlik',
            range: 'Sheet1!A2:B6'
        }
        let result = await googleSheetApi.spreadsheets.values.get(options)
        console.log("*****get spreadsheet data*******",result.data.values)
    }catch(error){
        console.log("getSpreadSheetData Error",error.message)
    }
    
}


// update data in spreadsheet
const updateDataInSpreadSheet = async(cl)=>{
    try{
        let values = [
            [
                "7", // id
                "dell", //then name
            ],
            [
                "8", // id
                "hp", //then name
            ]
        ];
        let resource = {
            values
        }
        const googleSheetApi = google.sheets({version: 'v4', auth: cl})
        const updateOptions = {
            spreadsheetId : '1765TqrANpnW3QaNqzxdBZlFspNqMbb5086SsPxszlik',
            range: 'Sheet1!A7',
            valueInputOption: 'USER_ENTERED',
            resource: resource
        }
       let result = await googleSheetApi.spreadsheets.values.update(updateOptions)
       console.log("****update spreadsheet data*****",result.data)
    }catch(error){
        console.log("updateDataInSpreadSheet Error",error.message)
    }
    
}


// // get SpreadSheet Meta Data 
// const getSpreadSheetMetaData = async(cl)=>{
//     try{
//         const googleSheetApi = google.sheets({version: 'v4', auth: cl})
//         const options = {
//             spreadsheetId: '1765TqrANpnW3QaNqzxdBZlFspNqMbb5086SsPxszlik',
//             ranges: [],
//             includeGridData: false
//         }
//         let result = await googleSheetApi.spreadsheets.get(options)
//         console.log("********getSpreadSheetMetaData********",JSON.stringify(result.data,null,2))
//     }catch(error){
//         console.log("getSpreadSheetMetaData Error",error.message)
//     }
// }




// // create SpreadSheet Meta Data 
// const createSpreadSheetMetaData = async(cl)=>{
//     const gsApi = google.sheets({ version: 'v4', auth: cl })
//     const requests = [{
//         "developerMetadata": {
//             "metadataId": 1,
//             "metadataKey": "spreadsheetDetails",
//             "metadataValue": JSON.stringify({
//                 "createdAt":new Date().getTime()
//             }),
//             "location":{
//                 "spreadsheet":true
//             },
//             "visibility":"DOCUMENT"
//     }
// }]
//     const options = {
//         spreadsheetId: '1765TqrANpnW3QaNqzxdBZlFspNqMbb5086SsPxszlik',
//         resource: {
//             requests : requests
//         }
//     }
//     let result = (await gsApi.spreadsheets.batchUpdate(options)).data
//     console.log("metadata",result)
// }


