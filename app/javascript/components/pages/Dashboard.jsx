import React from 'react';

const Dashboard = ({ loggedInStatus }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>ログイン状態: {loggedInStatus}</h2>
    </div>
  );
};

export default Dashboard;
