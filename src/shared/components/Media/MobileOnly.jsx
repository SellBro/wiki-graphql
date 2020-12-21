import React from 'react';
import styled from 'styled-components';

import { device } from 'shared/utils/styles';

const MobileView = styled.div`
  display: none;

  @media ${device.mobileS} {
    display: block;
  }
`;

const MobileOnly = ({ children }) => {
  return <MobileView>{children}</MobileView>;
};

export default MobileOnly;
