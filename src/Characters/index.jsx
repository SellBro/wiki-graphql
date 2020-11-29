import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { CharacterCard, PageSwitch } from 'shared/components';

import { GET_ALL_CHARACTERS } from 'shared/utils/queries/characters';

import * as S from './styled';

const Characters = () => {
  const page = 1;

  const { data, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page },
  });

  if (loading) return <h1>Loading</h1>;
  const characters = data.characters.results;
  return (
    <>
      <S.CharactersList>
        {characters.map((character, index) => (
          <CharacterCard key={index} {...character} />
        ))}
      </S.CharactersList>
      <S.PageSwitchContainer>
        <PageSwitch page={page} allPages={data.characters.info.pages} />
      </S.PageSwitchContainer>
    </>
  );
};

export default Characters;
