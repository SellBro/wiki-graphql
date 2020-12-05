import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Main } from 'shared/components';

import Characters from 'Characters';
import Episodes from 'Episodes';
import Locations from 'Locations';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </Main>
    </Router>
  );
};

export default Routes;
