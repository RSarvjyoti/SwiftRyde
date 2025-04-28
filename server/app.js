require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors);


app.get('/',(req, res) => {
    res.send("This is home route.");
})

module.exports = app;