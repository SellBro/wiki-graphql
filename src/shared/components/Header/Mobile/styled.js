import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font } from 'shared/utils/styles';

export const MobileHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
`;

export const BarsButton = styled.button`
  padding: 3px 0 3px 20px;
  background-color: transparent;
  border: none;
  ${font.size(24)};
  color: ${color.orange};
`;

export const AsideStyled = styled.aside`
  position: fixed;
  height: 25%;
  width: 100%;
  z-index: 2;
  padding: 0;
  overflow: hidden;
  ${font.size(20)};
  background-color: ${color.grayTransparent};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 20px;
  list-style: none;
  color: ${({ isActive }) => isActive && color.orange};

  border: '1px solid';

  & svg {
    margin-right: 20px;
    color: ${color.orange};
  }
`;

export const LinkStyled = styled(Link)`
  text-align: center;
  display: block;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: '';
  }
`;
