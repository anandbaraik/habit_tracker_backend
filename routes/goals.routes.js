import express from "express";
import {addGoals, getAllGoals, removeAGoal} from "../controllers/goalsControllers.js";

const goalRouter = express.Router();

goalRouter.get("/goals", getAllGoals);
goalRouter.post("/goals", addGoals);
goalRouter.delete("/goals/:goalId", removeAGoal);

export default goalRouter;
