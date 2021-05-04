import React from 'react';
import { SpaceList } from '../space/SpaceList';

export const ZodiacScreen = () => {
  return (
    <div>
      <h1>Zodiac Screen!</h1>
      <hr />

      <SpaceList element_type={'Zodiac Constellation'} />
    </div>
  );
};
