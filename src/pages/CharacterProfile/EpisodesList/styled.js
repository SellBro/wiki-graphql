import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, device } from 'shared/utils/styles';

export const EpisodeListContainer = styled.div`
  margin: 20px 0 30px 0;

  @media ${device.laptop} {
    margin-top: 50px;
  }
`;

export const EpisodesTitle = styled.h2`
  margin: 0 0 15px 0;
  font-weight: normal;
  text-transform: capitalize;
  ${font.size(24)};
  color: ${color.orange};
`;

export const EpisodeListStyled = styled.ul`
  padding: 0;
  margin: 0;
  ${font.size(14)};
`;

export const EpisodeListItem = styled.li`
  position: relative;
  padding: 15px 10px;
  list-style: none;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border-color: ${color.selectionOrange};

    & span:first-of-type {
      color: ${color.orange};
    }
  }

  span:last-of-type {
    ${font.size(14)};
    color: ${color.orange};
  }
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
`;
