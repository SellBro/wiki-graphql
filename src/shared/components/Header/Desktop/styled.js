import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font } from 'shared/utils/styles';

export const Nav = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  max-width: ${({ isFull }) => (isFull ? '1260px' : '900px')};
  margin: 0px auto;
  padding: 0px 7.5px;
  transition: all 0.2s ease 0s, width 0.3s ease-out 0s, padding 0.3s ease-out 0s;
`;

export const Links = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
`;

export const ALink = styled(Link)``;

export const LinkContainer = styled.div`
  position: relative;
  padding: 20px 10px;
  ${font.size(16)};
  color: ${color.textPrimary};
  ${props => props.active && `border-bottom: 3px solid ${color.orange};`}
`;
