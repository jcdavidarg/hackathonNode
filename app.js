import dotenv from "dotenv";
import express from "express";

dotenv.config();
const { HTTP_PORT } = process.env; 
const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Hola mundo DavidJ</h1>");
});

app.post("/", (req,res) => {
    res.send("<h1>Hola mundo DavidJ</h1>");
});

app.listen( HTTP_PORT, () => {
    console.log(`Server corriendo en http://localhost:${HTTP_PORT}`);
});