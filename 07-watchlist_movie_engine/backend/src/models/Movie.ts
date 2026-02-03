import mongoose, { Schema, type Document } from "mongoose";
import { IMovie } from "../types/index.js";

const MovieSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    isWatched: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model<IMovie>("Movie", MovieSchema);

export default Movie;
