const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const session = require('express-session');
const app = express();

// Set up session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Replace <username>, <password>, <dbname> with your actual MongoDB Atlas credentials
const mongoURI = 'mongodb+srv://lamborghinicent:H%40rdik0523@cluster0.egqsolc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.urlencoded({ extended: true }));

// Prevent browser caching for all routes
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

// Middleware to protect routes
function requireLogin(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
}

// Serve login.html at /login (static HTML)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Register route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.redirect('/login');
        }
        const newUser = new User({ username, password });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        console.error('Registration error:', err);
        res.redirect('/register');
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            // Always redirect with error on failed login
            return res.redirect('/login?error=Invalid%20username%20or%20password');
        }
        // Successful login: set session
        req.session.user = user.username;
        res.redirect('/');
    } catch (err) {
        console.error('Login error:', err);
        res.redirect('/login?error=An%20unexpected%20error%20occurred');
    }
});

// Protect the frontend route
app.get('/', requireLogin, (req, res) => {
    res.redirect('http://localhost:3001');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
