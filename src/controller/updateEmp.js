import empModel from "../model/employeeModel.js";

const updateEmp = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // Check if file is uploaded
    if (req.file) {
      data.profileImage = req.file.path; // Assign Cloudinary URL
    }

    // Update Employee
    const updatedEmployee = await empModel.findByIdAndUpdate(id, data, {
      new: true, // Return updated document
    });

    if (!updatedEmployee) {
      return res.status(400).json({ msg: "Employee not found" });
    }

    res.status(200).json({
      msg: "Employee updated successfully",
      data: updatedEmployee,
    });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ msg: "Error updating employee" });
  }
};

export default updateEmp;
