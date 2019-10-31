const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes");

// App
const app = express();

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose default connection is open");
});

db.on("error", err => {
  console.log(`Mongoose default connection has occured \n${err}`);
});

db.on("disconnected", () => {
  console.log("Mongoose default connection is disconnected");
});

process.on("SIGINT", () => {
  db.close(() => {
    console.log(
      "Mongoose default connection is disconnected due to application termination"
    );
    process.exit(0);
  });
});

// Load routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
