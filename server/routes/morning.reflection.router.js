const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get(`/:id`, (req, res) => {
  const sqlQuery = `
  SELECT * FROM "morning_answers"
    WHERE "user_id" = $1
    ORDER BY "id" DESC
    LIMIT 1;
  `;
  const sqlValues = [req.params.id];
  pool.query(sqlQuery, sqlValues)
  .then((response) => {
    res.send(response.rows);
  }).catch((error) => {
    console.error('Error in morning.reflection.router GET', error);
    res.sendStatus(500);
  });
});

router.post('/', (req, res) => {
  const answers = req.body;
  const sqlQuery = `
  INSERT INTO "morning_answers"
  ("user_id",
  "date",
  "looking_forward",
  "greatest_challenge",
  "three_tasks",
  "attention_support",
  "physical_rating",
  "physical_comment",
  "mental_rating",
  "mental_comment",
  "emotional_rating",
  "emotional_comment",
  "love_in_life_rating",
  "love_in_life_comment")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  `;
  const sqlValues = [
    answers.user_id,
    answers.date,
    answers.looking_forward,
    answers.greatest_challenge,
    answers.three_tasks,
    answers.attention_support,
    answers.physical_rating,
    answers.physical_comment,
    answers.mental_rating,
    answers.mental_comment,
    answers.emotional_rating,
    answers.emotional_comment,
    answers.love_in_life_rating,
    answers.love_in_life_comment
  ];
  pool.query(sqlQuery, sqlValues)
  .then((response) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.error('Error in morning.reflection.router POST:', error);
    res.sendStatus(500);
  })
});

module.exports = router;
