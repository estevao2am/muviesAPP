import { User, Movie } from '@prisma/client';
import { prisma } from "../../prisma/Client";

export class GetAllUsersCase {
    async execute():Promise<User[]>{
        const users = await prisma.user.findMany({
            include:{
                movie_rent:{
                    select:{
                        movie:{
                            select:{
                                title:true
                            }
                        }
                    }
                }
            }
        })
        return users
    }
}