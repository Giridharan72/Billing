// const pool = require('./db/dbConection');

// const checkDbConnection = async () => {
//   try {
//     const client = await pool.connect();
//     console.log("DB connected successfully");
//     client.release(); // Release the client back to the pool
//   } catch (err) {
//     console.error("Failed to connect to the DB", err);
//   }
// };

// checkDbConnection();
// const express = require('express');
// const pool = require('./db/dbConection.js');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Check database connection
// const checkDbConnection = async () => {
//   try {
//     const client = await pool.connect();
//     console.log("DB connected successfully");
//     client.release(); // Release the client back to the pool
//   } catch (err) {
//     console.error("Failed to connect to the DB", err);
//   }
// };

// // Endpoint to get users from the 'users' table
// app.get('/users', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM users');
//     client.release(); // Release the client back to the pool
//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err);
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log('Server is running on:', port);
//   checkDbConnection();
// });


// const express = require('express');
// const cors = require('cors');
// const { registerRoute } = require('./routes/register'); // Adjust the path if necessary
// // const { reDirectRoute } = require('./path/to/reDirectRoute'); // Uncomment and adjust the path if you have a reDirectRoute

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// // app.use('/', reDirectRoute); // Uncomment and use the correct route for reDirectRoute

// app.get('/', (req, res) => {
//     res.send('URL application');
// });

// app.listen(port, () => {
//     console.log('Server is running on:', port);
// });


// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register'); // Adjust the path if necessary

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// // app.use('/', reDirectRoute); // Uncomment and use the correct route for reDirectRoute

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });


// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register'); // Ensure the path is correct

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });
// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register'); // Ensure the path is correct
// const loginRoute = require('./routes/login'); // Ensure the path is correct
// const loginRoute = require('./routes/forgotPassword'); 
// const loginRoute = require('./routes/resetPass'); 

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute); // Add the login route
// app.use('/resetPassword', resetPasswordRoute);
// app.use('/forgotPassword', forgotPasswordRoute);

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });
// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register'); // Ensure the path is correct
// const loginRoute = require('./routes/login'); // Ensure the path is correct
// const forgotPasswordRoute = require('./routes/forgotPassword'); // Ensure the path is correct
// const resetPasswordRoute = require('./routes/resetPass'); // Ensure the path is correct

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute); // Add the login route
// app.use('/resetPassword', resetPasswordRoute); // Corrected the variable name
// app.use('/forgotPassword', forgotPasswordRoute); // Corrected the variable name

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });

// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const resetPasswordRoute = require('./routes/resetPass');
// const verifyOtpRoute = require('./routes/verifyOtp'); // Correct import

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());

// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/resetPassword', resetPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute); // Use the route

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });


// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const resetPasswordRoute = require('./routes/resetPass');
// const verifyOtpRoute = require('./routes/verifyOtp'); // Add this line

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/resetPassword', resetPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute); // Add this line

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });
// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const resetPasswordRoute = require('./routes/resetPass');
// const otpVerificationRoute = require('./routes/otpVerificationRoute'); // Add this line

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/resetPassword', resetPasswordRoute);
// app.use('/verify-otp', otpVerificationRoute); // Add this line

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });

// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const resetPasswordRoute = require('./routes/resetPass');
// const verifyOtpRoute = require('./routes/verifyOtp'); // Add this line

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/resetPassword', resetPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute); // Add this line

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });

// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const resetPasswordRoute = require('./routes/resetPass');
// const verifyOtpRoute = require('./routes/verifyOtp'); // Add this line

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/resetPassword', resetPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute); // Add this line

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });

// const dotenv = require('dotenv');
// dotenv.config();

// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const resetPasswordRoute = require('./routes/resetPass');
// const verifyOtpRoute = require('./routes/verifyOtp');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/resetPassword', resetPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute);

// app.get('/', (req, res) => {
//   res.send('URL application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });

// const dotenv = require('dotenv');
// dotenv.config();

// const express = require('express');
// const cors = require('cors');
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const resetPasswordRoute = require('./routes/resetPass');
// const verifyOtpRoute = require('./routes/verifyOtp');
// const busRoute = require('./routes/bus');
// const routeRoute = require('./routes/route');
// const tripRoute = require('./routes/trip');
// const bookingRoute = require('./routes/booking');
// const profileRoute = require('./routes/profile'); // Add this line

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());

// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/resetPassword', resetPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute);
// app.use('/buses', busRoute);
// app.use('/routes', routeRoute);
// app.use('/trips', tripRoute);
// app.use('/bookings', bookingRoute);
// app.use('/profile', profileRoute); // Add this line

// app.get('/', (req, res) => {
//   res.send('Bus Booking Application');
// });

// app.listen(port, () => {
//   console.log('Server is running on:', port);
// });

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const forgotPasswordRoute = require('./routes/forgotPassword');
const resetPasswordRoute = require('./routes/resetPass');
const verifyOtpRoute = require('./routes/verifyOtp');
const busRoute = require('./routes/busRoute');
const routeRoute = require('./routes/routeRoute');
const tripRoute = require('./routes/trip');
const bookingRoute = require('./routes/bookingRoute');
const profileRoute = require('./routes/profile');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/forgotPassword', forgotPasswordRoute);
app.use('/resetPassword', resetPasswordRoute);
app.use('/verifyOtp', verifyOtpRoute);
app.use('/buses', busRoute);
app.use('/routes', routeRoute);
app.use('/trips', tripRoute);
app.use('/bookings', bookingRoute);
app.use('/profile', profileRoute);

app.get('/', (req, res) => {
  res.send('Bus Booking Application');
});

app.listen(port, () => {
  console.log('Server is running on:', port);
});
