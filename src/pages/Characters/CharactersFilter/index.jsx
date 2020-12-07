import React from 'react';
import PropTypes from 'prop-types';

import { Button, InputDebounced as Input, Select } from 'shared/components';

import { FilterContainer } from './styled';

const statuses = ['Any', 'Alive', 'Dead', 'unknown'];
const genders = ['Any', 'Female', 'Male', 'Genderless', 'unknown'];

export const CharactersFilter = ({ defaultFilters, filters, mergeFilters }) => {
  const { name, species, type, gender, status } = filters;

  const handleSelectChange = option => selected => {
    const { value } = selected;

    mergeFilters({ [option]: value });
  };

  return (
    <FilterContainer>
      <Input
        placeholder="Name"
        value={name}
        onChange={value => mergeFilters({ name: value })}
        size="small"
      />
      <Select
        name="gender"
        value={gender === '' ? null : { value: gender, label: gender }}
        onChange={handleSelectChange('gender')}
        options={setOptions(genders)}
        placeholder="Gender"
      />
      <Select
        name="status"
        value={status === '' ? null : { value: status, label: status }}
        onChange={handleSelectChange('status')}
        options={setOptions(statuses)}
        placeholder="Status"
      />
      <Input
        placeholder="Type"
        value={type}
        onChange={value => mergeFilters({ type: value })}
        size="small"
      />
      <Input
        placeholder="Species"
        value={species}
        onChange={value => mergeFilters({ species: value })}
        size="small"
      />
      <Button onClick={() => mergeFilters(defaultFilters)}>Reset</Button>
    </FilterContainer>
  );
};

const setOptions = propArray => {
  return propArray.map(name => {
    return {
      value: name === 'Any' ? '' : name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
    };
  });
};

CharactersFilter.propTypes = {
  defaultFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
};

export default CharactersFilter;
