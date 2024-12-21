import empModel from "../model/employeeModel.js";

const createEmp = async (req, res) => {
  try {
    // 1. Body से डेटा प्राप्त करें
    const { firstname, lastname, email, phone, department, salary } = req.body;
    let profileImage = req.file ? req.file.path : null;

    // 2. ईमेल और फोन नंबर की जांच करें
    const existingEmployee = await empModel.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingEmployee) {
      return res.status(400).json({
        msg: `Employee with this ${
          existingEmployee.email === email ? "email" : "phone"
        } already exists`,
      });
    }

    // 3. नया कर्मचारी मॉडल बनाएं और उसे सेव करें
    const newEmployee = new empModel({
      firstname,
      lastname,
      email,
      phone,
      department,
      salary,
      profileImage,
    });

    const savedEmployee = await newEmployee.save();

    // 4. सफलता प्रतिक्रिया
    res.status(201).json({
      msg: "Employee created successfully",
      data: savedEmployee,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error creating employee",
      error: error.message,
    });
  }
};

export default createEmp;
