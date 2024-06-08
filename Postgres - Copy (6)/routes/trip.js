const express = require('express');
const { Trip } = require('../db/dbConection');
const { v4: uuidv4 } = require('uuid');

const tripRoute = express.Router();

tripRoute.get("/", async (req, res) => {
  try {
    const trips = await Trip.findAll();
    res.json(trips);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching trips");
  }
});

tripRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    const newTrip = await Trip.create({
      ...data,
      tripId: uuidv4(),
      price: data.price,
    });
    res.json(newTrip);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding trip");
  }
});

module.exports = tripRoute;
