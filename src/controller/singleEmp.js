import empModel from "../model/employeeModel.js";

const singleEmp = async (req, res) => {
  try {
    const id = req.params.id;

    const singleEmp = await empModel.findById(id);
    if (!singleEmp) {
      return res.status(404).json({ msg: "employee not found" });
    } else {
      res.status(200).json({ msg: "employee record found", data: singleEmp });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "error to find single epmolyee", error: error.msg });
  }
};
export default singleEmp;
