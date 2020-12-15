import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Main } from 'shared/components';

import { Characters, CharacterProfile, Episodes, EpisodeProfile, Locations } from 'pages';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/:id" component={CharacterProfile} />
          <Route exact path="/episodes" component={Episodes} />
          <Route path="/episodes/:id/:episodeNumber" component={EpisodeProfile} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </Main>
    </Router>
  );
};

export default Routes;
