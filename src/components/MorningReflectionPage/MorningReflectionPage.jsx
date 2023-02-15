import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function MorningReflectionPage() {

    const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const date = moment();
  const currentDate = date.format('YYYY-MM-DD');

  const [morningAnswers, setMorningAnswers] = useState({
    user_id: user.id,
    date: currentDate,
    looking_forward: '',
    greatest_challenge: '',
    three_tasks: '',
    attention_support: '',
    physical_rating: 0,
    physical_comment: '',
    mental_rating: 0,
    mental_comment: '',
    emotional_rating: 0,
    emotional_comment: '',
    love_in_life_rating: 0,
    love_in_life_comment: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setMorningAnswers({...morningAnswers, [event.target.name]: event.target.value})
  } // updates state for all text inputs onChange

  const handleClick = (event) => {
    setMorningAnswers({...morningAnswers, [event.target.name]: Number(event.target.value)});
  } // updates state for all radio inputs onClick

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_MORNING_ANSWERS',
      payload: morningAnswers
    })
    dispatch({
      type: 'POST_MORNING_ANSWERS',
      payload: morningAnswers
    })
    history.push('/homepage')
  } // submits all answers to the store, and returns the user to the homepage

  return (
    <form
    className="text-center"
    onSubmit={handleSubmit}>
      <h2 className="top-buffer">Morning Reflection</h2>

      {/* looking_forward Input */}
      <div className="form-outline top-buffer">
      <label
      className="form-label"
      htmlFor="looking-forward"
      >What am I looking forward to the most today?</label>
      <textarea
      required
      value={morningAnswers.looking_forward}
      onChange={handleChange}
      rows="4"
      id="looking-forward"
      name="looking_forward"
      className="form-control border" />
      {/* comment input for looking forward prompt */}
    </div>

      <div className="form-outline top-buffer">
      <label
        className="form-label"
        htmlFor="greatest-challenge"
        >What will be my greatest challenge today?</label>
        <textarea
        required
        value={morningAnswers.greatest_challenge}
        onChange={handleChange}
        rows="4"
        id="greatest-challenge"
        name="greatest_challenge"
        className="form-control border" />
        {/* comment input for greatest challenge prompt */}
      </div>

      <div className="form-outline top-buffer">
      <label
        className="form-label"
        htmlFor="three-tasks"
        >What 3 tasks do I need to get done today?</label>
        <textarea
        required
        value={morningAnswers.three_tasks}
        onChange={handleChange}
        rows="4"
        id="three-tasks"
        name="three_tasks"
        className="form-control border" />
        {/* comment input for three tasks prompt */}
      </div>

      <div className="form-outline top-buffer">
      <label
        className="form-label"
        htmlFor="attention-support"
        >Who needs my attention/support most today?</label>
        <textarea
        required
        value={morningAnswers.attention_support}
        onChange={handleChange}
        rows="4"
        id="attention-support"
        name="attention_support"
        className="form-control border" />
        {/* comment input for attention/support prompt */}
      </div>

      <div className="form-outline">
          <p className="top-buffer">How would I rate my physical health today?</p>
          <div className="btn-group" required>
            <input
            type="radio"
            value={1}
            onChange={handleClick}
            className="btn-check"
            id="physical-1"
            name="physical_rating"
            />
            <label className="btn btn-secondary" htmlFor="physical-1">1</label>

            <input
            type="radio"
            value={2}
            onChange={handleClick}
            className="btn-check"
            id="physical-2"
            name="physical_rating"
            />
            <label className="btn btn-secondary" htmlFor="physical-2">2</label>

            <input
            type="radio"
            value={3}
            onChange={handleClick}
            className="btn-check"
            id="physical-3"
            name="physical_rating"
            />
            <label className="btn btn-secondary" htmlFor="physical-3">3</label>

            <input
            type="radio"
            value={4}
            onChange={handleClick}
            className="btn-check"
            id="physical-4"
            name="physical_rating"
            />
            <label className="btn btn-secondary" htmlFor="physical-4">4</label>

            <input
            type="radio"
            value={5}
            onChange={handleClick}
            className="btn-check"
            id="physical-5"
            name="physical_rating"
            />
            <label className="btn btn-secondary" htmlFor="physical-5">5</label>
          </div>
          {/* Radio button group for physical health rating */}
        </div>
        <div className="form-outline top-buffer">
        <label
        className="form-label"
        htmlFor="physical-comment"
        >If not a 5, how am I going to improve it today?</label>
        <textarea
        value={morningAnswers.physical_comment}
        onChange={handleChange}
        rows="4"
        id="physical-comment"
        name="physical_comment"
        className="form-control border" />
        {/* comment input for physical health rating */}
        </div>

        <div className="form-outline">
        <p className="top-buffer">How would I rate my mental health today?</p>
        <div className="btn-group">
          <input
          type="radio"
          value={1}
          onChange={handleClick}
          className="btn-check"
          id="mental-1"
          name="mental_rating"
          />
          <label className="btn btn-secondary" htmlFor="mental-1">1</label>

          <input
          type="radio"
          value={2}
            onChange={handleClick}
          className="btn-check"
          id="mental-2"
          name="mental_rating"
          />
          <label className="btn btn-secondary" htmlFor="mental-2">2</label>

          <input
          type="radio"
          value={3}
          onChange={handleClick}
          className="btn-check"
          id="mental-3"
          name="mental_rating"
          />
          <label className="btn btn-secondary" htmlFor="mental-3">3</label>

          <input
          type="radio"
          value={4}
          onChange={handleClick}
          className="btn-check"
          id="mental-4"
          name="mental_rating"
          />
          <label className="btn btn-secondary" htmlFor="mental-4">4</label>

          <input
          type="radio"
          value={5}
          onChange={handleClick}
          className="btn-check"
          id="mental-5"
          name="mental_rating"
          />
          <label className="btn btn-secondary" htmlFor="mental-5">5</label>
        </div>
        {/* Radio button group for mental health rating */}
      </div>
      <div className="form-outline top-buffer">
      <label
      className="form-label"
      htmlFor="mental-comment">If not a 5, how am I going to improve it today?</label>
      <textarea
      value={morningAnswers.mental_comment}
      onChange={handleChange}
      rows="4"
      id="mental-comment"
      name="mental_comment"
      className="form-control border" />
      {/* comment input for mental health rating */}
      </div>

      <div className="form-outline">
        <p className="top-buffer">How would I rate my emotional health today?</p>
        <div className="btn-group">
          <input
          type="radio"
          value={1}
          onChange={handleClick}
          className="btn-check"
          id="emotional-1"
          name="emotional_rating"
          />
          <label className="btn btn-secondary" htmlFor="emotional-1">1</label>

          <input
          type="radio"
          value={2}
          onChange={handleClick}
          className="btn-check"
          id="emotional-2"
          name="emotional_rating"
          />
          <label className="btn btn-secondary" htmlFor="emotional-2">2</label>

          <input
          type="radio"
          value={3}
          onChange={handleClick}
          className="btn-check"
          id="emotional-3"
          name="emotional_rating"
          />
          <label className="btn btn-secondary" htmlFor="emotional-3">3</label>

          <input
          type="radio"
          value={4}
          onChange={handleClick}
          className="btn-check"
          id="emotional-4"
          name="emotional_rating"
          />
          <label className="btn btn-secondary" htmlFor="emotional-4">4</label>

          <input
          type="radio"
          value={5}
          onChange={handleClick}
          className="btn-check"
          id="emotional-5"
          name="emotional_rating"
          />
          <label className="btn btn-secondary" htmlFor="emotional-5">5</label>
        </div>
        {/* Radio button group for emotional health rating */}
      </div>
      <div className="form-outline top-buffer">
      <label
      className="form-label"
      htmlFor="emotional-comment">If not a 5, how am I going to improve it today?</label>
      <textarea
      value={morningAnswers.emotional_comment}
      onChange={handleChange}
      rows="4"
      id="emotional-comment"
      name="emotional_comment"
      className="form-control border" />
      {/* comment input for emotional health rating */}
      </div>

      <div className="form-outline">
        <p className="top-buffer">How would I rate the amount of love in my life today?</p>
        <div className="btn-group">
          <input
          type="radio"
          value={1}
          onClick={handleClick}
          className="btn-check"
          id="love-in-life-1"
          name="love_in_life_rating"
          />
          <label className="btn btn-secondary" htmlFor="love-in-life-1">1</label>

          <input
          type="radio"
          value={2}
          onClick={handleClick}
          className="btn-check"
          id="love-in-life-2"
          name="love_in_life_rating"
          />
          <label className="btn btn-secondary" htmlFor="love-in-life-2">2</label>

          <input
          type="radio"
          value={3}
          onChange={handleClick}
          className="btn-check"
          id="love-in-life-3"
          name="love_in_life_rating"
          />
          <label className="btn btn-secondary" htmlFor="love-in-life-3">3</label>

          <input
          type="radio"
          value={4}
          onChange={handleClick}
          className="btn-check"
          id="love-in-life-4"
          name="love_in_life_rating"
          />
          <label className="btn btn-secondary" htmlFor="love-in-life-4">4</label>

          <input
          type="radio"
          value={5}
          onChange={handleClick}
          className="btn-check"
          id="love-in-life-5"
          name="love_in_life_rating"
          />
          <label className="btn btn-secondary" htmlFor="love-in-life-5">5</label>
        </div>
        {/* Radio button group for love in life rating */}
      </div>
      <div className="form-outline top-buffer">
      <label
      className="form-label"
      htmlFor="love-in-life-comment">If not a 5, how am I going to improve it today?</label>
      <textarea
        value={morningAnswers.love_in_life_comment}
        onChange={handleChange}
        rows="4"
        id="love-in-life-comment"
        name="love_in_life_comment"
        className="form-control border" />
        {/* comment input for love in life rating */}
      </div>

      <button
      type="submit"
      className="btn btn-primary mdb-3 top-buffer"
      >Submit Reflection</button> 
      {/* Handles submit of entire form */}
    </form>
  )
};

export default MorningReflectionPage;