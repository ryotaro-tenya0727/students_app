import React from 'react';
import { useParams } from 'react-router-dom';

const TechnologyBoard = () => {
  let { technology_id } = useParams();
  return <div>ボード{technology_id}</div>;
};

export default TechnologyBoard;
