const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  const sqlQuery = `
  SELECT
    "evening_answers"."date",
    "evening_answers"."end_of_day_rating",
    "evening_answers"."end_of_day_comment"
    FROM "evening_answers"
    WHERE "evening_answers"."user_id" = $1
  ORDER BY "date" DESC
  LIMIT 7;
  `;
  pool.query(sqlQuery, [req.params.id])
  .then((response) => {
    res.send(response.rows);
  }).catch((error) => {
    console.error('Error in review.router /chart GET:', error);
    res.sendStatus(500);
  });
});

module.exports = router;