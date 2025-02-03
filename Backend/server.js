// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');  // Correct path to routes

// const app = express();
// connectDB();

// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/api/auth', authRoutes);  // Use the auth routes

// app.get('/', (req, res) => {
//   res.send('Login API is running...');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');  // Import database connection
const authRoutes = require('./routes/authRoutes.js');  // Correct the path to the authRoutes file

dotenv.config();
const app = express();

// Connect to database
connectDB();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);  // Route for login and register

app.get('/', (req, res) => {
  res.send('Login API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
