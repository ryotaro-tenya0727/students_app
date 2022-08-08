import React from 'react';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

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
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        console.log('ログイン状況', response);
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
