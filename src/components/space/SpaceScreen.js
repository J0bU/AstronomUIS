import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useFetchById } from '../../hooks/useFetchById';

export const SpaceScreen = ({ history }) => {
  const { elementId } = useParams();

  const { data: card } = useFetchById(elementId);

  if (!card) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.lenght <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  const {
    bestViewed,
    brightestStar,
    cardImage,
    clusterType,
    constellationName,
    largestConstellation,
    neighboringConstellations,
    zodiacConstellation
  } = card;

  return (
    <div className="card mb-3 card animate__animated animate__fadeInLeft">
      <img
        className="card-img-top img-thumbnail"
        src={cardImage}
        alt={constellationName}
      />
      <div className="card-body">
        <h5 className="card-title">{constellationName}</h5>
        <p className="card-text">
          <b>Neigboring Constellations:</b> {neighboringConstellations}
        </p>
        <p className="card-text">
          <b>Brightest Star:</b> {brightestStar}
        </p>
        <p className="card-text">
          <b>Best viewed in:</b> {bestViewed}
        </p>
        <p className="card-text">
          <b>Zodiac Constellation?:</b> {zodiacConstellation}
        </p>
        <p className="card-text">
          <b>Largest Constellation:</b> {largestConstellation}
        </p>
        <p className="card-text">
          <small className="text-muted">
            <b>Element type: </b>
            {clusterType}
          </small>
        </p>
        <button className="button" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
