--- Vendor 

/*  

CREATE TABLE IF NOT EXISTS table 
(

);

*/

CREATE TABLE IF NOT EXISTS vendor_type
(
 vendor_type_id  MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
 vendor_type_name varchar(250) not null,
 vendor_type_description varchar(250) not null
 
);

CREATE TABLE IF NOT EXISTS vendor 
(
 vendor_id  MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 vendor_type_id MEDIUMINT UNSIGNED not null,
 FOREIGN KEY(vendor_type_id) REFERENCES vendor_type(vendor_type_id) ON UPDATE CASCADE ON DELETE RESTRICT,
);
