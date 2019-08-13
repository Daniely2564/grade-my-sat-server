const express = require("express");
const server = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./variables.env" });

server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    process.env.CLIENT_URL || "http://localhost:3000"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use("/api/visit", require("./routes/visit"));

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, err => {
  if (err) {
    console.log(err);
  } else {
    server.listen(PORT, () => {
      console.log(`Server is Running on Port ${PORT}`);
    });
  }
});
