import React from 'react';
import PropTypes from 'prop-types';

import { StyledMain } from './styled';

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
