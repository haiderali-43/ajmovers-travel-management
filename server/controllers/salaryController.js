import prisma from "../db/db.config.js";
import schedule from "node-schedule";

export const updateDriverSalaryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const driverId = parseInt(id);
    await prisma.driver.update({
      where: { id: driverId },
      data: { salary: true },
    });

    return res.status(200).json({ message: "Salary Paid Successfully" });
  } catch (error) {
    console.error("Error updating salary status:", error);
    return res.status(500).json({ message: "Error in updating Salary" });
  }
};

schedule.scheduleJob("0 0 1 * *", async () => {
  try {
    await prisma.driver.updateMany({
      where: {},
      data: { salary: false },
    });
    console.log("Salary Status reset succesfully");
  } catch (error) {
    console.log(error.message);
  }
});
