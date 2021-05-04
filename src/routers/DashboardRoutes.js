import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConstellationScreen } from '../components/constellations/ConstellationScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { SpaceScreen } from '../components/space/SpaceScreen';
import { ZodiacScreen } from '../components/constellations/ZodiacScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-3">
        <Switch>
          <Route exact path="/constellation" component={ConstellationScreen} />
          <Route exact path="/space/:elementId" component={SpaceScreen} />
          <Route exact path="/zodiac" component={ZodiacScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/constellation" />
        </Switch>
      </div>
    </>
  );
};
