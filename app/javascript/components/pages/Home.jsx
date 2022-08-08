import React from 'react';

import { Registration } from './../templates/Templates';

const Home = ({ loggedInStatus }) => {
  return (
    <div>
      <h2>ログイン状態: {loggedInStatus}</h2>
      <Registration />
    </div>
  );
};

export default Home;
