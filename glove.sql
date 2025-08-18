CREATE DATABASE isl_glove_db;
CREATE USER 'isl_user'@'localhost' IDENTIFIED BY 'isl_password';
GRANT ALL PRIVILEGES ON isl_glove_db.* TO 'isl_user'@'localhost';
FLUSH PRIVILEGES;
