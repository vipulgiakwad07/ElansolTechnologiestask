// server.js




app.post('/signup', (req, res) => {
  const { firstName, lastName, email, number, password } = req.body;

  // Validate user input (e.g., check if email is valid, password meets requirements)
  // ...

  // Create new user account in database
  // ...

  res.json({ success: true, message: 'User account created successfully' });
});















const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;
const SECRET_KEY = 'your-secret-key';

// Middleware
app.use(bodyParser.json());

// Mock user data (replace with database logic)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
  res.json({ token });
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: 'Protected route', authData });
    }
  });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
