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
app.post('/api/register', (req, res) => {
  const { email, password, phoneNum, fname, lname, address, username, carLicense  } = req.body;
  console.log('Received POST request at /api/register');
  const phoneNumint = parseInt(phoneNum);
  console.log("email , password, phoneNum, fname, lname, address, username, carLicense", email, password, phoneNumint, fname, lname, address, username, carLicense);

  // Query the users table in the database
  connection.query(
    'insert into Car_Rental_System.customer (email, password, phone_no, first_name, last_name, address, customer_id,car_license) values (?,?,?,?,?,?,?,?)', 
    [email, password, phoneNumint, fname, lname, address, username, carLicense],
    (err, results) => {
      if (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'Server error' });
      }
  
      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
    


// Add additional checks for case sensitivity or character encoding if necessary

      console.log('Login successful');
      return res.status(200).json({ message: 'Login successful' });
    }
  );
  
});

// Start the server
const PORT = 8002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
