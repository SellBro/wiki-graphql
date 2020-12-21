import styled from 'styled-components';

import { color } from 'shared/utils/styles';

export const Container = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
  background-color: ${color.grayTransparent};
`;
