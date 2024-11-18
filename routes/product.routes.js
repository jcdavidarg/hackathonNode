import express from "express";

const router = express.Router();

router.get("/products", (req, res)=> {
    res.send("<h1>Hola Mundo Product</h1>")
});

export default router;