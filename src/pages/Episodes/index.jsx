import React, { useState } from 'react';

import useMergeState from 'shared/utils/hooks/mergeState';

import EpisodesFilter from './EpisodesFilter';
import EpisodesList from './EpisodesList';

const defaultFilters = {
  name: '',
  episode: '',
};

const Episodes = () => {
  const [filters, mergeFilters] = useMergeState(defaultFilters);
  const [page] = useState(1);

  return (
    <>
      <EpisodesFilter
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <EpisodesList filter={filters} page={page} />
    </>
  );
};

export default Episodes;
