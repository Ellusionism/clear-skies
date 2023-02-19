const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/', (req, res) => {
  const sqlQuery = `
  UPDATE
  VALUES ($1);
  `;
  pool.query(sqlQuery, [req.body])
  .then((response) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.error('Error in streaks.router POST:', error)
  })
});

module.exports = router;