import React, { useState } from 'react';

import useMergeState from 'shared/utils/hooks/mergeState';

import CharactersFilter from './CharactersFilter';
import CharactersList from './CharacterList';

const defaultFilters = {
  name: '',
  species: '',
  type: '',
  gender: '',
  status: '',
};

const Characters = () => {
  const [filters, mergeFilters] = useMergeState(defaultFilters);
  const [page, setPage] = useState(1);

  return (
    <>
      <CharactersFilter
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <CharactersList page={page} filter={filters} setPage={setPage} />
    </>
  );
};

export default Characters;
