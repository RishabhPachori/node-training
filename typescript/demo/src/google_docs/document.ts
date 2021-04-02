import {google} from 'googleapis'



import credentials from './credentials.json'

const client = new google.auth.JWT(
    credentials.client_email,
    undefined, 
    credentials.private_key,
    ['https://www.googleapis.com/auth/documents']
)

const googleApiAuth = new Promise((resolve,reject)=>{
    return client.authorize((err,tokens)=>{
        if(err){
            console.log("error in authorization",err)
            reject(err)
        }else{
            console.log("connected")
            getDocumentData(client)
            updateDocumentData(client)
        }
    })
})



// get document data
const getDocumentData = async(cl)=>{
    try{
        const googleDocsApi = google.docs({version: 'v1', auth: cl})
        const options = {
            documentId : '1VmmqxbrRhaV_3ggLPW6b9HWIUNZM3ppda4uOMlemGA4'
        }
        let result: any = await googleDocsApi.documents.get(options)
        let content = result.data.body.content
        content.forEach(value => {
            if(value.endIndex !== 1){
                console.log("********getDocumentData********", JSON.stringify(value.paragraph.elements[0].textRun.content,null,2))
            }
        });
        console.log("***getDocument***",JSON.stringify(result,null,2))
        //console.log("getDocumentData",JSON.stringify((result.data.body.content[1].paragraph.elements[0].textRun.content),null,2))
    }catch(error){
        console.log("getDocumentData Error",error.message)
    }
    
}

// update document data
const updateDocumentData = async(cl)=>{
    try{
        const googleDocsApi = google.docs({version: 'v1', auth: cl})
        const options = {
            documentId : '1VmmqxbrRhaV_3ggLPW6b9HWIUNZM3ppda4uOMlemGA4',
            requestBody: {
                requests: [
                    {
                        insertText: {
                            location: {
                                index: 455
                            },
                            text: "Hello Rishabh\n"
                        }
                    }
                ]
            }
        }
        let result = await googleDocsApi.documents.batchUpdate(options)
        console.log("updateDocumentData",result)  
    }catch(error){
        console.log(error.message)
    }
}