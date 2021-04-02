// import Trello from 'trello'
// import { config } from 'dotenv'

// config()

// new Trello("MY APPLICATION KEY", "MY USER TOKEN")
// const trello = new Trello(process.env.MY_APPLICATION_KEY,process.env.MY_USER_TOKEN)
// console.log('trello', trello)
// trello.addBoard()
// interface BoardDataInterface{
//   id: string,
//   name: string,
//   desc: string,
//   idMemberCreator: string,
//   idOrganization: string,
//   shortLink: string
// }

// interface BoardInterface{
//   id: string,
//   name: string,
//   desc: string,
//   idMemberCreator: string,
//   idOrganization: string,
//   shortLink: string
// }

// interface GetAllCardsInterface{
//   id: string,
//   closed: boolean,
//   dateLastActivity: string,
//   desc: string,
//   idBoard: string,
//   idList: string,
//   name: string,
//   shortLink: string,
//   isTemplate: boolean,
//   cardRole: string,
//   idChecklists: Array<string>,
//   idMembers: Array<string>,
//   labels: Array<string>,
//   shortUrl: string,
//   subscribed: boolean,
//   url: string
// }

// /**
//  * Method for get All cards from a specific board
//  * @param boardName boardName 
//  */
// const username = 'rishabhpachori'
// const getAllCardsOfBoard = async(boardName: string): Promise<any>=>{
//   try{
//     const BoardsData: BoardDataInterface[] = await trello.makeRequest('get', `/1/members/${username}/boards`)
//     console.log('BoardsData', BoardsData)
//     const board: BoardInterface | undefined = BoardsData.find(item=> item.name === boardName)
//     console.log('board', board)
//     if(!board){
//       throw new Error("Board not found with this board name")
//     }else{
//       const getAllCards: GetAllCardsInterface = await trello.getCardsOnBoard(board.id)
//       return getAllCards
//     }
//   }catch(error){
//     console.log(" Error in getAllCardsOfBoard",error.message)
//   }
	
// }

// getAllCardsOfBoard('My To Do Board')
//   .then((value) => {
//     console.log('value', value)
//   })
//   .catch((error) => {
//     console.log('error', error)
//   })
// export { getAllCardsOfBoard }

// import JiraApi from 'jira-client';

// // Initialize
// var jira = new JiraApi({
//   protocol: 'https',
//   host: ' https://ellissen.atlassian.net/',
//   username: 'Rishabh Pachori',
//   password: 'wkPGfccydoPZJUTTM09M365F',
//   apiVersion: '2',
//   strictSSL: true
// });

// console.log('jira',jira)


// const data = boardData.find((item)=> item.name === 'a' || projectKey.forEach((item)=>{
//   item
// }) )
// console.log('data', data)


// CREATE EXCEL FILE 

// import XLSX from "xlsx"
// import {readFileSync, writeFileSync} from 'fs'
// // import * as path from 'path'
// // const filePath = path.resolve(process.cwd(),'abc.xlsx') 
// // const file = fs.readFileSync('./abc.xlsx')
// // fs.writeFileSync('./excelfile.xlsx', file)
// // // console.log('file', file)
// // const data1 = XLSX.readFile('./excelfile.xlsx')
// // // fs.writeFileSync('demofile.json', JSON.stringify(data))
// // console.log('data1', data1)

// // const data2= XLSX.read(file)
// // console.log('data2', JSON.stringify(data2,null,4))

// writeFileSync('./fileName.xlsx','') 
// const file = XLSX.readFile('./fileName.xlsx') 
	

// // let studentData = [{ 
// //     Name:'B', 
// //     Age:22, 
// //     Branch:'cse', 
// //     Marks: 70 
// // }, 
// // { 
// //     Name:'A', 
// //     Age:21, 
// //     Branch:'EC', 
// //     Marks:80 
// // }] 

// let studentData = [
//     ['Name', 'Age','Branch','Marks'],
//     ['A',21,'cse',70],
//     ['B',22,'EC',80],
//     ['C',22,'cse',60]
// ]

