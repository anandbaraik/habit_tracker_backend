import exerciseModel from "../models/exerciseModel.js";

export const addExercise = async (req, res) => {
  try {
    const { name, duration, calories } = req.body;
    if (!name || !duration || !calories) {
      return res.status(400).json({
        message: "Some of the fields are missing.",
      });
    }

    const exercise = new exerciseModel({
      name: name,
      duration: duration,
      caloriesBurned: calories,
    });

    await exercise.save();

    return res.status(200).json({
      message: "Added Successfully!",
      success: true,
      data: exercise,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllExercise = async (req, res) => {
  try {
    const execises = await exerciseModel.find();
    return res.status(200).json({
      message: 'Loaded successfully!',
      success: true,
      data: execises,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteExercise = async (req, res) => {
  try {
    const { exerciseId } = req.params;
    if (!exerciseId) {
      return res.status(400).json({
        message: "exerciseId is missing!",
      });
    }
    await exerciseModel.findByIdAndDelete({ _id: exerciseId });
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
