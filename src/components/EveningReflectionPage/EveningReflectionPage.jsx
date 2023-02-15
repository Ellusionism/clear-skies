import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function EveningReflectionPage() {

    const user = useSelector((store) => store.user);
    const morningAnswers = useSelector((store) => store.morningReflection);

  const dispatch = useDispatch();
  const history = useHistory();

  const date = moment();
  const currentDate = date.format('YYYY-MM-DD');

  const [eveningAnswers, setEveningAnswers] = useState({
    user_id: user.id,
    date: currentDate,
    // morning_answer_id: morning_answer.id || null,
    three_positives: '',
    end_of_day_rating: 0,
    end_of_day_comment: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setEveningAnswers({...eveningAnswers, [event.target.name]: event.target.value})
  } // updates state for all text inputs onChange

  const handleClick = (event) => {
    setEveningAnswers({...eveningAnswers, [event.target.name]: Number(event.target.value)});
  } // updates state for all radio inputs onClick

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_EVENING_ANSWERS',
      payload: eveningAnswers
    })
    dispatch({
      type: 'POST_EVENING_ANSWERS',
      payload: eveningAnswers
    })
    history.push('/homepage')
  } // submits all answers to the store, and returns the user to the homepage

  return (
    <div className="text-center">
      <button
      className="btn btn-primary top-buffer"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#morningAnswers"
      aria-expanded="false"
      aria-controls="morningAnswers"
      >
      Morning Answers
    </button>

      {/* <!-- Collapsed content --> */}
      <div className="collapse mt-3 scroll-section" id="morningAnswers">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
        ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
        accusamus labore sustainable VHS. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
        put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
      </div>

      <form
      className="text-center"
      onSubmit={handleSubmit}>
        <h2 className="top-buffer">Evening Reflection</h2>

        {/* looking_forward Input */}
        <div className="form-outline top-buffer">
        <label
        className="form-label"
        htmlFor="three-positives"
        >What were three positives from today?</label>
        <textarea
        required
        value={eveningAnswers.looking_forward}
        onChange={handleChange}
        rows="4"
        id="three-positives"
        name="three_positives"
        className="form-control border" />
        {/* comment input for looking forward prompt */}
      </div>

        <div className="form-outline">
          <p className="top-buffer">How would I rate my day overall?</p>
          <div className="btn-group">
            <input
            type="radio"
            value={1}
            onClick={handleClick}
            className="btn-check"
            id="end-of-day-rating-1"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-1">1</label>

            <input
            type="radio"
            value={2}
            onClick={handleClick}
            className="btn-check"
            id="end-of-day-rating-2"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-2">2</label>

            <input
            type="radio"
            value={3}
            onChange={handleClick}
            className="btn-check"
            id="end-of-day-rating-3"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-3">3</label>

            <input
            type="radio"
            value={4}
            onChange={handleClick}
            className="btn-check"
            id="end-of-day-rating-4"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-4">4</label>

            <input
            type="radio"
            value={5}
            onChange={handleClick}
            className="btn-check"
            id="end-of-day-rating-5"
            name="end_of_day_rating"
            />
            <label className="btn btn-secondary" htmlFor="end-of-day-rating-5">5</label>
          </div>
          {/* Radio button group for love in life rating */}
        </div>
        <div className="form-outline top-buffer">
        <label
        className="form-label"
        htmlFor="end-of-day-comment">What do I think most influenced the rating I gave?</label>
        <textarea
          required
          value={eveningAnswers.love_in_life_comment}
          onChange={handleChange}
          rows="4"
          id="end-of-day-comment"
          name="end_of_day_comment"
          className="form-control border" />
          {/* comment input for end of day rating */}
        </div>

        <button
        type="submit"
        className="btn btn-primary mdb-3 top-buffer"
        >Submit Reflection</button> 
        {/* Handles submit of entire form */}
      </form>
    </div>
  )
};

export default EveningReflectionPage