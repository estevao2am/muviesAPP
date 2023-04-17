import { Movie } from "@prisma/client";
import { prisma } from "../../prisma/Client";

export class GetMovieByReleaseDateCase {
  async execute(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      orderBy:{
        release_date:"desc" // mais recente
      },
      include:{
        movie_rent:{
          select:{
            user:{
              select:{
                name:true,
                email:true
              }
            }
          }
        }
      }

    });
    return movies;
  }
}
