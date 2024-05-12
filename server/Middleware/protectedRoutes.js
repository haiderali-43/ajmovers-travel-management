import jwt from "jsonwebtoken";
import prisma from "../db/db.config.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "You need to be logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "You need to be logged in" });
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true }, // select the fields you need
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protected route middleware", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
