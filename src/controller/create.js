import empModel from "../model/employeeModel.js";

const createEmp = async (req, res) => {
  try {
    // 1. get data from body
    const { firstname, lastname, email, phone, department, salary } = req.body;
    let profileImage = req.file ? req.file.path : null;

    // this data save into employee model database
    const addEmp = new empModel({
      firstname,
      lastname,
      email,
      phone,
      department,
      salary,
      profileImage,
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
};
export default createEmp;
