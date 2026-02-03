import { Router } from "express";
import { getMovies, addMovie } from "../controllers/movieController.js";

const router: Router = Router();

router.get("/", getMovies);

router.post("/", addMovie);

export default router;
