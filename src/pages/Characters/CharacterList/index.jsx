import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';

import { CharacterCard, ErrorMessage, PageSwitch } from 'shared/components';

import { GET_ALL_CHARACTERS } from 'shared/utils/queries/characters';

import { CharacterListContainer, PageSwitchContainer } from './styled';

const CharactersList = ({ filter, page, setPage }) => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page, filter },
  });

  if (error) return <ErrorMessage text="Nothing found! Try again!" />;

  const { results } = !loading && data.characters;
  const { pages } = !loading && data.characters.info;

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
          <PageSwitch setPage={setPage} page={page} allPages={pages} />
        </PageSwitchContainer>
      )}
    </>
  );
};

CharactersList.propTypes = {
  filter: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default CharactersList;
