import React from 'react';
import PropTypes from 'prop-types';

import errorImage from './assets/error.gif';

import { ErrorContainer, ErrorText, Img } from './styled';

const ErrorMessage = ({ text }) => {
  return (
    <ErrorContainer>
      <Img src={errorImage} alt="error" />
      <ErrorText>{text}</ErrorText>
    </ErrorContainer>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorMessage;
