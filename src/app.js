import express from "express";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
import empRouter from "./router/empRouter.js";
const app = express();

app.use(express.json());

// app conect to express

// Load environment variables
dotenv.config();
const PORT = process.env.PORT;

// --------------------router------------------------
app.use("/", empRouter);

connectDB()
  .then(() => {
    console.log("database conncetion successfully established");
    app.listen(PORT, () => {
      console.log("server is listening on port 3000");
    });
  })
  .catch((Error) => {
    console.log("data base is not connected :", Error);
  });
