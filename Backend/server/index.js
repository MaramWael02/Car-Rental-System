const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to parse incoming JSON data
app.use(cors());
app.use(express.json());

// Create MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'Car_Rental_System'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Route to handle login authentication
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Received POST request at /api/login');
  console.log('Email', username);
  console.log('Password type:', typeof password);
  // Query the users table in the database
  connection.query(
    'SELECT * FROM Car_Rental_System.customer WHERE customer_id = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      console.log('results', results);
      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const user = results[0];
      console.log('Retrieved user data:', user);
  
      // Assuming 'password' is the field name in the database
      console.log('Database password:', user.password);
      console.log('User-supplied password:', password);
  
      // Add password comparison logic here (considering encryption/hashing)
     // Assuming user.password.trim() removes any leading/trailing whitespace
     if (results.length === 0 || String(results[0].password) !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

// Add additional checks for case sensitivity or character encoding if necessary

      console.log('Login successful');
      return res.status(200).json({ message: 'Login successful' });
    }
  );
  
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
