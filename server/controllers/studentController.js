import prisma from "../db/db.config.js";

// create new students
export const createStudent = async (req, res) => {
  try {
    const { name, cantt, phone, stop, program } = req.body;
    const userId = req.id;

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!name || !cantt || !phone || !stop || !program) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    // Create a new student with user model connection
    const newStudent = await prisma.student.create({
      data: {
        name,
        cantt,
        phone,
        stop,
        program,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return res.status(200).json({
      name: newStudent.name,
      cantt: newStudent.cantt,
      phone: newStudent.phone,
      stop: newStudent.stop,
      program: newStudent.program,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ message: "Internal server error" });
  }
};

// get all students
export const getStudents = async (req, res) => {
  try {
    const userId = req.userId;
    const students = await prisma.student.findMany({
      where: {
        userId,
      },
    });

    return res
      .status(200)
      .json({ data: students, message: "Students fetched successfully" });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get student by id
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const studentId = parseInt(id);
    const userId = req.userId;

    const student = await prisma.student.findUnique({
      where: { id: studentId, userId },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    console.log("ID Parameter:", id);
    console.log("Parsed ID:", studentId);

    return res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// update student by id
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentId = parseInt(id);
    const userId = req.userId;
    const { name, cantt, phone, stop, program } = req.body;
    const updatedStudent = await prisma.student.update({
      data: {
        name,
        cantt,
        phone,
        stop,
        program,
      },
      where: {
        id: studentId,
        userId,
      },
    });

    if (!updatedStudent) {
      return res.status(404).json({ message: "No student found with this ID" });
    }

    return res
      .status(200)
      .json({ data: updatedStudent, message: "Student updated successfully" });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Failed to update student" });
  }
};

// delete student by id
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentId = parseInt(id);
    const userId = req.userId;
    await prisma.student.delete({
      where: { id: studentId, userId },
    });
    return res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
