import React from 'react';
import PropTypes from 'prop-types';

import CharacterImage from '../CharacterImage';

import * as S from './styled';

const CharacterCard = ({ id, name, image }) => {
  return (
    <S.Block>
      <S.CharacterLink to={`characters/${id}`}>
        <S.CardContainer>
          <CharacterImage src={image} alt={name} />
          <S.Info>{name}</S.Info>
        </S.CardContainer>
      </S.CharacterLink>
    </S.Block>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;
