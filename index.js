const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const RecipeRoute = require("./routes/recipe.route");
const AuthRoute = require("./routes/auth.route");
const port = process.env.PORT || 4000;
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
    app.listen(port, () => {
      console.log(`server is running ${port}`);
    });
  })
  .catch((e) => {
    console.log("connection failed", e);
  });
