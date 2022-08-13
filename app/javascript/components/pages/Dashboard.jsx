import React from 'react';
import { useRecoilValue } from 'recoil';
import { LoginStatus } from './../store/LoginState';
const Dashboard = () => {
  const isLogin = useRecoilValue(LoginStatus);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>ログイン状態:{isLogin ? 'ログイン中' : '未ログイン'} </h2>
    </div>
  );
};

export default Dashboard;
