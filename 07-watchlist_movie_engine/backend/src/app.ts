import express, { type NextFunction, type Request, type Response } from "express";

const app: express.Application = express();

app.get('/health', (req: Request, res: Response, next: NextFunction): void => {
    res.json({ status: "ok", timestamp: Date.now() });
    next();
});

const PORT: number = 5000

app.listen(PORT, () => {
    console.log('working....')
})
