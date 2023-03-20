// Import necessary modules
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Create connection to the database
const db = new sqlite3.Database('table.sqlite');

// Create table if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS users (name TEXT, password TEXT, email TEXT)');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse request bodies as JSON
app.use(express.json());


// Handle 404 errors
app.use(function(req, res, next) {
  res.status(404).send('Not found');
});

// Handle other errors
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
