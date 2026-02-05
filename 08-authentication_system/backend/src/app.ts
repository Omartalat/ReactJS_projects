import { postMessageToThread } from "node:worker_threads";
import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db"

dotenv.config()

connectDB()

const app: express.Application = express();




const PORT: string | number = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running....");
});
