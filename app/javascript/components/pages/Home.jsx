import React, { useState } from 'react';
import axios from 'axios';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { Registration, Login } from './../templates/Templates';
import { LoadingStatus, LoginStatus, UserStatus } from './../store/LoginState';

import home from './../../css/pages/home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useRecoilState(LoadingStatus);
  const [isLogin, setIsLogin] = useRecoilState(LoginStatus);
  const setUserInfo = useSetRecoilState(UserStatus);
  const sleep = (waitTime) =>
    new Promise((resolve) => setTimeout(resolve, waitTime));
  const handleLogout = () => {
    setIsLogin(false);
    setUserInfo({});
  };

  const handleLogoutClick = async () => {
    setIsLoading(true);
    await axios
      .delete('http://localhost:3000/api/v1/logout', { withCredentials: true })
      .then((response) => {
        // console.log(response);
        handleLogout();
      })
      .catch((error) => console.log('ログアウトエラー', error));
    setIsLoading(false);
  };
  return (
    <>
      <h2>
        ログイン状態:
        {isLoading ? <>ローディング</> : isLogin ? 'ログイン中' : '未ログイン'}
        <button onClick={handleLogoutClick}>ログアウト</button>
      </h2>
      <div className={home.register_login_wrapper}>
        <Registration />
        <Login />
      </div>
    </>
  );
};

export default Home;
