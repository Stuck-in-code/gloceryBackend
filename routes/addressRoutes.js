import express from "express";
import authUser from "../middleware/authUser.js";
import { addAddcress, getAddcress } from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter.post("/add", authUser, addAddcress);
addressRouter.get("/get", authUser, getAddcress);

export default addressRouter;
