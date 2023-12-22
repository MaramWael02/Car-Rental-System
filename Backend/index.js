const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'Car_Rental_System',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Get a connection from the pool
pool.getConnection((err, connection) => {
    if (err) throw err;
  
    // Use the connection
    connection.query('SELECT * FROM Car_Rental_System.Car', (error, results, fields) => {
      // Release the connection
      connection.release();
  
      if (error) {
        throw error;
      } else {
        if (results.length > 0) {
          // Accessing the first row of the results array
          console.log('The first row: ', results[0]);
        } else {
          console.log('No rows returned.');
        }
      }
    });
  });
