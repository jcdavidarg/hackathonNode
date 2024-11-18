import express from "express";
import userController from "../controllers/user/index.controller.js";

const router = express.Router();

router.get("/users/hola", userController.saludar);
router.get("/users/chau", userController.despedir);

export default router;