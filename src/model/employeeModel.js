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
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String, // Changed from Number to String
      required: [true, "Phone number is required"],
      minLength: 10,
      maxLength: 10,
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
    profileImage: { type: String },
  },
  {
    timestamps: true,
  }
);

const empModel = mongoose.model("employee", empolyeeSchema);

export default empModel;
