import axios from 'axios';
import React, { memo } from 'react';

import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { DefaultLayout } from './../layout';

import { LoginStatus, UserStatus, LoadingStatus } from './../store/LoginState';
import {
  Home,
  Technologies,
  Login,
  Registration,
  TechnologyBoard,
  Mypage,
} from './../pages/Pages';

export const Routers = memo(() => {
  const setIsLoading = useSetRecoilState(LoadingStatus);
  const setIsLogin = useSetRecoilState(LoginStatus);
  const setUserInfo = useSetRecoilState(UserStatus);

  const checkLoginStatus = async () => {
    await axios
      .get('http://localhost:3000/api/v1/logged_in')
      .then((response) => {
        if (response.data.logged_in) {
          setIsLogin(true);
          setUserInfo(response.data);
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
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/technologies' element={<Technologies />} />
          <Route
            path='/technologies/:technology_id/board'
            element={<TechnologyBoard />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
});
