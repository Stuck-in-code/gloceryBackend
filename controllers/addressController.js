import Address from "../models/Address.js";

// add address
export const addAddcress = async (req, res) => {
  try {
    const { address, userId } = req.body;
    await Address.create({ ...address, userId });
    res.json({ success: true, message: "Address Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get Address
export const getAddcress = async (req, res) => {
  try {
    const  userId  = req.userId;
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
