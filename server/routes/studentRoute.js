import express from "express";
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";
import { updateRentStatus } from "../controllers/rentController.js";
import { protectedRoute } from "../Middleware/protectedRoutes.js";

const router = express.Router();

router.post("/createstudent", protectedRoute, createStudent);
router.get("/getstudents", getStudents);
router.get("/getstudent/:id", getStudentById);
router.put("/updatestudent/:id", updateStudent);
router.delete("/deletestudent/:id", deleteStudent);
router.put("/updaterentstatus/:id", updateRentStatus);
// router.get("/totalstudents/", totalStudents);

export default router;
