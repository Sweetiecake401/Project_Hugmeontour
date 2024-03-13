const express = require('express');
const router = express.Router();
// const pool = require('../db/connection'); // Import the database connection

//dev 2 is joining the server

// Route to fetch data from the database


// router.get('/data', async (req, res) => {
//   try {
//     const connection = await pool.getConnection();
//     const rows = await connection.query('SELECT * FROM employees');
//     connection.release();
//     res.json(rows);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

module.exports = router;