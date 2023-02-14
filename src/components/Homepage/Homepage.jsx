import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const morningReflectionClickHandler = (event) => {
    event.preventDefault();
    history.push('/morning-reflection');
  }

  const eveningReflectionClickHandler = (event) => {
    event.preventDefault();
    history.push('/evening-reflection');
  }

  return (
    <>
      <h2 >Welcome, {user.name}!</h2>
      <div className="d-grid gap-2">
        <button className="btn btn-primary"
        type="button"
        onClick={event => morningReflectionClickHandler(event)}>
        Morning Reflection</button>
        <button className="btn btn-primary"
        type="button"
        onClick={event => eveningReflectionClickHandler(event)}>
        Evening Reflection</button>
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
