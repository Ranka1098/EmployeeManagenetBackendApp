const allEmp = async (req, res) => {
  try {
    const empData = await empModel.find({});
    res.status(200).json({ msg: "all employee", data: empData });
  } catch (error) {
    console.log("error :", error);
    res
      .status(500)
      .json({ msg: "error to get emp data", error: error.message });
  }
};

export default allEmp;
