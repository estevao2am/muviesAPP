import { Movie, Prisma } from "@prisma/client";
import { prisma } from "../../prisma/Client";
import { AppError } from "../../Errors/AppErrors";
import { CreateMovieDTO } from "./DTO/CreateMovieDTO";

export class CreateMovieCase {
  async execute({
    title,
    release_date,
    duration,
  }: CreateMovieDTO): Promise<Movie> {
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: { title },
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie Already Exists");
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    });
    return movie;
  }
}
