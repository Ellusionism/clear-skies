import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function Homepage() {
  const user = useSelector((store) => store.user);
  const morningAnswers = useSelector((store) => store.morningReflection.morningAnswers);
  const eveningAnswers = useSelector((store) => store.eveningReflection.eveningAnswers);
  const streaks = useSelector((store) => store.streaks.streaks);

  const dispatch = useDispatch();
  const history = useHistory();
  const date = moment();

  const currentDate = date.format('YYYY-MM-DD');

  async function load() {
    await dispatch({
      type: 'GET_REFLECTION_STORE',
      payload: user.id,
    });
    await dispatch({
      type: 'GET_STREAKS',
      payload: user.id,
    });
    inputDisabler();
  }

  useEffect(() => {
    load();
  }, []);

  const inputDisabler = () => {
    const previousReflection = streaks.previous_reflection && streaks.previous_reflection.substring(0, 10);
    const morningDate = morningAnswers.date && morningAnswers.date.substring(0, 10);
    const eveningDate = eveningAnswers.date && eveningAnswers.date.substring(0, 10);
    const morningButton = document.getElementById('morningButton');
    const eveningButton = document.getElementById('eveningButton');
    if (previousReflection === currentDate) {
      morningButton.classList.add('disabled');
      eveningButton.classList.add('disabled');
    } else if ((morningDate === currentDate) && (eveningDate != currentDate)) {
      morningButton.classList.add('disabled');
      eveningButton.classList.remove('disabled');
    } else if ((morningDate === currentDate) && (eveningDate === currentDate)) {
      morningButton.classList.add('disabled');
      eveningButton.classList.add('disabled');
    } else {
      morningButton.classList.remove('disabled');
      eveningButton.classList.remove('disabled');
    };
  };

  const morningReflectionClickHandler = (event) => {
    event.preventDefault();
    history.push('/morning-reflection');
  }

  const eveningReflectionClickHandler = (event) => {
    event.preventDefault();
    history.push('/evening-reflection');
  }

  return (
    <div className="form text-center">
      <img
      src="/images/clear_skies_logo.png"
      className="img-fluid top-buffer logo"
      alt="ClearSkies logo" />
      <h2 className="top-buffer">Hey {user.first_name}!</h2>
      <p>Got a few minutes for a reflection?</p>
      <div className="d-grid gap-2">
        <button className="btn btn-rounded btn-success"
        id="morningButton"
        type="button"
        onClick={event => morningReflectionClickHandler(event)}>
        Morning Reflection</button>
        <button className="btn btn-rounded btn-success"
        id="eveningButton"
        type="button"
        onClick={event => eveningReflectionClickHandler(event)}>
        Evening Reflection</button>
      </div>
    </div>
  );
}

export default Homepage;
