import express from "express";
import connectDB from "./config/database.js";

// app conect to express
const app = express();

connectDB()
  .then(() => {
    console.log("database conncetion successfully established");
    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  })
  .catch((Error) => {
    console.log("data base is not connected :", Error);
  });
