import prisma from "../db/db.config.js";
import schedule from "node-schedule";

export const updateRentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const studentId = parseInt(id);

    // update rent status
    await prisma.student.update({
      where: { id: studentId },
      data: { rent: true },
    });

    return res.status(200).json({ message: "Rent Paid Successfully" });
  } catch (error) {
    console.error("Error updating rent status:", error);
    return res.status(500).json({ message: "Error in updating Rent" });
  }
};

const resetRentStatus = async () => {
  try {
    await prisma.student.updateMany({
      where: {},
      data: { rent: false },
    });
  } catch (error) {
    console.error("Error resetting rent status:", error);
  }
};

// Run the function initially
resetRentStatus();

// Schedule the function to run every day at 3:00 AM (in milliseconds)
schedule.scheduleJob("0 0 1 * *", resetRentStatus);
