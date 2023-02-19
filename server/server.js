const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const morningReflectionRouter = require('./routes/morning.reflection.router');
const eveningReflectionRouter = require('./routes/evening.reflection.router');
const reviewRouter = require('./routes/review.router');
const streaksRouter = require('./routes/streaks.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/morning-reflection', morningReflectionRouter);
app.use('/api/evening-reflection', eveningReflectionRouter);
app.use('/api/review', reviewRouter);
app.use('/api/streaks', streaksRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
