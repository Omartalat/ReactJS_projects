import { Request, Response, NextFunction } from "express";
import Movie from "../models/Movie.js";
import { IMovie } from "../types/index.js";

export async function getMovies(req: Request, res: Response): Promise<void> {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}

export async function addMovie(req: Request, res: Response): Promise<void> {
  try {
    const { title, description, rating } = req.body;

    if (!title || !description) {
      res.status(500).json({ message: "Title and description are required" });
      return;
    }

    const newMovie = new Movie({
      title,
      description,
      rating,
    });

    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
  }
}

export async function updateMovie(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { isWatched } = req.body;
    if (!id) {
      res.status(400).json({ message: "Movie ID is required" });
      return;
    }

    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { isWatched },
      { new: true, runValidators: true },
    );

    if (!updatedMovie) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}

export async function deleteMovie(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Movie Id is required" });
      return;
    }

    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}

// export function getMovie(req: Request, res: Response) {
//   const id = req.body.id;
//   const movie = Movie.find((mov) => move.id === id);
//   res.status(200).json(movie);
// }
