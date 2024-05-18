import foodModel from "../models/foodModel.js";

export const getAllFoods = async (req, res) => {
  try {
    const foods = await foodModel.find().select("-__v");

    if (!foods) {
      return res.status(404).json({
        message: `No Foods Found!`,
        success: false,
      });
    }

    return res.status(200).json({
      message: "Foods found.",
      success: true,
      data: foods,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const addFood = async (req, res) => {

  try {
    const { foodName, calories, protien, fat, carbohydrate } = req.body;
    if (!foodName || !calories || !protien || !fat || !carbohydrate) {
      return res.status(400).json({
        message: "Some fields are missing.",
        success: false,
      });
    }

    const food = new foodModel({
		foodName: foodName,
		calories: parseInt(calories),
		protein: parseInt(protien),
		fat: parseInt(fat),
		carbohydrate: parseInt(carbohydrate),
    });

    const foodStored = await food.save();
    if (!foodStored) {
      return res.status(403).json({
        message: "Something went wrong!",
        success: false,
      });
    } else {
      return res.status(200).json({
        message: "Saved successfully!",
        success: true,
        data: foodStored,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const removeFood = async (req, res) => {
  try {
	const { foodId } = req.params;
    if (!foodId) {
      return res.status(400).json({
        message: "foodId is missing!",
        success: false,
      });
    }

    await foodModel.findByIdAndDelete({ _id: foodId });

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
