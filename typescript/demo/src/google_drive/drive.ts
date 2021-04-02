import { google } from 'googleapis'
import readline from 'readline'
import * as fs from 'fs'


const tokenFile = 'token.json'
const SCOPES = ['https://www.googleapis.com/auth/drive']

// Load client secrets from a local file.
fs.readFile("credentials.json",'utf-8',(error,content)=>{
    if (error) return console.log('Error loading client secret file:', error)
    // authorize(JSON.parse(content),listSpreadSheetFiles)
    authorize(JSON.parse(content),listDocumentFiles)
    //authorize(JSON.parse(content),listAllFiles);
})

// create oAuthClient with the credentials 
const authorize = (credentials: any,callback)=>{
    const {client_secret, client_id, redirect_uris} = credentials.installed
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]
    )
    
    // Check if we have previously stored a token.
    fs.readFile(tokenFile,'utf-8', (err: any, token: any) => {
        if (err) return getAccessToken(oAuth2Client,callback)
        oAuth2Client.setCredentials(JSON.parse(token))
        callback(oAuth2Client)
    })
}

// Get and store new token at the time of user authorization
const getAccessToken = (oAuth2Client,callback)=>{
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    })
    console.log('Authorize this app by visiting this url:', authUrl)
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close()
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err)
            oAuth2Client.setCredentials(token)
            
            // Store the token 
            fs.writeFile(tokenFile, JSON.stringify(token), (err) => {
                if (err) return console.error(err)
                console.log('Token stored to', tokenFile)
            })
            callback(oAuth2Client)
        })
    })
}

// // Method for get all the spreadsheetfiles 
// const listSpreadSheetFiles = async(auth)=>{
//     try{
//         const googleDriveApi = google.drive({version: 'v3', auth})
//         const options = {
//             corpora : 'user',
//             //pageSize: 10,
//             q: "mimeType = 'application/vnd.google-apps.folder'",
//             // application/vnd.google-apps.folder
//             // application/vnd.google-apps.spreadsheet
//             //pageToken: '',
//             fields: 'files(name,mimeType,id)'
//         }
//         let result = await googleDriveApi.files.list(options)
//         // let result = await googleDriveApi.files.get({fileId: '1irKOAZGObD8vbSIxgwynZL_CL160w2qW'})
//         console.log("*****List Spreadsheet Files*******",result.data.files)
//         // console.log('folder metadata',result)
//     }catch(error){
//         console.log("Error in getting files list",error.message)
//     }
// }

// Method for get all the document files 
const listDocumentFiles = async(auth)=>{
    try{
        const googleDriveApi = google.drive({version: 'v3', auth})
        const options = {
            corpora : 'user',
            //pageSize: 10,
            q: `mimeType = 'application/vnd.google-apps.document'`
            // alt: 'media'
            //pageToken: '',
            // fields:  'files(name,mimeType,id)'
        }
        let result = await googleDriveApi.files.list(options)
        console.log("*****List document Files*******",result)
    }catch(error){
        console.log("Error in getting files list",error.message)
    }
}
  

// // Method for get all the files 
// const listAllFiles = async(auth)=>{
//     try{
//         const googleDriveApi = google.drive({version: 'v3', auth})
//         const options = {
//             corpora : 'user',
//             //pageSize: 10,
//             //pageToken: '',
//             fields: 'files(name,mimeType,id)'
//         }
//         let result = await googleDriveApi.files.list(options)
//         console.log("*****List All Files*******",result.data.files)
//     }catch(error){
//         console.log("Error in getting files list",error.message)
//     }
// }


// const user1 = [
//     {'id': 1, 'name': 'rishabh'},
//     {'id': 2, 'name': 'rishabh2'}
// ]

// const user2 = [
//     {'rollno':12, 'name': 'harshit'},
//     {'rollno':11, 'name': 'harshit2'},
// ]
// const a = [1,2,3]
// const b= [2,3,4,5]
// const result1 = [...a,...b]
// const result2 = []
// console.log('result', result1)
// // const user1Keys = Object.keys(user1[0])
// // const user2Keys = Object.keys(user2[0])
// // const final = [...new Set([...user1Keys, ...user2Keys])]
// // console.log(final)
// let countKeysCharacter= 0
// user1.forEach((jsonObject) => {
//     Object.values(jsonObject).forEach((value) => {
//         // if (value) {
//         //     return value.length
//         // }
//         // console.log(value.length)
//         if (typeof value === "string" ) {
//             countKeysCharacter+= value.length
//         }
//         return countKeysCharacter
//     })
// })
// console.log('countKeysCharacter', countKeysCharacter)

// const data =[
//     {
//       rollno: '11',
//       firstName: 'rishabh11',
//       lastName: 'pachori11',
//       age: '211',
//       jobTitle: 'sde'
//     },
//     {
//       rollno: '21',
//       firstName: 'rishabh21',
//       lastName: 'pachori21',
//       age: '322',
//       jobTitle: 'intern'
//     }
//   ]

//   data.forEach((jsonObject) => {
// 		for (const [key,value] of Object.entries(jsonObject)) {
// 			console.log(key, value)
//     }
//   })

// const a = 126
// const b = 126 / (1024 * 1024)
// if (b < 5000000) {
//   console.log("b", b)
// }

// function bytesToSize(bytes: number): string {
//   const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB']
//   if (bytes === 0) return 'n/a'
//   const i: number = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString())
//   console.log('i', i)
//   if (i === 0) return `${bytes} ${sizes[i]}`
//   return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`
// }
// const bytes = 5000000
// const bytesToSize = bytes/ (1024 * 1024)
// console.log('converter',bytesToSize.toFixed(2))