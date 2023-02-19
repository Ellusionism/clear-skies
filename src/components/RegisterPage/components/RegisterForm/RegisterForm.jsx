import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const errors = useSelector(store => store.errors);
  
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();
  

    if (password === confirmPassword) {
      dispatch({
        type: 'REGISTER',
        payload: {
          username: username,
          password: password,
          first_name: firstName,
          last_name: lastName,
        },
      });
    } else {
      dispatch({ type: 'REGISTRATION_INPUT_ERROR' })
    }
  }; // end registerUser

  const goToLogin = () => {
    history.push('/login')
  };
  
  return (
    <>
    {/* Pills navs */}
  <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a
      className="nav-link ripple"
      id="tab-login"
      role="tab"
      onClick={goToLogin}
      >Login</a>
  </li>
  <li className="nav-item" role="presentation">
    <a
      className="nav-link bg-success ripple text-white active"
      id="tab-register"
      data-mdb-toggle="pill"
      href="#register"
      role="tab"
      aria-controls="pills-register"
      aria-selected="true"
      >Register</a>
  </li>
</ul>

{/* Pills content */}
<div className="tab-content form">
  <img
  src="/images/clear_skies_logo.png"
  className="img-fluid top-buffer logo"
  alt="ClearSkies logo" />
  <h2 className="top-buffer text-success">Welcome to ClearSkies!</h2>
  <p>Create a free account to start on your journey of self-awareness today!</p>
  <div
  className="tab-pane fade show active"
  id="pills-register"
  role="tabpanel"
  aria-labelledby="tab-register">
    <form
    className="text-center"
    onSubmit={registerUser}>
    
    {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      {/* First name input */}
      <div className="form-outline mb-4">
        <input
        type="text"
        id="registerFirstName"
        className="form-control border"
        value={firstName}
        required
        onChange={(event) => setFirstName(event.target.value)} />
        <label
        className="form-label text-muted"
        htmlFor="registerFirstName"
        >First Name</label>
      </div>

      {/* Last name input */}
      <div className="form-outline mb-4">
        <input
        type="text"
        id="registerLastName"
        className="form-control border"
        value={lastName}
        required
        onChange={(event) => setLastName(event.target.value)} />
        <label
        className="form-label text-muted"
        htmlFor="registerLastName"
        >Last Name</label>
      </div>

      {/* Username input */}
      <div className="form-outline mb-4">
        <input
        type="text"
        id="registerUsername"
        className="form-control border"
        value={username}
        required
        onChange={(event) => setUsername(event.target.value)} />
        <label
        className="form-label text-muted"
        htmlFor="registerUsername"
        >Username</label>
      </div>

      {/* Password input */}
      <div className="form-outline mb-4">
        <input
        type="password"
        id="registerPassword"
        className="form-control border"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)} />
        <label
        className="form-label text-muted"
        htmlFor="registerPassword"
        >Password</label>
      </div>

      {/* Confirm Password input */}
      <div className="form-outline mb-4">
        <input
        type="password"
        id="registerConfirmPassword"
        className="form-control border"
        value={confirmPassword}
        required
        onChange={(event) => setConfirmPassword(event.target.value)} />
        <label
        className="form-label text-muted"
        htmlFor="registerConfirmPassword"
        >Confirm Password</label>
      </div>

      {/* Submit button */}
      <button
      type="submit"
      className="btn btn-rounded btn-success ripple mb-3"
      >Register</button>
    </form>
  </div>
</div>
</>
);
}

export default RegisterForm;
