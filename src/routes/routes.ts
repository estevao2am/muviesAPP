import { Router } from "express";
import { userRoutes } from "./UserRoutes";
import { MovieRoutes } from "./MovieRoutes";
const routes = Router()

// Vai usar todas as routas /users
routes.use("/users",userRoutes)
routes.use("/movies",MovieRoutes)
export {routes}