const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1/ecommerce")
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json);

const port = process.env.port || 3000;
app.listen(port, () => console.log("Listening on port ${port} ..."));
