import React from 'react';

import CharacterImage from '../CharacterImage';

import * as S from './styled';

const CharacterCard = ({ id, name, image }) => {
  const shortened = name;

  return (
    <S.Block>
      <S.CharacterLink to={`characters/${id}`}>
        <S.CardContainer>
          <CharacterImage src={image} alt={name} />
          <S.Info>{shortened}</S.Info>
        </S.CardContainer>
      </S.CharacterLink>
    </S.Block>
  );
};

export default CharacterCard;
