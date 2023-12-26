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
  console.log('Connected to MySQL database register');
});

// Route to handle login authentication
app.post('/api/register', (req, res) => {
    const {  email, password, phoneNum, fname, lname, address, username} = req.body;
    const phoneNumint = parseInt(phoneNum);
    console.log('Received POST request at /api/register');
    
    // Query the users table in the database
    connection.query(
        'INSERT INTO Car_Rental_System.customer (email, password, phone_no, first_name, last_name, address, customer_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [email, password, phoneNumint, fname, lname, address, username],
        (err, results) => {
            if (err) {
                console.error('Error during login:', err);
                return res.status(500).json({ message: 'Server error' });
            }
            
            if (results.length !== 0) {
                console.log('Data type of phoneNum:', typeof (phoneNum));
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
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
