import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './features/landing-page/views/LandingPageContainer';
import TheatersPage from './features/theaters-page/views/TheatersPageContainer';
import TimeSelectionPage from './features/time-selection/views/TimeSelectionContainer';
import SeatSelectionPage from './features/seat-selection/views/SeatSelectionContainer';

// TO-DO Use lazy loading

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/movies" component={LandingPage} />
      <Route exact path="/theaters" component={TheatersPage} />
      <Route exact path="/time-selection" component={TimeSelectionPage} />
      <Route exact path="/seat-selection" component={SeatSelectionPage} />
    </Switch>
  </Router>
);

export default Routes;