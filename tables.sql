

/*  

CREATE TABLE IF NOT EXISTS table 
(
    MEDIUMINT UNSIGNED not null AUTO_INCREMENT,

);

*/
--- Vendor type
CREATE TABLE IF NOT EXISTS vendor_type
(
 vendor_type_id  MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
 vendor_type_name varchar(250) not null,
 vendor_type_description varchar(250) not null
 
);
--- Vendor 
CREATE TABLE IF NOT EXISTS vendor 
(
 vendor_id  MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 vendor_name varchar(250) not null,
 vendor_description varchar(250),
 vendor_website varchar(250),
 vendor_address varchar(250),
 vendor_email varchar(250),
 vendor_phone_number varchar(250),
 user_id varchar(250),
 vendor_type_id MEDIUMINT UNSIGNED not null,
 FOREIGN KEY(vendor_type_id) REFERENCES vendor_type(vendor_type_id) ON UPDATE CASCADE ON DELETE RESTRICT,
);

--- university  
CREATE TABLE IF NOT EXISTS university 
(
   university_id  MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
   university_name varchar(250) not null,
   university_abbrivation varchar(250) not null

);