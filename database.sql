CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR NOT NULL
);

CREATE TABLE "morning_answers" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"looking_forward" VARCHAR,
	"greatest_challenge" VARCHAR,
	"three_tasks" VARCHAR,
	"attention_love_support" VARCHAR,
	"health_rating" INT,
	"health_comment" VARCHAR,
	"emotional_capacity_rating" INT,
	"emotional_capacity_comment" VARCHAR,
	"wealth_rating" INT,
	"wealth_comment" VARCHAR,
	"love_in_life_rating" INT,
	"love_in_life_comment" VARCHAR
);

CREATE TABLE "evening_answers" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"morning_answers_id" INT REFERENCES "morning_answers",
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"rating" INT,
	"comments" VARCHAR
);


CREATE TABLE "streaks" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"previous_reflection" DATE NOT NULL,
	"current_streak" INT,
	"longest_streak" INT
);



CREATE TABLE "daily_quote" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"last_grab" DATE NOT NULL,
	"current_quote" VARCHAR
);