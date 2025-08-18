import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";

const app = express();

// Connect DB
await connectDB()

//Middleware
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))