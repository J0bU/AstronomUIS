import React from 'react';
import { useFetchByType } from '../../hooks/useFetchByType';
import { SpaceCard } from './SpaceCard';

export const SpaceList = ({ element_type }) => {
  const { data: cards, loading } = useFetchByType(element_type);
  return (
    <>
      {loading && (
        <p className="animate__animated animate__flash"> Loading... </p>
      )}
      <div className="card-columns animate__animated animate__fadeIn">
        {cards.map(card => (
          <SpaceCard key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};
