const { Seller } = require("../models/seller");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.use("route");

router.get("/", async (req, res) => {
  const sellers = await Seller.find();
  res.send(sellers);
});

router.post("/");

router.put("/:id");

router.delete("/:id");

router.get("/:id");
