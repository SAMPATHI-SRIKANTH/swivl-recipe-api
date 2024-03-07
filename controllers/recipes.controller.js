const Recipe = require("../models/recipes.model");

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(200).json({ message: "Successfully added recipe " });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id, req.body);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    const updatedRecipe = await Recipe.findById(id);
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
