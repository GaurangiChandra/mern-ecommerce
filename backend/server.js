import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import userRoute from './routes/userRoute.js'

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.get("/", (req, res) => {
  res.send("<h1> Api is running.... </h1> ");
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;

// custom error handling for 404 error

app.use(notFound);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);
