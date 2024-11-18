import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
    res.send("<h1>Hola Mundo User</h1>");
})

export default router;