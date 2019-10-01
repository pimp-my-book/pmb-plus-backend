

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
    book_degree varchar(250) not null,
    book_course varchar(250) not null,
    book_univeristy varchar(250) not null,
    product_id MEDIUMINT UNSIGNED not null,
    book_owner varchar(250) not null,
     FOREIGN KEY(product_id) REFERENCES product(product_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

