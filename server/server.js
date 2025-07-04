import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";

// initialize express app

const app = express();

await connectDB();

//Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Running"));

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
