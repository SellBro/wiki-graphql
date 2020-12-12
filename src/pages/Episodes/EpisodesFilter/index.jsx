import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { InputDebounced as Input, Select, Button } from 'shared/components';

import { getEpisode } from 'shared/utils/helpers';

import { FilterContainer } from './styled';

const episodesNumber = {
  seasons: ['1', '2', '3', '4'],
  episodes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
};

const EpisodesFilter = ({ defaultFilters, mergeFilters, filters }) => {
  const { name, episode, season } = filters;

  const seasonOptions = [
    { value: 'any', label: 'Any' },
    ...episodesNumber.seasons.map(num => ({
      value: num,
      label: `Season ${num}`,
    })),
  ];

  const episodeOptions = [
    { value: 'any', label: 'Any' },
    ...episodesNumber.episodes.map(num => ({
      value: num,
      label: `Episode ${num}`,
    })),
  ];

  const handleSelectChange = option => selected => {
    const { value } = selected;

    mergeFilters(getEpisode(filters, { option, value }));
  };

  console.log(filters);

  useEffect(() => {
    return () => {
      mergeFilters(defaultFilters);
    };
  }, [mergeFilters, defaultFilters]);

  return (
    <FilterContainer>
      <Input placeholder="Name" value={name} onChange={value => mergeFilters({ name: value })} />
      <Select
        placeholder="Season"
        options={seasonOptions}
        onChange={handleSelectChange('season')}
        value={season === '' ? null : { value: season, label: `Season ${season}` }}
      />
      <Select
        placeholder="Episode"
        options={episodeOptions}
        onChange={handleSelectChange('episode')}
        value={episode === '' ? null : { value: episode, label: `Episode ${episode}` }}
      />
      <Button active onClick={() => mergeFilters(defaultFilters)}>
        Reset
      </Button>
    </FilterContainer>
  );
};

EpisodesFilter.propTypes = {
  defaultFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
};

export default EpisodesFilter;
