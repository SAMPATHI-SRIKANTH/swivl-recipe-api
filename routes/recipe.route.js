const express = require("express");
const Recipe = require("../models/recipes.model");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getProfile,
} = require("../controllers/recipes.controller");
const router = express.Router();

router.get("/", authMiddleware, getRecipes);
router.get("/:id", authMiddleware, getRecipe);
router.post("/", authMiddleware, createRecipe);
router.put("/:id", authMiddleware, updateRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

module.exports = router;
