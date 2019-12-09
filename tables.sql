

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
    owner_name varchar(250) not null,
    owner_email varchar(250) not null,
    owner_number varchar(250) not null,
    deactivated_status boolean,
    sold_Status boolean
     FOREIGN KEY(product_id) REFERENCES product(product_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS settings (
settings_id MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
show_email boolean,
show_number boolean,
users_id varchar(250) not null
); 

/*

ALTER TABLE book
add deactivated_status boolean,
add sold_Status boolean,
add owner_number varchar(250) not null,
add book_owner varchar(250) not null,
    add owner_name varchar(250) not null,
   add  owner_email varchar(250) not null,


INSERT INTO book(book_title,
book_description,
book_author,
book_grade,
book_price,
book_image,
book_edition,
book_location,
book_isbn,
book_degree,
book_course,
book_univeristy,
book_owner,
owner_name,
owner_email,
owner_number)

VALUES('Voices of this land : An anthology of South African poetry in English','Help me a lot',' A. Wessels', 'A','344','https://images-na.ssl-images-amazon.com/images/I/51HK56FRNKL._SX337_BO1,204,203,200_.jpg',
'3','Cape Town','322342342342324','BA: PPE','ATO101','UCT','99999-8888-5555-4444','Cage the elephant','cage@elephant.com','343434334')
*/