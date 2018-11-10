ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test'; 

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db ;

USE burgers_db ;

CREATE TABLE burgers ( 
id INT NOT NULL AUTO_INCREMENT, 
burger_name varchar(200) NOT NULL, 
devoured BOOLEAN, 
PRIMARY KEY (id)
); 

-- USE burgers_db; 
-- SELECT * FROM burgers;