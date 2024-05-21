import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import studentRouter from "./routes/studentRoute.js";
import driverRouter from "./routes/driverRoute.js";
import authRouter from "./routes/authRoute.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

// middleware express
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// api routes

app.use("/api/students", studentRouter);
app.use("/api/drivers", driverRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
