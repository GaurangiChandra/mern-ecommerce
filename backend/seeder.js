import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    //  clear all three collections completely
    // deletemany deletes everything, since not passing anything in parameters
    // becaue, don't want to import anything with stuff in the database.

    await Order.deleteMany(),
      await Product.deleteMany(),
      await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      // using spread operator here, in order to include all the data present in the product.js file
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //  clear all three collections completely
    // deletemany deletes everything, since not passing anything in parameters
    // becaue, don't want to import anything with stuff in the database.

    await Order.deleteMany(),
      await Product.deleteMany(),
      await User.deleteMany();

    console.log("data destroyed!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
