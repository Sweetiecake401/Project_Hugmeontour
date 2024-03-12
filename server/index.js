const express = require("express");
const app = express();
const mariadb = require("mariadb");
const cors = require("cors");
require("dotenv").config();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

const pool = mariadb.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  connectionLimit: 5,
});

app.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to db");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
