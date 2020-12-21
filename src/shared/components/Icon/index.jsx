import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './styled';

const fontIconCodes = {
  [`angle-left`]: '\u2770',
  [`angle-right`]: '\u2771',
  [`clock`]: '\u1F570',
  [`star`]: '\u2B50',
  [`trigram`]: '\u2630',
};

const Icon = ({ type, svg, ...props }) => {
  return <StyledIcon code={fontIconCodes[type]} {...props} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(fontIconCodes)).isRequired,
  svg: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  className: undefined,
  svg: undefined,
  size: 16,
};

export default Icon;