// // const ws = XLSX.utils.json_to_sheet(studentData) 
// const ws = XLSX.utils.aoa_to_sheet(studentData)
	
//  const result = XLSX.utils.book_append_sheet(file,ws,"Sheet3")
	
// // Writing to our file 
// XLSX.writeFile(file,'./fileName.xlsx') 
// const readExcelFile = readFileSync('./fileName.xlsx')
// console.log('result',readExcelFile)

// import JiraClient from 'jira-connector' 
// const jira = new JiraClient({
//     host: "ellissen.atlassian.net",
//     strictSSL: true, // One of optional parameters
//     basic_auth: {
//         email: 'vishal@habilelabs.io',
//         api_token: 'mMR8TUxVKDqeGdLA5BXqA857'
//     }
// })

// const options = {
//     beseUrl: 'https://ellissen.atlassian.net/rest/servicedeskapi/organization',
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json'
//     }
// }

// jira.makeRequest(options)
//     .then((result)=> {
//         console.log('result', result)
//     })
//     .catch((error)=> {
//         console.log('error',error)
//     })

/**
 * puppeteer crawler test
 */

// import {
//     launch,
//     Page,
//     Browser,
//     BrowserContext,
//     Viewport,
//   } from 'puppeteer'
	
//   /**
//    * mock crawler function for crawled url
//    */
//   const mockPageInstance = async () => {
//     let browser: Browser
//     browser = await launch({
//       args: ['--no-sandbox','--incognito' ],
//       headless: false,
//       devtools: true
//     })
//     try {
//       // const incognitoBrowser: BrowserContext = await browser.createIncognitoBrowserContext()
//       const page: Page = await browser.newPage()
//       const viewport: Viewport = { width: 1920, height: 1080 }
//       await page.setViewport(viewport)
//       await page.setUserAgent(
//         'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
//       );
//       await page.setRequestInterception(true)
//       await page.goto('https://www.facebook.com')
//       await page.screenshot({path: 'example.png'})
//     }catch(error) {
//       await browser.close()
//       throw new Error('page instance not received')
//     }finally {
//         await browser.close()
//     }
//   }

//   mockPageInstance()

// /** google cloud Pubsub */
// import { PubSub } from '@google-cloud/pubsub'

// import dotEnv from 'dotenv'
// dotEnv.config()

// function main( topicName = 'testTopic',
// data = JSON.stringify({data: 'Hello Rishabh..!'}), 
// subscriptionName = 'testTopic-sub', 
// timeout = 60) {
//   // Creates a Pub Sub client
//   const pubSubClient = new PubSub()

// 	/** Method for publish message  */
//   async function publishMessage() {
//     // Publishes the message as a string
//     const dataBuffer = Buffer.from(data)

//     try {
//       const messageId = await pubSubClient.topic(topicName).publish(dataBuffer)
//       console.log(`Message ${messageId} published.`)
//     } catch (error) {
//       console.error(`Received error while publishing: ${error.message}`)
//       process.exitCode = 1
//     }
//   }

// 	/** Method for listen messages */
// 	function listenForMessages() {
//     // References an existing subscription
//     const subscription = pubSubClient.subscription(subscriptionName)

//     // Create an event handler to handle messages
//     let messageCount = 0
//     const messageHandler = message => {
//       console.log(`Received message messageId: ${message.id}:`)
//       console.log(`\tData: ${message.data}`)
//       console.log(`\tAttributes: ${message.attributes}`)
//       messageCount += 1

//       // "Ack" (acknowledge receipt of) the message
//       message.ack()
//     }

//     // Listen for new messages until timeout is hit
//     subscription.on('message', messageHandler)

//     setTimeout(() => {
//       subscription.removeListener('message', messageHandler)
//       console.log(`${messageCount} message(s) received.`)
//     }, timeout * 1000)
//   }


//   publishMessage()
// 	listenForMessages()
// }

