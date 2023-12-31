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
// Route to handle login authentication 
app.post('/api/adminlogin', (req, res) => {
  const { username, password } = req.body;
  console.log('Received POST request at /api/adminlogin');
  console.log('Email', username);
  console.log('Password type:', typeof password);
  // Query the users table in the database
  connection.query(
    'SELECT * FROM Car_Rental_System.admin WHERE username = ?',
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
    return res.status(200).json({ message: 'Admin Login successful' });

  });
});

// Route to handle User Registerations
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
  
      console.log('');
      return res.status(200).json({ message: 'Login successful' });
    }
  );
  
});
// Route to handle Car Reservations
app.post('/api/reserve-car', (req, res) => {
  const { office_id, pick_up_date, return_date, plate_id, customer_id } = req.body;
  console.log('Received POST request at /api/reserve-car');
  console.log('office_id, pick_up_date, return_date, plate_id, customer_id', office_id, pick_up_date, return_date, plate_id, customer_id);
  const pick_up_date_date = new Date(pick_up_date);
  const return_date_date = new Date(return_date);
  const office_id_int = parseInt(office_id);  
  // Check if the car is available
  connection.query('SELECT * FROM Car_Rental_System.Car_Status WHERE plate_id = ? AND start_date <= ? AND end_date >= ?',
   [plate_id, pick_up_date_date, return_date_date], (err, results) => {
    if (err) {
      console.error('Error during car selection:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.status ==='Rented'){
      return res.status(401).json({ message: 'Car is not available' });
    }
   });
  connection.query('SELECT * FROM Car_Rental_System.Car WHERE plate_id = ?', [plate_id], (err, results) => {
    if (err) {
      console.error('Error during car selection:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const car = results[0];
    const price = car.price;
    console.log('price', price);

    // Insert the reservation into the database
    connection.query(
      'INSERT INTO Car_Rental_System.Reservation (pick_up_date, return_date, plate_id, customer_id, office_id, price) VALUES (?, ?, ?, ?, ?, ?)', 
      [pick_up_date_date, return_date_date, plate_id, customer_id, office_id_int, price],
      (err, results) => {
        if (err) {
          console.error('Error during reservation:', err);
          return res.status(500).json({ message: 'Server error' });
        }
        // Update the car status
        connection.query('Update Car_Rental_System.Car_Status SET end_date = ? WHERE plate_id = ? AND status = "Available"',
         [pick_up_date_date, plate_id], (err, results) => {
          if (err) {
            console.error('Error during updating car status:', err);
            return res.status(500).json({ message: 'Server error' });
          }
         });
        connection.query('Insert into Car_Rental_System.Car_Status (plate_id, start_date, end_date,status) values (?,?,?,?)',
        [plate_id, pick_up_date_date, return_date_date,'Rented'], (err, results) => {
          if (err) {
            console.error('Error during updating car status:', err);
            return res.status(500).json({ message: 'Server error' });
          }
         }
        );
    

        console.log('Reservation successful');
        return res.status(200).json({ message: 'Reservation successful' });
      }
    );
  });
});


// Route to handle viewing Cars
app.get('/api/view-cars', (req, res) => {
  console.log('Received POST request at /api/view-cars');
    // Get the price of the car
  connection.query(
    'select * from Car_Rental_System.Car',
    (err, cars) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ message: 'Server error' });
        }
        console.log('cars', cars);
       return res.status(200).json(cars);
    }
  );


  
});
///// Admin

// Route to handle adding Cars
app.post('/api/add-car', (req, res) => {
  const { plate_id, model, brand, year, office_id, price } = req.body;
  console.log('Received POST request at /api/add-car');
  // Insert the reservation into the database
  const office_id_int = parseInt(office_id);
  const price_float = parseFloat(price);
  const year_int = parseInt(year);
  connection.query(
    'insert into Car_Rental_System.Car (plate_id, model, brand, year, office_id, price) values (?,?,?,?,?,?)', 
    [plate_id, model, brand, year_int, office_id_int, price_float],
    (err, results) => {
      if (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      const current_day = new Date();
      console.log('current_day', current_day);
      // Update the car status
      connection.query('Insert into Car_Rental_System.Car_Status (plate_id, start_date, status) values (?,?,?)',
      [plate_id,current_day , 'Available'], (err, results) => {
        if (err) {
          console.error('Error during updating car status:', err);
          return res.status(500).json({ message: 'Server error' });
        }
        }
      );
      console.log('Car Added Successfully');
    }
  );
  
});

//Reports

// Route to handle sending reservation reports Report 1

app.get('/api/reservation-reports', (req, res) => {
  const {start_date, end_date} = req.query;
  console.log('Received GET request at /api/reservation-reports');
  // Get reservation reports during a certain time period
  const start_date_date = new Date(start_date);
  const end_date_date = new Date(end_date);
  connection.query(
      'select * from Car_Rental_System.Reservation Natural JOIN Car_Rental_System.customer where reservation_date >= ? and reservation_date <= ?',
      [start_date_date, end_date_date],
      (err, reservation_reports) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('reservation_reports', reservation_reports);
         return res.status(200).json(reservation_reports);
      }
  );
});

// Route to handle sending all reservations of any car during specific time period Report 2

app.get('/api/car-reservations-report', (req, res) => {
  console.log('Received GET request at /api/car-reservations-report');
  // Get all payments made on a certain day
  const {plate_id, start_date, end_date} = req.body;
  const start_date_date = new Date(start_date);
  const end_date_date = new Date(end_date);
  connection.query(
      'select * from Car_Rental_System.Reservation Natural Join Car_Rental_System.Car where plate_id = ? and reservation_date >= ? and reservation_date <= ?',
      [plate_id, start_date_date, end_date_date],
      (err, car_reservations) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
         return  res.status(200).json(car_reservations);
      }
  );
});
// Route to handle sending status of a car report Report 3

app.get('/api/car-status-reports', (req, res) => { 
  console.log('Received GET request at /api/car-status-reports');
  // Get all payments made on a certain day
  const {day} = req.body;
  connection.query(
      'select plate_id , status from Car_Rental_System.Car_Status where start_date <= ? and end_date >= ?',
      [day, day],
      (err, car_status_reports) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          return res.status(200).json(car_status_reports);
      }
  );
});
// Route to handle reservation reports for a specific customer Report 4
app.get('/api/customer-reservations-report', (req, res) => {
  console.log('Received GET request at /api/customer-reservations-report');
  // Get all payments made on a certain day
  const {customer_id} = req.body;
  connection.query(
      'select * from Car_Rental_System.Reservation where customer_id = ?',
      [customer_id],
      (err, customer_reservations) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          return res.status(200).json(customer_reservations);
      }
  );
}); 
// Route to handle sending daily payment within a specific period reports Report 5  
app.get('/api/payment-reports', (req, res) => {
  const {start_date, end_date} = req.body;
  const start_date_date = new Date(start_date);
  const end_date_date = new Date(end_date);
  console.log('Received GET request at /api/payment-reports');
  // Get all payments made on a certain day
  connection.query(
      'select sum(price), pick_up_date from Car_Rental_System.Reservation having reservation_date >= ? and reservation_date <= ?', /// Needs to be adjusted
      [start_date_date, end_date_date],
      (err, payment_reports) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          return res.status(200).json(payment_reports);
      }
  );
});



// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
