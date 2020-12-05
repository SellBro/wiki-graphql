import React from 'react';

import { CharacterProvider } from 'context';

import CharacterFilter from './CharacterFilter';
import CharactersList from './CharacterList';

const Characters = () => {
  return (
    <CharacterProvider>
      <CharacterFilter />
      <CharactersList />
    </CharacterProvider>
  );
};

export default Characters;
