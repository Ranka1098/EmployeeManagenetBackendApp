import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://ashokranka30:sbX3Ei9LhwPmW.p@cluster0.zv0qp.mongodb.net/employeeManagementApp"
  );
  console.log("mongoose is successfully connected");
};

export default connectDB;
