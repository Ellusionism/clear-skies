const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {
  const answers = req.body;
  const sqlQuery = `
  INSERT INTO "evening_answers"
  ("user_id",
  "date",
  "three_positives",
  "end_of_day_rating",
  "end_of_day_comment")
  VALUES ($1, $2, $3, $4, $5)
  `;
  const sqlValues = [
    answers.user_id,
    answers.date,
    answers.three_positives,
    answers.end_of_day_rating,
    answers.end_of_day_comment
  ];
  pool.query(sqlQuery, sqlValues)
  .then((response) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.error('Error in evening.reflection.router POST:', error)
  })
});

module.exports = router;
