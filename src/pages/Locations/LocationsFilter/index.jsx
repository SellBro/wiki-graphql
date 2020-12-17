import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { InputDebounced as Input, Button } from 'shared/components';

import { FilterContainer } from './styled';

const LocationsFilter = ({ defaultFilters, filters, mergeFilters }) => {
  const { name, type, dimension } = filters;

  useEffect(() => {
    return () => {
      mergeFilters(defaultFilters);
    };
  }, [mergeFilters, defaultFilters]);

  return (
    <FilterContainer>
      <Input
        large
        placeholder="Name"
        value={name}
        onChange={value => mergeFilters({ name: value })}
      />
      <Input
        large
        placeholder="Type"
        value={type}
        onChange={value => mergeFilters({ type: value })}
      />
      <Input
        large
        placeholder="Dimension"
        value={dimension}
        onChange={value => mergeFilters({ dimension: value })}
      />
      <Button active onClick={() => mergeFilters(defaultFilters)}>
        Reset
      </Button>
    </FilterContainer>
  );
};

LocationsFilter.propTypes = {
  defaultFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
};

export default LocationsFilter;
