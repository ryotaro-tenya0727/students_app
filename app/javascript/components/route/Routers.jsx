import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home, Dashboard } from './../pages/Pages';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
