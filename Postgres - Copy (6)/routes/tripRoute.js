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
  const { busId, routeId, date, price } = req.body;

  if (!busId || !routeId || !date || !price) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const newTrip = await Trip.create({
      tripId: uuidv4(),
      busId,  // Assumes busId is a valid UUID
      routeId,  // Assumes routeId is a valid UUID
      date,
      price,
    });
    res.json(newTrip);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding trip");
  }
});

module.exports = tripRoute;
