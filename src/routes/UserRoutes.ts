import { Router } from "express";import { CreateUserController } from '../modules/users/CreateUserController';
import { GetAllUserController } from '../modules/users/GetAllUsersController';

const createUserController = new CreateUserController
const getAllUsersController = new GetAllUserController

const userRoutes = Router()

userRoutes.post("/",createUserController.handle)
userRoutes.get("/",getAllUsersController.handle)

export {userRoutes}