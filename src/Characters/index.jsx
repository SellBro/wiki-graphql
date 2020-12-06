import React, { useState } from 'react';

import useMergeState from 'shared/utils/hooks/mergeState';

import CharacterFilter from './CharacterFilter';
import CharactersList from './CharacterList';

const defaultFilters = {
  name: '',
  species: '',
  type: '',
};

const Characters = () => {
  const [filters, mergeFilters] = useMergeState(defaultFilters);
  const [page, setPage] = useState(1);

  return (
    <>
      <CharacterFilter
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <CharactersList page={page} filter={filters} setPage={setPage} />
    </>
  );
};

export default Characters;
