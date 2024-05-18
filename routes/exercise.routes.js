import express from "express";
import {addExercise, deleteExercise, getAllExercise} from "../controllers/exercisesControllers.js";

const exerciseRouter = express.Router();

exerciseRouter.get("/exercises", getAllExercise);
exerciseRouter.post("/exercises", addExercise);
exerciseRouter.delete("/exercises/:exerciseId", deleteExercise);

export default exerciseRouter;
