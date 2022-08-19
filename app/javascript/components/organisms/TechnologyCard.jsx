import React from 'react';
import { Link } from 'react-router-dom';

const TechnologyCard = ({ name, kind, genre }) => {
  return (
    <div>
      {name}
      {kind}
      {genre}
    </div>
  );
};

export default TechnologyCard;
