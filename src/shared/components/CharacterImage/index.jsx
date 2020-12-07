import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Image } from './styled';

const CharacterImage = ({ src, height, width, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      src={src}
      height={height}
      width={width}
      isLoaded={isLoaded}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
};

CharacterImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  circle: PropTypes.bool,
};

CharacterImage.defaultProps = {
  height: '100%',
  width: undefined,
  circle: undefined,
};

export default CharacterImage;
