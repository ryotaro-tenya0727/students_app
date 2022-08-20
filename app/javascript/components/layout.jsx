import axios from './axios/axios';
import React, { memo } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { LoadingStatus, LoginStatus, UserStatus } from './store/LoginState';

export const DefaultLayout = memo(({ children }) => {
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
      .delete('http://localhost:3000/api/v1/logout', {
        withCredentials: true,
      })
      .then((response) => {
        handleLogout();
      })
      .catch((error) => console.log('ログアウトエラー', error));
    setIsLoading(false);
  };
  return (
    <>
      <h2>
        {isLoading ? (
          <>ローディング</>
        ) : isLogin ? (
          <>
            <button onClick={handleLogoutClick}>ログアウト</button>
          </>
        ) : (
          '未ログイン'
        )}
      </h2>
      {children}
    </>
  );
});
