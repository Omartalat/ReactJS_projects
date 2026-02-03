import { Router } from "express";
import { getMovies, addMovie, updateMovie, deleteMovie } from "../controllers/movieController.js";

const router: Router = Router();

router.get("/", getMovies);

router.post("/", addMovie);

router.patch('/:id', updateMovie)

router.delete('/:id', deleteMovie)

export default router;
