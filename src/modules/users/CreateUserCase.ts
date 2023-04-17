import { User } from "@prisma/client";
import { prisma } from "../../prisma/Client";
import { CreateUserDTO } from "./DTO/CreateUserDTO";
import { AppError } from "../../Errors/AppErrors";

export class CreateUserCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    // Verify user
    const userAlreadyExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) {
        throw new AppError("User Already Exists!")
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return user;
  }
}
