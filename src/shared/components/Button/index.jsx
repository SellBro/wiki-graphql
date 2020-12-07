import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import { StyledButton } from './styled';

const Button = ({ children, icon, ...props }) => {
  return (
    <StyledButton {...props}>
      {icon && <Icon type={icon} size={40} />}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  children: undefined,
  icon: undefined,
};

export default Button;
