CREATE DATABASE gestorPadel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE gestorPadel;

CREATE USER 'userDatabase'@'%' IDENTIFIED BY 'userDatabase';
GRANT ALL PRIVILEGES ON *.* TO 'userDatabase'@'%' WITH GRANT OPTION;