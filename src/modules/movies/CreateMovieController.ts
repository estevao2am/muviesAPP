import { Request, Response } from 'express';
import { CreateMovieCase } from './CreateMovieCase';
export class CreateMovieController{
    async handle(req:Request,res:Response) {
        const {title,duration,release_date} = req.body

        const createMovieCase = new CreateMovieCase
        const result = await createMovieCase.execute({
            duration,title,release_date
        })
        return res.status(201).json(result)

    }
}