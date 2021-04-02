import express from 'express'
import { Request, Response } from 'express'
import bodyParser from 'body-parser'
import Arithmetic from './controller/arithmetic'
import VariableNameParser from './controller/variableNameParser'
import VariableValueParser from './controller/variableValueParser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/add',(req: Request,res: Response)=>{
    let addNum = new Arithmetic(2,3);
    res.json(addNum.add())
})

app.get('/subtract',(req: Request,res: Response)=>{
    let subtractNum = new Arithmetic(2,3);
    res.json(subtractNum.subtract())
})

app.get('/multiply',(req: Request,res: Response)=>{
    let multiplyNum = new Arithmetic(2,3);
    res.json(multiplyNum.multiply())
})

app.get('/divide',(req: Request,res: Response)=>{
    let divideNum = new Arithmetic(2,3);
    res.json(divideNum.divide())
})


// route for parsing the string in parenthesis to get name and type
// eg string --> "stringData": "I can read the Sheet with the Name (idName: string)"

// expected output

//  {
//     "variableName": "idName",
//     "variableType": "string"
// }


app.post('/parse-variable-names',(req: Request,res: Response)=>{
    const { stringData } =  req.body
    if(!stringData){
        console.log("Missing required field")
    }
    const variableNameParser = new VariableNameParser(stringData)
     res.json({
         variableName: variableNameParser.getName(), 
         variableType: variableNameParser.getType()
     })
})

// route for parsing the string in curly braces to get value
// eg string --> "stringData": "I can read the Sheet with the Name {test123, qwty, qweretydt}"

// expected output

// {
//     "variableValue": "test123, qwty, qweretydt"
// }

app.post('/parse-variable-values', (req: Request,res: Response)=>{
    const { stringData } = req.body
    if(!stringData){
        console.log("Missing required field")
    }
    const variableValueParser = new VariableValueParser(stringData)
    res.json({
        variableValue: variableValueParser.getValue()
    })
})


export { app }