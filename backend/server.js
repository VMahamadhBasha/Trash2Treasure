require('dotenv').config();
const express = require("express");
const app = express();
const dbConnection = require('./config/db');
const User = require("./models/user.js");

dbConnection()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Our mission is making our India Clean");
});
app.post("/addUser", async (req, res) => {
    let newUser = new User({
        name: "Trash2Treasure",
        username: "@swachhbarat2026",
        email:"swachbharat2026@gmail.com",
        passwors:"bharat@swachh"
    });

    await newUser.save();
})

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});