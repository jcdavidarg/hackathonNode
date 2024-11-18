import express from "express";
import userRouter from "./user.routes.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Hola mundo</h1>");
})

router.use(userRouter);

export default router;