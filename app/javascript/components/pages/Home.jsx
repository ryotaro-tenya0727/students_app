import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Registration, Login } from './../templates/Templates';

const Home = ({ loggedInStatus, handleLogin }) => {
  const navigate = useNavigate();
  const handleSuccessfulAuthentication = (data) => {
    handleLogin(data);
    navigate('/dashboard');
  };
  return (
    <div>
      <h2>ログイン状態: {loggedInStatus}</h2>
      <Registration
        handleSuccessfulAuthentication={handleSuccessfulAuthentication}
      />
      <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </div>
  );
};

export default Home;
