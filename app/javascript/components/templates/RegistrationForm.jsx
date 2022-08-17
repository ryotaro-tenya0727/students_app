import React, { useState } from 'react';
import axios from './../axios/axios';
import { useForm, useFieldArray } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { LoadingStatus } from './../store/LoginState';

import { useLogin } from '../hooks/useLogin';

const RegistrationForm = () => {
  const clientId = gon.REACT_APP_CLIENT_ID;
  console.log(clientId);
  const { handleSuccessfulAuthentication } = useLogin();
  const setIsLoading = useSetRecoilState(LoadingStatus);
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      user: { technology_ids: [], links: [{ url: '' }] },
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, //
      name: 'user.links',
    }
  );

  const handleAppend = (value) => {
    append(value);
  };

  const handleRemove = (index) => {
    remove(index);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    await axios
      .post('http://localhost:3000/api/v1/signup', data)
      .then((response) => {
        if (response.data.status === 'created') {
          handleSuccessfulAuthentication(response.data);
        }
        if (response.data.status === 500) {
          console.log('missing');
        }
      })
      .catch((error) => {
        console.log('registration error');
      });
    setIsLoading(false);
  };

  return (
    <div>
      <p>新規登録</p>
      <a
        href={`https://github.com/login/oauth/authorize?scope=read:user&client_id=${clientId}`}
      >
        Githubの内容を取得
      </a>
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
        <p></p>
        Ruby
        <input {...register('user.technology_ids')} type='checkbox' value='1' />
        javascript
        <input {...register('user.technology_ids')} type='checkbox' value='2' />
        Ruby on Rails
        <input {...register('user.technology_ids')} type='checkbox' value='3' />
        React
        <input {...register('user.technology_ids')} type='checkbox' value='4' />
        AWS
        <input {...register('user.technology_ids')} type='checkbox' value='5' />
        GCP
        <input {...register('user.technology_ids')} type='checkbox' value='6' />
        <p>ブログ・SNS・ポートフォリオのリンク</p>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type='url'
              key={field.id}
              {...register(`user.links[${index}].url`)}
            />
            <button type='button' onClick={() => handleRemove(index)}>
              削除
            </button>
          </div>
        ))}
        <button type='button' onClick={() => handleAppend({ url: '' })}>
          リンクを追加
        </button>
        <p></p>
        <input type='submit' value='この内容で登録' />
      </form>
    </div>
  );
};
export default RegistrationForm;
