

/*  

CREATE TABLE IF NOT EXISTS table 
(
    MEDIUMINT UNSIGNED not null AUTO_INCREMENT,

);

*/

--- product
CREATE TABLE IF NOT EXISTS product 
(
    product_id MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
    product_name varchar(250) not null, 
    product_description varchar(250) not null
);

--- book
CREATE TABLE IF NOT EXISTS book 
(
    book_id MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
    book_title varchar(250) not null, 
    book_description varchar(250),
    book_author varchar(250) not null,
    book_grade varchar(250),
    book_price varchar(250) not null,
    book_condition varchar(250) not null,
    date_uploaded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    book_image varchar(250),
    book_edition varchar(250) not null,
    book_location varchar(250),
    book_isbn  varchar(250) not null,
    product_id MEDIUMINT UNSIGNED not null,
    vendor_id MEDIUMINT UNSIGNED not null,
     FOREIGN KEY(product_id) REFERENCES product(product_id) ON UPDATE CASCADE ON DELETE RESTRICT
);


--- buying_list
CREATE TABLE IF NOT EXISTS buying_list 
(
   buying_list_id MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
   list_title varchar(250) not null,
   list_isbn varchar(250) not null,
   offer_price int not null,
   validation_date datetime,
    vendor_id MEDIUMINT UNSIGNED not null,
    FOREIGN KEY(vendor_id) REFERENCES vendor(vendor_id) ON UPDATE CASCADE ON DELETE RESTRICT

);


--- order

CREATE TABLE IF NOT EXISTS orders 
(
  order_id  MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
   book_id MEDIUMINT UNSIGNED not null,
   user_id varchar(250) not null,
   date_ordered TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   order_status varchar(250) not null,
   delivery_address  varchar(250) not null,
   eta datetime,
   courier_charges varchar(250),
   user_name varchar(250) not null,
   user_email varchar(250) not null,
   user_phone_number varchar(250) not null,
   date_delivered datetime,
   order_uuid varchar(250) not null,
   FOREIGN KEY(book_id) REFERENCES book(book_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

--- book_review
CREATE TABLE IF NOT EXISTS book_review 
(
   book_review_id MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
   review_amount int not null,
   review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   user_id varchar(250) not null,
      book_id MEDIUMINT UNSIGNED not null,
 FOREIGN KEY(book_id) REFERENCES book(book_id) ON UPDATE CASCADE ON DELETE RESTRICT

);


---collections

CREATE TABLE IF NOT EXISTS collection 
(
  collection_id  MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
   user_id varchar(250) not null,
     user_name varchar(250) not null,
   user_email varchar(250) not null,
   user_phone_number varchar(250) not null,
   collection_location varchar(250) not null,
   collection_date datetime not null,
   staff_member varchar(250) not null
);
