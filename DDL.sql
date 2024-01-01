Create Database Car_Rental_System ;

use Car_Rental_System;
CREATE TABLE Car (
    plate_id VARCHAR(50),
    model VARCHAR(50),
    brand VARCHAR(50),
    `year` INT,
    price float,
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
   location varchar(255), 
   office_name varchar(255)
   
);

CREATE TABLE Reservation (
    reservation_id int,
    customer_id varchar(50),
    plate_id varchar(50),
    office_id int,
    reservation_date datetime default CURRENT_TIMESTAMP,
    pick_up_date date, 
    return_date date
);

create table customer(
	customer_id varchar(50),
    `password` varchar(50),
    first_name varchar(50),
    last_name varchar(50),
    address varchar(50),
    phone_no int,
    email varchar(50),
    car_license varchar(50)
);
use Car_Rental_System;
CREATE TABLE admin (
    username VARCHAR(50),
    'password' VARCHAR(50),
    PRIMARY KEY(username)
);


USE Car_Rental_System;

alter table Car
Add primary key(plate_id, office_id);

alter table Car_Status
Add primary key(plate_id, start_date, end_date);

alter table Office
Add primary key (office_id);

alter table Reservation
add primary key (reservation_id, customer_id, plate_id, office_id),
modify column reservation_id int auto_increment;

alter table customer
add primary key(customer_id);

alter table Car
add foreign key (office_id) references Office(office_id);


alter table Car_Status
add foreign key (plate_id) references Car(plate_id);


alter table Reservation
add foreign key(customer_id) references customer(customer_id);

alter table Reservation
add foreign key(plate_id, office_id) references Car(plate_id, office_id);

use Car_Rental_System;
alter table Car_Status
modify column end_date  datetime DEFAULT CURRENT_TIMESTAMP;
Delete  from Car_Rental_System;
truncate  table Reservation;
truncate table Car_Status;
truncate table Car;




