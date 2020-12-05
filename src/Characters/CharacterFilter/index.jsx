import React, { useState, useEffect } from 'react';

import { useCharacterContext } from 'context';

import { Input, FilterButton, Select } from 'shared/components';

import { FilterContainer } from './styled';

const status = ['any', 'Alive', 'Dead', 'unknown'];
const gender = ['any', 'Female', 'Male', 'Genderless', 'unknown'];

const setOptions = propArray => {
  return propArray.map(name => {
    return {
      value: name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
    };
  });
};

const initialInputState = {
  name: '',
  species: '',
  type: '',
};

export const CharacterFilter = () => {
  const [inputState, setInputState] = useState(initialInputState);
  const [timer, setTimer] = useState(0);
  const { dispatch, state } = useCharacterContext();
  const { filter } = state;

  useEffect(() => {
    return () => {
      dispatch({ type: 'resetFilterOptions' });
    };
  }, [dispatch]);

  const handleInputChange = event => {
    clearTimeout(timer);
    const { value } = event.target;
    const option = event.target.name;
    setInputState(prev => ({ ...prev, [option]: value }));
    setTimer(
      setTimeout(() => {
        dispatch({
          type: 'setFilterOptions',
          payload: { option, value },
        });
      }, 500),
    );
  };

  const handleSelectChange = option => selectedOption => {
    const { value } = selectedOption;
    dispatch({ type: 'setFilterOptions', payload: { option, value } });
  };

  const handleClick = () => {
    if (Object.values(inputState).some(value => value)) {
      clearTimeout(timer);
      setInputState(initialInputState);
      dispatch({ type: 'resetFilterOptions' });
    }
  };

  return (
    <FilterContainer>
      <Input
        name="name"
        placeholder="Name"
        value={inputState.name}
        onChange={handleInputChange}
        fullWidth
        size="small"
      />
      <Select
        name="gender"
        value={filter.gender === '' ? null : { value: filter.gender, label: filter.gender }}
        onChange={handleSelectChange('gender')}
        options={setOptions(gender)}
        placeholder="Gender"
        className="react-select-container"
        classNamePrefix="react-select"
        fullWidth
      />
      <Select
        name="status"
        value={filter.status === '' ? null : { value: filter.status, label: filter.status }}
        onChange={handleSelectChange('status')}
        options={setOptions(status)}
        placeholder="Status"
        className="react-select-container"
        classNamePrefix="react-select"
        fullWidth
      />
      <Input
        name="type"
        placeholder="Type"
        value={inputState.type}
        onChange={handleInputChange}
        fullWidth
        size="small"
      />
      <Input
        name="species"
        placeholder="Species"
        onChange={handleInputChange}
        value={inputState.species}
        fullWidth
        size="small"
      />
      <FilterButton onClick={handleClick}>Reset</FilterButton>
    </FilterContainer>
  );
};

export default CharacterFilter;
