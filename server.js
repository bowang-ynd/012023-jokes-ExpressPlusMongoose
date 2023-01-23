// import express
const express = require("express");
const app = express();

// set up server connection between mongoose and MongoDB
require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require("./routes/jokes.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is loaded on port 8000"));
