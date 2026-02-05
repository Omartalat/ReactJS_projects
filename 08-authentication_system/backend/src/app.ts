import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db"
import router from "./routes/authRoutes"

dotenv.config()

connectDB()

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', router)


const PORT: string | number = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running....");
});
