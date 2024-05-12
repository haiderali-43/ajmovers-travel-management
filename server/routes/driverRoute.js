import express from "express";
import {
  createDrivers,
  deleteDriver,
  getDriverbyId,
  getDrivers,
  updatedriver,
} from "../controllers/driverController.js";
import { updateDriverSalaryStatus } from "../controllers/salaryController.js";

const router = express.Router();

router.post("/createdriver", createDrivers);
router.get("/getdrivers", getDrivers);
router.put("/updatedriver/:id", updatedriver);
router.delete("/deletedriver/:id", deleteDriver);
router.put("/updatesalarystatus/:id", updateDriverSalaryStatus);
router.get("/getdriverbyid/:id", getDriverbyId);

export default router;
