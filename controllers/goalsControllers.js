import goalModel from "../models/goalModel.js";

export const getAllGoals = async (req, res) => {
  try {
    const goals = await goalModel.find();
    return res.status(200).json({
      message: "Retrived successfully!",
      success: true,
      data: goals,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const addGoals = async (req, res) => {
  try {
    const { goalName, targetDate, description, targetCalories } = req.body;
    if (!goalName || !targetCalories || !description || !targetDate) {
      return res.status(400).json({
        message: "Some fields are missing!",
        success: false,
      });
    }
    const goal = new goalModel({
                goalName: goalName,
                targetDate: targetDate,
                description: description,
                targetCalories: targetCalories,
            });

    await goal.save();

    return res.status(200).json({
      message: "Added successfully!",
      success: true,
      data: goal,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const removeAGoal = async (req, res) => {
  try {
    const { goalId } = req.params;
    if (!goalId) {
      return res.status(400).json({
        message: "goalId is missing!",
        success: false,
      });
    }

    await goalModel.findByIdAndDelete({ _id: goalId });

    return res.status(204).json({
      message: "Removed successfully!",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
