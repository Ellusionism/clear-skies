import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function MorningReflectionPage() {

  const user = useSelector((store) => store.user);
  const streaks = useSelector((store) => store.streaks.streaks);

  const dispatch = useDispatch();
  const history = useHistory();
  const date = moment();

  const currentDate = date.format('YYYY-MM-DD');
  const previousDate = date.subtract(1, 'd').format('YYYY-MM-DD');

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

  const checkStreaks = () => {
    const previousReflection = streaks.previous_reflection ? streaks.previous_reflection.substring(0, 10) : null;
    if (previousReflection === currentDate) {
      return;
    } else if (previousReflection === previousDate) {
      return;
    } else {
      dispatch({
        type: 'RESET_STREAK',
        payload: {
          id: user.id,
        }
      })
    }
  };

  const fillMorningForm = () => {
    setMorningAnswers({
      user_id: user.id,
      date: currentDate,
      looking_forward: `Getting to finally present my solo project`,
      greatest_challenge: `Not messing up too much during my presentation..`,
      three_tasks: `Present my solo project, learn about our client projects, and do my laundry`,
      attention_support: `My classmates, this is probably one of the most stressful parts of this course for all of us`,
      physical_rating: 4,
      physical_comment: `I need to make sure to do my physical therapy tonight`,
      mental_rating: 3,
      mental_comment: `Once the presentations are over I'll be less stressed`,
      emotional_rating: 3,
      emotional_comment: `I'm a bit tired, so my emotional capacity may be somewhat lower than usual`,
      love_in_life_rating: 4,
      love_in_life_comment: `I'll show support for my classmates' presentations`,
    });
  };

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
      type: 'CREATE_MORNING_REFLECTION',
      payload: morningAnswers
    })
    dispatch({
      type: 'SET_MORNING_REFLECTION',
      payload: morningAnswers
    })
    checkStreaks();
    history.push('/home');
  } // submits all answers to the store, and returns the user to the homepage

  return (
    <form
    className="text-center form"
    onSubmit={handleSubmit}>
      <h2
      className="top-buffer text-success"
      onClick={fillMorningForm}
      >Morning Reflection</h2>

      {/* looking_forward Input */}
      <div className="form-outline top-buffer">
      <textarea
      required
      value={morningAnswers.looking_forward}
      onChange={handleChange}
      rows="4"
      id="looking-forward"
      name="looking_forward"
      className="form-control border" />
      <label
      className="form-label text-muted"
      htmlFor="looking-forward"
      >What am I looking forward to the most today?</label>
      {/* comment input for looking forward prompt */}
    </div>

      <div className="form-outline top-buffer">
        <textarea
        required
        value={morningAnswers.greatest_challenge}
        onChange={handleChange}
        rows="4"
        id="greatest-challenge"
        name="greatest_challenge"
        className="form-control border" />
        <label
        className="form-label text-muted"
        htmlFor="greatest-challenge"
        >What will be my greatest challenge today?</label>
        {/* comment input for greatest challenge prompt */}
      </div>

      <div className="form-outline top-buffer">
        <textarea
        required
        value={morningAnswers.three_tasks}
        onChange={handleChange}
        rows="4"
        id="three-tasks"
        name="three_tasks"
        className="form-control border" />
        <label
        className="form-label text-muted"
        htmlFor="three-tasks"
        >What 3 tasks do I need to get done today?</label>
        {/* comment input for three tasks prompt */}
      </div>

      <div className="form-outline top-buffer">
        <textarea
        required
        value={morningAnswers.attention_support}
        onChange={handleChange}
        rows="4"
        id="attention-support"
        name="attention_support"
        className="form-control border" />
        <label
        className="form-label text-muted"
        htmlFor="attention-support"
        >Who needs my attention/support most today?</label>
        {/* comment input for attention/support prompt */}
      </div>

      <div className="form-outline">
          <p className="top-buffer">How would I rate my physical health today?</p>
          <div className="btn-group" required>
            <input
            type="radio"
            required
            value={1}
            onChange={handleClick}
            className="btn-check"
            id="physical-1"
            name="physical_rating"
            />
            <label className="btn btn-success" htmlFor="physical-1">1</label>

            <input
            type="radio"
            required
            value={2}
            onChange={handleClick}
            className="btn-check"
            id="physical-2"
            name="physical_rating"
            />
            <label className="btn btn-success" htmlFor="physical-2">2</label>

            <input
            type="radio"
            required
            value={3}
            onChange={handleClick}
            className="btn-check"
            id="physical-3"
            name="physical_rating"
            />
            <label className="btn btn-success" htmlFor="physical-3">3</label>

            <input
            type="radio"
            required
            value={4}
            onChange={handleClick}
            className="btn-check"
            id="physical-4"
            name="physical_rating"
            />
            <label className="btn btn-success" htmlFor="physical-4">4</label>

            <input
            type="radio"
            required
            value={5}
            onChange={handleClick}
            className="btn-check"
            id="physical-5"
            name="physical_rating"
            />
            <label className="btn btn-success" htmlFor="physical-5">5</label>
          </div>
          {/* Radio button group for physical health rating */}
        </div>
        <div className="form-outline top-buffer">
        <textarea
        value={morningAnswers.physical_comment}
        onChange={handleChange}
        rows="4"
        id="physical-comment"
        name="physical_comment"
        className="form-control border" />
        <label
        className="form-label text-muted"
        htmlFor="physical-comment"
        >If not a 5, what can I do to improve it today?</label>
        {/* comment input for physical health rating */}
        </div>

        <div className="form-outline">
        <p className="top-buffer">How would I rate my mental health today?</p>
        <div className="btn-group">
          <input
          type="radio"
          required
          value={1}
          onChange={handleClick}
          className="btn-check"
          id="mental-1"
          name="mental_rating"
          />
          <label className="btn btn-success" htmlFor="mental-1">1</label>

          <input
          type="radio"
          required
          value={2}
            onChange={handleClick}
          className="btn-check"
          id="mental-2"
          name="mental_rating"
          />
          <label className="btn btn-success" htmlFor="mental-2">2</label>

          <input
          type="radio"
          required
          value={3}
          onChange={handleClick}
          className="btn-check"
          id="mental-3"
          name="mental_rating"
          />
          <label className="btn btn-success" htmlFor="mental-3">3</label>

          <input
          type="radio"
          required
          value={4}
          onChange={handleClick}
          className="btn-check"
          id="mental-4"
          name="mental_rating"
          />
          <label className="btn btn-success" htmlFor="mental-4">4</label>

          <input
          type="radio"
          required
          value={5}
          onChange={handleClick}
          className="btn-check"
          id="mental-5"
          name="mental_rating"
          />
          <label className="btn btn-success" htmlFor="mental-5">5</label>
        </div>
        {/* Radio button group for mental health rating */}
      </div>
      <div className="form-outline top-buffer">
      <textarea
      value={morningAnswers.mental_comment}
      onChange={handleChange}
      rows="4"
      id="mental-comment"
      name="mental_comment"
      className="form-control border" />
      <label
      className="form-label text-muted"
      htmlFor="mental-comment">If not a 5, what can I do to improve it today?</label>
      {/* comment input for mental health rating */}
      </div>

      <div className="form-outline">
        <p className="top-buffer">How would I rate my emotional health today?</p>
        <div className="btn-group">
          <input
          type="radio"
          required
          value={1}
          onChange={handleClick}
          className="btn-check"
          id="emotional-1"
          name="emotional_rating"
          />
          <label className="btn btn-success" htmlFor="emotional-1">1</label>

          <input
          type="radio"
          required
          value={2}
          onChange={handleClick}
          className="btn-check"
          id="emotional-2"
          name="emotional_rating"
          />
          <label className="btn btn-success" htmlFor="emotional-2">2</label>

          <input
          type="radio"
          required
          value={3}
          onChange={handleClick}
          className="btn-check"
          id="emotional-3"
          name="emotional_rating"
          />
          <label className="btn btn-success" htmlFor="emotional-3">3</label>

          <input
          type="radio"
          required
          value={4}
          onChange={handleClick}
          className="btn-check"
          id="emotional-4"
          name="emotional_rating"
          />
          <label className="btn btn-success" htmlFor="emotional-4">4</label>

          <input
          type="radio"
          required
          value={5}
          onChange={handleClick}
          className="btn-check"
          id="emotional-5"
          name="emotional_rating"
          />
          <label className="btn btn-success" htmlFor="emotional-5">5</label>
        </div>
        {/* Radio button group for emotional health rating */}
      </div>
      <div className="form-outline top-buffer">
      <textarea
      value={morningAnswers.emotional_comment}
      onChange={handleChange}
      rows="4"
      id="emotional-comment"
      name="emotional_comment"
      className="form-control border" />
      <label
      className="form-label text-muted"
      htmlFor="emotional-comment">If not a 5, what can I do to improve it today?</label>
      {/* comment input for emotional health rating */}
      </div>

      <div className="form-outline">
        <p className="top-buffer">How would I rate the amount of love in my life today?</p>
        <div className="btn-group">
          <input
          type="radio"
          required
          value={1}
          onClick={handleClick}
          className="btn-check"
          id="love-in-life-1"
          name="love_in_life_rating"
          />
          <label className="btn btn-success" htmlFor="love-in-life-1">1</label>

          <input
          type="radio"
          required
          value={2}
          onClick={handleClick}
          className="btn-check"
          id="love-in-life-2"
          name="love_in_life_rating"
          />
          <label className="btn btn-success" htmlFor="love-in-life-2">2</label>

          <input
          type="radio"
          required
          value={3}
          onChange={handleClick}
          className="btn-check"
          id="love-in-life-3"
          name="love_in_life_rating"
          />
          <label className="btn btn-success" htmlFor="love-in-life-3">3</label>

          <input
          type="radio"
          required
          value={4}
          onChange={handleClick}
          className="btn-check"
          id="love-in-life-4"
          name="love_in_life_rating"
          />
          <label className="btn btn-success" htmlFor="love-in-life-4">4</label>

          <input
          type="radio"
          required
          value={5}
          onChange={handleClick}
          className="btn-check"
          id="love-in-life-5"
          name="love_in_life_rating"
          />
          <label className="btn btn-success" htmlFor="love-in-life-5">5</label>
        </div>
        {/* Radio button group for love in life rating */}
      </div>
      <div className="form-outline top-buffer">
      <textarea
        value={morningAnswers.love_in_life_comment}
        onChange={handleChange}
        rows="4"
        id="love-in-life-comment"
        name="love_in_life_comment"
        className="form-control border" />
        <label
        className="form-label text-muted"
        htmlFor="love-in-life-comment">If not a 5, what can I do to improve it today?</label>
        {/* comment input for love in life rating */}
      </div>

      <button
      type="submit"
      className="btn btn-rounded btn-success mdb-3 top-buffer"
      >Submit Reflection</button> 
      {/* Handles submit of entire form */}
    </form>
  )
};

export default MorningReflectionPage;