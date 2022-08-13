import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { LoginStatus, UserStatus, LoadingStatus } from './../store/LoginState';
import { Home, Dashboard } from './../pages/Pages';

export const Routers = () => {
  // const [isLoading, setIsLoading] = useRecoilState(LoadingStatus);
  const setIsLoading = useSetRecoilState(LoadingStatus);
  const setIsLogin = useSetRecoilState(LoginStatus);
  const setUserInfo = useSetRecoilState(UserStatus);
  const sleep = (waitTime) =>
    new Promise((resolve) => setTimeout(resolve, waitTime));
  const checkLoginStatus = async () => {
    // console.log(isLoading);
    await sleep(500);
    axios
      .get('http://localhost:3000/api/v1/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          setIsLogin(true);
          setUserInfo(response.data.user);
        } else if (!response.data.logged_in) {
          setIsLogin(false);
          setUserInfo({});
        }
      })
      .catch((error) => {
        console.log('ログインエラー', error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
