// const { signup, login } = require('../Controllers/AuthController');
// const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

// const router = require('express').Router();

// router.post('/login', loginValidation, login);
// router.post('/signup', signupValidation, signup);

// module.exports = router;


// // Simple example for login route
// const express = require('express');
// const router = express.Router();

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Check user credentials here (e.g., using MongoDB)
//   if (email === 'user@example.com' && password === 'password') {
//     return res.json({ message: 'Login successful', token: 'your_token_here' });
//   } else {
//     return res.status(400).json({ message: 'Invalid credentials' });
//   }
// });

// module.exports = router;

// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authController');  // Controller functions

// Login route
router.post('/login', loginUser);

// Register route (if needed)
router.post('/register', registerUser);

module.exports = router;

