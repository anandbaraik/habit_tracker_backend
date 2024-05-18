import express from "express";
import {addFood,getAllFoods,removeFood} from "../controllers/foodControllers.js";

const foodRouter = express.Router();

foodRouter.get("/foods", getAllFoods);
foodRouter.post("/foods", addFood);
foodRouter.delete("/foods/:foodId", removeFood);

export default foodRouter;
