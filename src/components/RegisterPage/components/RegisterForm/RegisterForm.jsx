import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
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
          name: name,
        },
      });
    } else {/* TODO error htmlFor passwords not matching */}
  }; // end registerUser

  const goToLogin = () => {
    history.push('/login')
  };
  
  return (
    <>
    <div className="top-buffer"></div>
    {/* Pills navs */}
  <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a
      className="nav-link"
      id="tab-login"
      role="tab"
      onClick={goToLogin}
      >Login</a>
  </li>
  <li className="nav-item" role="presentation">
    <a
      className="nav-link active"
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
<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form className="text-center" onSubmit={registerUser}>
    
    {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      {/* Name input */}
      <div className="form-outline mb-4">
        <input
        type="text"
        id="registerName"
        className="form-control"
        value={name}
        required
        onChange={(event) => setName(event.target.value)}
        />
        <label className="form-label" htmlFor="registerName">Name</label>
      </div>

      {/* Username input */}
      <div className="form-outline mb-4">
        <input
        type="text"
        id="registerUsername"
        className="form-control"
        value={username}
        required
        onChange={(event) => setUsername(event.target.value)} />
        <label className="form-label" htmlFor="registerUsername">Username</label>
      </div>

      {/* Password input */}
      <div className="form-outline mb-4">
        <input
        type="password"
        id="registerPassword"
        className="form-control"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)} />
        <label className="form-label" htmlFor="registerPassword">Password</label>
      </div>

      {/* Confirm Password input */}
      <div className="form-outline mb-4">
        <input
        type="password"
        id="registerConfirmPassword"
        className="form-control"
        value={confirmPassword}
        required
        onChange={(event) => setConfirmPassword(event.target.value)} />
        <label className="form-label" htmlFor="registerConfirmPassword">Confirm password</label>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn btn-primary mb-3">Register</button>
    </form>
  </div>
</div>
</>
);
}

    {/* // <form className="formPanel" onSubmit={login}>
    //   <h2>Login</h2>
    //   {errors.loginMessage && (
    //     <h3 className="alert" role="alert">
    //       {errors.loginMessage}
    //     </h3>
    //   )}
    //   <div>
    //     <label htmlFor="username">
    //       Username:
    //       <input
    //         type="text"
    //         name="username"
    //         required
    //         value={username}
    //         onChange={(event) => setUsername(event.target.value)}
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <label htmlFor="password">
    //       Password:
    //       <input
    //         type="password" 
    //         name="password"
    //         required
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <input className="btn" type="submit" name="submit" value="Log In" />
    //   </div>
    // </form> */}
  


export default RegisterForm;
