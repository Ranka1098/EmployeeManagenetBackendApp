import mongoose from "mongoose";

const empolyeeSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: [true, "name is required"],
      minLength: 3,
      maxLength: 20,
    },
    lastname: {
      type: String,
      trim: true,
      required: [true, "surname is required"],
      minLength: 3,
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String, // Changed from Number to String
      required: [true, "Phone number is required"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    profileImage: { type: String },
  },
  {
    timestamps: true,
  }
);

const empModel = mongoose.model("employee", empolyeeSchema);

export default empModel;
