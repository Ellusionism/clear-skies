-- Create a database called "clear_skies"

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR UNIQUE NOT NULL,
  "password" VARCHAR NOT NULL,
  "first_name" VARCHAR NOT NULL,
  "last_name" VARCHAR NOT NULL,
  "previous_reflection" DATE,
	"current_streak" INT DEFAULT 0,
	"longest_streak" INT DEFAULT 0,
	"last_quote_grab" DATE,
	"current_quote" VARCHAR
);

CREATE TABLE "morning_answers" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user"
		ON DELETE CASCADE NOT NULL,
	"date" DATE NOT NULL,
	"looking_forward" VARCHAR,
	"greatest_challenge" VARCHAR,
	"three_tasks" VARCHAR,
	"attention_support" VARCHAR ,
	"physical_rating" INT,
	"physical_comment" VARCHAR,
	"mental_rating" INT,
	"mental_comment" VARCHAR,
	"emotional_rating" INT,
	"emotional_comment" VARCHAR,
	"love_in_life_rating" INT,
	"love_in_life_comment" VARCHAR
);

CREATE TABLE "evening_answers" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user"
		ON DELETE CASCADE NOT NULL,
	"date" DATE NOT NULL,
	"three_positives" VARCHAR,
	"end_of_day_rating" INT,
	"end_of_day_comment" VARCHAR
);