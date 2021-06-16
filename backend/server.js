import path from 'path'
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from 'morgan'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import orderRoute from "./routes/orderRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
dotenv.config();

connectDB();

const app = express();
// app.use(bodyParser.urlencoded({extended: true}))

if(process.env.NODE_ENV === 'development')
{
  app.use(morgan('dev'))
}
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
app.use("/api/orders", orderRoute);
app.use("/api/upload", uploadRoute);




app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


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
