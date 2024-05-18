import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    goalName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    targetDate: {
      type: Date,
      required: true,
    },
    targetCalories: {
      type: Number,
      default: 0,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "In Progress",
      enum: ["In Progress", "Achieved", "Abandoned"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("goals", goalSchema);
