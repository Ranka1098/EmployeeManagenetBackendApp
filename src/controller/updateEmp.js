import empModel from "../model/employeeModel.js";

const updateEmp = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedEmp = await empModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res
      .status(200)
      .json({ msg: "employee successfully updated", data: updatedEmp });
  } catch (error) {
    console.log("error :", error);
    res
      .status(500)
      .json({ msg: "employee is not updated ", error: error.message });
  }
};

export default updateEmp;
