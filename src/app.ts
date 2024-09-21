import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

//rotas
app.get("/", (req, res) => {
    res.status(200).send("Unifio Nodejs API - now using ts");
});

export default app;