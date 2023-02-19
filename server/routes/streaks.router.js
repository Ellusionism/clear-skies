const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  const sqlQuery = `
  SELECT "previous_reflection", "current_streak", "longest_streak"
    FROM "user"
    WHERE "id" = $1;
  `;
  pool.query(sqlQuery, [req.params.id])
  .then((response) => {
    res.send(response.rows);
  }).catch((error) => {
    console.error('Error in streaks.router /:id GET:', error);
    res.sendStatus(500);
  })
});

router.put('/', (req, res) => {
  const streaks = req.body;
  const sqlQuery = `
  UPDATE "user"
    SET (
      "previous_reflection",
      "current_streak",
      "longest_streak"
      ) = ($1, $2, $3)
    WHERE "id" = $4;
  `;
  const sqlValues = [
    streaks.previous_reflection,
    streaks.current_streak,
    streaks.longest_streak,
    streaks.user_id
  ];
  pool.query(sqlQuery, sqlValues)
  .then((response) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.error('Error in streaks.router PUT:', error);
    res.sendStatus(500);
  })
});

module.exports = router;