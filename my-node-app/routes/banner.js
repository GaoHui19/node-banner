const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  port: 3306
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Define the /banner endpoint
router.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  const query = 'SELECT * FROM carousel_images';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

module.exports = router;
