import React, { useState } from 'react';
import axios from 'axios';

import { useSetRecoilState } from 'recoil';
import { LoginStatus, UserStatus } from './../store/LoginState';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const setIsLogin = useSetRecoilState(LoginStatus);
  const setUserInfo = useSetRecoilState(UserStatus);

  const handleLogin = (data) => {
    setIsLogin(true);
    setUserInfo(data.user);
  };

  const handleSuccessfulAuthentication = (data) => {
    handleLogin(data);
    navigate('/dashboard');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post('http://localhost:3000/api/v1/login', {
        user: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        if (response.data.logged_in) {
          handleSuccessfulAuthentication(response.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
      });
  };
  return (
    <div>
      <p>ログイン</p>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='メールアドレス'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='パスワード'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit'>ログインする</button>
      </form>
    </div>
  );
};

export default Login;
