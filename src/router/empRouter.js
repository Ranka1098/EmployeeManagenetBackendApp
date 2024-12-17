import express from "express";
import empModel from "../model/employeeModel.js";

const empRouter = express.Router();

empRouter.post("/create", async (req, res) => {
  try {
    // 1. get data from body
    const { name, email, phone, department, salary } = req.body;
    // this data save into employee model database
    const addEmp = new empModel({
      name,
      email,
      phone,
      department,
      salary,
    });
    //   madel ko save karo
    const saveEmp = await addEmp.save();
    //   4. success response
    res.status(200).json({ msg: "emp created successfully", data: saveEmp });
  } catch (error) {
    console.log("error : ", error);
    res
      .status(500)
      .json({ msg: "error to create employee", error: error.message });
  }
});

export default empRouter;
