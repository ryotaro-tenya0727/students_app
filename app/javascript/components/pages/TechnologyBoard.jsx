import axios from './../axios/axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const TechnologyBoard = () => {
  let { technology_id: technologyId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  const fetchComments = () =>
    axios
      .get(
        `${window.location.origin}/api/v1/technologies/${technologyId}/comments`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('loading error');
      });
  useEffect(() => {
    setIsLoading(true);
    fetchComments();
    setIsLoading(false);
  }, []);

  if (isLoading) return <>ローディング</>;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('comments.body')} />
      <input type='submit' value='送信' />
    </form>
  );
};

export default TechnologyBoard;
