import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js"
import productRoute from "./routes/productRoute.js"

dotenv.config();

connectDB()

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Api is running.... </h1> ");
});

app.use('/api/products'  , productRoute)
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}` .green.bold)
);
