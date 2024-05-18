import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./database/init.js";
import exerciseRouter from "./routes/exercise.routes.js";
import foodRouter from "./routes/food.routes.js";
import goalRouter from "./routes/goals.routes.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/v1/api", exerciseRouter);
app.use("/v1/api", foodRouter);
app.use("/v1/api", goalRouter);

app.use("*", (req, res) => {
  return res.status(404).json({
    statusCode: 404,
    message: "Route not found",
    success: false,
  });
});

app.use((error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    statusCode: error.statusCode,
    message: error.message,
    success: false,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
