import {Router} from "express"
import { CreateMovieController } from '../modules/movies/CreateMovieController';
import { CreateMovieRentController } from '../modules/movies/CreateMovieRentController';
import { GetMovieByReleaseDateController } from "../modules/movies/GetMovieByReleaseDateController";

const createMovieController = new CreateMovieController
const createMovieRentController = new CreateMovieRentController
const getMovieByReleaseDateController = new GetMovieByReleaseDateController

const MovieRoutes = Router()

MovieRoutes.post("/",createMovieController.handle)
MovieRoutes.post("/rent",createMovieRentController.handle)
MovieRoutes.get("/",getMovieByReleaseDateController.handle)



export { MovieRoutes}