import React from 'react';
import { Link } from 'react-router-dom';

export const SpaceCard = ({
  id,
  brightestStar,
  cardImage,
  constellationName,
  zodiacConstellation
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={cardImage} alt={constellationName} />
      <div className="card-body">
        <h5 className="card-title">{constellationName}</h5>
        <p className="card-text"> {brightestStar} </p>
        <p className="card-text">
          <small className="text-muted">{zodiacConstellation}</small>
        </p>

        <Link to={`/space/${id}`} style={{ color: 'pink' }}>
          More...
        </Link>
      </div>
    </div>
  );
};
