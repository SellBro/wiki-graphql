import React from 'react';
import styled from 'styled-components';

import { device } from 'shared/utils/styles';

const DesktopView = styled.div`
  display: block;

  @media ${device.mobileS} {
    display: none;
  }
`;

const DesktopOnly = ({ children }) => {
  return <DesktopView>{children}</DesktopView>;
};

export default DesktopOnly;
