import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

const userVerfication = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error verifying user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
