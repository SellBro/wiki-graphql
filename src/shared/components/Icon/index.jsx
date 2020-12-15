import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './styled';

const fontIconCodes = {
  [`angle-left`]: '\u2770',
  [`angle-right`]: '\u2771',
  [`clock`]: '\u23F0',
};

const Icon = ({ type, ...props }) => {
  return <StyledIcon code={fontIconCodes[type]} {...props} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(fontIconCodes)).isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  className: undefined,
  size: 16,
};

export default Icon;
