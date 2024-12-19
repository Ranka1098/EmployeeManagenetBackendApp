import empModel from "../model/employeeModel.js";

const updateEmp = async (req, res) => {
  try {
    const { id } = req.params; // URL से ID निकाली
    const data = req.body; // बॉडी से डेटा निकाला

    // केवल इन फील्ड्स को अपडेट करने की अनुमति है
    const IS_Allowed_Update = ["phone", "department", "profileImage", "salary"];

    // डेटा से केवल वैलिड फील्ड्स को फ़िल्टर करें
    const filteredData = Object.keys(data)
      .filter((key) => IS_Allowed_Update.includes(key))
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});

    //Object.keys(data) ye method array return karega
    //IS_Allowed_Update.includes(key): Ye check karega ki IS_Allowed_Update array ke andar key maujood hai ya nahi.
    // Agar key IS_Allowed_Update mein hai, to true return karega, aur filter() us element ko nayi array mein add karega.
    // keys array me jo values hain, unhe ek-ek karke liya ja raha hai.
    //IS_Allowed_Update keys array ka har key data object me dhundha ja raha hai.
    //Har key ka value data object me se uthakar nayi object me add kiya ja raha hai.

    // अगर अपडेट के लिए कोई वैलिड फील्ड नहीं है तो एरर रिटर्न करें
    if (Object.keys(filteredData).length === 0) {
      return res.status(400).json({ msg: "Invalid fields to update" });
    }

    // वैलिड फील्ड्स को अपडेट करें
    const updatedEmp = await empModel.findByIdAndUpdate(id, filteredData, {
      new: true,
    });

    // अगर एम्प्लॉई नहीं मिला तो 404 एरर रिटर्न करें
    if (!updatedEmp) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    // सफल अपडेट का रिस्पॉन्स
    res.status(200).json({
      msg: "Employee successfully updated",
      data: updatedEmp,
    });
  } catch (error) {
    console.log("error :", error);
    res
      .status(500)
      .json({ msg: "Employee is not updated", error: error.message });
  }
};

export default updateEmp;
