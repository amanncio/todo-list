const express = require("express");

const app = express();

app.listen(3001, () =>{
    console.log("Server Running...")
});

app.get("/tasks", (req, res) => {
    res.status(200).send("Olá mundo!!")
})