Create Database Car_Rental_System ;

use Car_Rental_System;
CREATE TABLE Car (
    plate_id VARCHAR(50),
    model VARCHAR(50),
    brand VARCHAR(50),
    `year` INT,
    office_id INT
);
CREATE TABLE `Car_Status` (
    plate_id VARCHAR(50),
    `status` varchar(50), 
    start_date date,
    end_date date
);
CREATE TABLE Office (
   office_id int,
   location varchar(255)
   
);

CREATE TABLE Reservation (
    reservation_id int,
    customer_id varchar(50), 
    reservation_date date,
    pick_up_date date, 
    return_date date,
    office_id int
);

create table customer(
	customer_id varchar(50),
    `password` varchar(50),
    first_name varchar(50),
    last_name varchar(50),
    address varchar(50),
    phone_no int,
    email varchar(50)
);
use Car_Rental_System;
Insert into Car(plate_id,model,brand,`year`,office_id) values ('AB','BB','renault',2005,12);


