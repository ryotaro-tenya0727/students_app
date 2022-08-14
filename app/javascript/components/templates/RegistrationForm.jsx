import React, { useState } from 'react';
import axios from 'axios';
import { useForm, useFieldArray } from 'react-hook-form';

import { useLogin } from '../hooks/useLogin';

const RegistrationForm = () => {
  const { handleSuccessfulAuthentication } = useLogin();

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      user: {},
      technologies: [],
      links: [{ name: '' }, { name: 'aaa' }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, //
      name: 'links',
    }
  );

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
        <label>メール</label>
        <input {...register('user.email')} />
        <br />
        <label>名前</label>
        <input {...register('user.name')} />
        <br />
        <label>パスワード</label>
        <input {...register('user.password')} />
        <br />
        <label>確認パスワード</label>
        <input {...register('user.password_confirmation')} />
        <br />
        <p></p>
        Ruby
        <input {...register('technologies')} type='checkbox' value='1' />
        javascript
        <input {...register('technologies')} type='checkbox' value='2' />
        Ruby on Rails
        <input {...register('technologies')} type='checkbox' value='3' />
        React
        <input {...register('technologies')} type='checkbox' value='4' />
        AWS
        <input {...register('technologies')} type='checkbox' value='5' />
        GCP
        <input {...register('technologies')} type='checkbox' value='6' />
        <p>Array</p>
        {fields.map((field, index) => (
          <div key={index}>
            <input key={field.id} {...register(`links[${index}].name`)} />
          </div>
        ))}
        <input type='submit' value='この内容で登録' />
      </form>
    </div>
  );
};
export default RegistrationForm;
