const express = require('express');
const { Route } = require('../db/dbConection');
const { v4: uuidv4 } = require('uuid');

const routeRoute = express.Router();

routeRoute.get("/", async (req, res) => {
  try {
    const routes = await Route.findAll();
    res.json(routes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching routes");
  }
});

routeRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    const newRoute = await Route.create({
      ...data,
      routeId: uuidv4(),
    });
    res.json(newRoute);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding route");
  }
});

module.exports = routeRoute;
