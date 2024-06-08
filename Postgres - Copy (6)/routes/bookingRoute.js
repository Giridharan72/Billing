// const express = require('express');
// const { Booking } = require('../db/dbConection');
// const { v4: uuidv4 } = require('uuid');

// const bookingRoute = express.Router();

// bookingRoute.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.findAll();
//     res.json(bookings);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error fetching bookings");
//   }
// });

// bookingRoute.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     const newBooking = await Booking.create({
//       ...data,
//       bookingId: uuidv4(),
//     });
//     res.json(newBooking);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding booking");
//   }
// });

// module.exports = bookingRoute;
// const express = require('express');
// const { Booking } = require('../db/dbConection'); // Ensure the path is correct
// const { v4: uuidv4 } = require('uuid');

// const bookingRoute = express.Router();

// bookingRoute.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.findAll();
//     res.json(bookings);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error fetching bookings");
//   }
// });

// bookingRoute.post("/", async (req, res) => {
//   const { userId, tripId, seatsBooked } = req.body;
  
//   // Ensure that the userId and tripId are valid UUIDs
//   if (!userId || !tripId || !seatsBooked) {
//     return res.status(400).send("Missing required fields");
//   }

//   try {
//     const newBooking = await Booking.create({
//       bookingId: uuidv4(),
//       userId: userId, // Ensure this is a valid UUID
//       tripId: tripId, // Ensure this is a valid UUID
//       seatsBooked: seatsBooked,
//     });
//     res.json(newBooking);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding booking");
//   }
// });

// module.exports = bookingRoute;


const express = require('express');
const { Booking } = require('../db/dbConection');
const { v4: uuidv4 } = require('uuid');

const bookingRoute = express.Router();

bookingRoute.get("/", async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching bookings");
  }
});

bookingRoute.post("/", async (req, res) => {
  const { userId, tripId, seatsBooked } = req.body;

  if (!userId || !tripId || !seatsBooked) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const newBooking = await Booking.create({
      bookingId: uuidv4(),
      userId,  // Assumes userId is a valid UUID
      tripId,  // Assumes tripId is a valid UUID
      seatsBooked,
    });
    res.json(newBooking);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding booking");
  }
});

module.exports = bookingRoute;
