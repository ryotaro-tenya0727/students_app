import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from './../axios/axios';

const TechnologiesList = () => {
  const { isLoading, error, data, isSuccess } = useQuery(['technologies'], () =>
    axios
      .get(`${window.location.origin}/api/v1/technologies`)
      .catch((error) => {
        console.error(error.response.data);
      })
  );
  console.log(data);
  return <div>技術</div>;
};

export default TechnologiesList;
