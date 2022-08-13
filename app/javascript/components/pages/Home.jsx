import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to='/login'>ログイン画面へ</Link>
      <br />
      <Link to='/registration'>新規登録画面へ</Link>
    </>
  );
};

export default Home;
