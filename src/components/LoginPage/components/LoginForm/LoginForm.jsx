import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  const goToRegister = () => {
    history.push('/register');
  };
  
  return (
    <>
    <div className="top-buffer"></div>
    {/* Pills navs */}
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a
      className="nav-link active"
      id="tab-login"
      data-mdb-toggle="pill"
      href="#login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      >Login</a>
  </li>
  <li className="nav-item" role="presentation">
    <a
      className="nav-link"
      id="tab-login"
      role="tab"
      onClick={goToRegister}
      >Register</a>
  </li>
</ul>

{/* Pills content */}
<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form className="text-center" onSubmit={login}>

    {errors.loginMessage && (
      <h3 className="alert" role="alert">
      {errors.loginMessage}
      </h3>
    )}

      {/* Username input */}
      <div className="form-outline mb-4">
        <input
        type="text"
        id="loginName"
        className="form-control"
        required
        value={username}
        onChange={(event) => setUsername(event.target.value)} />
        <label className="form-label" htmlFor="loginName">Username</label>
      </div>

      {/* Password input */}
      <div className="form-outline mb-4">
        <input
        type="password"
        id="loginPassword"
        className="form-control"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)} />
        <label className="form-label" htmlFor="loginPassword">Password</label>
      </div>

      {/* 2 column grid layout */}
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
          {/* Simple link */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn btn-primary text-center mb-4">Log in</button>

    </form>
  </div>
</div>
</>
);
}

export default LoginForm;
