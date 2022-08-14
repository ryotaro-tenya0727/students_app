import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { useLogin } from '../hooks/useLogin';

const RegistrationForm = () => {
  const { handleSuccessfulAuthentication } = useLogin();

  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    // await axios
    //   .post('http://localhost:3000/api/v1/signup', {
    //     user: {
    //       email: email,
    //       name: name,
    //       password: password,
    //       password_confirmation: passwordConfirmation,
    //     },
    //   })
    //   .then((response) => {
    //     if (response.data.status === 'created') {
    //       handleSuccessfulAuthentication(response.data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('registration error', error);
    //   });
  };

  return (
    <div>
      <p>新規登録</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('user.email')} />
        <input {...register('user.name')} />
        <input {...register('user.password')} />
        <input {...register('user.password_confirmation')} />
        <input {...register('technologies')} type='checkbox' value='1' />
        <input {...register('technologies')} type='checkbox' value='2' />
        <input {...register('technologies')} type='checkbox' value='3' />
        <input {...register('technologies')} type='checkbox' value='4' />
        <input {...register('technologies')} type='checkbox' value='5' />
        <input {...register('technologies')} type='checkbox' value='6' />
        <input type='submit' value='この内容で登録' />
      </form>
    </div>
  );
};
export default RegistrationForm;
