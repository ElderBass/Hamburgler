CREATE DATABASE burgers_db;

USE burgers_db;

CREATE burgers (
    id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(35) not null,
    devoured BOOLEAN default 0
)
