import React, { useState } from 'react';

import * as S from './styled';

import CharacterImage from '../CharacterImage';

import Button from '../Button';

const CharacterList = ({ characters, listLength, title }) => {
  const [characterListIsFull, setCharacterListIsFull] = useState(false);

  const filteredCharacters = characters.filter(char => char.id);

  const visibleEpisodes = characterListIsFull
    ? filteredCharacters
    : filteredCharacters.slice(0, listLength);

  const handleClick = () => {
    setCharacterListIsFull(prev => !prev);
  };

  return (
    <S.CharacterListContainer>
      <S.CharactersTitle>{`${title}: `}</S.CharactersTitle>
      <S.CharacterListStyled>
        {visibleEpisodes.map(({ name, id, status, image }) => {
          return (
            <S.CharacterListItem key={id}>
              <S.LinkStyled to={`/characters/${id}`}>
                <S.ImageContainer>
                  <CharacterImage src={image} alt={name} height="40px" />
                </S.ImageContainer>
                <S.CharacterName>{name}</S.CharacterName>
                <span>{status}</span>
              </S.LinkStyled>
            </S.CharacterListItem>
          );
        })}
      </S.CharacterListStyled>
      {filteredCharacters.length > listLength && (
        <S.ButtonContainer>
          <Button
            color={!characterListIsFull ? 'primary' : 'secondary'}
            fullWidth
            type="button"
            onClick={handleClick}>
            {characterListIsFull ? 'Show less' : 'Show more'}
          </Button>
        </S.ButtonContainer>
      )}
    </S.CharacterListContainer>
  );
};

export default CharacterList;
