import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    //  options that are to be added in the current version of mongoose, to avoid error in the console
        useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
      console.error(`error: ${error.message}`.red.underline.bold)
      process.exit(1)
  }
};

export default connectDB
