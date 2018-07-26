const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database');

//Database connection
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', (req, res) => {
    console.log("Connected to the database "+config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log("Database error "+err);
});

const app = express();

const users = require('./routes/users')

const port = 3000;

//Cors Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
    res.send("Invalid endpoint");
});

//Start server
app.listen(port, () => {
    console.log("Server started on port " + port);
});