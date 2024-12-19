import express from "express";
import createEmp from "../controller/create.js";
import allEmp from "../controller/allEmp.js";
import singleEmp from "../controller/singleEmp.js";
import updateEmp from "../controller/updateEmp.js";
import deleteEmp from "../controller/deleteEmp.js";
import cloudFileUpload from "../middleware/fileUploader.js";

const empRouter = express.Router();

empRouter.post("/create", cloudFileUpload.single("profileImage"), createEmp);
empRouter.get("/allEmp", allEmp);
empRouter.get("/singleEmp/:id", singleEmp);
empRouter.put("/updateEmp/:id", updateEmp);
empRouter.delete("/deleteEmp/:id", deleteEmp);

export default empRouter;
