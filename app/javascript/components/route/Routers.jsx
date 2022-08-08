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
