import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Registration, Login } from './../templates/Templates';

import home from './../../css/pages/home.module.css';

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
    <>
      <h2>
        ログイン状態: {loggedInStatus}
        <button onClick={handleLogoutClick}>ログアウト</button>
      </h2>
      <div className={home.register_login_wrapper}>
        <Registration
          handleSuccessfulAuthentication={handleSuccessfulAuthentication}
        />
        <Login
          handleSuccessfulAuthentication={handleSuccessfulAuthentication}
        />
      </div>
    </>
  );
};

export default Home;
