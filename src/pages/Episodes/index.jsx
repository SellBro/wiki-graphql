import React from 'react';

import useMergeState from 'shared/utils/hooks/mergeState';

import EpisodesFilter from './EpisodesFilter';
import EpisodesList from './EpisodesList';

const defaultFilters = {
  filterOptions: {
    name: '',
    episode: '',
  },
  season: '',
  episode: '',
};

const Episodes = () => {
  const [filters, mergeFilters] = useMergeState(defaultFilters);

  return (
    <>
      <EpisodesFilter
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <EpisodesList filter={filters} />
    </>
  );
};

export default Episodes;
