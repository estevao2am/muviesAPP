import { Request, Response } from 'express';
import { GetAllUsersCase } from './GetAllUserCase';
export class GetAllUserController {
    async handle(req:Request,res:Response){
        const getAllUsersCase = new GetAllUsersCase()
        const result = await getAllUsersCase.execute()

        return res.status(201).json(result)
    }
}