import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import { Home, Dashboard } from './../pages/Pages';

export const Routers = () => {
  const [loggedInStatus, setLoggedInStatus] = useState('未ログイン');
  const [user, setUser] = useState({});
  const handleLogin = (data) => {
    setLoggedInStatus('ログインなう');
    setUser(data.user);
  };

  useEffect(() => {
    checkLoginStatus();
  });

  // 追加
  const checkLoginStatus = () => {
    axios
      .get('http://localhost:3000/api/v1/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === '未ログイン') {
          setLoggedInStatus('ログインなう');
          setUser(response.data.user);
        } else if (
          !response.data.logged_in &&
          loggedInStatus === 'ログインなう'
        ) {
          setLoggedInStatus('未ログイン');
          setUser({});
        }
      })
      .catch((error) => {
        console.log('ログインエラー', error);
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} />
          }
        />
        <Route
          path='/dashboard'
          element={<Dashboard loggedInStatus={loggedInStatus} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
