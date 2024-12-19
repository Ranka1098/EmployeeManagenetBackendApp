import express from "express";
import connectDB from "./config/database.js";
import empRouter from "./router/empRouter.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

// --------------------router------------------------
app.use("/", empRouter);

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
