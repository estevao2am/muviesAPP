import { CreateMovieRentDTO } from './DTO/CreateMovieRentDTO';
import { prisma } from '../../prisma/Client';
import { AppError } from '../../Errors/AppErrors';
export class CreateMovieRentCase {
    async execute({movieId,userId}:CreateMovieRentDTO):Promise<void>{
        // Verify Films
        const movieExists = await prisma.movie.findUnique({
            where:{id:movieId}
        })
        if(!movieExists){
            throw new AppError("Movie does not Exists")
        }

        // Verify if the movie is already rented
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where:{movieId}
        })

        if(movieAlreadyRented){
            throw new AppError("Movie Already Rented")
        }

        const userExists = await prisma.user.findUnique({
            where:{id:userId}
        })
        if(!userExists){
            throw new AppError ("User does not Exists")
        }

        await prisma.movieRent.create({
            data:{movieId,userId}
        })
    }
}