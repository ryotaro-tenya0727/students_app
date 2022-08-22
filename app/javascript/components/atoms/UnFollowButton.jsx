import axios from 'axios';
import React from 'react';

const UnFollowButton = ({ id, changeFollow }) => {
  const unFollow = () => {
    axios
      .delete(`${window.location.origin}/api/v1/user_relationships/${id}`)
      .then((response) => {
        changeFollow(false);
      })
      .catch((error) => {
        console.log('registration error');
      });
  };
  return (
    <button type='button' onClick={unFollow}>
      {id}をアンフォロー
    </button>
  );
};

export default UnFollowButton;
