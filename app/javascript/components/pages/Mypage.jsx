import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from './../axios/axios';
import { useRecoilValue, useRecoilState } from 'recoil';

import { LoginStatus, UserStatus } from './../store/LoginState';

const Mypage = () => {
  const isLogin = useRecoilValue(LoginStatus);
  const [userInfo, setUserInfo] = useRecoilState(UserStatus);
  if (isLogin === false) {
    return <>ログインが必要です</>;
  }
  const {
    isLoading,
    error,
    data: notifications,
    isSuccess,
  } = useQuery(
    ['notifications'],
    () =>
      axios
        .get(`${window.location.origin}/api/v1/notifications`)
        .catch((error) => {
          console.error(error.response.data);
        }),
    {
      cacheTime: 0,
      staleTime: 3000000,
      onSuccess: () => {
        setUserInfo({ ...userInfo, new_notifications_count: 0 });
      },
    }
  );
  if (isLoading) {
    return <>通知取得中</>;
  }
  console.log(notifications);
  return (
    <>
      {notifications.data.data.map((notification, index) => (
        <>
          {notification.attributes.checked ? (
            <li key={index}>
              {notification.attributes.notifier_name}に
              {notification.attributes.action}されました
            </li>
          ) : (
            <li style={{ color: 'red' }} key={index}>
              {notification.attributes.notifier_name}に
              {notification.attributes.action}されました
            </li>
          )}
        </>
      ))}
    </>
  );
};

export default Mypage;
