import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styled';

const Input = ({ ...props }) => {
  return <StyledInput autoComplete="off" {...props} />;
};

Input.propTypes = {
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Input.defaultProps = {
  size: 'regular',
  fullWidth: true,
};

export default Input;
