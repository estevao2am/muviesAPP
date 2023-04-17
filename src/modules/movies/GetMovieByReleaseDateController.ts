import { GetMovieByReleaseDateCase } from './GetMovieByReleaseDateCase';
import { Request, Response } from 'express';
export class GetMovieByReleaseDateController{
    async handle(req:Request,res:Response){
        const getMovieByReleaseDateCase = new GetMovieByReleaseDateCase()
        const result = await getMovieByReleaseDateCase.execute()
        return res.status(201).json(result)
    }
}