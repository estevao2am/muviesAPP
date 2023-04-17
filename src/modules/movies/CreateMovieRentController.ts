import { Request, Response } from 'express';
import { CreateMovieRentCase } from './CreateMovieRentCase';
export class CreateMovieRentController {
    async handle(req:Request,res:Response) {
        const {movieId,userId} = req.body
        const createMovieRentCase = new CreateMovieRentCase

        const result = await createMovieRentCase.execute({
            movieId,userId
        })

        return res.status(201).json(result)
    }
}