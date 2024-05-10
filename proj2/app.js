import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.status(200).send("Hello world 2.0");
});

app.get("/cadastrar", (req, res) => {
    res.status(200).send("Tela de cadastro");
});

app.use((req, res, ) => {
    res.status(404).send("Tela não encontrada");
});

export default app;