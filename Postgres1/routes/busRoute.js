const express = require('express');
const { Bus } = require('../db/dbConection');
const { v4: uuidv4 } = require('uuid');

const busRoute = express.Router();

busRoute.get("/", async (req, res) => {
  try {
    const buses = await Bus.findAll();
    res.json(buses);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching buses");
  }
});

busRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    const newBus = await Bus.create({
      ...data,
      busId: uuidv4(),
    });
    res.json(newBus);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding bus");
  }
});

module.exports = busRoute;
