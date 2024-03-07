const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const RecipeRoute = require("./routes/recipe.route");
const AuthRoute = require("./routes/auth.route");

const app = express();

app.use(express.json());

app.use("/api/recipes/", RecipeRoute);
app.use("/auth/", AuthRoute);

app.get("/", (req, res) => {
  res.send("HELLO THIS RECIPES API");
});

mongoose
  .connect(process.env.DB)

  .then(() => {
    console.log("Connected!");
    app.listen(4000, () => {
      console.log("server is running 4000");
    });
  })
  .catch((e) => {
    console.log("connection failed", e);
  });
