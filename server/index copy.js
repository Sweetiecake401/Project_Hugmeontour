const express = require("express");
const app = express();
const mariadb = require("mariadb");
const dotenv = require("dotenv");
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Connect to mariadb
const pool = mariadb.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
});

pool
  .getConnection()
  .then((conn) => {
    console.log("Database connected");
    conn.release(); // Release connection
  })
  .catch((err) => {
    console.log("Cannot connect to database", err);
  });
