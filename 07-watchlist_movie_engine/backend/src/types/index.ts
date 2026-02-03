import { Document } from "mongoose";

export interface IMovie extends Document {
  title: string;
  description: string;
  rating: number;
  isWatched: boolean;
  createdAt: Date;
}