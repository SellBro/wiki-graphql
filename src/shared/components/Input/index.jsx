import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styled';

const Input = ({ onChange, ...props }) => {
  const handleChange = event => {
    onChange(event.target.value, event);
  };

  return <StyledInput {...props} onChange={handleChange} />;
};

Input.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: undefined,
  value: undefined,
  size: 'regular',
  fullWidth: true,
  onChange: () => {},
};

export default Input;
