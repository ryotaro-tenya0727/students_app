import axios from './../axios/axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { UserStatus } from './../store/LoginState';

const TechnologyBoard = () => {
  let { technology_id: technologyId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState({ data: [] });
  const [title, setTitle] = useState();
  const { register, handleSubmit } = useForm({});
  const userInfo = useRecoilValue(UserStatus);
  const onSubmit = (data) => {
    axios
      .post(
        `${window.location.origin}/api/v1/technologies/${technologyId}/comments`,
        data
      )
      .then((response) => {
        setComments(response.data.comments);
        setTitle(response.data.technology_name);
      })
      .catch((error) => {
        console.log('comment error');
      });
  };
  const fetchComments = async () =>
    await axios
      .get(
        `${window.location.origin}/api/v1/technologies/${technologyId}/comments`
      )
      .then((response) => {
        setComments(response.data.comments);
        setTitle(response.data.technology_name);
      })
      .catch((error) => {
        console.log('loading error');
      });
  useEffect(() => {
    fetchComments();
    setIsLoading(false);
  }, []);

  if (isLoading) return <>ローディング</>;
  return (
    <>
      <h1>{title}</h1>
      {comments.data.map((comment, index) => (
        <li key={index}>
          {comment.attributes.body} {comment.attributes.comment_user}
        </li>
      ))}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('comments.body')} />
        <input type='submit' value='送信' />
      </form>
    </>
  );
};

export default TechnologyBoard;
