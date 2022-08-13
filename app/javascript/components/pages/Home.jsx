import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { LoadingStatus, LoginStatus, UserStatus } from './../store/LoginState';

const Home = () => {
  const [isLoading, setIsLoading] = useRecoilState(LoadingStatus);
  const [isLogin, setIsLogin] = useRecoilState(LoginStatus);
  const setUserInfo = useSetRecoilState(UserStatus);
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
      <Link to='/login'>ログイン画面へ</Link>
    </>
  );
};

export default Home;
