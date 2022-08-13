import React from 'react';
import axios from 'axios';

import { Registration, Login } from './../templates/Templates';
import { LoginStatus, UserStatus } from './../store/LoginState';

import home from './../../css/pages/home.module.css';

const Home = () => {
  const [isLogin, setIsLogin] = useSetRecoilState(LoginStatus);
  const setUserInfo = useSetRecoilState(UserStatus);

  const handleLogout = () => {
    setIsLogin(false);
    setUserInfo({});
  };

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3000/api/v1/logout', { withCredentials: true })
      .then((response) => {
        // console.log(response);
        handleLogout();
      })
      .catch((error) => console.log('ログアウトエラー', error));
  };
  return (
    <>
      <h2>
        ログイン状態: {isLogin}
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
