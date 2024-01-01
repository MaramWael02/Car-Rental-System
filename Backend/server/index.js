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
// Route to handle admin login authentication 
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
      console.log('results', results.length);
      if (results.length === 0 || String(results[0].password) !== password) {
        console.log('Invalid credentials');
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
  console.log('pick_up_date_date, return_date_date, office_id_int', pick_up_date_date, return_date_date, office_id_int);
  // Check if the car is available
  connection.query('SELECT * FROM Car_Rental_System.Car_Status WHERE plate_id = ? AND status ="Rented" AND ((? between start_date and end_date) or (? between start_date and end_date))',
   [plate_id,pick_up_date_date,return_date_date ], (err, results) => {
    console.log('results', results);
    if (err) {
      console.error('Error during car selection:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.length !== 0){
      return res.status(401).json({ message: 'Car is not available' });
    }
    connection.query('SELECT * FROM Car_Rental_System.Car WHERE plate_id = ?', [plate_id], (err, results) => {
      if (err) {
        console.error('Error during car selection:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      
      if (results.length === 0) {
        return res.status(401).json({ message: "This Car doesn't exist, please check the car info" });
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
            if (err.code === 'ER_NO_REFERENCED_ROW_2') {
              return res.status(400).json({ message: 'Invalid, please check the office id or username' });
            }
            return res.status(500).json({ message: 'Server error' });
          }
          else{
          // Update the car status
          connection.query('Update Car_Rental_System.Car_Status SET end_date = ? WHERE plate_id = ? AND status = "Available"',
          [pick_up_date_date, plate_id], (err, results) => {
            if (err) {
              console.error('Error during updating car status:', err);
              return res.status(500).json({ message: 'Error during updating car status' });
            }
          });
          connection.query('Insert into Car_Rental_System.Car_Status (plate_id, start_date, end_date,status) values (?,?,?,?)',
          [plate_id, pick_up_date_date, return_date_date,'Rented'], (err, results) => {
            if (err) {
              console.error('Error during updating car status:', err);
              return res.status(500).json({ message: 'Database error' });
            }
            console.log('Reservation successful');
            return res.status(200).json({
              message: 'Car Reserved Successfully. Please head to office ' + office_id + ' on ' + pick_up_date + ' to receive your car.',
              office: office_id,
              pick_up_date: pick_up_date
            });
          }
          );
    }});
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
  const { plate_id, model, brand, year, office_id, price , image, start_date} = req.body;
  console.log('Received POST request at /api/add-car');
  // Insert the reservation into the database
  console.log('plate_id, model, brand, year, office_id, price, image', plate_id, model, brand, year, office_id, price, image);
  const office_id_int = parseInt(office_id);
  const price_float = parseFloat(price);
  const year_int = parseInt(year);
  const start_date_date = new Date(start_date);
  connection.query(
    'insert into Car_Rental_System.Car (plate_id, model, brand, year, office_id, price, image) values (?,?,?,?,?,?,?)', 
    [plate_id, model, brand, year_int, office_id_int, price_float, image],
    (err, results) => {
      if (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'Server error' });
      }
  
      // Update the car status
      connection.query('Insert into Car_Rental_System.Car_Status (plate_id, start_date, status) values (?,?,?)',
      [plate_id,start_date_date , 'Available'], (err, results) => {
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
  const {plate_id, start_date, end_date} = req.query;
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
  const {day} = req.query;
  const day_date = new Date(day);
  console.log('day_date', day_date);
  connection.query(
      'select plate_id , status from Car_Rental_System.Car_Status where ? between start_date and end_date',
      [day_date, day_date],
      (err, car_status_reports) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('car_status_reports', car_status_reports);
          return res.status(200).json(car_status_reports);
      }
  );
});
// Route to handle reservation reports for a specific customer Report 4
app.get('/api/customer-reservations-report', (req, res) => {
  console.log('Received GET request at /api/customer-reservations-report');
  // Get all payments made on a certain day
  const {customer_id} = req.query;
  console.log('customer_id', customer_id);
  connection.query(
      'select * from Car_Rental_System.Reservation where customer_id = ?',
      [customer_id],
      (err, customer_reservations) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('customer_reservations', customer_reservations);
          return res.status(200).json(customer_reservations);
      }
  );
}); 
// Route to handle sending daily payment within a specific period reports Report 5  
app.get('/api/payment-reports', (req, res) => {
  const {start_date, end_date} = req.query;
  const start_date_date = new Date(start_date);
  const end_date_date = new Date(end_date);
  console.log('Received GET request at /api/payment-reports');
  console.log('start_date_date', start_date_date);  
  console.log('end_date_date', end_date_date);
  // Get all payments made in a specific period
  connection.query(
      'select sum(price) as total, reservation_date from Car_Rental_System.Reservation where reservation_date between ? AND ? group by reservation_date', /// Needs to be adjusted
      [start_date_date, end_date_date],
      (err, payment_reports) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('payment_reports', payment_reports);
          return res.status(200).json(payment_reports);
      }
  );
});

///// Searching

// Route to handle searching for car brand
app.get('/api/car-brand', (req, res) => {
  const {brand} = req.query;
  console.log('Received GET request at /api/search-car-brand');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.Car where brand = ?',
      [brand],
      (err, car_brand) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('car_brand', car_brand);
          return res.status(200).json(car_brand);
      }
  );
});

// Route to handle searching for car model
app.get('/api/car-model', (req, res) => {
  const {model} = req.query;
  console.log('Received GET request at /api/search-car-model');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.Car where model = ?',
      [model],
      (err, car_model) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('car_model', car_model);
          return res.status(200).json(car_model);
      }
  );
});