// process.on('unhandledRejection', err => {
// 	//@ts-ignore
//   console.error(err.message);
//   process.exitCode = 1;
// });
// main(...process.argv.slice(2));

// import fs from 'fs'
// const fileData= fs.readFileSync('data2.txt', 'utf-8')
// fs.appendFileSync('data.txt', fileData)
// console.log(fs.readFileSync('data.txt', 'utf-8'))

import fs, { readFileSync } from 'fs'


// const data = fs.readFileSync('documents.json', 'utf-8')
// var result = filterData(data, function(item) {
//   return item.mimeType === 'application/vnd.google-apps.document';
// });

const data = [
  {
      "kind": "drive#file",
      "id": "1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0",
      "name": "Tests-specs-rishab",
      "mimeType": "application/vnd.google-apps.document",
      "starred": false,
      "trashed": false,
      "explicitlyTrashed": false,
      "parents": [
          "1irKOAZGObD8vbSIxgwynZL_CL160w2qW"
      ],
      "spaces": [
          "drive"
      ],
      "version": "9",
      "webViewLink": "https://docs.google.com/document/d/1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0/edit?usp=drivesdk",
      "hasThumbnail": true,
      "viewedByMe": true,
      "viewedByMeTime": "2021-03-24T05:09:48.293Z",
      "createdTime": "2021-03-24T05:09:00.277Z",
      "modifiedTime": "2021-03-24T05:09:48.293Z",
      "modifiedByMeTime": "2021-03-24T05:09:48.293Z",
      "modifiedByMe": true,
      "owners": [
          {
              "kind": "drive#user",
              "displayName": "Rishabh Pachori",
              "me": true,
              "permissionId": "04952580649943426015",
              "emailAddress": "rishabhpachori04@gmail.com"
          }
      ],
      "lastModifyingUser": {
          "kind": "drive#user",
          "displayName": "Rishabh Pachori",
          "me": true,
          "permissionId": "04952580649943426015",
          "emailAddress": "rishabhpachori04@gmail.com"
      },
      "shared": true,
      "capabilities": {
          "canAddChildren": false,
          "canAddMyDriveParent": false,
          "canChangeCopyRequiresWriterPermission": true,
          "canChangeViewersCanCopyContent": true,
          "canComment": true,
          "canCopy": true,
          "canDelete": true,
          "canDownload": true,
          "canEdit": true,
          "canListChildren": false,
          "canModifyContent": true,
          "canMoveChildrenWithinDrive": false,
          "canMoveItemIntoTeamDrive": true,
          "canMoveItemOutOfDrive": true,
          "canMoveItemWithinDrive": true,
          "canReadRevisions": true,
          "canRemoveChildren": false,
          "canRemoveMyDriveParent": true,
          "canRename": true,
          "canShare": true,
          "canTrash": true,
          "canUntrash": true
      },
      "viewersCanCopyContent": true,
      "copyRequiresWriterPermission": false,
      "permissions": [
          {
              "kind": "drive#permission",
              "id": "11218668233871226470",
              "type": "user",
              "emailAddress": "vishal@habilelabs.io",
              "role": "writer",
              "displayName": "Vishal Bansal",
              "deleted": false
          },
          {
              "kind": "drive#permission",
              "id": "04952580649943426015",
              "type": "user",
              "emailAddress": "rishabhpachori04@gmail.com",
              "role": "owner",
              "displayName": "Rishabh Pachori",
              "deleted": false
          }
      ],
      "permissionIds": [
          "11218668233871226470",
          "04952580649943426015"
      ],
      "quotaBytesUsed": "0",
      "isAppAuthorized": false,
      "exportLinks": {
          "application/rtf": "https://docs.google.com/feeds/download/documents/export/Export?id=1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0&exportFormat=rtf",
          "application/vnd.oasis.opendocument.text": "https://docs.google.com/feeds/download/documents/export/Export?id=1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0&exportFormat=odt",
          "text/html": "https://docs.google.com/feeds/download/documents/export/Export?id=1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0&exportFormat=html",
          "application/pdf": "https://docs.google.com/feeds/download/documents/export/Export?id=1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0&exportFormat=pdf",
          "application/epub+zip": "https://docs.google.com/feeds/download/documents/export/Export?id=1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0&exportFormat=epub",
          "application/zip": "https://docs.google.com/feeds/download/documents/export/Export?id=1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0&exportFormat=zip",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "https://docs.google.com/feeds/download/documents/export/Export?id=1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0&exportFormat=docx",
          "text/plain": "https://docs.google.com/feeds/download/documents/export/Export?id=1Dj05RIVEH1Sizq4fzZW8V6LsiediewbEMHgSvwjdNA0&exportFormat=txt"
      }
  },
  {
      "id": "1EXBx6LKK7qYJVydpCkI2rZWEy3LGNbzb",
      "name": "Untitled folder1",
      "mimeType": "application/vnd.google-apps.folder",
      "files": [
          {
              "kind": "drive#file",
              "id": "1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM",
              "name": "test documents 2",
              "mimeType": "application/vnd.google-apps.document",
              "starred": false,
              "trashed": false,
              "explicitlyTrashed": false,
              "parents": [
                  "1EXBx6LKK7qYJVydpCkI2rZWEy3LGNbzb"
              ],
              "spaces": [
                  "drive"
              ],
              "version": "5",
              "webViewLink": "https://docs.google.com/document/d/1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM/edit?usp=drivesdk",
              "hasThumbnail": false,
              "viewedByMe": true,
              "viewedByMeTime": "2021-03-26T11:00:11.683Z",
              "createdTime": "2021-03-26T10:59:58.193Z",
              "modifiedTime": "2021-03-26T11:00:11.683Z",
              "modifiedByMeTime": "2021-03-26T11:00:11.683Z",
              "modifiedByMe": true,
              "owners": [
                  {
                      "kind": "drive#user",
                      "displayName": "Rishabh Pachori",
                      "me": true,
                      "permissionId": "04952580649943426015",
                      "emailAddress": "rishabhpachori04@gmail.com"
                  }
              ],
              "lastModifyingUser": {
                  "kind": "drive#user",
                  "displayName": "Rishabh Pachori",
                  "me": true,
                  "permissionId": "04952580649943426015",
                  "emailAddress": "rishabhpachori04@gmail.com"
              },
              "shared": true,
              "capabilities": {
                  "canAddChildren": false,
                  "canAddMyDriveParent": false,
                  "canChangeCopyRequiresWriterPermission": true,
                  "canChangeViewersCanCopyContent": true,
                  "canComment": true,
                  "canCopy": true,
                  "canDelete": true,
                  "canDownload": true,
                  "canEdit": true,
                  "canListChildren": false,
                  "canModifyContent": true,
                  "canMoveChildrenWithinDrive": false,
                  "canMoveItemIntoTeamDrive": true,
                  "canMoveItemOutOfDrive": true,
                  "canMoveItemWithinDrive": true,
                  "canReadRevisions": true,
                  "canRemoveChildren": false,
                  "canRemoveMyDriveParent": true,
                  "canRename": true,
                  "canShare": true,
                  "canTrash": true,
                  "canUntrash": true
              },
              "viewersCanCopyContent": true,
              "copyRequiresWriterPermission": false,
              "permissions": [
                  {
                      "kind": "drive#permission",
                      "id": "11218668233871226470",
                      "type": "user",
                      "emailAddress": "vishal@habilelabs.io",
                      "role": "writer",
                      "displayName": "Vishal Bansal",
                      "deleted": false
                  },
                  {
                      "kind": "drive#permission",
                      "id": "04952580649943426015",
                      "type": "user",
                      "emailAddress": "rishabhpachori04@gmail.com",
                      "role": "owner",
                      "displayName": "Rishabh Pachori",
                      "deleted": false
                  }
              ],
              "permissionIds": [
                  "11218668233871226470",
                  "04952580649943426015"
              ],
              "quotaBytesUsed": "0",
              "isAppAuthorized": false,
              "exportLinks": {
                  "application/rtf": "https://docs.google.com/feeds/download/documents/export/Export?id=1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM&exportFormat=rtf",
                  "application/vnd.oasis.opendocument.text": "https://docs.google.com/feeds/download/documents/export/Export?id=1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM&exportFormat=odt",
                  "text/html": "https://docs.google.com/feeds/download/documents/export/Export?id=1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM&exportFormat=html",
                  "application/pdf": "https://docs.google.com/feeds/download/documents/export/Export?id=1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM&exportFormat=pdf",
                  "application/epub+zip": "https://docs.google.com/feeds/download/documents/export/Export?id=1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM&exportFormat=epub",
                  "application/zip": "https://docs.google.com/feeds/download/documents/export/Export?id=1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM&exportFormat=zip",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "https://docs.google.com/feeds/download/documents/export/Export?id=1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM&exportFormat=docx",
                  "text/plain": "https://docs.google.com/feeds/download/documents/export/Export?id=1rBj-2kNtGhFbsfCu-tfb4WGHuqRgbRToWxJ6Tlq4PBM&exportFormat=txt"
              }
          }
      ]
  },
  {
      "id": "15CmkagLFFkDBVx3gBTHpzgxf01ZCP1aO",
      "name": "nested folder2",
      "mimeType": "application/vnd.google-apps.folder",
      "files": [
          {
              "kind": "drive#file",
              "id": "1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw",
              "name": "test document",
              "mimeType": "application/vnd.google-apps.document",
              "starred": false,
              "trashed": false,
              "explicitlyTrashed": false,
              "parents": [
                  "15CmkagLFFkDBVx3gBTHpzgxf01ZCP1aO"
              ],
              "spaces": [
                  "drive"
              ],
              "version": "5",
              "webViewLink": "https://docs.google.com/document/d/1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw/edit?usp=drivesdk",
              "hasThumbnail": false,
              "viewedByMe": true,
              "viewedByMeTime": "2021-03-26T09:10:37.501Z",
              "createdTime": "2021-03-26T09:10:23.575Z",
              "modifiedTime": "2021-03-26T09:10:37.501Z",
              "modifiedByMeTime": "2021-03-26T09:10:37.501Z",
              "modifiedByMe": true,
              "owners": [
                  {
                      "kind": "drive#user",
                      "displayName": "Rishabh Pachori",
                      "me": true,
                      "permissionId": "04952580649943426015",
                      "emailAddress": "rishabhpachori04@gmail.com"
                  }
              ],
              "lastModifyingUser": {
                  "kind": "drive#user",
                  "displayName": "Rishabh Pachori",
                  "me": true,
                  "permissionId": "04952580649943426015",
                  "emailAddress": "rishabhpachori04@gmail.com"
              },
              "shared": true,
              "capabilities": {
                  "canAddChildren": false,
                  "canAddMyDriveParent": false,
                  "canChangeCopyRequiresWriterPermission": true,
                  "canChangeViewersCanCopyContent": true,
                  "canComment": true,
                  "canCopy": true,
                  "canDelete": true,
                  "canDownload": true,
                  "canEdit": true,
                  "canListChildren": false,
                  "canModifyContent": true,
                  "canMoveChildrenWithinDrive": false,
                  "canMoveItemIntoTeamDrive": true,
                  "canMoveItemOutOfDrive": true,
                  "canMoveItemWithinDrive": true,
                  "canReadRevisions": true,
                  "canRemoveChildren": false,
                  "canRemoveMyDriveParent": true,
                  "canRename": true,
                  "canShare": true,
                  "canTrash": true,
                  "canUntrash": true
              },
              "viewersCanCopyContent": true,
              "copyRequiresWriterPermission": false,
              "permissions": [
                  {
                      "kind": "drive#permission",
                      "id": "11218668233871226470",
                      "type": "user",
                      "emailAddress": "vishal@habilelabs.io",
                      "role": "writer",
                      "displayName": "Vishal Bansal",
                      "deleted": false
                  },
                  {
                      "kind": "drive#permission",
                      "id": "04952580649943426015",
                      "type": "user",
                      "emailAddress": "rishabhpachori04@gmail.com",
                      "role": "owner",
                      "displayName": "Rishabh Pachori",
                      "deleted": false
                  }
              ],
              "permissionIds": [
                  "11218668233871226470",
                  "04952580649943426015"
              ],
              "quotaBytesUsed": "0",
              "isAppAuthorized": false,
              "exportLinks": {
                  "application/rtf": "https://docs.google.com/feeds/download/documents/export/Export?id=1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw&exportFormat=rtf",
                  "application/vnd.oasis.opendocument.text": "https://docs.google.com/feeds/download/documents/export/Export?id=1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw&exportFormat=odt",
                  "text/html": "https://docs.google.com/feeds/download/documents/export/Export?id=1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw&exportFormat=html",
                  "application/pdf": "https://docs.google.com/feeds/download/documents/export/Export?id=1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw&exportFormat=pdf",
                  "application/epub+zip": "https://docs.google.com/feeds/download/documents/export/Export?id=1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw&exportFormat=epub",
                  "application/zip": "https://docs.google.com/feeds/download/documents/export/Export?id=1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw&exportFormat=zip",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "https://docs.google.com/feeds/download/documents/export/Export?id=1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw&exportFormat=docx",
                  "text/plain": "https://docs.google.com/feeds/download/documents/export/Export?id=1skRVW4xYXUCRSwa9n290QPbsq3RA2jnu_9i85MCJVLw&exportFormat=txt"
              }
          },
          {
              "id": "1Z4JBaTK6_XUqHizeV6slGWLZtamQ-tuz",
              "name": "Untitled folder2",
              "mimeType": "application/vnd.google-apps.folder",
              "files": [
                  {
                      "id": "1s_kK6vxzm8Vac-KecLOketrg-rNToRRk",
                      "name": "folder3",
                      "mimeType": "application/vnd.google-apps.folder",
                      "files": [
                          {
                              "id": "1NX37ScBY3d35XIsPb57HW-VnLsn1q6S7",
                              "name": "folder4",
                              "mimeType": "application/vnd.google-apps.folder",
                              "files": [
                                  {
                                      "id": "1txC0OHHfMnUdrWeG1NGKxr-M19iqEtVf",
                                      "name": "folder5",
                                      "mimeType": "application/vnd.google-apps.folder",
                                      "files": [
                                          {
                                              "kind": "drive#file",
                                              "id": "1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE",
                                              "name": "Tests-specs-rishabh2",
                                              "mimeType": "application/vnd.google-apps.document",
                                              "starred": false,
                                              "trashed": false,
                                              "explicitlyTrashed": false,
                                              "parents": [
                                                  "1txC0OHHfMnUdrWeG1NGKxr-M19iqEtVf"
                                              ],
                                              "spaces": [
                                                  "drive"
                                              ],
                                              "version": "22",
                                              "webViewLink": "https://docs.google.com/document/d/1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE/edit?usp=drivesdk",
                                              "hasThumbnail": true,
                                              "viewedByMe": true,
                                              "viewedByMeTime": "2021-03-26T06:50:19.410Z",
                                              "createdTime": "2021-03-24T05:10:30.111Z",
                                              "modifiedTime": "2021-03-26T06:50:19.410Z",
                                              "modifiedByMeTime": "2021-03-26T06:50:19.410Z",
                                              "modifiedByMe": true,
                                              "owners": [
                                                  {
                                                      "kind": "drive#user",
                                                      "displayName": "Rishabh Pachori",
                                                      "me": true,
                                                      "permissionId": "04952580649943426015",
                                                      "emailAddress": "rishabhpachori04@gmail.com"
                                                  }
                                              ],
                                              "lastModifyingUser": {
                                                  "kind": "drive#user",
                                                  "displayName": "Rishabh Pachori",
                                                  "me": true,
                                                  "permissionId": "04952580649943426015",
                                                  "emailAddress": "rishabhpachori04@gmail.com"
                                              },
                                              "shared": true,
                                              "capabilities": {
                                                  "canAddChildren": false,
                                                  "canAddMyDriveParent": false,
                                                  "canChangeCopyRequiresWriterPermission": true,
                                                  "canChangeViewersCanCopyContent": true,
                                                  "canComment": true,
                                                  "canCopy": true,
                                                  "canDelete": true,
                                                  "canDownload": true,
                                                  "canEdit": true,
                                                  "canListChildren": false,
                                                  "canModifyContent": true,
                                                  "canMoveChildrenWithinDrive": false,
                                                  "canMoveItemIntoTeamDrive": true,
                                                  "canMoveItemOutOfDrive": true,
                                                  "canMoveItemWithinDrive": true,
                                                  "canReadRevisions": true,
                                                  "canRemoveChildren": false,
                                                  "canRemoveMyDriveParent": true,
                                                  "canRename": true,
                                                  "canShare": true,
                                                  "canTrash": true,
                                                  "canUntrash": true
                                              },
                                              "viewersCanCopyContent": true,
                                              "copyRequiresWriterPermission": false,
                                              "permissions": [
                                                  {
                                                      "kind": "drive#permission",
                                                      "id": "11218668233871226470",
                                                      "type": "user",
                                                      "emailAddress": "vishal@habilelabs.io",
                                                      "role": "writer",
                                                      "displayName": "Vishal Bansal",
                                                      "deleted": false
                                                  },
                                                  {
                                                      "kind": "drive#permission",
                                                      "id": "04952580649943426015",
                                                      "type": "user",
                                                      "emailAddress": "rishabhpachori04@gmail.com",
                                                      "role": "owner",
                                                      "displayName": "Rishabh Pachori",
                                                      "deleted": false
                                                  }
                                              ],
                                              "permissionIds": [
                                                  "11218668233871226470",
                                                  "04952580649943426015"
                                              ],
                                              "quotaBytesUsed": "0",
                                              "isAppAuthorized": false,
                                              "exportLinks": {
                                                  "application/rtf": "https://docs.google.com/feeds/download/documents/export/Export?id=1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE&exportFormat=rtf",
                                                  "application/vnd.oasis.opendocument.text": "https://docs.google.com/feeds/download/documents/export/Export?id=1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE&exportFormat=odt",
                                                  "text/html": "https://docs.google.com/feeds/download/documents/export/Export?id=1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE&exportFormat=html",
                                                  "application/pdf": "https://docs.google.com/feeds/download/documents/export/Export?id=1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE&exportFormat=pdf",
                                                  "application/epub+zip": "https://docs.google.com/feeds/download/documents/export/Export?id=1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE&exportFormat=epub",
                                                  "application/zip": "https://docs.google.com/feeds/download/documents/export/Export?id=1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE&exportFormat=zip",
                                                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "https://docs.google.com/feeds/download/documents/export/Export?id=1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE&exportFormat=docx",
                                                  "text/plain": "https://docs.google.com/feeds/download/documents/export/Export?id=1Xggb1ddXkKcQ_fmcAypuppv-Tdwydmra2G1SSxFRsJE&exportFormat=txt"
                                              }
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
  }
]

const test = ({ data })=> {
    const dataArray: any = []
    for (const item of data) {
        if(item.mimeType === 'application/vnd.google-apps.document') {
            dataArray.push(item)
        }
        if (item.files.length > 0) {
            // @ts-ignore
            test({ data: files })
        }
    }
}

const result = test({ data: data })
fs.writeFileSync('./testResult.json', JSON.stringify(result, null, 4))