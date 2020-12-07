import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, device } from 'shared/utils/styles';

export const Container = styled.div`
  max-width: 940px;
  margin: 15px auto;
  padding: 0 20px;

  @media ${device.mobileS} {
    padding: 0 10px;

    & img {
      width: 100%;
    }
  }

  @media ${device.laptop} {
    margin: 40px auto;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media ${device.tablet} {
    width: auto;
    justify-content: flex-end;
    margin-top: 0;
    margin-left: 30px;
  }

  @media ${device.laptop} {
    justify-content: flex-end;
  }
`;

export const InfoList = styled.ul`
  margin: 0;
  width: 100%;
  padding: 0;

  @media ${device.laptop} {
    min-width: 450px;
    width: auto;
  }
`;

export const InfoListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  margin-bottom: 8px;
  ${font.size(16)};
  list-style: none;
  border-bottom: 1px solid ${color.grayTransparent};

  span {
    text-transform: capitalize;

    &:first-of-type {
      margin-right: 5px;
      text-transform: uppercase;
      flex-basis: 40%;
      font-weight: 500;
      color: ${color.orange};
    }
  }

  @media ${device.mobileS} {
    padding: 5px 0;
  }

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const LinkStyled = styled(Link)`
  color: ${color.textPrimary};
  text-align: right;
  text-decoration: none;

  &:hover {
    color: ${color.orange};
  }
`;
