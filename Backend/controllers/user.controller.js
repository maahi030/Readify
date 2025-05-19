import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json("User already exists");
    }
    const passwordHash = await bcryptjs.hash(password, 10);
    const createdUser = new userModel({
      name,
      email,
      password: passwordHash,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } catch (error) {
    res.status(500).json("Error creating user" + error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: { _id: user._id, name: user.name, email: user.email },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
