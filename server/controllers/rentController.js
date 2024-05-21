import prisma from "../db/db.config.js";
import schedule from "node-schedule";

export const updateRentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const studentId = parseInt(id);
    const userId = req.userId;

    // update rent status
    await prisma.student.update({
      where: { id: studentId, userId },
      data: { rent: true },
    });

    return res.status(200).json({ message: "Rent Paid Successfully" });
  } catch (error) {
    console.error("Error updating rent status:", error);
    return res.status(500).json({ message: "Error in updating Rent" });
  }
};

schedule.scheduleJob("0 0 1 * *", async (userId) => {
  try {
    await prisma.student.updateMany({
      where: { userId },
      data: { rent: false },
    });
    console.log("Rent Status reset succesfully");
  } catch (error) {
    console.log(error.message);
  }
});
