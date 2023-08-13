const userModel = require("./../models/userModels");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const registerController = async (req, res) => {
  try {
    console.log("Received registration request:", req.body);

    // Adjust field names here to match your schema
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    console.log("Creating new user:", newUser);

    await newUser.save();
    console.log("User saved successfully");

    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
