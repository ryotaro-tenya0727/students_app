import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Registration, Login } from './../templates/Templates';

const Home = ({ loggedInStatus, handleLogin, handleLogout }) => {
  const navigate = useNavigate();
  const handleSuccessfulAuthentication = (data) => {
    handleLogin(data);
    navigate('/dashboard');
  };

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3000/api/v1/logout', { withCredentials: true })
      .then((response) => {
        // console.log(response);
        handleLogout();
      })
      .catch((error) => console.log('ログアウトエラー', error));
  };
  return (
    <div>
      <h2>ログイン状態: {loggedInStatus}</h2>
      <Registration
        handleSuccessfulAuthentication={handleSuccessfulAuthentication}
      />
      <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
      <button onClick={handleLogoutClick}>ログアウト</button>
    </div>
  );
};

export default Home;
