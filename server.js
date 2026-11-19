const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to AI Quiz Generator!");
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});