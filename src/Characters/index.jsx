import React from 'react';

import { CharacterCard } from 'shared/components';

import * as S from './styled';

const data = [
  { image: 'https://picsum.photos/200/300', id: '1', name: 'Rick' },
  { image: 'https://picsum.photos/200/300', id: '2', name: 'Chaba' },
  { image: 'https://picsum.photos/200/300', id: '3', name: 'Denis' },
  { image: 'https://picsum.photos/200/300', id: '4', name: 'Morty' },
  { image: 'https://picsum.photos/200/300', id: '5', name: 'Asarann' },
];

const Characters = () => {
  return (
    <S.CharactersList>
      {data.map(character => (
        <CharacterCard {...character} />
      ))}
    </S.CharactersList>
  );
};

export default Characters;
