import React from 'react';

import useMergeState from 'shared/utils/hooks/mergeState';

import LocationsFilter from './LocationsFilter';
import LocationsList from './LocationsList';

const defaultFilters = {
  name: '',
  type: '',
  dimension: '',
};

const Locations = () => {
  const [filters, mergeFilters] = useMergeState(defaultFilters);

  return (
    <>
      <LocationsFilter
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <LocationsList filter={filters} />
    </>
  );
};

export default Locations;
