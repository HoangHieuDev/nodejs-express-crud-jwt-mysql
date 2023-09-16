import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!1212");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});