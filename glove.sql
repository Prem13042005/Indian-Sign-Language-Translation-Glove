CREATE DATABASE portfolio_db IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    subject VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 
    


