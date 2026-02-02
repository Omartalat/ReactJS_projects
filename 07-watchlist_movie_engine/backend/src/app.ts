import express, { type NextFunction, type Request, type Response } from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const app: express.Application = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).json({ status: "ok", timestamp: Date.now() });
    next();
});

const PORT: number | string = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log('working....')
})
