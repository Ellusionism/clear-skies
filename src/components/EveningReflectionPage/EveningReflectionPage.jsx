import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function EveningReflectionPage() {

    const user = useSelector((store) => store.user);
    const morningAnswers = useSelector((store) => store.morningReflection.morningAnswers);
    const streaks = useSelector((store) => store.streaks.streaks);

  const dispatch = useDispatch();
  const history = useHistory();
  const date = moment();

  const currentDate = date.format('YYYY-MM-DD');
  const previousDate = date.subtract(1, 'd').format('YYYY-MM-DD');

  const [eveningAnswers, setEveningAnswers] = useState({
    user_id: user.id,
    date: currentDate,
    three_positives: '',
    end_of_day_rating: 0,
    end_of_day_comment: '',
  });

  const [updatedStreak, setUpdatedStreak] = useState({
    user_id: user.id,
    previous_reflection: currentDate,
    current_streak: streaks.current_streak,
    longest_streak: streaks.longest_streak,
  });

  useEffect(() => {
    dispatch({
      type: 'GET_STREAKS',
      payload: user.id,
    });
  }, [])

  const updateStreaks = () => {
    const previousReflection = streaks.previous_reflection && streak.previous_reflection.substring(0, 10);
    const currentStreak = Number(streaks.current_streak);
    const longestStreak = Number(streaks.longest_streak);
    if (previousReflection === previousDate) {
      newStreak = currentStreak + 1;
      setUpdatedStreak({...updatedStreaks, current_streak: newStreak})
      if (newStreak >= longestStreak) {
        newLongestStreak = newStreak;
        setUpdatedStreak({...updatedStreaks, longest_streak: newLongestStreak})
      }
    } else {
      setUpdatedStreak({...updatedStreaks, current_streak: 1})
    }
    dispatch({
      type: 'UPDATE_STREAKS',
      payload: updatedStreak,
    })
  }

  const handleChange = (event) => {
    event.preventDefault();
    setEveningAnswers({...eveningAnswers, [event.target.name]: event.target.value})
  } // updates state for all text inputs onChange

  const handleClick = (event) => {
    setEveningAnswers({...eveningAnswers, [event.target.name]: Number(event.target.value)});
  } // updates state for all radio inputs onClick

  const handleSubmit = (event) => {
    dispatch({
      type: 'CREATE_EVENING_REFLECTION',
      payload: eveningAnswers
    })
    dispatch({
      type: 'SET_EVENING_REFLECTION',
      payload: eveningAnswers,
    })
    updateStreaks();
    history.push('/home')
  } // submits all answers to the store, updates their streaks data, and returns the user to the homepage

  return (
    <div className="text-center">
      <button
      className="btn btn-rounded btn-primary top-buffer"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#morningAnswers"
      aria-expanded="false"
      aria-controls="morningAnswers"
      >Morning Answers</button>

      <div
      className="collapse mt-3 scroll-section" id="morningAnswers">

        <div className="card">
          <div className="card-body">
            <h6 className="card-title"
            >What am I looking forward to the most today?</h6>
            <p className="card-text"
            >{morningAnswers.looking_forward}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6 className="card-title"
            >What will be my greatest challenge today?</h6>
            <p className="card-text"
            >{morningAnswers.greatest_challenge}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6 className="card-title"
            >What 3 tasks do I need to get done today?</h6>
            <p className="card-text"
            >{morningAnswers.three_tasks}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6 className="card-title"
            >Who needs my attention/support most today?</h6>
            <p className="card-text"
            >{morningAnswers.attention_support}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6 className="card-title"
            >Physical health rating: {morningAnswers.physical_rating}</h6>
            <p className="card-text"
            >{morningAnswers.physical_comment}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6 className="card-title"
            >Mental health rating: {morningAnswers.mental_rating}</h6>
            <p className="card-text"
            >{morningAnswers.mental_comment}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6 className="card-title"
            >Emotional health rating: {morningAnswers.emotional_rating}</h6>
            <p className="card-text"
            >{morningAnswers.emotional_comment}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6 className="card-title">
            Love in life rating: {morningAnswers.love_in_life_rating}</h6>
            <p className="card-text"
            >{morningAnswers.love_in_life_comment}</p>
          </div>
        </div>
      </div>

      <form
      className="text-center form"
      onSubmit={handleSubmit}>
        <h2 className="top-buffer"
        >Evening Reflection</h2>

        {/* looking_forward Input */}
        <div className="form-outline top-buffer">
        <textarea
        required
        value={eveningAnswers.looking_forward}
        onChange={handleChange}
        rows="4"
        id="three-positives"
        name="three_positives"
        className="form-control border" />
        <label
        className="form-label"
        htmlFor="three-positives"
        >What were three positives from today?</label>
        {/* comment input for three positives prompt */}
      </div>

        <div className="form-outline">
          <p className="top-buffer"
          >How would I rate my day overall?</p>
          <div className="btn-group">
            <input
            type="radio"
            required
            value={1}
            onClick={handleClick}
            className="btn-check"
            id="end-of-day-rating-1"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-1"
            >1</label>

            <input
            type="radio"
            required
            value={2}
            onClick={handleClick}
            className="btn-check"
            id="end-of-day-rating-2"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-2"
            >2</label>

            <input
            type="radio"
            required
            value={3}
            onChange={handleClick}
            className="btn-check"
            id="end-of-day-rating-3"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-3"
            >3</label>

            <input
            type="radio"
            required
            value={4}
            onChange={handleClick}
            className="btn-check"
            id="end-of-day-rating-4"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-4"
            >4</label>

            <input
            type="radio"
            required
            value={5}
            onChange={handleClick}
            className="btn-check"
            id="end-of-day-rating-5"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-5"
            >5</label>
          </div>
          {/* Radio button group for end of day rating */}
        </div>
        <div className="form-outline top-buffer">
        <textarea
          required
          value={eveningAnswers.love_in_life_comment}
          onChange={handleChange}
          rows="4"
          id="end-of-day-comment"
          name="end_of_day_comment"
          className="form-control border" />
          <label
        className="form-label"
        htmlFor="end-of-day-comment"
        >What do I think most influenced my rating?</label>
          {/* comment input for end of day rating */}
        </div>

        <button
        type="submit"
        className="btn btn-rounded btn-primary mdb-3 top-buffer"
        >Submit Reflection</button> 
        {/* Handles submit of entire form */}
      </form>
    </div>
  )
};

export default EveningReflectionPage;