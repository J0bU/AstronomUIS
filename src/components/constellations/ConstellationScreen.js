import React from 'react';
import { SpaceList } from '../space/SpaceList';

export const ConstellationScreen = () => {
  return (
    <div>
      <h1>Constellation Screen!</h1>
      <hr />
      <SpaceList element_type={'Constellation'} />
    </div>
  );
};
