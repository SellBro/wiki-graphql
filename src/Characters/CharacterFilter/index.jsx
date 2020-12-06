import React from 'react';

import { FilterButton, InputDebounced as Input } from 'shared/components';

import { FilterContainer } from './styled';

// const status = ['any', 'Alive', 'Dead', 'unknown'];
// const gender = ['any', 'Female', 'Male', 'Genderless', 'unknown'];

// const setOptions = propArray => {
//   return propArray.map(name => {
//     return {
//       value: name,
//       label: name.charAt(0).toUpperCase() + name.slice(1),
//     };
//   });
// };

export const CharacterFilter = ({ defaultFilters, filters, mergeFilters }) => {
  const { name, species, type } = filters;

  return (
    <FilterContainer>
      <Input
        placeholder="Name"
        value={name}
        onChange={value => mergeFilters({ name: value })}
        size="small"
      />
      {/* <Select
        name="gender"
        value={filter.gender === '' ? null : { value: filter.gender, label: filter.gender }}
        onChange={handleSelectChange('gender')}
        options={setOptions(gender)}
        placeholder="Gender"
      />
      <Select
        name="status"
        value={filter.status === '' ? null : { value: filter.status, label: filter.status }}
        onChange={handleSelectChange('status')}
        options={setOptions(status)}
        placeholder="Status"
      /> */}
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
      <FilterButton onClick={() => mergeFilters(defaultFilters)}>Reset</FilterButton>
    </FilterContainer>
  );
};

export default CharacterFilter;
