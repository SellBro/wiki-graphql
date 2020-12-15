import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, device } from 'shared/utils/styles';

export const CharacterListContainer = styled.div`
  margin: 20px 0 30px 0;

  @media ${device.laptop} {
    margin-top: 50px;
  }
`;

export const CharactersTitle = styled.h2`
  margin: 0 0 15px 0;
  text-transform: capitalize;
  ${font.size(24)};
  color: ${color.orange};
`;

export const CharacterListStyled = styled.ul`
  padding: 0;
  margin: 0;
  font-size: ${color.textPrimary};
`;

export const CharacterListItem = styled.li`
  position: relative;
  padding: 15px 10px;
  list-style: none;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 0.2s;

  img {
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
    border-color: ${color.orange};

    img {
      border-radius: 8px;
    }
  }

  span:last-of-type {
    margin-left: auto;
    text-transform: capitalize;
    ${font.size(14)};
    color: ${color.orange};
  }
`;

export const CharacterName = styled.span`
  margin-left: 15px;
  ${CharacterListItem}:hover & {
    color: ${color.orange};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${color.textPrimary};

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

export const Message = styled.div`
  margin-top: 5rem;
  text-align: center;
  ${font.size(24)};
  color: ${color.grayTransparent};
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 40px;
  background-color: ${color.cardBackground};
  border-radius: 50%;
`;
