import React from 'react';
import { Link } from 'react-router-dom';

const TechnologyCard = ({ id, name, kind, genre }) => {
  return (
    <div>
      {name}
      {kind}
      {genre}
      <Link to={`/technologies/${id}/board`}>{name}の部屋へ</Link>
    </div>
  );
};

export default TechnologyCard;
