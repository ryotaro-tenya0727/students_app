import React from 'react';
import { useQuery } from '@tanstack/react-query';

import axios from './../axios/axios';
import { TechnologyCard } from './../organisms/Organisms';

const TechnologiesList = () => {
  const {
    isLoading,
    error,
    data: technologies,
    isSuccess,
  } = useQuery(
    ['technologies'],
    () =>
      axios
        .get(`${window.location.origin}/api/v1/technologies`)
        .catch((error) => {
          console.error(error.response.data);
        }),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );
  if (isLoading) return 'Loading...';
  return (
    <>
      {technologies.data.data.map((technology, index) => (
        <TechnologyCard
          key={index}
          name={technology.attributes.name}
          kind={technology.attributes.kind}
          genre={technology.attributes.genre}
        />
      ))}
    </>
  );
};

export default TechnologiesList;
