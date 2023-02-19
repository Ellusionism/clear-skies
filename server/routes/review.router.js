const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  const sqlQuery = `
  SELECT
    "evening_answers"."date",
    "evening_answers"."three_positives",
    "evening_answers"."end_of_day_rating",
    "evening_answers"."end_of_day_comment",
    "morning_answers"."looking_forward",
    "morning_answers"."greatest_challenge",
    "morning_answers"."three_tasks",
    "morning_answers"."attention_support",
    "morning_answers"."physical_rating",
    "morning_answers"."physical_comment",
    "morning_answers"."mental_rating",
    "morning_answers"."mental_comment",
    "morning_answers"."emotional_rating",
    "morning_answers"."emotional_comment",
    "morning_answers"."love_in_life_rating",
    "morning_answers"."love_in_life_comment"
    FROM "evening_answers"
  JOIN "morning_answers"
    ON "morning_answers"."date" = "evening_answers"."date"
    AND "evening_answers"."user_id" = $1
  ORDER BY "evening_answers"."date" DESC;
  `;
  pool.query(sqlQuery, [req.params.id])
  .then((response) => {
    res.send(response.rows);
  }).catch((error) => {
    console.error('Error in review.router GET:', error);
    res.sendStatus(500);
  });
});

module.exports = router;