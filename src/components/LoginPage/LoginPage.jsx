import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
