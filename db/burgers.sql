DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(35) not null,
    devoured BOOLEAN default 0
);


INSERT INTO burgers (burger_name) 
VALUES ("Krabby Patty"), ("Mt. Mushmore"), ("The OG"), ("Not a Nutter Burger"), ("Jr. Bacon Chee");


select * from burgers;
