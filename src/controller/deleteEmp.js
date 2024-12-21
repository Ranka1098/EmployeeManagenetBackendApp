import empModel from "../model/employeeModel.js";

const deleteEmp = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmp = await empModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "employee is deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "employee is not deleted ", error: error.message });
  }
};

export default deleteEmp;
