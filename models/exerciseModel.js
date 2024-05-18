import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    duration: {
      type: Number,
    },
    caloriesBurned: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("exercises", exerciseSchema);
