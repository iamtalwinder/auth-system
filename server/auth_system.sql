/*User table*/

CREATE TABLE user(firstName VARCHAR(20) NOT NULL, 
                  lastName  VARCHAR(20) NOT NULL, 
                  email     VARCHAR(50) NOT NULL, 
                  password  VARCHAR(1000) NOT NULL);

/*Creating new database user*/

CREATE USER 'auth_system'@'localhost' IDENTIFIED BY 'auth_system';
GRANT ALL PRIVILEGES ON auth_system.* TO 'auth_system'@'localhost';
ALTER USER 'auth_system'@'localhost' IDENTIFIED WITH mysql_native_password BY 'auth_system';