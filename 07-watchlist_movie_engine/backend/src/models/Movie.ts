import mongoose, { Schema, type Document } from "mongoose";

export interface IMovie extends Document {
  title: string;
  description: string;
  rating: number;
  isWatched: boolean;
  createdAt: Date;
}

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
