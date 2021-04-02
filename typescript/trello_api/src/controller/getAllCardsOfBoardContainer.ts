// import { Request, Response } from 'express'
// import { getAllCardsOfBoard } from '../trelloApi/trelloApi'

// /**
//  * Controller for get all cards for a particular board by board name
//  * @param req req
//  * @param res res
//  */
// const getAllCardsOfBoardContainer = async(req: Request,res: Response)=>{
//     const { boardName } =  req.body
//     if(!boardName){
//         res.json("Missing required field")
//     }
//     const result = await getAllCardsOfBoard(boardName)
//     res.json(result)
// }

// export { getAllCardsOfBoardContainer }