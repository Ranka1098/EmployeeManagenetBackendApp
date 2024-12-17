import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URL = process.env.MONGO_URL;
  mongoose.connect(MONGODB_URL);
  console.log("mongoose is successfully connected");
};

export default connectDB;
