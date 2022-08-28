import React from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';

import { LoadingStatus, LoginStatus, UserStatus } from './../store/LoginState';

const Home = () => {
  const [isLogin, setIsLogin] = useRecoilState(LoginStatus);
  const IsLoading = useRecoilValue(LoadingStatus);
  if (IsLoading) {
    return <>判定</>;
  }
  if (isLogin) {
    return <>ログイン中</>;
  }
  return (
    <>
      <Link to='/login'>ログイン画面へ</Link>
      <br />
      <Link to='/registration'>新規登録画面へ</Link>
    </>
  );
};

export default Home;
