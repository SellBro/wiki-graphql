import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, device } from 'shared/utils/styles';

export const LocationsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto 20px 0;
  padding: 0 17.5px;

  @media ${device.mobileS} {
    padding: 0 10px;
  }

  @media ${device.laptop} {
    margin: 15px auto;
  }
`;

export const LocationsListStyled = styled.ul`
  padding: 20px 0 5px 0;
  margin: 0;
  ${font.size(20)};

  .react-loading-skeleton {
    height: 82px;
    margin-bottom: 15px;
    border-radius: 8px;
    line-height: inherit;
  }
`;

export const LocationsListItem = styled.li`
  position: relative;
  padding: 30px 20px;
  margin-bottom: 15px;
  list-style: none;
  border: 1px solid ${color.grayTransparent};
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border-color: ${color.orange};
  }
`;

export const LocationName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.5;

  ${LocationsListItem}:hover & {
    color: ${color.orange};
  }
`;

export const LocationType = styled.div`
  margin-left: 10px;
  text-transform: capitalize;
  text-align: right;
  ${font.size(16)};
  color: ${color.orange};
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.textPrimary};
  text-decoration: none;

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

export const ButtonContainer = styled.div`
  margin-top: 15px;

  @media ${device.mobileS} {
    margin-top: 0;
  }
`;
