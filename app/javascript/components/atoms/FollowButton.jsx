import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const FollowButton = ({ id, changeFollow }) => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    changeFollow(true);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('hidden', { value: 'data' })} type='hidden' />
      <input type='submit' value={`${id}をフォロー`} />
    </form>
  );
};

export default FollowButton;
