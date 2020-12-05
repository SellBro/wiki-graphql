import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';

import { useCharacterContext } from 'context';

import { CharacterCard, ErrorMessage, PageSwitch } from 'shared/components';

import { GET_ALL_CHARACTERS } from 'shared/utils/queries/characters';

import { CharacterListContainer, PageSwitchContainer } from './styled';

const CharactersList = () => {
  const { state } = useCharacterContext();

  const { page, filter } = state;

  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page, filter },
  });

  if (error) return <ErrorMessage text="Nothing found! Try again!" />;

  const { results } = !loading && data.characters;
  const placeholder = loading ? (
    <Skeleton height={300} width={300} count={20} />
  ) : (
    results.map(character => <CharacterCard key={character.id} {...character} />)
  );

  return (
    <>
      <CharacterListContainer>{placeholder}</CharacterListContainer>
      {!loading && (
        <PageSwitchContainer>
          <PageSwitch page={page} allPages={data.characters.info.pages} />
        </PageSwitchContainer>
      )}
    </>
  );
};

export default CharactersList;
