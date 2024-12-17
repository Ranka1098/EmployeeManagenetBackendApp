import mongoose from "mongoose";

const empolyeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: Number,
      unique: true,
      required: [true, "Phone number is required"],
      match: [
        /^[0-9]{10}$/,
        "Phone number must be exactly 10 digits and contain only numbers",
      ],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
  },
  {
    timestamps: true,
  }
);

const empModel = mongoose.model("employee", empolyeeSchema);

export default empModel;
