import React from 'react';
import PropTypes from 'prop-types';

import { cutName } from 'shared/utils/helpers';

import CharacterImage from '../CharacterImage';

import * as S from './styled';

const CharacterCard = ({ id, name, image }) => {
  const shortened = cutName(name, 22);

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

CharacterCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;
