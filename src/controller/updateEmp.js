import empModel from "../model/employeeModel.js";

const updateEmp = async (req, res) => {
  try {
    const { id } = req.params; // Get the employee's ID from the request params
    const data = req.body; // Get the updated data from the request body

    if (req.file) {
      // Update the profileImage field with the uploaded file path
      data.profileImage = req.file.path; // Ensure the path is correct
    }

    // Update the employee in the database by ID
    const updatedEmployee = await empModel.findByIdAndUpdate(id, data, {
      new: true, // Return the updated document
    });

    if (!updatedEmployee) {
      return res.status(404).json({ msg: "Employee not found" }); // Return 404 if the employee does not exist
    }

    res.status(200).json({
      msg: "Employee updated successfully",
      data: updatedEmployee, // Return the updated employee data
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error updating employee", error: error.message });
  }
};

export default updateEmp;
