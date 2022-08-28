import axios from './axios/axios';
import React, { memo } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';

import { LoadingStatus, LoginStatus, UserStatus } from './store/LoginState';

import { Mypage } from './pages/Pages';

export const DefaultLayout = memo(({ children }) => {
  const [isLoading, setIsLoading] = useRecoilState(LoadingStatus);
  const [isLogin, setIsLogin] = useRecoilState(LoginStatus);
  const [userInfo, setUserInfo] = useRecoilState(UserStatus);
  const handleLogout = () => {
    setIsLogin(false);
    setUserInfo({});
  };

  // const {
  //   isLoading: isNotificationLoading,
  //   error,
  //   data: notifications,
  //   isSuccess,
  // } = useQuery(
  //   ['notifications'],
  //   () =>
  //     axios
  //       .get(`${window.location.origin}/api/v1/notifications`)
  //       .catch((error) => {
  //         console.error(error.response.data);
  //       }),
  //   {
  //     cacheTime: Infinity,
  //     staleTime: Infinity,
  //   }
  // );

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
            {userInfo.new_notifications_count === 0 ? (
              <>通知なし</>
            ) : (
              <Link to='/mypage'>
                通知あり{userInfo.new_notifications_count}
              </Link>
            )}
          </>
        ) : (
          '未ログイン'
        )}
      </h2>
      {children}
    </>
  );
});
