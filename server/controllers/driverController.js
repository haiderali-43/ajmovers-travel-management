import prisma from "../db/db.config.js";

// create drivers
export const createDrivers = async (req, res) => {
  try {
    const { name, phone, vehicle } = req.body;
    const userId = req.user.id;

    if (!name || !phone || !vehicle) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const driver = await prisma.driver.create({
      data: {
        name,
        phone,
        vehicle,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        user: true,
      },
    });

    res.status(200).json({ driver, message: "Driver added succesfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding driver" });
  }
};

// get all drivers

export const getDrivers = async (req, res) => {
  try {
    const userId = req.userId;
    const drivers = await prisma.driver.findMany({
      where: {
        userId,
      },
    });
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ error: "Error getting drivers" });
  }
};

// get driver by id

export const getDriverbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const driverId = parseInt(id);
    const userId = req.userId;
    const driverbyid = await prisma.driver.findUnique({
      where: { id: driverId, userId },
    });
    return res
      .status(200)
      .json({ driverbyid, message: "Driver fetched successfully by id" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// update driver by id
export const updatedriver = async (req, res) => {
  try {
    const { id } = req.params;
    const driverId = parseInt(id);
    const userId = req.userId;
    const { name, phone, vehicle } = req.body;
    const updatedriver = await prisma.driver.update({
      where: { id: driverId, userId },
      data: {
        name,
        phone,
        vehicle,
      },
    });
    res
      .status(200)
      .json({ updatedriver, message: "Driver updated succesfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete driver by id
export const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const driverId = parseInt(id);
    const userId = req.userId;
    await prisma.driver.delete({
      where: { id: driverId, userId },
    });
    res.status(200).json({ message: "Driver deleted succesfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
