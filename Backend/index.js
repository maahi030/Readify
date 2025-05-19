import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DbUrl;
const app = express();
app.use(cors());
app.use(express.json());

try {
  mongoose.connect(url);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.use("/books", bookRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
