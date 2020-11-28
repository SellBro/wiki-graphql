import React from 'react';

import Routes from './Routes';

import GlobalStyles from './GlobalStyles';
import Normalize from './Normalize';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Normalize />
      <Routes />
    </>
  );
};

export default App;