// Route to handle searching for car year
app.get('/api/car-year', (req, res) => {
  const {year} = req.query;
  console.log('Received GET request at /api/search-car-year');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.Car where year = ?',
      [year],
      (err, car_year) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('car_year', car_year);
          return res.status(200).json(car_year);
      }
  );
});

// Route to handle searching for car price
app.get('/api/car-price', (req, res) => {
  const {price} = req.query;
  console.log('Received GET request at /api/search-car-price');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.Car where price = ?',
      [price],
      (err, car_price) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('car_price', car_price);
          return res.status(200).json(car_price);
      }
  );
});

// Route to handle searching for car office
app.get('/api/car-office', (req, res) => {
  const {office_id} = req.query;
  console.log('Received GET request at /api/search-car-office');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.Car where office_id = ?',
      [office_id],
      (err, car_office) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('car_office', car_office);
          return res.status(200).json(car_office);
      }
  );
});

// Route to handle searching for car plate id
app.get('/api/car-plate', (req, res) => {
  const {plate_id} = req.query;
  console.log('Received GET request at /api/search-car-plate-id');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.Car where plate_id = ?',
      [plate_id],
      (err, car_plate_id) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('car_plate_id', car_plate_id);
          return res.status(200).json(car_plate_id);
      }
  );
});
// Route to handle searching for customer id
app.get('/api/customer-username', (req, res) => {
  const {username} = req.query;
  console.log('Received GET request at /api/search-customer-id');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.customer where customer_id = ?',
      [username],
      (err, customer_id) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error' });
          }
         return res.status(200).json(customer_id);
      }
  );
});
// Route to handle searching for customer first name
app.get('/api/customer-first-name', (req, res) => {
  const {first_name} = req.query;
  console.log('Received GET request at /api/search-customer-first-name');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.customer where first_name = ?',
      [first_name],
      (err, customer_first_name) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error'});
          }
          console.log('customer_first_name', customer_first_name);
          return res.status(200).json(customer_first_name);
      }
  );
});
// Route to handle searching for customer last name
app.get('/api/customer-last-name', (req, res) => {
  const {last_name} = req.query;
  console.log('Received GET request at /api/search-customer-last-name');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.customer where last_name = ?',
      [last_name],
      (err, customer_last_name) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error'});
          }
          console.log('customer_last_name', customer_last_name);
          return res.status(200).json(customer_last_name);
      }
  );
});
// Route to handle searching for customer license
app.get('/api/customer-license', (req, res) => {
  const {license} = req.query;
  console.log('Received GET request at /api/search-customer-license');
  // Get all payments made on a certain day
  connection.query(
      'select * from Car_Rental_System.customer where car_license = ?',
      [license],
      (err, customer_license) => {
          if (err) {
              console.error('Error during login:', err);
              return res.status(500).json({ message: 'Server error'});
          }
          console.log('customer_license', customer_license);
          return res.status(200).json(customer_license);
      }
  );
});
// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
