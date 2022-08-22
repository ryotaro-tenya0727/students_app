import React from 'react';

const UnFollowButton = ({ id, changeFollow }) => {
  const unFollow = () => {
    changeFollow(false);
  };
  return <button onClick={unFollow}>{id}をアンフォロー</button>;
};

export default UnFollowButton;
