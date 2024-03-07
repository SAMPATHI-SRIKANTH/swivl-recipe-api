const express = require("express");
const mongoose = require("mongoose");

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
  .connect(
    "mongodb+srv://srikanth1a:sri1947@cluster0.7hufv5b.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0"
  )

  .then(() => {
    console.log("Connected!");
    app.listen(4000, () => {
      console.log("server is running 4000");
    });
  })
  .catch((e) => {
    console.log("connection failed", e);
  });
