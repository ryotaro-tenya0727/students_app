import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const FollowButton = ({ id, changeFollow }) => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    axios
      .post(`${window.location.origin}/api/v1/user_relationships`, data)
      .then((response) => {
        changeFollow(true);
      })
      .catch((error) => {
        console.log('registration error');
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('id', { value: id })} type='hidden' />
      <input type='submit' value={`${id}をフォロー`} />
    </form>
  );
};

export default FollowButton;
